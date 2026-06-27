/* ============================================================
   Apps — showcase of small apps designed & built with AI.
   ============================================================ */

const APPS = [
  { id: 'tokyo3d', name: 'Soar', mood: 'cool', tagline: 'Explore the world, name the city',
    desc: 'Fly anywhere on Earth in photoreal 3D, then play: a trivia game drops you into a skyline and asks you to name the city from its architecture and street layout alone.',
    stack: ['WebGL', '3D Tiles'], type: 'Web', status: 'Live', featured: true, url: 'https://kxae.com', detail: true, video: 'images/apps_vid.webm' },
  { id: 'crowdsensus', name: 'Crowdsensus', mood: 'sky', banner: 'images/crowdsensus.png', tagline: 'Fact-check against the crowd',
    desc: 'An extension that fact-checks the news you’re reading against live market odds — wisdom of the crowd, right in the margin.',
    stack: ['Chrome', 'Polymarket'], type: 'Chrome extension', status: 'Live', detail: true },
  { id: 'superintelligence', name: 'The Rise of Superintelligence', mood: 'dusk', banner: 'images/cover.webm', tagline: 'Book one of the Freedom Series',
    desc: 'Cover, graphics, and interior layout for Jad Tarifi’s book on freedom and human agency in the age of AGI.',
    stack: ['Layout', 'Graphics'], type: 'Book', status: 'Live', detail: true },
  { id: 'flagsatlas', name: 'Flags of Freedom Atlas', mood: 'dusk', banner: 'images/flagsatlas.webm', tagline: 'Read the world in its flags',
    desc: 'An interactive experience that reframes national flags as shared symbols of freedom — you reflect on a flag, and AI weaves your voice into a global conversation.',
    stack: ['Next', 'D3'], type: 'Web', status: 'Live', detail: true, url: 'https://www.freedomseries.ai/atlas' },
];

function StatusBadge({ status }) {
  const map = { Live: ['success', true], Beta: ['warning', false], Archived: ['default', false] };
  const [v, dot] = map[status] || ['default', false];
  return <Badge variant={v} dot={dot}>{status}</Badge>;
}

function prepareApp(id) {
  const a = window.appAssets ? window.appAssets(id) : null;
  if (!a) return Promise.resolve();
  if (a.all && a.all.length) {
    const rest = a.all.filter(u => u !== a.hero);
    if (rest.length) window.warmImages(rest, true);
  }
  // a video hero (Soar): make sure its in-memory Blob URL is ready before we
  // navigate, so the detail <video> loads instantly from memory (no stall).
  // The splash usually pre-warms it; cap the wait so we never hang.
  const jobs = [];
  if (a.hero) jobs.push(window.warmImages([a.hero], true));
  if (a.video && window.warmVideoBlob) {
    jobs.push(Promise.race([
      window.warmVideoBlob(a.video),
      new Promise(res => setTimeout(res, 1500)),
    ]));
  }
  return jobs.length ? Promise.all(jobs) : Promise.resolve();
}

// open an app tile with the shared tile→page transition (clones the whole
// tile, scans, then magnifies into the detail page)
function openApp(e, app, go) {
  const card = (e.currentTarget && e.currentTarget.closest) ? (e.currentTarget.closest('.kt-card') || e.currentTarget) : e.currentTarget;
  if (app.detail) {
    window.tileTransition({ currentTarget: card }, { prepare: () => prepareApp(app.id), navigate: () => go('app', app.id) });
  } else if (app.url) {
    window.open(app.url, '_blank', 'noopener');
  }
}

function FeaturedApp({ app, go }) {
  return (
    <Card variant="flat" onClick={(e) => openApp(e, app, go)} style={{ overflow: 'hidden', cursor: (app.detail || app.url) ? 'pointer' : 'default' }}>
      <div className="featured-app" style={{ position: 'relative', minHeight: 440, margin: 'calc(-1 * var(--space-5))' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Photo mood={app.mood} style={{ position: 'absolute', inset: 0 }}>
            {app.video && (
              <video src={app.video} poster={(window.__videoPosters || {})[app.video]} autoPlay loop muted playsInline preload="auto"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}></video>
            )}
            <span style={{
              position: 'absolute', right: 14, bottom: 12, fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '.04em', color: 'rgba(255,255,255,.92)',
              background: 'rgba(11,13,19,.34)', backdropFilter: 'blur(6px)',
              padding: '4px 10px', borderRadius: 'var(--radius-full)',
            }}>{app.tagline}</span>
          </Photo>
        </div>
        <div style={{
          position: 'relative', maxWidth: 480, margin: 'var(--space-6)',
          padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)',
          background: 'rgba(255,255,255,.5)', backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Eyebrow>Featured app</Eyebrow>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', color: 'var(--text-muted)' }}>· {app.type}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px,3.6vw,46px)', letterSpacing: '-0.03em', marginTop: 16 }}>{app.name}</h2>
          <p style={{ fontSize: 18, color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.55, maxWidth: 420 }}>{app.desc}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
            <Button variant="primary" iconRight={<i data-lucide="arrow-right"></i>}
                    onClick={(e) => { e.stopPropagation(); openApp(e, app, go); }}>View app</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function AppTile({ app, go }) {
  const open = (app.detail || app.url) ? (e) => openApp(e, app, go) : undefined;
  return (
    <Card interactive onClick={open} style={{ height: '100%', cursor: open ? 'pointer' : 'default' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {app.banner
        ? <div style={{ width: 'calc(100% + 2 * var(--space-5))', margin: 'calc(-1 * var(--space-5)) calc(-1 * var(--space-5)) 0', aspectRatio: '5 / 1', overflow: 'hidden', background: 'var(--surface-sunken, rgba(15,23,42,.05))' }}>
            {/\.webm$|\.mp4$/.test(app.banner)
              ? <video className="labo-media" src={app.banner} poster={(window.__videoPosters || {})[app.banner]} autoPlay loop muted playsInline preload="auto"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}></video>
              : <img className="labo-media" src={(window.__imgCache||{})[app.banner] || app.banner} alt="" loading="eager" decoding="sync" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
          </div>
        : app.placeholder
        ? <div style={{ width: 'calc(100% + 2 * var(--space-5))', margin: 'calc(-1 * var(--space-5)) calc(-1 * var(--space-5)) 0', aspectRatio: '5 / 1', overflow: 'hidden', position: 'relative' }}>
            <Photo className="labo-media" mood={app.mood} style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.92)' }}>
              <i data-lucide={app.icon || 'image'} style={{ width: 26, height: 26 }}></i>
            </div>
            <span style={{ position: 'absolute', right: 12, bottom: 10, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.04em', color: 'rgba(255,255,255,.85)', background: 'rgba(11,13,19,.34)', backdropFilter: 'blur(6px)', padding: '3px 8px', borderRadius: 'var(--radius-full)' }}>cover coming soon</span>
          </div>
        : <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-sunken, rgba(15,23,42,.05))', color: 'var(--text-primary)' }}>
              {app.icon
                ? <i data-lucide={app.icon} style={{ width: 22, height: 22 }}></i>
                : <Photo mood={app.mood} />}
            </div>
          </div>}
      <h3 style={{ fontSize: 21, letterSpacing: '-0.02em', marginTop: 16 }}>{app.name}</h3>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{app.tagline}</div>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14.5, lineHeight: 1.55, marginTop: 10 }}>{app.desc}</p>
      <div style={{ display: 'flex', gap: 7, marginTop: 'auto', paddingTop: 16, flexWrap: 'wrap' }}>
        <Tag>{app.type}</Tag>
      </div>
      </div>
    </Card>
  );
}

function AppsScreen({ go }) {
  const featured = APPS.find(a => a.featured);
  const rest = APPS.filter(a => !a.featured);
  return (
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(20px,3vw,40px) var(--gutter) var(--space-12)' }}>
      <Reveal><Eyebrow>AI Labo · made with AI</Eyebrow></Reveal>
      <Reveal delay={60}>
        <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '-0.03em', marginTop: 12, maxWidth: 760 }}>
          At the intersection of AI, design, and interactivity<span style={{ color: 'var(--pop)' }}>.</span>
        </h1>
      </Reveal>
      <Reveal delay={120}>
        <p style={{ fontSize: 18, color: 'var(--text-secondary)', marginTop: 18, maxWidth: 560, lineHeight: 1.6 }}>
          A collection of apps and ongoing experiments. Built in conjunction with AI.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div style={{ marginTop: 'var(--space-9)' }}>
          <FeaturedApp app={featured} go={go} />
        </div>
      </Reveal>
      <div className="apps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
        <style>{`.apps-grid .kt-reveal { display: flex; } .apps-grid .kt-card { display: flex; flex-direction: column; flex: 1; } .apps-grid .kt-card > .kt-card__body { flex: 1 1 auto; }`}</style>
        {rest.map((a, i) => <Reveal key={a.id} delay={(i % 3) * 60}><AppTile app={a} go={go} /></Reveal>)}
      </div>
    </div>
  );
}

Object.assign(window, { AppsScreen, APPS });
