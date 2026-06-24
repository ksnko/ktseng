/* ============================================================
   Gallery — real photography from ktseng.com.
   Filters: all · film · digital. 3 layout variations (tweakable):
   masonry (natural ratios) · uniform (square crop) · justified.
   Lightbox shows the full frame.
   ============================================================ */

const G_IMG = 'images/moments/';
const SHOTS = [
  { id: 1, src: G_IMG + 'DSC00174b-scaled.jpg', cat: 'digital' },
  { id: 2, src: G_IMG + '00010022b-scaled.jpg', cat: 'film' },
  { id: 3, src: G_IMG + '00010006b-scaled.jpg', cat: 'film' },
  { id: 4, src: G_IMG + '00010001b-scaled.jpg', cat: 'film' },
  { id: 5, src: G_IMG + 'DSC09513b-scaled.jpg', cat: 'digital' },
  { id: 6, src: G_IMG + 'DSC05971s2.jpg', cat: 'digital' },
];

const FILTERS = [
  { id: 'all', label: 'All', count: SHOTS.length },
  { id: 'film', label: 'Film' },
  { id: 'digital', label: 'Digital' },
];

function Lightbox({ shot, onClose, onNav, list }) {
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onNav(1); if (e.key === 'ArrowLeft') onNav(-1); };
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
  }, [shot]);
  if (!shot) return null;
  const pos = list.findIndex(s => s.id === shot.id);
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(11,13,19,.92)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px' }} onClick={e => e.stopPropagation()}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,.6)' }}>
          {String(pos + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')} · {shot.cat}
        </span>
        <IconButton aria-label="Close" variant="ghost" onClick={onClose} style={{ color: '#fff' }}><i data-lucide="x"></i></IconButton>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '0 16px 24px', minHeight: 0 }} onClick={e => e.stopPropagation()}>
        <IconButton aria-label="Previous" variant="outline" onClick={() => onNav(-1)} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', flexShrink: 0 }}><i data-lucide="arrow-left"></i></IconButton>
        <img src={shot.src} alt={'photograph ' + shot.id} style={{ maxWidth: 'min(78vw, 1100px)', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)' }} />
        <IconButton aria-label="Next" variant="outline" onClick={() => onNav(1)} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', flexShrink: 0 }}><i data-lucide="arrow-right"></i></IconButton>
      </div>
    </div>
  );
}

function GalleryTile({ s, onClick, style, imgStyle, onAr }) {
  return (
    <div onClick={onClick} className="gal-tile" style={{ cursor: 'pointer', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', background: 'var(--slate-100)', ...style }}>
      <img src={s.src} alt={'photograph ' + s.id} loading="eager" decoding="sync"
        onLoad={onAr ? (e) => onAr(s.id, e.target.naturalWidth / e.target.naturalHeight) : undefined}
        style={{ width: '100%', display: 'block', ...imgStyle }} />
      <span style={{ position: 'absolute', top: 10, left: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', color: 'rgba(255,255,255,.85)', textShadow: '0 1px 8px rgba(11,13,19,.5)' }}>{String(s.id).padStart(2, '0')}</span>
    </div>
  );
}

/* Justified rows: pack shots into rows, each tile flex-grows by aspect ratio. */
function justifyRows(list, ars, targetW = 1180, rowH = 300, gap = 12) {
  const rows = [];
  let row = [], wsum = 0;
  list.forEach(s => {
    const ar = ars[s.id] || 1.5;
    row.push(s); wsum += ar * rowH;
    if (wsum + gap * (row.length - 1) >= targetW) { rows.push(row); row = []; wsum = 0; }
  });
  if (row.length) rows.push(row);
  return rows;
}

function GalleryScreen({ layout = 'masonry' }) {
  const [filter, setFilter] = React.useState('all');
  const [openId, setOpenId] = React.useState(null);
  const [ars, setArs] = React.useState({});
  const onAr = React.useCallback((id, ar) => setArs(prev => prev[id] ? prev : { ...prev, [id]: ar }), []);
  const list = SHOTS.filter(s => filter === 'all' || s.cat === filter);
  const open = SHOTS.find(s => s.id === openId);
  const nav = (d) => {
    const idx = list.findIndex(s => s.id === openId);
    const next = list[(idx + d + list.length) % list.length];
    if (next) setOpenId(next.id);
  };

  let grid;
  if (layout === 'uniform') {
    grid = (
      <div className="gal-uniform" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)' }}>
        {list.map(s => <GalleryTile key={s.id} s={s} onClick={() => setOpenId(s.id)} style={{ aspectRatio: '1/1' }} imgStyle={{ height: '100%', objectFit: 'cover' }} onAr={onAr} />)}
      </div>
    );
  } else if (layout === 'justified') {
    const rows = justifyRows(list, ars);
    grid = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {rows.map((row, ri) => (
          <div key={ri} className="gal-justrow" style={{ display: 'flex', gap: 'var(--space-3)', height: 300 }}>
            {row.map(s => <GalleryTile key={s.id} s={s} onClick={() => setOpenId(s.id)} style={{ flex: `${ars[s.id] || 1.5} 1 0`, height: '100%' }} imgStyle={{ height: '100%', objectFit: 'cover' }} onAr={onAr} />)}
          </div>
        ))}
      </div>
    );
  } else { // masonry — CSS columns, natural ratios
    grid = (
      <div className="gal-masonry" style={{ columnCount: 3, columnGap: 'var(--space-3)' }}>
        {list.map(s => (
          <div key={s.id} style={{ breakInside: 'avoid', marginBottom: 'var(--space-3)' }}>
            <GalleryTile s={s} onClick={() => setOpenId(s.id)} onAr={onAr} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <section style={{ padding: 'clamp(20px,3vw,40px) var(--gutter) var(--space-7)', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <Reveal><Eyebrow>Moments · film & photography</Eyebrow></Reveal>
        <Reveal delay={60}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginTop: 12 }}>
            <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '-0.03em', maxWidth: 640 }}>
              Moments<span style={{ color: 'var(--pop)' }}>.</span>
            </h1>
            <Tabs value={filter} onChange={setFilter} items={FILTERS} variant="pill" />
          </div>
        </Reveal>
      </section>
      <section style={{ padding: '0 var(--gutter) var(--space-8)', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <Reveal>
          <Eyebrow>Film</Eyebrow>
          <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: 'var(--slate-950)', marginTop: 12 }}>
            <iframe src="https://player.vimeo.com/video/241553532?dnt=1" title="film by kevin tseng" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}></iframe>
          </div>
        </Reveal>
      </section>
      <section style={{ padding: '0 var(--gutter) var(--space-12)', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <Reveal>{grid}</Reveal>
      </section>
      <Lightbox shot={open} onClose={() => setOpenId(null)} onNav={nav} list={list} />
    </div>
  );
}

Object.assign(window, { GalleryScreen, SHOTS });
