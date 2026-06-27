/* ============================================================
   Splash — full-viewport landing, three expanding panels.
   Hover to peek, click a panel to expand, click its CTA to enter.
   Desktop: diagonal seams, horizontal. Mobile: vertical stack with
   the same tap-to-expand behaviour, offset below the fixed menu.
   ============================================================ */

const SLANT = 64;     // px — diagonal seam offset between panels (desktop only)
const NAV_H = 68;     // px — fixed overlay menu height (mobile clearance)

// True only on devices with a real hover-capable, fine pointer (mouse/trackpad).
// On touch devices a tap fires a spurious `mouseenter`, which would otherwise
// trigger hover-"peek" autoplay. Gating peek (visual + playback) on this means
// the ONLY way a panel video plays on touch is tap-to-expand the active panel.
const CAN_HOVER = (typeof window !== 'undefined' && window.matchMedia)
  ? window.matchMedia('(hover: hover) and (pointer: fine)').matches
  : true;

// Use the stacked vertical layout for phones. Width alone misses devices that
// report a wide CSS px viewport (some webviews / high-DPR phones), which would
// otherwise get the horizontal desktop layout — making the preloader sweep
// left-to-right and exposing hover-peek autoplay. So also treat any portrait
// touch device as vertical, regardless of reported width.
function detectVertical() {
  if (typeof window === 'undefined') return false;
  if (window.innerWidth <= 860) return true;
  const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  if (coarse && window.innerHeight >= window.innerWidth && window.innerWidth <= 1080) return true;
  return false;
}

const IMG = 'https://ktseng.com/wp-content/uploads/';
const PANELS = [
  { id: 'work', n: '01', title: 'Industrial Design', tagline: 'selected work',
    desc: 'Industrial design, from idea to market. Smart helmets, wearables, audio, and new markets.',
    mood: 'steel', video: 'images/works_vid.webm', route: 'work', cta: 'See the work' },
  { id: 'apps', n: '02', title: 'AI Labo', tagline: 'made with AI',
    desc: 'Apps, graphics, and experiments made in and around AI.',
    mood: 'cool', video: 'images/apps_vid.webm', route: 'apps', cta: 'Enter the labo' },
  { id: 'photography', n: '03', title: 'Moments', tagline: 'film & photography',
    desc: 'Street scenes on film, color and mono. A few years edited down to the ones I kept.',
    mood: 'dusk', video: 'images/moments_vid.webm', videoBlend: 'luminosity', route: 'gallery', cta: 'Open gallery' },
];

/* Texture overlay — masks video compression. Patterns are drawn on an
   oversized child that rotates, so every pattern (incl. the dot grid)
   supports arbitrary angles without seams at the edges. */
function TextureOverlay({ pattern = 'dots', size = 4, strength = 50, angle = 0, ink = 1 }) {
  if (!pattern || pattern === 'none' || strength <= 0) return null;
  const s = Math.max(2, size);
  const w = Math.max(0.25, ink); // dot radius / line width in px
  let backgroundImage, backgroundSize = 'auto';
  if (pattern === 'dots') {
    backgroundImage = `radial-gradient(rgba(0,0,0,.55) ${w}px, transparent ${w + 0.5}px)`;
    backgroundSize = `${s}px ${s}px`;
  } else if (pattern === 'lines') {
    backgroundImage = `repeating-linear-gradient(to bottom, rgba(0,0,0,.4) 0px, rgba(0,0,0,.4) ${w}px, transparent ${w}px, transparent ${s}px)`;
  } else { // hatch
    backgroundImage = [
      `repeating-linear-gradient(45deg, rgba(0,0,0,.32) 0px, rgba(0,0,0,.32) ${w}px, transparent ${w}px, transparent ${s}px)`,
      `repeating-linear-gradient(-45deg, rgba(0,0,0,.32) 0px, rgba(0,0,0,.32) ${w}px, transparent ${w}px, transparent ${s}px)`,
    ].join(', ');
  }
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1, opacity: strength / 100 }}>
      <div style={{
        position: 'absolute', left: '-50%', top: '-50%', width: '200%', height: '200%',
        transform: `rotate(${angle}deg)`,
        backgroundImage, backgroundSize,
      }}></div>
    </div>
  );
}

function SplashPanel({ p, state, onClick, onEnter, onHover, onLeave, slantLeft, slantRight, first, vertical, z, texture, loading, firstLoad, fill = 1, unblurDelay = 0, menuOffset = 0, navClear = 0 }) {
  // state: 'expanded' | 'peek' | 'half' | 'shrunk' | 'idle'
  const isExp = state === 'expanded';
  const isPeek = state === 'peek';
  // Video plays only while the panel is hovered (peek) or expanded. It plays
  // from the start and loops, so the browser can buffer sequentially and begin
  // immediately even on large files / slower connections (seeking ahead first
  // forces a big buffer and stalls on the 9–16MB clips, esp. on mobile).
  const videoRef = React.useRef(null);
  const [videoReady, setVideoReady] = React.useState(false);
  // webm doesn't decode on many iPhones/Safari — if the video can't load,
  // fall back to the blended still so the panel is never blank.
  const [videoFailed, setVideoFailed] = React.useState(() =>
    p.video && /\.webm($|\?)/.test(p.video) &&
    typeof document !== 'undefined' &&
    document.createElement('video').canPlayType('video/webm') === ''
  );
  // Panel videos autoplay muted and loop continuously. Muted+playsInline
  // autoplay is allowed on every device (incl. iOS/Android), and playing from
  // the start lets the browser buffer sequentially — so even the large (9–16MB)
  // clips start immediately instead of stalling the way a seek-ahead did.
  // Playback is gated only on the first-load splash (don't play behind it).
  const activeRef = React.useRef(false);
  activeRef.current = isExp || (isPeek && CAN_HOVER);
  const primedRef = React.useRef(false);
  const retryRef = React.useRef(0);
  const onPrimeFrame = (e) => {
    const v = e.target;
    primedRef.current = true;
    if (v.readyState >= 2) { setVideoReady(true); setVideoFailed(false); }
    // Capture this panel's own first frame as a poster for reuse on the
    // level-2 pages (e.g. Soar's tile uses the same apps_vid.webm). Grabbing
    // it from the already-mounted panel video avoids a second decoder racing
    // on the same file.
    if (p.video && v.readyState >= 2) {
      window.__videoPosters = window.__videoPosters || {};
      if (!window.__videoPosters[p.video]) {
        try {
          const c = document.createElement('canvas');
          c.width = v.videoWidth || 16; c.height = v.videoHeight || 9;
          c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
          window.__videoPosters[p.video] = c.toDataURL('image/jpeg', 0.72);
        } catch (_) { /* tainted/unsupported — skip */ }
      }
    }
  };
  // Transient WebM decode failures (MediaError code 3) happen on some large
  // clips; recover by reloading the element and replaying a few times before
  // giving up to the placeholder.
  const onVideoError = (e) => {
    const v = e.target;
    const code = v.error && v.error.code;
    if (code === 3 && retryRef.current < 4) {
      retryRef.current++;
      setTimeout(() => {
        const vv = videoRef.current;
        if (!vv) return;
        try { vv.load(); const pr = vv.play(); if (pr && pr.catch) pr.catch(() => {}); } catch (_) {}
      }, 250 * retryRef.current);
      return;
    }
    if (!v || v.readyState < 2) setVideoFailed(true);
  };
  // Splash clips start 5% into the timeline, then loop normally (wrapping
  // back to 0). Seek to 5% once the duration is known, for the initial play.
  const seekToStart = (v) => {
    if (!v || !isFinite(v.duration) || v.duration <= 0) return;
    if (v.currentTime > 0.05) return; // only on the initial start, not every loop
    try { v.currentTime = v.duration * 0.05; } catch (_) {}
  };
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const active = isExp || (isPeek && CAN_HOVER);
    if (loading || !active) {
      // Paused by default; show a still frame, don't advance.
      try { v.pause(); } catch (_) {}
      return;
    }
    const tryPlay = () => {
      const vv = videoRef.current;
      if (!vv || loading || !(activeRef.current)) return;
      const pr = vv.play();
      if (pr && pr.catch) pr.catch(() => {});
    };
    tryPlay();
    // play() called before the video is ready rejects silently and is never
    // retried; retry on readiness events and in the interval until advancing.
    v.addEventListener('canplay', tryPlay);
    v.addEventListener('loadeddata', tryPlay);
    const iid = setInterval(() => {
      const vv = videoRef.current;
      if (!vv) { clearInterval(iid); return; }
      if (vv.readyState >= 2) { setVideoReady(true); setVideoFailed(false); }
      if (vv.paused && activeRef.current) tryPlay();
      if (vv.readyState >= 3 && !vv.paused) clearInterval(iid);
    }, 200);
    const tid = setTimeout(() => { if (v.readyState < 2) setVideoFailed(true); }, 8000);
    return () => { clearInterval(iid); clearTimeout(tid); v.removeEventListener('canplay', tryPlay); v.removeEventListener('loadeddata', tryPlay); };
  }, [loading, isExp, isPeek]);
  // Preload the clip so a tap plays instantly. Mobile browsers ignore
  // preload="auto" until a gesture, so also prime (muted play→pause) on the
  // first touch anywhere — this buffers all three clips without breaking
  // paused-by-default (it only pauses panels that aren't currently active).
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try { v.load(); } catch (_) {}
    if (typeof window === 'undefined' || !('ontouchstart' in window)) return;
    const prime = () => {
      const vv = videoRef.current;
      if (!vv) return;
      try {
        const pr = vv.play();
        const settle = () => { if (!activeRef.current) { try { vv.pause(); } catch (_) {} } };
        if (pr && pr.then) pr.then(settle).catch(() => {}); else settle();
      } catch (_) {}
    };
    window.addEventListener('touchstart', prime, { once: true, passive: true });
    window.addEventListener('pointerdown', prime, { once: true, passive: true });
    return () => {
      window.removeEventListener('touchstart', prime);
      window.removeEventListener('pointerdown', prime);
    };
  }, []);
  // Tap toggles expand. Call play()/pause() SYNCHRONOUSLY here (inside the user
  // gesture) so playback is reliable on mobile, where a play() deferred to the
  // post-setState effect is no longer treated as gesture-initiated and is
  // silently blocked — the cause of inconsistent tap-to-play.
  const handleClick = () => {
    if (loading) return;
    const v = videoRef.current;
    if (v) {
      if (isExp) { try { v.pause(); } catch (_) {} }
      else { try { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); } catch (_) {} }
    }
    onClick();
  };
  // Mobile uses gentler ratios so shrunk panels keep their titles visible.
  const flex = vertical
    ? (isExp ? 3.2 : state === 'shrunk' ? 1 : 1)
    : (isExp ? 5.4 : isPeek ? 1.7 : state === 'shrunk' ? 0.7 : state === 'half' ? 0.9 : 1);
  const raised = isExp || isPeek;
  const L = (!vertical && slantLeft) ? SLANT : 0;
  const R = (!vertical && slantRight) ? SLANT : 0;
  // On mobile, hide the tagline on shrunk siblings so the title always fits.
  const showTagline = !vertical || isExp || state === 'idle';
  // Vertical (mobile) slant: stacked panels share a slightly diagonal
  // boundary, echoing the desktop slant. ~5% of viewport width of rise.
  const VS = 'min(5vw, 24px)';
  const vTop = vertical && !first ? VS : '0px';
  const vBot = vertical && slantRight ? VS : '0px';
  return (
    <div
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', flex: flex + ' 1 0', minWidth: 0, cursor: 'pointer',
        minHeight: vertical ? 110 : 0,
        transition: 'flex-grow 620ms var(--ease-emphasis)',
        marginLeft: (!vertical && !first) ? -SLANT : 0,
        marginTop: (vertical && !first) ? `calc(-1 * ${VS})` : 0,
        zIndex: z,
        // shadow falls on the panel underneath (right on desktop, below on
        // mobile); drop-shadow traces the slanted clip edge, so it must live
        // on this wrapper while the clip-path lives on the inner div.
        filter: vertical
          ? 'drop-shadow(0 10px 22px rgba(0,0,0,.35))'
          : 'drop-shadow(14px 0 22px rgba(0,0,0,.35))',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        clipPath: vertical
          ? `polygon(0 ${vTop}, 100% 0, 100% calc(100% - ${vBot}), 0 100%)`
          : `polygon(${L}px 0, 100% 0, calc(100% - ${R}px) 100%, 0 100%)`,
      }}>
      <div className="splash-blur" style={{ position: 'absolute', inset: 0, filter: loading ? 'blur(10px)' : 'blur(0px)', transform: loading ? 'scale(1.06)' : 'scale(1)', transition: `filter 900ms var(--ease-out) ${unblurDelay}ms, transform 900ms var(--ease-out) ${unblurDelay}ms` }}>
      <Photo mood={p.mood} style={{ position: 'absolute', inset: 0, transition: 'transform 700ms var(--ease-out)', transform: raised ? 'scale(1.04)' : 'scale(1.12)' }}>
        {/* duotone video: primed muted on load (fetch + show the 20% frame,
            then pause), fades in from 0 opacity once displayable. multiply
            drops white backgrounds; luminosity for real footage. Plays on
            hover and while expanded, pauses otherwise; loops wrap to 0. */}
        {/* No still fallback: if the video can't decode, the duotone Photo
            placeholder shows through (never blank). */}
        {p.video && (
          <video ref={videoRef} src={p.video} muted loop playsInline preload="auto"
            onError={onVideoError}
            onLoadedMetadata={(e) => seekToStart(e.target)}
            onLoadedData={onPrimeFrame}
            onTimeUpdate={onPrimeFrame}
            style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            mixBlendMode: 'luminosity',
            opacity: !videoReady ? 0 : (isExp ? 0.7 : 0.55),
            filter: 'grayscale(1) contrast(1.04)',
            transition: 'opacity 500ms var(--ease-out)',
          }}></video>
        )}
        {/* texture overlay over the video to mask its lower resolution
            (per-video scope; tweakable pattern/density/strength/angle) */}
        {p.video && texture && texture.scope !== 'screen' && (
          <TextureOverlay pattern={texture.pattern} size={texture.size} strength={texture.strength} angle={texture.angle} ink={texture.ink} />
        )}
      </Photo>
      <div style={{ position: 'absolute', inset: 0, background: isExp
        ? 'linear-gradient(to top, rgba(11,13,19,.82) 0%, rgba(11,13,19,.25) 55%, rgba(11,13,19,.4) 100%)'
        : 'linear-gradient(to top, rgba(11,13,19,.7) 0%, rgba(11,13,19,.15) 60%, rgba(11,13,19,.35) 100%)',
        transition: 'background 500ms var(--ease-out)' }}></div>

      {/* number marker — desktop only. Hidden entirely on mobile (vertical).
          On desktop the transparent nav overlays the splash full-height, so
          tuck the marker just below it (navClear) and fade it in with the menu. */}
      {!vertical && (
        <span style={{ position: 'absolute', top: (vertical ? (first ? 16 : 'calc(12px + min(5vw, 24px))') : (navClear ? navClear + 20 : 24)), left: (vertical ? 20 : 26) + L, fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.14em', color: 'rgba(255,255,255,.7)', opacity: loading ? 0 : 1, transition: 'opacity 700ms var(--ease-out)' }}>{p.n}</span>
      )}

      {/* bottom content */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: vertical ? '16px 20px 18px' : 'clamp(22px,3vw,44px)', opacity: (state === 'half' || state === 'shrunk') ? 0.3 : 1, transition: 'opacity 320ms var(--ease-out)' }}>
        {showTagline && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.72)', marginBottom: vertical ? 8 : 12, whiteSpace: 'nowrap' }}>{p.tagline}</div>
        )}
        <h2 style={{ color: '#fff',
          fontSize: vertical
            ? (isExp ? 'clamp(30px,8vw,44px)' : 'clamp(20px,5.5vw,26px)')
            : (isExp ? 'clamp(40px,5vw,72px)' : isPeek ? 'clamp(30px,3vw,52px)' : 'clamp(26px,2.4vw,40px)'),
          lineHeight: 1.0, letterSpacing: '-0.03em', transition: 'font-size 500ms var(--ease-out)',
          maxWidth: isExp ? 620 : isPeek ? 420 : 280, whiteSpace: vertical ? 'nowrap' : 'normal' }}>
          {p.title}<span style={{ color: 'var(--pop)' }}>.</span>
        </h2>

        {/* expanded-only detail */}
        <div style={{ maxHeight: isExp ? 240 : 0, opacity: isExp ? 1 : 0, overflow: 'hidden', transition: 'max-height 500ms var(--ease-out), opacity 400ms var(--ease-out)' }}>
          <p style={{ color: 'rgba(255,255,255,.82)', fontSize: vertical ? 15 : 17, lineHeight: 1.55, marginTop: vertical ? 12 : 16, maxWidth: 460 }}>{p.desc}</p>
          <div style={{ marginTop: vertical ? 16 : 22 }}>
            <Button variant="primary" size={vertical ? 'md' : 'lg'} onClick={(e) => { e.stopPropagation(); onEnter(); }} iconRight={<i data-lucide="arrow-right"></i>}>{p.cta}</Button>
          </div>
        </div>
      </div>
      </div>
      {firstLoad && (
        <div className="splash-sat" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none', WebkitBackdropFilter: 'grayscale(1) brightness(.92)', backdropFilter: 'grayscale(1) brightness(.92)', clipPath: vertical ? `inset(0 0 0 ${fill * 100}%)` : (menuOffset ? `inset(${menuOffset}px 0 calc(${fill} * (100% - ${menuOffset}px)) 0)` : `inset(0 0 ${fill * 100}% 0)`) }}></div>
      )}
      {firstLoad && (
        <div className="splash-line" aria-hidden="true" style={vertical ? { position: 'absolute', top: 0, bottom: 0, left: `${fill * 100}%`, width: 2, zIndex: 7, pointerEvents: 'none', background: 'linear-gradient(to bottom, transparent, var(--pop) 25%, var(--pop) 75%, transparent)', boxShadow: '0 0 18px 4px var(--pop)', opacity: fill <= 0.005 || fill >= 0.999 ? 0 : 0.95, transition: 'opacity 220ms linear' } : { position: 'absolute', left: 0, right: 0, bottom: menuOffset ? `calc(${fill} * (100% - ${menuOffset}px))` : `${fill * 100}%`, height: 2, zIndex: 7, pointerEvents: 'none', background: 'linear-gradient(to right, transparent, var(--pop) 25%, var(--pop) 75%, transparent)', boxShadow: '0 0 18px 4px var(--pop)', opacity: fill <= 0.005 || fill >= 0.999 ? 0 : 0.95, transition: 'opacity 220ms linear' }}></div>
      )}
      </div>
    </div>
  );
}

function SplashScreen({ go, topOffset = 67, texture, onLoadingChange }) {
  const [open, setOpen] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const [vertical, setVertical] = React.useState(detectVertical());
  React.useEffect(() => {
    const onR = () => setVertical(detectVertical());
    window.addEventListener('resize', onR);
    window.addEventListener('orientationchange', onR);
    return () => { window.removeEventListener('resize', onR); window.removeEventListener('orientationchange', onR); };
  }, []);
  // ---- first-load preloader ----
  // The fill tracks the REAL load of the front-page media (the 3 panel
  // videos). Each section is offset by a gamma curve so they LOOK like they
  // load at different rates, but all reach 100% exactly when the real load
  // finishes. Then the 3 sections unblur with a staggered delay.
  const firstLoad = React.useRef(typeof window === 'undefined' ? false : !window.__splashShown).current;
  const [loading, setLoading] = React.useState(firstLoad);
  const [disp, setDisp] = React.useState(firstLoad ? 0 : 1);   // eased displayed fill 0..1
  // Report loading state up so the parent can hide the menu until the
  // preloader finishes, then fade it in.
  React.useEffect(() => { if (onLoadingChange) onLoadingChange(loading); }, [loading]);
  const targetRef = React.useRef(0);                            // true load progress 0..1
  React.useEffect(() => {
    if (!firstLoad) return;
    window.__splashShown = true;
    window.__videoPosters = window.__videoPosters || {};
    window.__imgCache = window.__imgCache || {};
    // Front-page videos + the second-level pages' above-the-fold assets
    // (work cards, ai_labo banners, moments grid). Third-level detail pages
    // (case studies, app detail, full galleries) are NOT preloaded.
    // NOTE: the three splash panel videos are intentionally NOT preloaded here.
    // The panels autoplay and load them directly; loading them a second time in
    // the preloader (which also decodes a frame for a poster) makes two decoders
    // race on the same 9-16MB file and throws a transient decode error. The bar
    // tracks the page images instead; videos fade in when each panel is ready.
    const MOMENTS = 'images/moments/';
    const PAGE_ASSETS = [
      // work — project card thumbnails (1000px decode-light versions)
      'images/thumbs/ch_a.jpg', 'images/thumbs/mob_2.jpg', 'images/thumbs/splitbag_2.jpg', 'images/thumbs/nl3_exploded.jpg',
      'images/thumbs/thync_caseopened.jpg', 'images/thumbs/ls_blineup.jpg', 'images/thumbs/up3_5.jpg',
      'images/thumbs/era_10.jpg', 'images/thumbs/jambox_product1.jpg', 'images/thumbs/gs1_1.jpg',
      // ai_labo — app banners (Soar reuses the splash video apps_vid.webm)
      'images/crowdsensus.png', 'images/cover.webm', 'images/flagsatlas.webm',
      // about — portrait
      'images/portrait.png',
      // moments — gallery grid
      MOMENTS + 'DSC00174b-scaled.jpg', MOMENTS + '00010022b-scaled.jpg', MOMENTS + '00010006b-scaled.jpg',
      MOMENTS + '00010001b-scaled.jpg', MOMENTS + 'DSC09513b-scaled.jpg', MOMENTS + 'DSC05971s2.jpg',
    ];
    const urls = Array.from(new Set(PAGE_ASSETS));
    if (!urls.length) { targetRef.current = 1; }
    else {
      let count = 0;
      const bump = () => { count++; targetRef.current = Math.min(1, count / urls.length); };
      urls.forEach(u => {
        if (/\.(webm|mp4)(\?|$)/i.test(u)) {
          const v = document.createElement('video');
          v.preload = 'auto'; v.muted = true; v.playsInline = true;
          // grab the first decoded frame as a poster bitmap so the on-page
          // video paints instantly (no gradient-only gap) while it decodes.
          const grab = () => {
            if (window.__videoPosters[u]) return;
            try {
              const c = document.createElement('canvas');
              c.width = v.videoWidth || 16; c.height = v.videoHeight || 9;
              c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
              window.__videoPosters[u] = c.toDataURL('image/jpeg', 0.72);
            } catch (e) { /* tainted/unsupported — skip poster */ }
          };
          const fin = () => { v.removeEventListener('canplaythrough', fin); v.removeEventListener('error', fin); bump(); };
          v.addEventListener('loadeddata', grab);
          v.addEventListener('canplaythrough', fin);
          v.addEventListener('error', fin);
          v.src = u;
        } else {
          const img = new Image();
          let done = false;
          const fin = () => { if (done) return; done = true; bump(); };
          img.onerror = fin;
          // Convert to an in-memory data URL. The sandbox serves assets with a
          // revalidate-always policy, so a normal cached <img> still makes a
          // ~600ms conditional round-trip before painting (the "flash" on
          // opening Work). A data URL never touches the network — the on-page
          // image paints instantly. Falls back to the URL if canvas is tainted.
          img.onload = () => {
            try {
              const c = document.createElement('canvas');
              c.width = img.naturalWidth; c.height = img.naturalHeight;
              c.getContext('2d').drawImage(img, 0, 0);
              window.__imgCache[u] = c.toDataURL('image/jpeg', 0.85);
            } catch (e) { /* tainted — leave URL */ }
            (img.decode ? img.decode() : Promise.reject()).then(fin, fin);
          };
          img.src = u;
        }
      });
    }
    const cap = setTimeout(() => { targetRef.current = 1; }, 9000); // never hang
    let raf, d = 0;
    const tick = () => {
      const t = targetRef.current;
      const loaded = t >= 1;
      // Always keep moving. Ease toward real progress; but even when the real
      // load is fully stalled, creep forward by an asymptotic amount that
      // shrinks as it nears 100% — so the bar never freezes, it just slows.
      const goal = loaded ? 1 : t;
      let step = (goal - d) * (loaded ? 0.12 : 0.08);
      if (!loaded) step = Math.max(step, (1 - d) * 0.0025);
      d = Math.min(loaded ? 1 : 0.995, d + step);
      setDisp(d);
      if (loaded && d >= 0.999) { setDisp(1); setTimeout(() => setLoading(false), 200); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(cap); };
  }, []);

  // After the splash, warm ALL work-card scrub thumbnails (the hover
  // filmstrip frames) into the in-memory cache, so hovering and the
  // click-to-expand clone never revalidate or flash. Runs in the background,
  // a couple at a time, so it doesn't contend with the initial paint.
  React.useEffect(() => {
    if (loading) return;
    window.__imgCache = window.__imgCache || {};
    const thumbs = [];
    (window.PROJECTS || []).forEach(p => (p.gallery || []).forEach(src => {
      if (src && src.indexOf('images/') === 0) {
        const t = 'images/thumbs/' + src.slice(7);
        if (!window.__imgCache[t] && thumbs.indexOf(t) === -1) thumbs.push(t);
      }
    }));
    let i = 0, cancelled = false;
    const pump = () => {
      if (cancelled || i >= thumbs.length) return;
      const u = thumbs[i++];
      const im = new Image();
      const next = () => { pump(); };
      im.onload = () => {
        try {
          const c = document.createElement('canvas');
          c.width = im.naturalWidth; c.height = im.naturalHeight;
          c.getContext('2d').drawImage(im, 0, 0);
          window.__imgCache[u] = c.toDataURL('image/jpeg', 0.85);
        } catch (e) { /* tainted — leave URL */ }
        next();
      };
      im.onerror = next;
      im.src = u;
    };
    pump(); pump(); pump(); pump();   // four parallel workers

    // Also fetch the panel videos into in-memory Blob URLs so the ai_labo
    // detail hero (Soar reuses apps_vid.webm) can start instantly instead of
    // stalling on a fresh network fetch + revalidation.
    if (window.warmVideoBlob) PANELS.forEach(p => p.video && window.warmVideoBlob(p.video));
    // Also warm any project cover videos (e.g. CrossHelmet's tile video) so the
    // Work tile and case-study hero play instantly from memory.
    if (window.warmVideoBlob) (window.PROJECTS || []).forEach(p => p.video && window.warmVideoBlob(p.video).then(() => window.warmVideoPoster && window.warmVideoPoster(p.video)));

    return () => { cancelled = true; };
  }, [loading]);
  const GAMMA = [1.0, 1.5, 0.72];  // per-section curve (fake "different rates")
  const UNBLUR = [0, 420, 820];    // staggered unblur delays (ms)
  // Mobile splash menu is fully transparent, so let the panel stack run the
  // full viewport height starting under the menu (no top padding).
  const navPad = 0;
  return (
    <div style={{
      position: 'relative',
      height: `calc(100dvh - ${topOffset}px)`, minHeight: vertical ? 560 : 0,
      display: 'flex', flexDirection: vertical ? 'column' : 'row',
      paddingTop: navPad, boxSizing: 'border-box',
      overflow: 'hidden', background: 'var(--slate-950)',
    }}>
      {PANELS.map((p, i) => {
        const state = open != null
          ? (open === p.id ? 'expanded' : 'shrunk')
          : (hover != null ? (hover === p.id ? 'peek' : 'half') : 'idle');
        const ord = i;
        return (
          <SplashPanel
            key={p.id}
            p={p}
            state={state}
            first={i === 0}
            z={PANELS.length - i}
            vertical={vertical}
            slantLeft={i !== 0}
            slantRight={i !== PANELS.length - 1}
            onClick={() => { if (loading) return; setOpen(open === p.id ? null : p.id); }}
            onHover={() => { if (loading || vertical || !CAN_HOVER) return; setHover(p.id); }}
            onLeave={() => { if (!vertical && CAN_HOVER) setHover(null); }}
            onEnter={() => go(p.route)}
            texture={texture}
            loading={loading}
            firstLoad={firstLoad}
            fill={Math.pow(disp, GAMMA[ord])}
            unblurDelay={UNBLUR[ord]}
            menuOffset={0}
            navClear={topOffset === 0 ? NAV_H : 0}
          />
        );
      })}
      {/* full-screen texture scope: one continuous overlay across all panels
          (sits above the seams, below nothing interactive: pointer-events none) */}
      {texture && texture.scope === 'screen' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
          <TextureOverlay pattern={texture.pattern} size={texture.size} strength={texture.strength} angle={texture.angle} ink={texture.ink} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { SplashScreen });
