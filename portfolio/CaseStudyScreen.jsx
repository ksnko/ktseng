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
    heroVideo: 'uploads/jawboneup.webm',
    overview: 'The UP family of health trackers.\nDesign, prototyping, and packaging on the Jawbone team at fuseproject.',
    meta: [['Role', 'Industrial Designer'], ['Year', '2014'], ['Studio', 'fuseproject, SF'], ['Output', 'UP3 · UP2 · UP Move']],
    sections: [
      { t: 'UP3 · 2014', body: 'Health-tracking wristband. Design, prototype, and packaging.', slideshow: true, images: [
        J('up3_14.jpg'), J('up3_8.jpg'), J('up3_18.jpg'), J('up3_6.jpg'), J('up3_7.jpg'),
      ] },
      { t: 'UP2 · 2014', body: 'Health-tracking wristband. Design, prototype, and packaging.', slideshow: true, images: [
        J('up2_3.jpg'), J('up2_9.jpg'), J('up2_14.jpg'), J('up2_13.jpg'), J('up2_11.jpg'), J('up2_12.jpg'),
      ] },
      { t: 'UP Move · 2014', body: 'Miniature step-counter. Design, prototype, and packaging.', slideshow: true, images: [
        J('move_brand1.jpg'), J('move_product2.jpg'), J('move_0.jpg'), J('move_product3.jpg'), J('move_brand3.jpg'), J('move_product9.jpg'), J('move_product6.jpg'),
      ] },
    ],
  },
  era: {
    title: 'Jawbone Era', tag: 'fuseproject · Audio',
    hero: J('era_11.jpg'),
    overview: 'A popular bluetooth earpiece.\nPackaging design and prototyping on the Jawbone team at fuseproject.',
    meta: [['Role', 'Industrial Designer'], ['Year', '2014'], ['Studio', 'fuseproject, SF'], ['Output', 'Earpiece · Prototype']],
    images: [J('era_2.jpg'), J('era_brand.jpg')],
  },
  ninjalock: {
    title: 'Ninja Lock 3', tag: 'Borderless · IoT',
    hero: J('nl3_exploded.jpg'),
    overview: 'A smart, connected door lock. Designed and prototyped for client, Linough.',
    meta: [['Role', 'Senior ID'], ['Year', '2019'], ['Studio', 'Borderless, Tokyo'], ['Output', 'Lock · Prototype']],
    images: ['uploads/ninjalock.webm', J('nl3_aligned.jpg')],
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
    overview: 'A portable bluetooth speaker.\nWorked on textures & CMF on the Jawbone team at fuseproject.',
    meta: [['Role', 'Industrial Designer'], ['Year', '2013'], ['Studio', 'fuseproject, SF'], ['Output', 'Prototype']],
    images: [J('jambox_strategy6.jpg'), J('jambox_product5.jpg')],
  },
  mobility: {
    title: 'Personal Mobility', tag: 'Borderless · Concept',
    hero: J('mob_2.jpg'),
    heroVideo: 'uploads/mobilityturntable.webm',
    overview: 'Personal mobility for an undisclosed client. Experience design and rendering.',
    meta: [['Role', 'Senior ID'], ['Year', '2019'], ['Studio', 'Borderless, Tokyo'], ['Output', 'Concept · Renders']],
    images: [J('mob_2.jpg'), J('mob_1.jpg')],
    sections: [
      { t: 'Dashboard Interface', images: ['uploads/mobilityux.webm'] },
    ],
  },
  thync: {
    title: 'Thync', tag: 'Branch · Wearable',
    hero: J('thync_caseopencontext.jpg'),
    overview: 'A brain stimulation device and its charging case, explored across a family of forms and finishes.',
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
    hero: J('camera1.jpg'),
    heroVideo: 'uploads/camera.webm',
    overview: 'Personal and freelance work pre-2011.\n',
    meta: [['Type', 'Personal · Freelance'], ['Years', '2008 — 2011'], ['Projects', '5']],
    sections: [
      { t: '2P Portable Restroom', body: 'Cleaner, faster, and a smaller footprint for events.', slideshow: true,
        images: ['restroom1.jpg', 'restroom2.jpg', 'restroom3.jpg', 'restroom4.jpg', 'restroom5.jpg'].map(J) },
      { t: 'Panasonic GS-1', body: 'Personal project. Micro four-thirds reimagined, not sponsored or official.', slideshow: true,
        images: ['camera1.jpg', 'camera2.jpg', 'camera3.jpg', 'camera4.jpg', 'camera5.jpg', 'camera6.jpg', 'camera7.jpg', 'camera8.jpg'].map(J) },
      { t: 'Epson Eco-Cartridge', body: 'A cardboard-packaged ink cartridge that cuts plastic and landfill waste.', slideshow: true,
        images: ['epson1.jpg', 'epson2.jpg', 'epson3.jpg', 'epson4.jpg'].map(J) },
      { t: 'Strata Steam Iron', body: 'A layer-themed steam iron. A collaboration with Diana Chang.', slideshow: true,
        images: ['strata1.jpg', 'strata2.jpg', 'strata3.jpg', 'strata4.jpg', 'strata5.jpg'].map(J) },
      { t: 'Viscous Lighting', body: 'Client project, freelance. LED sculptural light.', slideshow: true,
        images: ['l_cover.jpg', 'l_exploded.jpg', 'l_renders.jpg', 'l_idea1.jpg', 'l_idea2.jpg', 'l_idea3.jpg', 'l_context1.jpg', 'l_context2.jpg', 'l_context3.jpg', 'l_context4.jpg', 'l_context5.jpg'].map(J) },
    ],
  },
};
const CASE_ORDER = ['crosshelmet', 'mobility', 'motobag', 'ninjalock', 'thync', 'lifesmart', 'jawboneup', 'era', 'jambox', 'independent'];

// resolve a src through the in-memory cache (data URL if one was warmed)
const cimg = (s) => (window.__imgCache && window.__imgCache[s]) || s;
// true for video sources (webm/mp4) so they render as <video>, not <img>
const isVid = (s) => /\.(webm|mp4)(\?|$)/i.test(s || '');

// every image URL a case-study page renders (hero first)
function caseAssets(id) {
  const c = CASES[id] || CASES.crosshelmet;
  const all = [];
  if (c.hero) all.push(c.hero);
  (c.slides || []).forEach(s => s.img && all.push(s.img));
  (c.compare || []).forEach(p => { p.a && all.push(p.a); p.b && all.push(p.b); });
  (c.images || []).forEach(s => all.push(s));
  (c.sections || []).forEach(sec => (sec.images || []).forEach(s => all.push(s)));
  return { hero: c.hero, heroVideo: c.heroVideo, all: Array.from(new Set(all)).filter(u => !isVid(u)) };
}

/* A case media block: renders a looping video for .webm/.mp4 sources,
   otherwise a lazy <img>. Shared by the image stack and sections. */
function CaseMedia({ src, alt, radius = 'var(--radius-xl)', style }) {
  const common = { width: '100%', display: 'block', borderRadius: radius, boxShadow: 'var(--shadow-sm)', ...style };
  return isVid(src)
    ? <video src={window.videoSrc ? window.videoSrc(src) : src} poster={(window.__videoPosters || {})[src]} autoPlay loop muted playsInline preload="auto" style={common}></video>
    : <img src={cimg(src)} alt={alt} loading="lazy" style={common} />;
}

/* Slideshow: one image at a time with prev/next arrows and dot nav.
   Used for each sub-project in a sectioned case (e.g. Independent). */
const slideNavBtn = (side) => ({
  position: 'absolute', top: '50%', [side]: 12, transform: 'translateY(-50%)',
  width: 44, height: 44, borderRadius: 999, border: 0, cursor: 'pointer', zIndex: 2,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(11,13,19,.5)', color: '#fff',
  WebkitBackdropFilter: 'blur(6px)', backdropFilter: 'blur(6px)',
});
function Slideshow({ images, label }) {
  const [i, setI] = React.useState(0);
  const n = images.length;
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [i]);
  if (!n) return null;
  const step = (d) => setI((p) => (p + d + n) % n);
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', background: 'var(--slate-100)' }}>
        <CaseMedia src={images[i]} alt={(label || 'slide') + ' ' + (i + 1)} radius="0" style={{ boxShadow: 'none' }} />
        {n > 1 && (
          <React.Fragment>
            <button onClick={() => step(-1)} aria-label="Previous" style={slideNavBtn('left')}><i data-lucide="arrow-left"></i></button>
            <button onClick={() => step(1)} aria-label="Next" style={slideNavBtn('right')}><i data-lucide="arrow-right"></i></button>
            <span style={{ position: 'absolute', right: 14, bottom: 12, zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', color: '#fff', background: 'rgba(11,13,19,.5)', padding: '4px 9px', borderRadius: 999, WebkitBackdropFilter: 'blur(6px)', backdropFilter: 'blur(6px)' }}>{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
          </React.Fragment>
        )}
      </div>
      {n > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          {images.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={'Go to ' + (k + 1)} style={{ width: k === i ? 22 : 8, height: 8, borderRadius: 999, border: 0, padding: 0, cursor: 'pointer', background: k === i ? 'var(--accent)' : 'var(--slate-300)', transition: 'width 200ms var(--ease-out), background 200ms' }}></button>
          ))}
        </div>
      )}
    </div>
  );
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
        <div style={{ position: 'relative', ...(c.heroVideo ? {} : { height: 'min(56vh, 460px)' }), borderRadius: 'var(--radius-2xl)', overflow: 'hidden', background: 'var(--slate-100)' }}>
          {c.heroVideo
            ? <video src={window.videoSrc ? window.videoSrc(c.heroVideo) : c.heroVideo} poster={(window.__videoPosters || {})[c.heroVideo]} autoPlay loop muted playsInline preload="auto" onLoadedMetadata={(e) => { const v = e.target; if (/jawboneup\.webm/i.test(c.heroVideo || '') && isFinite(v.duration) && v.currentTime < 0.05) { try { v.currentTime = v.duration * 0.1; } catch (_) {} } }} style={{ display: 'block', width: '100%', height: 'auto' }}></video>
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
            <p style={{ fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.45, letterSpacing: '-0.01em', marginTop: 16, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 500, whiteSpace: 'pre-line' }}>
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

      {/* the work — one section per image, titled by the image name */}
      {c.slides && c.slides.map((s, i) => (
        <section key={i} style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter) var(--space-8)' }}>
          <Reveal>
            <Eyebrow>{s.t}</Eyebrow>
            <img src={cimg(s.img)} alt={s.t} loading="lazy" style={{ width: '100%', display: 'block', marginTop: 16, borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }} />
          </Reveal>
        </section>
      ))}

      {/* image stack (gallery cases) */}
      {c.images && (
        <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter) var(--space-10)' }}>
          <Eyebrow>The work</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 16 }}>
            {c.images.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 60}>
                <CaseMedia src={src} alt={c.title + ' ' + (i + 1)} />
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
          {sec.slideshow ? (
            <Slideshow images={sec.images} label={sec.t} />
          ) : sec.cols === 2 ? (
            <div style={{ columnCount: 2, columnGap: 'var(--space-4)', marginTop: 16 }}>
              {sec.images.map((src, i) => (
                <img key={src} src={cimg(src)} alt={sec.t + ' ' + (i + 1)} loading="lazy" style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginBottom: 'var(--space-4)', breakInside: 'avoid' }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 16 }}>
              {sec.images.map((src, i) => (
                <CaseMedia key={src} src={src} alt={sec.t + ' ' + (i + 1)} />
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
