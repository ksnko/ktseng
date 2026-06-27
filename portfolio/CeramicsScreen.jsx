/* ============================================================
   Ceramics — a sub-page of Moments. One continuous page,
   no categories. Order follows the file naming. Stills open
   in a lightbox; process clips (.webm) loop inline.
   ============================================================ */

const CER_IMG = 'images/ceramics/';
const CERAMICS = [
  CER_IMG + 'clean1.jpg',
  CER_IMG + 'clean2.jpg',
  CER_IMG + 'crack1.jpg',
  CER_IMG + 'crack2.jpg',
  CER_IMG + 'crack3.jpg',
  CER_IMG + 'crack4.jpg',
  CER_IMG + 'etch1.jpg',
  CER_IMG + 'granite1.jpg',
  CER_IMG + 'hanaetch1.webm',
  CER_IMG + 'hanaetch2.webm',
  CER_IMG + 'paths1.jpg',
  CER_IMG + 'paths2.jpg',
  CER_IMG + 'relic1.jpg',
  CER_IMG + 'round1.jpg',
  CER_IMG + 'round2.jpg',
  CER_IMG + 'treeetch.webm',
  CER_IMG + 'virus1.jpg',
];
const cerIsVid = (s) => /\.(webm|mp4)(\?|$)/i.test(s || '');
const cerImg = (s) => (window.__imgCache && window.__imgCache[s]) || s;

function CeramicTile({ src, onOpen }) {
  const [hover, setHover] = React.useState(false);
  const vid = cerIsVid(src);
  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: 'zoom-in', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', background: 'var(--slate-100)', boxShadow: 'var(--shadow-sm)', border: 'var(--inset-hairline)' }}>
      {vid ? (
        <video src={window.videoSrc ? window.videoSrc(src) : src} autoPlay loop muted playsInline preload="auto"
          style={{ width: '100%', display: 'block' }}></video>
      ) : (
        <img src={cerImg(src)} alt="ceramic work" loading="lazy" decoding="async"
          style={{ width: '100%', display: 'block', transform: hover ? 'scale(1.04)' : 'none', transition: 'transform 500ms var(--ease-out)' }} />
      )}
    </div>
  );
}

function CeramicLightbox({ src, onClose, onNav }) {
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onNav(1); if (e.key === 'ArrowLeft') onNav(-1); };
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
  }, [src]);
  React.useEffect(() => { if (src && window.lucide) window.lucide.createIcons(); }, [src]);
  if (!src) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(11,13,19,.92)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '18px 24px' }} onClick={e => e.stopPropagation()}>
        <IconButton aria-label="Close" variant="ghost" onClick={onClose} style={{ color: '#fff' }}><i data-lucide="x"></i></IconButton>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '0 16px 24px', minHeight: 0 }} onClick={e => e.stopPropagation()}>
        <IconButton aria-label="Previous" variant="outline" onClick={() => onNav(-1)} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', flexShrink: 0 }}><i data-lucide="arrow-left"></i></IconButton>
        {cerIsVid(src)
          ? <video src={window.videoSrc ? window.videoSrc(src) : src} autoPlay loop muted playsInline controls style={{ maxWidth: 'min(82vw, 1000px)', maxHeight: '80vh', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', background: '#000' }}></video>
          : <img src={cerImg(src)} alt="ceramic work" style={{ maxWidth: 'min(82vw, 1000px)', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)' }} />}
        <IconButton aria-label="Next" variant="outline" onClick={() => onNav(1)} style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', flexShrink: 0 }}><i data-lucide="arrow-right"></i></IconButton>
      </div>
    </div>
  );
}

function CeramicsScreen({ go }) {
  const [openIdx, setOpenIdx] = React.useState(null);
  const open = openIdx != null ? CERAMICS[openIdx] : null;
  const nav = (d) => setOpenIdx((i) => (i + d + CERAMICS.length) % CERAMICS.length);
  const openSrc = (src) => setOpenIdx(CERAMICS.indexOf(src));

  return (
    <div>
      <section style={{ padding: 'clamp(20px,3vw,40px) var(--gutter) var(--space-7)', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <button onClick={() => go('work')} style={{ background: 'none', border: 0, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
          <i data-lucide="arrow-left"></i> back to work
        </button>
        <Reveal><Eyebrow>Work · Ceramics</Eyebrow></Reveal>
        <Reveal delay={60}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginTop: 12 }}>
            <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '-0.03em' }}>
              Ceramics<span style={{ color: 'var(--pop)' }}>.</span>
            </h1>
          </div>
        </Reveal>
      </section>

      <section style={{ padding: '0 var(--gutter) var(--space-12)', maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <Reveal>
          <div className="cer-masonry" style={{ columnCount: 3, columnGap: 'var(--space-4)' }}>
            {CERAMICS.map((src) => (
              <div key={src} style={{ breakInside: 'avoid', marginBottom: 'var(--space-4)' }}>
                <CeramicTile src={src} onOpen={() => openSrc(src)} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CeramicLightbox src={open} onClose={() => setOpenIdx(null)} onNav={nav} />

      <style>{`
        @media (max-width: 900px) { .cer-masonry { column-count: 2 !important; } }
        @media (max-width: 560px) { .cer-masonry { column-count: 1 !important; } }
      `}</style>
    </div>
  );
}

Object.assign(window, { CeramicsScreen, CERAMICS });
