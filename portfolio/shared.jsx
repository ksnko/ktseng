/* ============================================================
   Portfolio — shared layer
   Brand atoms, Photo placeholder, TopNav, Footer, motion system.
   Exported to window for the screen scripts (separate Babel scopes).
   ============================================================ */

const NS = window.KevinTsengDesignSystem_087052;

/* --- Brand --------------------------------------------------
   PLACEHOLDER NAME. Swap `name` for your real name and update
   the links in LINKS below. Lowercase is intentional (brand voice). */
const BRAND = {
  name: 'kevin tseng',
  role: 'Industrial Designer',
  tagline: 'American-born Taiwanese industrial designer based in Tokyo. Hardware, photographs, and small apps built to test an idea.',
};
const LINKS = ['Works', 'Photography', 'Email'];

/* Film-grain noise as a data-uri overlay (texture, not imagery) */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const MOODS = {
  cool:   'linear-gradient(150deg, #1B2C6B 0%, #2A4DFF 55%, #5A74FF 100%)',
  dusk:   'linear-gradient(150deg, #2C2350 0%, #5B3B8A 45%, #FF6B45 120%)',
  mono:   'linear-gradient(150deg, #20242E 0%, #3A4150 60%, #6B7280 100%)',
  forest: 'linear-gradient(150deg, #11261C 0%, #16A36A 90%, #9BE3C2 130%)',
  steel:  'linear-gradient(150deg, #11151D 0%, #2C313D 60%, #828A99 120%)',
  sky:    'linear-gradient(150deg, #0E2A4D 0%, #2E6FB8 55%, #93C5E8 120%)',
};

/* ---- Motion system ----------------------------------------
   Mode lives in React context. 'calm' (default), 'spring', 'off'.
   Drives entrance reveals + card-hover feel (via data-motion on #app). */
const MotionCtx = React.createContext('calm');
function useMotion() { return React.useContext(MotionCtx); }

/* Lightweight wrapper. Content is ALWAYS visible (never JS-gated), so it
   renders reliably everywhere. A subtle CSS entrance plays in real browsers
   via the .kt-reveal class; motion mode tunes hover feel globally (data-motion
   on #app). 'off' disables the entrance. */
function Reveal({ children, delay = 0, y = 22, as = 'div', style = {}, ...rest }) {
  const mode = useMotion();
  const Tag = as;
  const cls = (rest.className ? rest.className + ' ' : '') + (mode === 'off' ? '' : 'kt-reveal');
  const animStyle = mode === 'off' ? {} : {
    animationDelay: delay + 'ms',
    '--rev-y': y + 'px',
    '--rev-ease': mode === 'spring' ? 'var(--ease-spring)' : 'var(--ease-emphasis)',
  };
  return <Tag {...rest} className={cls} style={{ ...style, ...animStyle }}>{children}</Tag>;
}

/* Photographic placeholder — immersive, full-bleed, intentional.
   Swap for a real <img> (or <image-slot>) in production. */
function Photo({ mood = 'cool', caption, index, ratio, className = '', style = {}, children }) {
  const bg = MOODS[mood] || MOODS.cool;
  return (
    <div
      className={'kt-photo ' + className}
      style={{
        position: 'relative', overflow: 'hidden', background: bg,
        aspectRatio: ratio || undefined, height: ratio ? undefined : '100%',
        width: '100%', ...style,
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, backgroundImage: GRAIN,
        backgroundSize: '180px', mixBlendMode: 'overlay', opacity: 0.28, pointerEvents: 'none',
      }}></div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(120% 100% at 30% 0%, rgba(255,255,255,.14), transparent 60%)',
        pointerEvents: 'none',
      }}></div>
      {index != null && (
        <span style={{
          position: 'absolute', top: 12, left: 14, fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: '.1em', color: 'rgba(255,255,255,.85)',
        }}>{index}</span>
      )}
      {caption && (
        <span style={{
          position: 'absolute', left: 14, bottom: 12, fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: '.04em', color: 'rgba(255,255,255,.92)',
          background: 'rgba(11,13,19,.34)', backdropFilter: 'blur(6px)',
          padding: '4px 10px', borderRadius: 'var(--radius-full)',
        }}>{caption}</span>
      )}
      {children}
    </div>
  );
}

/* Wordmark */
function Wordmark({ inverse = false, size = 22 }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size,
      letterSpacing: '-0.04em', color: inverse ? '#fff' : 'var(--text-primary)',
      whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'baseline',
    }}>
      {BRAND.name}<span style={{ color: 'var(--pop)' }}>.</span>
    </span>
  );
}

const NAV = [
  { id: 'work', label: 'work' },
  { id: 'apps', label: 'ai_labo' },
  { id: 'gallery', label: 'moments' },
  { id: 'about', label: 'about' },
];

function TopNav({ route, go, inverse = false, overlay = false, showAvailable = true, hidden = false }) {
  const [hover, setHover] = React.useState(null);
  const [open, setOpen] = React.useState(false); // mobile menu
  const dark = inverse || overlay;
  const fg = dark ? '#fff' : 'var(--text-primary)';
  const muted = dark ? 'rgba(255,255,255,.62)' : 'var(--text-secondary)';
  const goClose = (id) => { setOpen(false); go(id); };

  // Sliding underline. Over a link it snaps to that link; in the gaps BETWEEN
  // links it glides with the cursor; off the nav it springs back to the active
  // section (ai_labo stays active on its detail pages, work on case studies).
  const navRef = React.useRef(null);
  const btnRefs = React.useRef({});
  const activeNav = NAV.find(n => route === n.id
    || (n.id === 'work' && route === 'case')
    || (n.id === 'apps' && route === 'app'));
  const activeId = activeNav ? activeNav.id : null;
  const [navHover, setNavHover] = React.useState(false);
  const [ind, setInd] = React.useState({ left: 0, width: 0, visible: false, follow: false });
  const toActive = React.useCallback(() => {
    const el = activeId ? btnRefs.current[activeId] : null;
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth, visible: true, follow: false });
    else setInd(prev => ({ ...prev, visible: false, follow: false }));
  }, [activeId]);
  // When the cursor isn't in the nav, park the bar under the active section.
  React.useLayoutEffect(() => { if (!navHover) toActive(); }, [navHover, toActive, route, dark, showAvailable]);
  React.useEffect(() => {
    const onR = () => { if (!navHover) toActive(); };
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, [navHover, toActive]);
  const onNavMove = (e) => {
    const nav = navRef.current; if (!nav) return;
    const x = e.clientX - nav.getBoundingClientRect().left;
    const items = NAV.map(n => btnRefs.current[n.id]).filter(Boolean);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    // Outside the run of links (e.g. over the 'available' tag): snap to active.
    if (x < first.offsetLeft || x > last.offsetLeft + last.offsetWidth) { toActive(); return; }
    // Directly over a link: snap to it.
    let onBtn = null;
    for (const b of items) {
      if (x >= b.offsetLeft && x <= b.offsetLeft + b.offsetWidth) { onBtn = b; break; }
    }
    if (onBtn) { setInd({ left: onBtn.offsetLeft, width: onBtn.offsetWidth, visible: true, follow: false }); return; }
    // In a gap: glide continuously between the two neighbouring links, morphing
    // position + width across the gap so the bar travels with the cursor.
    let prev = first, next = last;
    for (const b of items) {
      if (b.offsetLeft + b.offsetWidth <= x) prev = b;          // last link fully left of cursor
      if (b.offsetLeft >= x) { next = b; break; }               // first link fully right of cursor
    }
    const prevRight = prev.offsetLeft + prev.offsetWidth;
    const span = Math.max(1, next.offsetLeft - prevRight);
    const tt = Math.min(1, Math.max(0, (x - prevRight) / span));
    const left = prev.offsetLeft + (next.offsetLeft - prev.offsetLeft) * tt;
    const width = prev.offsetWidth + (next.offsetWidth - prev.offsetWidth) * tt;
    setInd({ left, width, visible: true, follow: true });
  };

  return (
    <React.Fragment>
      {/* uniform full-page blur behind the open menu. It sits BELOW the header
          (z35 < z40), so the logo, burger, and nav links — all inside the
          header — stay sharp on top. Tap anywhere to close. */}
      {open && (
        <div aria-hidden="true" onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 35,
          background: dark ? 'rgba(11,13,19,.18)' : 'rgba(247,248,250,.35)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.3)', backdropFilter: 'blur(24px) saturate(1.3)',
        }}></div>
      )}
      <header className={overlay ? 'topnav topnav--overlay' : 'topnav'} style={{
      position: overlay ? 'fixed' : 'sticky', top: 0, left: 0, right: 0, zIndex: 40,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px var(--gutter)',
      backdropFilter: 'blur(12px)',
      background: overlay ? 'rgba(11,13,19,.25)' : (inverse ? 'rgba(11,13,19,.28)' : 'rgba(247,248,250,.78)'),
      borderBottom: overlay ? '1px solid rgba(255,255,255,.12)' : (inverse ? '1px solid rgba(255,255,255,.12)' : '1px solid var(--border-faint)'),
      opacity: hidden ? 0 : 1,
      pointerEvents: hidden ? 'none' : 'auto',
      transition: 'background 200ms var(--ease-out), border-color 200ms var(--ease-out), opacity 700ms var(--ease-out)',
    }}>
      {/* mobile-only gradient backdrop blur: full blur at the top, fading to 0
          blur at the bottom edge of the menu. A mask on the backdrop-filter
          layer fades the blur out. Shown only on the splash overlay nav, and
          only while the menu is closed (open state uses a uniform full-page blur). */}
      {!open && (
      <React.Fragment>
      <div className="topnav-blur" aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none',
        WebkitBackdropFilter: 'blur(14px)', backdropFilter: 'blur(14px)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
      }}></div>
      {/* black scrim: 50% at the top fading to 0% at the bottom, for legibility */}
      <div className="topnav-scrim" aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%)',
      }}></div>
      </React.Fragment>
      )}
      <button onClick={() => goClose('home')} style={{ position: 'relative', zIndex: 50, background: 'none', border: 0, cursor: 'pointer', padding: 0 }}>
        <Wordmark inverse={dark} />
      </button>

      {/* desktop nav */}
      <nav ref={navRef} className="nav-desktop"
        onMouseEnter={() => setNavHover(true)} onMouseMove={onNavMove} onMouseLeave={() => setNavHover(false)}
        style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--space-7)', paddingBottom: 2 }}>
        {NAV.map(n => {
          const active = activeId === n.id;
          const hovered = hover === n.id;
          const hoverColor = dark ? '#fff' : 'var(--text-primary)';
          return (
            <button key={n.id} ref={el => (btnRefs.current[n.id] = el)} onClick={() => go(n.id)}
              onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)}
              style={{
                background: 'none', border: 0, cursor: 'pointer', padding: '4px 0',
                fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.02em',
                color: active || hovered ? hoverColor : muted,
                transition: 'color 160ms var(--ease-out)',
              }}>{n.label}</button>
          );
        })}
        {/* sliding active / hover underline */}
        <span aria-hidden="true" style={{
          position: 'absolute', bottom: 0, height: 2, borderRadius: 1, background: 'var(--pop)',
          left: ind.left, width: ind.width, opacity: ind.visible ? 1 : 0, pointerEvents: 'none',
          transition: ind.follow
            ? 'left 110ms linear, width 180ms var(--ease-out), opacity 180ms var(--ease-out)'
            : 'left 280ms var(--ease-emphasis), width 280ms var(--ease-emphasis), opacity 180ms var(--ease-out)',
        }}></span>
        {showAvailable && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 12, color: muted }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-500)' }}></span>
            available
          </span>
        )}
      </nav>

      {/* mobile hamburger */}
      <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}
        style={{ display: 'none', position: 'relative', zIndex: 50, background: 'none', border: 0, cursor: 'pointer', color: fg, padding: 4 }}>
        <i data-lucide={open ? 'x' : 'menu'}></i>
      </button>

      {/* mobile sheet */}
      {open && (
        <div className="nav-sheet" style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 39,
          background: 'none',
          padding: '14px var(--gutter) 22px', display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => goClose(n.id)} style={{
              background: 'none', border: 0, textAlign: 'left', cursor: 'pointer', padding: '12px 0',
              fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.02em',
              color: route === n.id ? 'var(--pop)' : fg,
              borderBottom: '1px solid var(--border-faint)',
            }}>{n.label}</button>
          ))}
        </div>
      )}
    </header>
    </React.Fragment>
  );
}

function FooterCol({ title, items, go }) {
  const routeFor = { Work: 'work', Moments: 'gallery', Apps: 'apps', About: 'about' };
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(i => (
          <li key={i}>
            <a href="#" onClick={(e) => { e.preventDefault(); if (go && routeFor[i]) go(routeFor[i]); }}
               style={{ color: 'rgba(255,255,255,.8)', fontSize: 14 }}>{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: 'var(--surface-inverse)', color: '#fff', padding: 'var(--space-3) var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,.45)' }}>
        © 2026 · {BRAND.name}
      </div>
    </footer>
  );
}

/* mono eyebrow */
function Eyebrow({ children, style }) {
  return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-secondary)', ...style }}>{children}</span>;
}

// expose shared atoms AND the design-system primitives so every
// screen script (separate Babel scope) can reach them by name.

/* Preload + decode images into the in-memory cache. With dataUrl=true the
   image is stored as a data URL (paints with no network revalidation — the
   sandbox revalidates every cached <img>); otherwise it is just downloaded
   and decoded so it is paint-ready. Returns a promise that resolves when all
   are done. Read results via window.__imgCache[url]. */
window.warmImages = window.warmImages || function (urls, dataUrl) {
  window.__imgCache = window.__imgCache || {};
  const list = (urls || []).filter(Boolean);
  return Promise.all(list.map(u => new Promise(res => {
    if (window.__imgCache[u]) return res();
    const im = new Image();
    im.onerror = () => res();
    im.onload = () => {
      if (dataUrl && !window.__imgCache[u]) {
        try {
          const cv = document.createElement('canvas');
          cv.width = im.naturalWidth; cv.height = im.naturalHeight;
          cv.getContext('2d').drawImage(im, 0, 0);
          window.__imgCache[u] = cv.toDataURL('image/jpeg', 0.85);
        } catch (e) { /* tainted — leave URL */ }
      }
      (im.decode ? im.decode() : Promise.reject()).then(() => res(), () => res());
    };
    im.src = u;
  })));
};
// resolve a src through the cache (data URL if we warmed one)
window.cachedSrc = window.cachedSrc || function (s) { return (window.__imgCache && window.__imgCache[s]) || s; };

/* Fetch a video into a Blob URL held in memory. A blob URL loads with no
   network revalidation (the sandbox revalidates every cached request, which
   stalls a fresh <video> for seconds), so the detail-page hero can start
   immediately. Returns a promise resolving to the blob URL (or the original
   url on failure). */
window.warmVideoBlob = window.warmVideoBlob || function (url) {
  window.__videoBlobs = window.__videoBlobs || {};
  if (!url) return Promise.resolve(url);
  if (window.__videoBlobs[url]) return Promise.resolve(window.__videoBlobs[url]);
  return fetch(url).then(r => r.blob()).then(b => {
    const u = URL.createObjectURL(b);
    window.__videoBlobs[url] = u;
    return u;
  }).catch(() => url);
};
window.videoSrc = window.videoSrc || function (s) { return (window.__videoBlobs && window.__videoBlobs[s]) || s; };

Object.assign(window, {
  Photo, Wordmark, TopNav, Footer, Eyebrow, MOODS,
  MotionCtx, useMotion, Reveal, BRAND, LINKS,
  Button: NS.Button, IconButton: NS.IconButton, Tag: NS.Tag, Badge: NS.Badge,
  Card: NS.Card, Tabs: NS.Tabs, Input: NS.Input, Switch: NS.Switch, Avatar: NS.Avatar,
});
