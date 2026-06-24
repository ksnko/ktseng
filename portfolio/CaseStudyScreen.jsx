/* ============================================================
   Case study — data-driven project pages.
   One entry per project in CASES; CrossHelmet gets the rich
   layout (slide viewer + drag-to-compare), others a gallery stack.
   ============================================================ */

const J = (n) => 'images/' + n;

const CASES = {
  crosshelmet: {
    title: 'CrossHelmet', tag: 'Borderless · Industrial Design',
    hero: J('ch_a.jpg'),
    overview: 'An industry-first smart motorcycle helmet: wide rear-view camera, heads-up display, and sound control. Designed at Borderless and launched through multiple successful crowdfunding campaigns.',
    body: 'I worked across the entire product experience, from industrial design and app UI to crowdfunding campaigns, graphics, packaging, web services, and social media.',
    meta: [['Role', 'Senior ID / Officer'], ['Years', '2017 — 2023'], ['Studio', 'Borderless, Tokyo'], ['Tools', 'Rhino, Keyshot'], ['Output', 'Helmet · App · Packaging']],
    video: '544499028',
    heroVideo: 'uploads/ridingbeyond.webm',
    slides: [
      { t: 'App UI', img: J('ch_appui.jpg') },
      { t: 'Firmware UI', img: J('ch_fwui.jpg') },
      { t: 'Storyboard', img: J('ch_vidsb.jpg') },
      { t: 'Packaging', img: J('ch_packaging.jpg') },
    ],
    compare: [
      { a: J('ch_a.jpg'), b: J('ch_b.jpg') },
      { a: J('ch_c.jpg'), b: J('ch_d.jpg') },
    ],
  },
  jawboneup: {
    title: 'Jawbone UP', tag: 'fuseproject · Wearables',
    hero: J('up3_5.jpg'),
    overview: 'The UP family of health trackers. Design, prototyping, and packaging on the Jawbone team at fuseproject.',
    meta: [['Role', 'Industrial Designer'], ['Year', '2014'], ['Studio', 'fuseproject, SF'], ['Output', 'UP3 · UP2 · UP Move']],
    sections: [
      { t: 'UP3 · 2014', body: 'Health-tracking wristband. Design, prototype, and packaging.', images: [
        J('up3_7.jpg'), J('up3_6.jpg'), J('up3_18.jpg'), J('up3_14.jpg'), J('up3_8.jpg'),
      ] },
      { t: 'UP2 · 2014', body: 'Health-tracking wristband. Design, prototype, and packaging.', images: [
        J('up2_3.jpg'), J('up2_9.jpg'), J('up2_14.jpg'), J('up2_13.jpg'), J('up2_11.jpg'), J('up2_12.jpg'),
      ] },
      { t: 'UP Move · 2014', body: 'Miniature step-counter. Design, prototype, and packaging.', images: [
        J('move_brand1.jpg'), J('move_product2.jpg'), J('move_0.jpg'), J('move_product3.jpg'), J('move_brand3.jpg'), J('move_product9.jpg'), J('move_product6.jpg'),
      ] },
    ],
  },
  era: {
    title: 'Jawbone Era', tag: 'fuseproject · Audio',
    hero: J('era_10.jpg'),
    overview: 'A bluetooth earpiece for the Jawbone family. Design and prototyping on the Jawbone team at fuseproject.',
    meta: [['Role', 'Industrial Designer'], ['Year', '2014'], ['Studio', 'fuseproject, SF'], ['Output', 'Earpiece · Prototype']],
    images: [J('era_11.jpg'), J('era_2.jpg'), J('era_brand.jpg')],
  },
  ninjalock: {
    title: 'Ninja Lock 3', tag: 'Borderless · IoT',
    hero: J('nl3_exploded.jpg'),
    overview: 'A smart, connected door lock. Design and prototype at Borderless, Tokyo.',
    meta: [['Role', 'Senior ID'], ['Year', '2019'], ['Studio', 'Borderless, Tokyo'], ['Output', 'Lock · Prototype']],
    images: [J('nl3_aligned.jpg')],
  },
  motobag: {
    title: 'Motorcycle Bag', tag: 'Borderless · Softgoods',
    hero: J('bag_1.jpg'),
    overview: 'A modular bag system for motorcyclists. Design and prototype at Borderless, Tokyo.',
    meta: [['Role', 'Senior ID'], ['Year', '2019'], ['Studio', 'Borderless, Tokyo'], ['Output', 'Bag system · Prototype']],
    images: [J('bag_2.jpg'), J('bag_3.jpg'), J('bag_buckle.jpg'), J('bag_4.jpg')],
  },
  jambox: {
    title: 'Mini Jambox', tag: 'fuseproject · Audio',
    hero: J('jambox_product1.jpg'),
    overview: 'A portable bluetooth speaker. Prototyping on the Jawbone team at fuseproject.',
    meta: [['Role', 'Industrial Designer'], ['Year', '2013'], ['Studio', 'fuseproject, SF'], ['Output', 'Prototype']],
    images: [J('jambox_strategy6.jpg'), J('jambox_product5.jpg')],
  },
  mobility: {
    title: 'Personal Mobility', tag: 'Borderless · Concept',
    hero: J('mob_2.jpg'),
    overview: 'Personal mobility for an undisclosed client. Experience design and rendering.',
    meta: [['Role', 'Senior ID'], ['Year', '2019'], ['Studio', 'Borderless, Tokyo'], ['Output', 'Concept · Renders']],
    images: [J('mob_1.jpg')],
  },
  thync: {
    title: 'Thync', tag: 'Branch · Wearable',
    hero: J('thync_caseopencontext.jpg'),
    overview: 'A wearable and its charging case, explored across a family of finishes. Industrial design and color, material, and finish.',
    meta: [['Role', 'Senior ID'], ['Year', '2016'], ['Studio', 'Branch'], ['Output', 'Device · Case · CMF']],
    sections: [
      { t: 'The case', body: 'A charging case for the wearable: closed, open, and exploded.', cols: 2,
        images: [J('thync_caseopened.jpg'), J('thync_caseclosed.jpg'), J('thync_caseexploded.jpg'), J('thync_casecontext.jpg'), J('thync_casecontextdesk.jpg')] },
      { t: 'Finishes', body: 'A range of color and material directions.', cols: 2,
        images: [J('thync_blue.jpg'), J('thync_champagne.jpg'), J('thync_graphite.jpg'), J('thync_volcano.jpg'), J('thync_wine.jpg'), J('thync_wine2.jpg'), J('thync_fade.jpg'), J('thync_fog.jpg')] },
    ],
  },
  lifesmart: {
    title: 'LifeSmart', tag: 'Branch · Smart Home',
    hero: J('ls_blineup.jpg'),
    overview: 'Home-use communication camera for LifeSmart brand.',
    meta: [['Role', 'Senior ID'], ['Year', '2017'], ['Studio', 'Branch'], ['Output', 'Device family']],
    sections: [
      { t: 'Form A', cols: 2,
        images: [J('ls_blineup.jpg'), J('ls_b1.jpg'), J('ls_bstand.jpg'), J('ls_bshelf.jpg'), J('ls_bcontext.jpg')] },
      { t: 'Form B', cols: 2,
        images: [J('ls_clineup.jpg'), J('ls_cwall1.jpg'), J('ls_cbottom.jpg')] },
      { t: 'Form C', cols: 2,
        images: [J('ls_f1.jpg'), J('ls_f2.jpg'), J('ls_f3.jpg')] },
    ],
  },
  independent: {
    title: 'Independent', tag: 'Personal · Freelance',
    hero: J('gs1_1.jpg'),
    overview: 'Personal and freelance work, 2008 to 2011. A camera and a sculptural light that still hold up.',
    meta: [['Type', 'Personal · Freelance'], ['Years', '2008 — 2011'], ['Projects', '2']],
    sections: [
      { t: 'Panasonic GS-1 · 2011', body: 'Personal project. Micro four-thirds reimagined, not sponsored or official.', cols: 2,
        images: ['gs1_1.jpg', 'gs1_2.jpg', 'gs1_3.jpg', 'gs1_4.jpg', 'gs1_5.jpg', 'gs1_6.jpg', 'gs1_7.jpg', 'gs1_8.jpg'].map(J) },
      { t: 'Viscous Lighting · 2011', body: 'Client project, freelance. LED sculptural light.', cols: 2,
        images: ['visc_cover.jpg', 'visc_sketch1.jpg', 'visc_sketch3.jpg', 'visc_sketch4.jpg', 'visc_idea2.jpg', 'visc_idea1.jpg', 'visc_exploded.jpg', 'visc_closeup.jpg', 'visc_idea3.jpg', 'visc_renders.jpg', 'visc_context2.jpg', 'visc_context3.jpg', 'visc_context4.jpg', 'visc_context5.jpg'].map(J) },
    ],
  },
};
const CASE_ORDER = ['crosshelmet', 'mobility', 'motobag', 'ninjalock', 'thync', 'lifesmart', 'jawboneup', 'era', 'jambox', 'independent'];

// resolve a src through the in-memory cache (data URL if one was warmed)
const cimg = (s) => (window.__imgCache && window.__imgCache[s]) || s;
// every image URL a case-study page renders (hero first)
function caseAssets(id) {
  const c = CASES[id] || CASES.crosshelmet;
  const all = [];
  if (c.hero) all.push(c.hero);
  (c.slides || []).forEach(s => s.img && all.push(s.img));
  (c.compare || []).forEach(p => { p.a && all.push(p.a); p.b && all.push(p.b); });
  (c.images || []).forEach(s => all.push(s));
  (c.sections || []).forEach(sec => (sec.images || []).forEach(s => all.push(s)));
  return { hero: c.hero, heroVideo: c.heroVideo, all: Array.from(new Set(all)) };
}

/* Drag-to-compare: two stacked images, the top one clipped at the
   handle. Pointer events, works with touch. */
function CompareSlider({ before, after, labelA, labelB, ratio = '4/3' }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const draggingRef = React.useRef(false);
  const update = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const onDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e) => { if (draggingRef.current) update(e.clientX); };
  const onUp = () => { draggingRef.current = false; };
  const capsule = {
    position: 'absolute', bottom: 12, fontFamily: 'var(--font-mono)', fontSize: 11,
    letterSpacing: '.06em', color: 'rgba(255,255,255,.92)', background: 'rgba(11,13,19,.4)',
    backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: 'var(--radius-full)',
    pointerEvents: 'none', whiteSpace: 'nowrap',
  };
  return (
    <div ref={ref}
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
      style={{ position: 'relative', aspectRatio: ratio, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        cursor: 'ew-resize', touchAction: 'none', userSelect: 'none', boxShadow: 'var(--shadow-md)', background: 'var(--slate-100)' }}>
      <img src={cimg(before)} alt={labelA} loading="lazy" draggable="false"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={cimg(after)} alt={labelB} loading="lazy" draggable="false"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* handle */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: pos + '%', width: 2, background: '#fff', transform: 'translateX(-1px)', boxShadow: '0 0 0 1px rgba(11,13,19,.12)' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: pos + '%', transform: 'translate(-50%,-50%)',
        width: 40, height: 40, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-md)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, pointerEvents: 'none',
        fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>‹ ›</div>
      <span style={{ ...capsule, left: 12, opacity: pos > 12 ? 1 : 0, transition: 'opacity 200ms var(--ease-out)' }}>{labelB}</span>
      <span style={{ ...capsule, right: 12, opacity: pos < 88 ? 1 : 0, transition: 'opacity 200ms var(--ease-out)' }}>{labelA}</span>
    </div>
  );
}

function MetaRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border-faint)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{label}</span>
      <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500, textAlign: 'right', whiteSpace: 'nowrap' }}>{value}</span>
    </div>
  );
}

function SlideViewer({ slides }) {
  const [slide, setSlide] = React.useState(0);
  return (
    <div>
      <div style={{ marginTop: 16, position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '16/9', boxShadow: 'var(--shadow-lg)' }}>
        <img src={cimg(slides[slide].img)} alt={slides[slide].t} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(28px,4vw,56px)', background: 'linear-gradient(to top, rgba(11,13,19,.5), transparent 55%)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(255,255,255,.7)' }}>{String(slide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          <h3 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '-0.02em', marginTop: 8 }}>{slides[slide].t}</h3>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        {slides.map((s, i) => (
          <button key={i} onClick={() => setSlide(i)} style={{ flex: 1, border: 0, padding: 0, cursor: 'pointer', borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16/9', outline: i === slide ? '2px solid var(--accent)' : 'none', outlineOffset: 2, opacity: i === slide ? 1 : 0.65, transition: 'opacity 160ms var(--ease-out)' }}>
            <img src={cimg(s.img)} alt={s.t} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </button>
        ))}
      </div>
    </div>
  );
}

function CaseStudyScreen({ go, id = 'crosshelmet' }) {
  const c = CASES[id] || CASES.crosshelmet;
  const idx = CASE_ORDER.indexOf(CASES[id] ? id : 'crosshelmet');
  const nextId = CASE_ORDER[(idx + 1) % CASE_ORDER.length];
  const next = CASES[nextId];
  return (
    <div>
      {/* hero cover */}
      <section style={{ padding: 'clamp(20px,3vw,40px) var(--gutter) 0', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <button onClick={() => go('work')} style={{ background: 'none', border: 0, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
          <i data-lucide="arrow-left"></i> back to work
        </button>
        <div style={{ position: 'relative', ...(c.heroVideo ? { aspectRatio: '8 / 3' } : { height: 'min(56vh, 460px)' }), borderRadius: 'var(--radius-2xl)', overflow: 'hidden', background: 'var(--slate-100)' }}>
          {c.heroVideo
            ? <video src={window.videoSrc ? window.videoSrc(c.heroVideo) : c.heroVideo} poster={(window.__videoPosters || {})[c.heroVideo]} autoPlay loop muted playsInline preload="auto" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}></video>
            : <img src={cimg(c.hero)} alt={c.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,13,19,.55), transparent 60%)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, padding: 'clamp(24px,4vw,48px)' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5.5vw,68px)', letterSpacing: '-0.03em', marginTop: 14, lineHeight: 1 }}>{c.title}</h1>
          </div>
        </div>
      </section>

      {/* intro + meta */}
      <section className="case-intro" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(32px,5vw,80px)', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-10) var(--gutter)' }}>
        <div>
          <Reveal><Eyebrow>Overview</Eyebrow></Reveal>
          <Reveal delay={60}>
            <p style={{ fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.45, letterSpacing: '-0.01em', marginTop: 16, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 500 }}>
              {c.overview}
            </p>
          </Reveal>
          {c.body && (
            <Reveal delay={120}>
              <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: 22, maxWidth: 560 }}>{c.body}</p>
            </Reveal>
          )}
        </div>
        <aside style={{ alignSelf: 'start' }}>
          {c.meta.map(([label, value]) => <MetaRow key={label} label={label} value={value} />)}
        </aside>
      </section>

      {/* film (vimeo) */}
      {c.video && (
        <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter) var(--space-10)' }}>
          <Eyebrow>Film</Eyebrow>
          <Reveal>
            <div style={{ marginTop: 16, position: 'relative', aspectRatio: '8/3', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: 'var(--slate-900)' }}>
              <iframe
                src={'https://player.vimeo.com/video/' + c.video + '?byline=0&portrait=0&title=0'}
                title={c.title + ' film'}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </Reveal>
        </section>
      )}

      {/* drag-to-compare (rich cases) */}
      {c.compare && (
        <section style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter) var(--space-10)' }}>
          <Eyebrow>Design · drag to compare</Eyebrow>
          <div className="case-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 16 }}>
            {c.compare.map((pair, i) => (
              <CompareSlider key={i} before={pair.a} after={pair.b} labelA="view a" labelB="view b" />
            ))}
          </div>
        </section>
      )}

      {/* slide viewer (rich cases) */}
      {c.slides && (
        <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter) var(--space-10)' }}>
          <Eyebrow>The work</Eyebrow>
          <SlideViewer slides={c.slides} />
        </section>
      )}

      {/* image stack (gallery cases) */}
      {c.images && (
        <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter) var(--space-10)' }}>
          <Eyebrow>The work</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 16 }}>
            {c.images.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 60}>
                <img src={cimg(src)} alt={c.title + ' ' + (i + 1)} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* sectioned compilations (Jawbone UP family, Independent) */}
      {c.sections && c.sections.map(sec => (
        <section key={sec.t} style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter) var(--space-10)' }}>
          <Eyebrow>{sec.t}</Eyebrow>
          {sec.body && <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 10, maxWidth: 560 }}>{sec.body}</p>}
          {sec.cols === 2 ? (
            <div style={{ columnCount: 2, columnGap: 'var(--space-4)', marginTop: 16 }}>
              {sec.images.map((src, i) => (
                <img key={src} src={cimg(src)} alt={sec.t + ' ' + (i + 1)} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginBottom: 'var(--space-4)', breakInside: 'avoid' }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 16 }}>
              {sec.images.map((src, i) => (
                <img key={src} src={cimg(src)} alt={sec.t + ' ' + (i + 1)} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }} />
              ))}
            </div>
          )}
        </section>
      ))}

      {/* next */}
      <section onClick={() => go('case', nextId)} style={{ cursor: 'pointer', background: 'var(--surface-inverse)', color: '#fff', padding: 'var(--space-11) var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>Next project</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(30px,4vw,52px)', letterSpacing: '-0.03em', marginTop: 10 }}>{next.title} →</h2>
          </div>
          <i data-lucide="arrow-right" style={{ width: 40, height: 40 }}></i>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CaseStudyScreen, caseAssets });
