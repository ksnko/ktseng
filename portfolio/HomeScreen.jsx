/* ============================================================
   Home — three switchable hero directions + selected work.
   WorkGrid supports 3 layout variations (tweakable).
   ============================================================ */

const IMG = 'https://ktseng.com/wp-content/uploads/';
const PROJECTS = [
  { id: 'crosshelmet', title: 'CrossHelmet', kind: 'Borderless', year: '2017/23', mood: 'steel',
    img: 'images/ch_a.jpg',
    video: 'uploads/ridingbeyond.webm',
    gallery: ['images/ch_a.jpg', 'images/ch_b.jpg', 'images/ch_c.jpg', 'images/ch_appui.jpg', 'images/ch_packaging.jpg'],
    blurb: 'An industry-first smart motorcycle helmet. Design, UX, packaging, and the crowdfunding campaigns that launched it.', tags: ['Design', 'UX', 'Packaging'], status: 'Shipped' },
  { id: 'mobility', title: 'Personal Mobility', kind: 'Borderless', year: '2019', mood: 'forest',
    img: 'images/mob_2.jpg',
    gallery: ['images/mob_2.jpg', 'images/mob_1.jpg'],
    blurb: 'Experience design and rendering for an undisclosed client.', tags: ['Mobility', 'Concept'], status: 'Concept' },
  { id: 'motobag', title: 'Motorcycle Bag', kind: 'Borderless', year: '2019', mood: 'dusk',
    img: 'images/bag_1.jpg',
    gallery: ['images/bag_1.jpg', 'images/bag_buckle.jpg'],
    blurb: 'Modular bag for motorcyclists. Design and prototype.', tags: ['Softgoods'], status: 'Shipped' },
  { id: 'ninjalock', title: 'Ninja Lock 3', kind: 'Borderless', year: '2019', mood: 'sky',
    img: 'images/nl3_exploded.jpg',
    gallery: ['images/nl3_exploded.jpg', 'images/nl3_aligned.jpg'],
    blurb: 'Smart, connected door lock. Design and prototype.', tags: ['Hardware', 'IoT'], status: 'Shipped' },
  { id: 'thync', title: 'Thync', kind: 'Branch', year: '2016', mood: 'dusk',
    img: 'images/thync_caseopened.jpg',
    gallery: ['images/thync_caseopened.jpg', 'images/thync_caseclosed.jpg', 'images/thync_blue.jpg', 'images/thync_champagne.jpg', 'images/thync_graphite.jpg'],
    blurb: 'A wearable and its charging case, explored across a family of finishes.', tags: ['Wearable', 'CMF'], status: 'Shipped' },
  { id: 'lifesmart', title: 'LifeSmart', kind: 'Branch', year: '2017', mood: 'forest',
    img: 'images/ls_blineup.jpg',
    gallery: ['images/ls_blineup.jpg', 'images/ls_b1.jpg', 'images/ls_bstand.jpg', 'images/ls_clineup.jpg', 'images/ls_cwall1.jpg'],
    blurb: 'A family of connected smart-home devices, designed across the lineup.', tags: ['Smart Home'], status: 'Shipped' },
  { id: 'jawboneup', title: 'Jawbone UP', kind: 'fuseproject', year: '2014', mood: 'cool',
    img: 'images/up3_5.jpg',
    video: 'uploads/jawboneup.webm',
    gallery: ['images/up3_5.jpg', 'images/up3_7.jpg', 'images/up3_18.jpg', 'images/up2_3.jpg', 'images/move_product2.jpg'],
    blurb: 'The UP family of health trackers: UP3, UP2, and UP Move. Design, prototype, and packaging.', tags: ['Wearable', 'Packaging'], status: 'Shipped' },
  { id: 'era', title: 'Jawbone Era', kind: 'fuseproject', year: '2014', mood: 'mono',
    img: 'images/era_11.jpg',
    gallery: ['images/era_11.jpg', 'images/era_2.jpg', 'images/era_brand.jpg'],
    blurb: 'A bluetooth earpiece. Design and prototyping on the Jawbone team.', tags: ['Audio', 'Prototype'], status: 'Shipped' },
  { id: 'jambox', title: 'Mini Jambox', kind: 'fuseproject', year: '2013', mood: 'mono',
    img: 'images/jambox_product1.jpg',
    gallery: ['images/jambox_product1.jpg', 'images/jambox_product5.jpg', 'images/jambox_strategy6.jpg'],
    blurb: 'Portable bluetooth speaker. Prototyping on the Jawbone team.', tags: ['Audio', 'Prototype'], status: 'Shipped' },
  { id: 'independent', title: 'Independent', kind: 'Personal · Freelance', year: '2008/11', mood: 'dusk',
    img: 'images/camera1.jpg',
    video: 'uploads/camera.webm',
    gallery: ['images/camera1.jpg', 'images/l_cover.jpg', 'images/l_renders.jpg'],
    blurb: 'A camera and a sculptural light that still hold up. Personal and freelance work.', tags: ['Personal', 'Freelance'], status: 'Personal' },
];

function HeroEditorial({ go }) {
  return (
    <section style={{ padding: 'clamp(56px,9vw,120px) var(--gutter) var(--space-11)', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <Reveal><Eyebrow>{BRAND.name} · {BRAND.role}</Eyebrow></Reveal>
      <Reveal delay={60}>
        <h1 style={{ fontSize: 'clamp(40px,7vw,82px)', lineHeight: 1.0, letterSpacing: '-0.035em', marginTop: 22, maxWidth: 980 }}>
          I design hardware,<br />photographs, and small<br />apps that try an idea quickly<span style={{ color: 'var(--pop)' }}>.</span>
        </h1>
      </Reveal>
      <Reveal delay={120}>
        <p style={{ fontSize: 20, color: 'var(--text-secondary)', maxWidth: 560, marginTop: 28, lineHeight: 1.55 }}>
          American-born Taiwanese industrial designer based in Tokyo. Smart helmets, wearables, and bluetooth audio, with a camera always in hand.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={() => go('work')}>See the work</Button>
          <Button variant="secondary" size="lg" onClick={() => go('about')} iconRight={<i data-lucide="arrow-up-right"></i>}>About me</Button>
        </div>
      </Reveal>
    </section>
  );
}

function HeroFullBleed({ go }) {
  return (
    <section style={{ position: 'relative', height: 'min(78vh, 680px)', margin: '16px var(--gutter) 0', borderRadius: 'var(--radius-2xl)', overflow: 'hidden' }}>
      <Photo mood="dusk" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,19,.7) 0%, rgba(11,13,19,.1) 55%, transparent 100%)' }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(28px,5vw,56px)' }}>
        <Reveal><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.75)' }}>{BRAND.name} · Selected 2011/2023</span></Reveal>
        <Reveal delay={80}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px,6vw,76px)', lineHeight: 1.0, letterSpacing: '-0.035em', marginTop: 18, maxWidth: 900 }}>
            Craft you can feel,<br />systems you can trust<span style={{ color: 'var(--pop)' }}>.</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => go('gallery')}>Enter the gallery</Button>
            <Button variant="secondary" size="lg" onClick={() => go('apps')} style={{ background: 'rgba(255,255,255,.1)', color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>AI labo</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroSplit({ go }) {
  return (
    <section className="hero-split" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(24px,4vw,64px)', alignItems: 'center', padding: 'clamp(40px,6vw,88px) var(--gutter)', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <div>
        <Reveal><Eyebrow>{BRAND.role} · Freelance</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.02, letterSpacing: '-0.03em', marginTop: 20 }}>
            Hi, I'm {BRAND.name.split(' ')[0]}. I make<br />considered things,<br />sometimes playful<span style={{ color: 'var(--pop)' }}>.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p style={{ fontSize: 18, color: 'var(--text-secondary)', marginTop: 22, lineHeight: 1.6, maxWidth: 440 }}>
            Hardware, photographs, and a growing shelf of small apps. Here's a selected handful. Not everything, just the good bits.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => go('apps')}>Enter the labo</Button>
            <Button variant="ghost" size="lg" onClick={() => go('about')}>Say hello</Button>
          </div>
        </Reveal>
      </div>
      <Reveal delay={120}><Photo mood="cool" ratio="4/5" caption="reykjavík · 2024" index="↳ now" style={{ borderRadius: 'var(--radius-2xl)' }} /></Reveal>
    </section>
  );
}

const HEROES = { a: HeroEditorial, b: HeroFullBleed, c: HeroSplit };

function HeroSwitcher({ hero, setHero }) {
  const opts = [['splash', 'Splash'], ['a', 'Editorial'], ['b', 'Full-bleed'], ['c', 'Split']];
  return (
    <div className="hero-switcher" style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 60,
      display: 'flex', gap: 4, padding: 5, background: 'var(--surface)', borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', alignSelf: 'center', padding: '0 8px 0 10px' }}>HERO</span>
      {opts.map(([k, label]) => (
        <button key={k} onClick={() => setHero(k)} style={{
          border: 0, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12,
          padding: '7px 14px', borderRadius: 'var(--radius-full)',
          background: hero === k ? 'var(--accent)' : 'transparent',
          color: hero === k ? '#fff' : 'var(--text-secondary)',
          transition: 'background 160ms var(--ease-out), color 160ms var(--ease-out)',
        }}>{label}</button>
      ))}
    </div>
  );
}

/* cover image with placeholder fallback.
   When a project has a gallery, the horizontal cursor position
   scrubs through its images (a quick filmstrip preview). */
function Cover({ p, i, hoverZoom }) {
  const gallery = (p.gallery && p.gallery.length) ? p.gallery : (p.img ? [p.img] : null);
  const [idx, setIdx] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);
  // Card covers use lightweight 1000px thumbnails (full-res images are
  // 2000-3200px and take 150-460ms each to decode — that was the flash on
  // opening Work). Case studies still load the originals.
  const thumb = (src) => {
    const t = src && src.startsWith('images/') && !src.startsWith('images/thumbs/')
      ? 'images/thumbs/' + src.slice('images/'.length)
      : src;
    // Prefer the in-memory data URL captured during the splash preload — it
    // paints with no network revalidation round-trip (the sandbox revalidates
    // every cached <img>, which was the flash on opening Work).
    return (window.__imgCache && window.__imgCache[t]) || t;
  };

  if (!gallery) {
    return <Photo mood={p.mood} index={i != null ? String(i + 1).padStart(2, '0') : undefined} style={hoverZoom != null ? { transform: hoverZoom ? 'scale(1.05)' : 'scale(1)', transition: 'transform 500ms var(--ease-out)' } : undefined} />;
  }

  const onMove = (e) => {
    if (gallery.length < 2) return;
    // No filmstrip scrubbing on mobile — taps shouldn't jump frames.
    if (window.matchMedia && window.matchMedia('(max-width: 860px)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const n = Math.min(gallery.length - 1, Math.max(0, Math.floor(x * gallery.length)));
    if (n !== idx) setIdx(n);
  };
  const onLeave = () => { setHovered(false); setIdx(0); };

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {p.video ? (
        // A project with a cover video plays it muted/looping in place; the
        // first gallery thumb is the poster so it's never blank while loading.
        <video src={window.videoSrc ? window.videoSrc(p.video) : p.video} poster={thumb(gallery[0])} autoPlay loop muted playsInline preload="auto"
          onLoadedMetadata={(e) => { const v = e.target; if (/jawboneup\.webm/i.test(p.video || '') && isFinite(v.duration) && v.currentTime < 0.05) { try { v.currentTime = v.duration * 0.1; } catch (_) {} } }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hoverZoom ? 'scale(1.05)' : 'none', transition: 'transform 500ms var(--ease-out)' }} />
      ) : gallery.map((src, k) => (
        // Only the first frame mounts eagerly; scrub frames mount on hover so
        // opening Work decodes one small thumb per card, not the whole strip.
        (k === 0 || hovered) ? (
          <img key={src} src={thumb(src)} alt={p.title + (k ? ' · ' + (k + 1) : '')} loading="eager" decoding="sync" fetchpriority={k === 0 ? 'high' : 'auto'}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              opacity: k === idx ? 1 : 0, transition: 'opacity 120ms linear',
              transform: hoverZoom ? 'scale(1.05)' : 'none' }} />
        ) : null
      ))}
    </div>
  );
}

/* --- Tile → page transition --------------------------------
   Two phases, both anchored to the clicked tile:
   1. A violet scan line sweeps the WHOLE tile left to right while
      the destination assets preload. The tile keeps its colour
      throughout (no desaturation).
   2. When ready, the entire tile magnifies from its own origin
      (scales up in place), fading linearly to 0 opacity —
      dissolving into the destination page (navigated underneath).
   opts: { preload?: string[], navigate: () => void } */
function tileTransition(e, opts) {
  const navigate = opts.navigate;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root0 = e && e.currentTarget;
  if (reduce || !root0) { navigate(); return; }

  const rect = root0.getBoundingClientRect();
  const cs = getComputedStyle(root0);
  const radius = (cs.borderRadius && cs.borderRadius !== '0px') ? cs.borderRadius : '16px';

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:auto;';

  const frame = document.createElement('div');
  frame.style.cssText = `position:fixed;left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;border-radius:${radius};overflow:hidden;box-shadow:var(--shadow-xl,0 24px 60px rgba(20,30,60,.22));background:var(--surface,#fff);transform-origin:center center;will-change:transform,opacity;`;

  // clone the entire tile (image + text + tags) so the scan and the
  // magnify cover the whole card, not just the cover image
  const clone = root0.cloneNode(true);
  clone.style.cssText = `position:absolute;left:0;top:0;width:${rect.width}px;height:${rect.height}px;margin:0;box-shadow:none;transform:none;pointer-events:none;`;
  frame.appendChild(clone);

  // left-to-right scan line (the tile keeps its colour the whole time)
  const line = document.createElement('div');
  line.style.cssText = 'position:absolute;top:0;bottom:0;left:0;width:2px;background:var(--pop,#9D4EFF);box-shadow:0 0 14px 3px var(--pop,#9D4EFF);opacity:.95;';
  frame.appendChild(line);

  overlay.appendChild(frame);
  document.body.appendChild(overlay);

  // prepare the destination page: the loader waits on opts.prepare() (the
  // hero / above-the-fold), while it warms the rest of the page in the
  // background. Resolves assetReady when the blocking part is decoded.
  let assetReady = false;
  const ready = typeof opts.prepare === 'function' ? opts.prepare() : Promise.resolve();
  Promise.resolve(ready).then(() => { assetReady = true; }, () => { assetReady = true; });

  const start = performance.now(), MIN = 720, CAP = 2600;
  let cur = 0, raf, started = false;
  function tick() {
    const el = performance.now() - start;
    const timeFrac = Math.min(1, el / MIN);
    // climb with time, but hold near the top until the assets are ready
    const target = assetReady ? 1 : Math.min(0.9, timeFrac);
    cur += Math.max(0.014, (target - cur) * 0.14);
    if (cur > target) cur = target;
    const pct = Math.min(1, cur);
    line.style.left = `${(pct * 100).toFixed(1)}%`;
    if ((pct >= 0.999 && assetReady && el >= MIN) || el >= CAP) { expand(); return; }
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);
  // Backstop: rAF is paused while the tab is backgrounded; guarantee the
  // expand + navigation still fire on a timer.
  const backstop = setTimeout(expand, CAP + 80);

  function expand() {
    if (started) return;            // run once (rAF + backstop guard)
    started = true;
    cancelAnimationFrame(raf);
    clearTimeout(backstop);
    line.style.transition = 'opacity 160ms linear'; line.style.opacity = '0';
    const EM = 'cubic-bezier(.4,0,.2,1)';
    // the whole tile magnifies from its own origin (scales up in place)
    // while fading linearly to 0, dissolving into the destination page
    const scale = Math.max(window.innerWidth / rect.width, window.innerHeight / rect.height) * 1.18;
    frame.style.transition = `transform 660ms ${EM},opacity 660ms linear,box-shadow 400ms ease`;
    requestAnimationFrame(() => {
      frame.style.transform = `scale(${scale})`;
      frame.style.opacity = '0';
      frame.style.boxShadow = 'none';
    });
    setTimeout(navigate, 300);
    setTimeout(() => overlay.remove(), 740);
  }
}
window.tileTransition = tileTransition;

/* Warm a case-study page before navigating: data-URL the hero (blocking, so
   the above-the-fold paints with no flash) and decode the rest in the
   background. Returns a promise the loader waits on. */
function prepareCase(id) {
  const a = window.caseAssets ? window.caseAssets(id) : null;
  if (!a) return Promise.resolve();
  if (a.all && a.all.length) {
    const rest = a.all.filter(u => u !== a.hero);
    if (rest.length) window.warmImages(rest, true);   // background, data-URL
  }
  const jobs = [];
  if (a.hero) jobs.push(window.warmImages([a.hero], true));
  // a video hero (CrossHelmet): make sure its in-memory Blob URL is ready
  // before navigating so the hero <video> loads instantly from memory instead
  // of stalling on a fetch and showing the still poster. Cap the wait.
  if (a.heroVideo && window.warmVideoBlob) {
    jobs.push(Promise.race([
      window.warmVideoBlob(a.heroVideo),
      new Promise(res => setTimeout(res, 1500)),
    ]));
  }
  return Promise.all(jobs);
}
window.prepareCase = prepareCase;

/* --- Work grid, 3 layouts ----------------------------------- */
function ProjectCard({ p, i, go }) {
  return (
    <Card interactive media={<Cover p={p} i={i} />} onClick={(e) => tileTransition(e, { prepare: () => prepareCase(p.id), navigate: () => go('case', p.id) })}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Eyebrow>{p.kind} · {p.year}</Eyebrow>
      </div>
      <h3 style={{ fontSize: 24, letterSpacing: '-0.02em', marginTop: 4 }}>{p.title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.55 }}>{p.blurb}</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
        {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </Card>
  );
}

function ProjectRow({ p, i, go }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={(e) => tileTransition(e, { prepare: () => prepareCase(p.id), navigate: () => go('case', p.id) })} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="work-row"
      style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 'clamp(20px,3vw,48px)', alignItems: 'center',
        padding: 'var(--space-6) 0', borderTop: '1px solid var(--border)', cursor: 'pointer' }}>
      <div className="work-cover" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3' }}>
        <Cover p={p} hoverZoom={hover} />
      </div>
      <div>
        <Eyebrow>{p.kind} · {p.year}</Eyebrow>
        <h3 style={{ fontSize: 'clamp(22px,2.4vw,30px)', letterSpacing: '-0.02em', marginTop: 6, color: hover ? 'var(--accent)' : 'var(--text-primary)', transition: 'color 160ms var(--ease-out)' }}>{p.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15.5, lineHeight: 1.55, marginTop: 6, maxWidth: 560 }}>{p.blurb}</p>
      </div>
      <div className="row-meta" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ color: hover ? 'var(--accent)' : 'var(--text-muted)', display: 'inline-flex', transform: hover ? 'translateX(3px)' : 'none', transition: 'transform 200ms var(--ease-out), color 160ms' }}><i data-lucide="arrow-right"></i></span>
      </div>
    </div>
  );
}

function WorkGrid({ go, layout = 'cards', heading = true }) {
  const gridStyle = layout === 'compact'
    ? { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', gridAutoRows: '1fr' }
    : { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)', gridAutoRows: '1fr' };
  return (
    <section style={{ padding: 'var(--space-11) var(--gutter)', maxWidth: 'var(--container)', margin: '0 auto' }}>
      {heading && (
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', letterSpacing: '-0.025em', marginTop: 10 }}>A handful of recent projects</h2>
            </div>
            <Button variant="ghost" onClick={() => go('work')} iconRight={<i data-lucide="arrow-right"></i>}>All projects</Button>
          </div>
        </Reveal>
      )}
      {layout === 'rows' ? (
        <div className="work-rows" style={{ borderBottom: '1px solid var(--border)' }}>
          {PROJECTS.map((p, i) => <Reveal key={p.id} delay={i * 50}><ProjectRow p={p} i={i} go={go} /></Reveal>)}
        </div>
      ) : (
        <div className="work-cards" style={gridStyle}>
          <style>{`.work-cards > .kt-reveal { display: flex; } .work-cards .kt-card { display: flex; flex-direction: column; flex: 1; width: 100%; } .work-cards .kt-card > .kt-card__body { flex: 1 1 auto; }`}</style>
          {PROJECTS.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 60}><ProjectCard p={p} i={i} go={go} /></Reveal>)}
        </div>
      )}
    </section>
  );
}

function PhotoStrip({ go }) {
  const G = 'images/moments/';
  const shots = [
    G + 'DSC00174b-scaled.jpg',
    G + '00010022b-scaled.jpg',
    G + '00010006b-scaled.jpg',
    G + 'DSC09513b-scaled.jpg',
    G + 'DSC05971s2.jpg',
  ];
  return (
    <section style={{ padding: '0 var(--gutter) var(--space-11)', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
      <Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-6)', gap: 16, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.02em' }}>From the gallery</h2>
          <Button variant="ghost" onClick={() => go('gallery')} iconRight={<i data-lucide="arrow-right"></i>}>Open gallery</Button>
        </div>
      </Reveal>
      <Reveal>
        <div className="photo-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-3)' }}>
          {shots.map((src, i) => (
            <div key={i} onClick={() => go('gallery')} style={{ cursor: 'pointer', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '3/4', background: 'var(--slate-100)' }}>
              <img src={src} alt={'photograph ' + (i + 1)} loading="eager" decoding="sync" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function HomeScreen({ go, hero, setHero, workLayout }) {
  const Hero = HEROES[hero] || HeroEditorial;
  return (
    <div>
      <Hero go={go} />
      <WorkGrid go={go} layout={workLayout} />
      <PhotoStrip go={go} />
      <HeroSwitcher hero={hero} setHero={setHero} />
    </div>
  );
}

function WorkScreen({ go, workLayout }) {
  return (
    <div style={{ paddingTop: 'clamp(20px,3vw,40px)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <Reveal><Eyebrow>Selected Work · 2008/2023</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '-0.03em', marginTop: 12, maxWidth: 760 }}>
            From concept to creation<span style={{ color: 'var(--pop)' }}>.</span>
          </h1>
        </Reveal>
      </div>
      <WorkGrid go={go} layout={workLayout} heading={false} />
    </div>
  );
}

Object.assign(window, { HomeScreen, WorkScreen, WorkGrid, PhotoStrip, PROJECTS });
