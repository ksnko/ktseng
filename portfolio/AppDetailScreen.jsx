/* ============================================================
   App detail — a page per app. Currently: Tokyo 3D (kxae.com).
   ============================================================ */

const APP_DETAILS = {
  tokyo3d: {
    name: 'Soar',
    url: 'https://kxae.com',
    eyebrow: 'App · kxae.com',
    status: 'Live',
    meta: 'v12.54 · drops you anywhere on Earth · runs in the browser',
    intro: 'Explore the whole planet in 3D, right in the browser. Challenge yourself as Soar drops you into an unmarked skyline and challenges you to name the city from its architecture and street grid alone.',
    body: [
      'Every city is rendered as 3D tiles right in your browser. Move through it like from a bird’s eye view, see your city from a new perspective.',
      'In quiz mode, Soar drops you somewhere on Earth and starts the clock: read the rooflines, the block sizes, the way the streets bend, and guess where you are. Name the city from its layout alone.',
    ],
    stack: ['WebGL', '3D Tiles'],
    launch: 'Launch Soar',
    hero: { mood: 'cool', video: 'images/apps_vid.webm', caption: 'explore · then name the city' },
    aside: {
      title: 'Controls',
      type: 'controls',
      items: [
        ['Mouse', 'Look around'],
        ['Left-click', 'Fly forward'],
        ['Space', 'Brake'],
        ['Right-click', 'X-ray view'],
        ['1', 'Hide UI & compass'],
        ['2', 'Building names'],
        ['3', 'POI labels'],
        ['`', 'Fisheye warp'],
        ['M', 'Open in Google Maps'],
        ['F', 'Fullscreen'],
        ['F1', 'Menu / pause'],
        ['Esc', 'Release pointer'],
      ],
    },
  },
  flagsatlas: {
    name: 'Flags of Freedom Atlas',
    url: 'https://www.freedomseries.ai/atlas',
    eyebrow: 'App · freedomseries.ai',
    status: 'Live',
    intro: 'A flag is the most compressed story a nation tells about itself. The Atlas turns that story into a living conversation, where reflecting on one country’s flag adds your voice to how the world sees it.',
    quote: { text: 'Flags are supposed to divide us. But when you read them as archetypes, they do the opposite: they reveal that beneath our differences, we are all aiming toward Freedom.', author: 'Jad Tarifi, Flags of Freedom' },
    article: 'https://www.freedomseries.ai/flags',
    body: [
      <>Built alongside Jad Tarifi’s <a href="https://www.freedomseries.ai/flags" target="_blank" rel="noopener" style={{ color: 'var(--pop)', textUnderlineOffset: 3 }}>Flags of Freedom</a> essay, the Atlas invites people from everywhere to sit with the design language of the world’s flags — the meaning packed into a crescent, a star, a band of color, a particular blue.</>,
      'As you move from country to country, AI listens to what people feel and summarizes the global sentiment flowing between nations — turning thousands of individual reflections into a readable picture of how one place regards another.',
    ],
    stack: ['Next', 'D3'],
    launch: 'Open the Atlas',
    hero: { mood: 'dusk', image: 'images/flagsatlas.png', caption: 'reflect · then read the world’s reply' },
    aside: {
      title: 'How it works',
      type: 'list',
      items: [
        ['Reflect', 'You are shown a random flag. What feelings does it evoke?'],
        ['Contribute', 'Your reflection joins thousands of others from around the world.'],
        ['Synthesize', 'AI distills the collective sentiment between any two nations.'],
        ['Explore', 'Trace how the world reads each flag; country by country.'],
      ],
    },
  },
  crowdsensus: {
    name: 'Crowdsensus',
    url: 'https://github.com/mewmewmewmewmewmewmewmewmewmewmew/marketlens',
    eyebrow: 'Chrome extension · Polymarket',
    status: 'Live',
    intro: 'Crowdsensus reads the news article you’re on and checks every claim against what prediction markets actually believe. In one click, scan the entire page and highlight each claim green or red: does the crowd’s money agree, or not?',
    body: [
      'Open Crowdsensus on any open article and it pulls out the claims a market could bet on; the elections, rate cuts, prices, deadlines, sports sentiments. Each one is matched to a live Polymarket question and underlined in place: green where the crowd agrees, red where it doesn’t.',
      'Click a highlight for the detail: the market question, current odds, a price-history chart to see historical sentiment, trading volume, and a one-line read on why the claim and the crowd line up or part ways. Selectively highlight any sentence on any page to search markets on the spot.',
    ],
    stack: ['Chrome MV3', 'Gemini', 'Polymarket'],
    launch: 'Coming to the Chrome Web Store',
    launchDisabled: true,
    hero: { mood: 'sky', image: 'images/crowdsensus3-86a5ea93.png', aspect: '2922 / 1844', fit: 'cover', caption: 'highlight · then see the crowd' },
    aside: {
      title: 'How it works',
      type: 'list',
      items: [
        ['Read', 'It extracts the article text right in the page. No copy and paste.'],
        ['Match', 'AI finds the closest Polymarket market by meaning.'],
        ['Score', 'Agreement is weighted by how far the crowd’s odds sit from a 50 / 50 toss-up.'],
        ['Surface', 'Claims are highlighted inline; a panel ranks them and links out to Polymarket.'],
      ],
    },
  },
  superintelligence: {
    name: 'The Rise of Superintelligence',
    eyebrow: 'Book · Freedom Series',
    status: 'Live',
    intro: 'Book one of Jad Tarifi’s Freedom Series: a guidebook for human agency in the age of AGI. I worked on the visual design: the cover, the interior layout, and the graphics.',
    body: [
      'The Freedom Series reframes freedom not as the absence of constraints but as a state of infinite agency, charting how humanity might cross into superintelligence without losing itself. The Rise of Superintelligence opens that series, mapping the philosophical, economic, and societal shifts AGI sets in motion.',
      'Heavy ideas need a calm container. I designed the book to read like a field guide, not a manifesto: a clear typographic system, generous margins, and a language of diagrams that turns abstractions like the Alignment Economy into something you can see. The cover and chapter openers tie the whole series together.',
    ],
    stack: ['Cover', 'Layout', 'Graphics'],
    actions: [
      { label: 'Buy on Amazon', url: 'https://freedomseries.ai/riseofsi', variant: 'primary' },
      { label: 'Read online', url: 'https://www.freedomseries.ai/theriseofsuperintelligence', variant: 'secondary' },
    ],
    hero: { mood: 'dusk', image: 'images/bookdisplay.png', aspect: '1200 / 800', fit: 'cover', caption: 'a guidebook for human emancipation in the age of AGI' },
    book3d: true,
    aside: {
      title: 'The work',
      type: 'list',
      items: [
        ['Cover', 'Art direction and design for book one of the series.'],
        ['Interior layout', 'Typographic system, grid, and section images across ~300 pages.'],
        ['Graphics', 'Diagrams and illustrations that visualize the book’s core ideas.'],
        ['Series system', 'A visual language built to carry across all four volumes.'],
      ],
    },
  },
};

function ControlRow({ k, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
      <kbd style={{
        fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-primary)',
        background: 'var(--slate-100)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
        padding: '3px 9px', minWidth: 64, textAlign: 'center', flexShrink: 0,
      }}>{k}</kbd>
      <span style={{ fontSize: 14.5, color: 'var(--text-secondary)' }}>{action}</span>
    </div>
  );
}

function ListRow({ k, action }) {
  return (
    <div style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-primary)' }}>{k}</div>
      <div style={{ fontSize: 14.5, color: 'var(--text-secondary)', marginTop: 3, lineHeight: 1.5 }}>{action}</div>
    </div>
  );
}

function AppDetailScreen({ go, id = 'tokyo3d' }) {
  const a = APP_DETAILS[id];
  // The hero video is decorative (muted autoplay loop). Keep a persistent
  // enforcer that starts it as soon as it has data and resumes it if anything
  // pauses it — autoplay alone was leaving it loaded-but-paused on arrival.
  const heroVideoRef = React.useRef(null);
  React.useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => { if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } };
    tryPlay();
    v.addEventListener('canplay', tryPlay);
    v.addEventListener('loadeddata', tryPlay);
    v.addEventListener('pause', tryPlay);
    const iv = setInterval(tryPlay, 400);
    return () => { clearInterval(iv); v.removeEventListener('canplay', tryPlay); v.removeEventListener('loadeddata', tryPlay); v.removeEventListener('pause', tryPlay); };
  }, [id]);
  if (!a) return null;
  const open = () => window.open(a.url, '_blank', 'noopener');
  return (
    <div data-screen-label={'app · ' + a.name} style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(20px,3vw,40px) var(--gutter) var(--space-12)' }}>
      <Reveal>
        <button onClick={() => go('apps')} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', padding: 0,
        }}><i data-lucide="arrow-left" style={{ width: 14 }}></i> ai labo</button>
      </Reveal>

      <Reveal delay={40}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 26 }}>
          <Eyebrow>{a.eyebrow}</Eyebrow>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 style={{ fontSize: 'clamp(38px,5.5vw,64px)', letterSpacing: '-0.03em', marginTop: 14 }}>
          {a.name}<span style={{ color: 'var(--pop)' }}>.</span>
        </h1>
      </Reveal>
      <Reveal delay={120}>
        <p style={{ fontSize: 19, color: 'var(--text-secondary)', marginTop: 16, maxWidth: 620, lineHeight: 1.6 }}>{a.intro}</p>
      </Reveal>
      {a.quote && (
        <Reveal delay={150}>
          <blockquote style={{
            margin: '26px 0 0', maxWidth: 640, paddingLeft: 22,
            borderLeft: '2px solid var(--pop)',
          }}>
            <p style={{ fontSize: 23, lineHeight: 1.5, letterSpacing: '-0.01em', color: 'var(--text-primary)', fontStyle: 'italic' }}>“{a.quote.text}”</p>
            <cite style={{ display: 'block', marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, fontStyle: 'normal', color: 'var(--text-muted)', letterSpacing: '.04em' }}>— {a.article ? <a href={a.article} target="_blank" rel="noopener" style={{ color: 'inherit', textUnderlineOffset: 3 }}>{a.quote.author}</a> : a.quote.author}</cite>
          </blockquote>
        </Reveal>
      )}
      <Reveal delay={180}>
        <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
          {a.actions
            ? a.actions.map((act) => (
                <Button key={act.label} variant={act.variant || 'secondary'} iconRight={<i data-lucide="arrow-up-right"></i>}
                        onClick={() => window.open(act.url, '_blank', 'noopener')}>{act.label}</Button>
              ))
            : a.launchDisabled
            ? <button disabled className="kt-btn" style={{ background: 'var(--surface-sunken, rgba(15,23,42,.06))', color: 'var(--text-muted)', border: '1px solid var(--border)', cursor: 'not-allowed', display: 'inline-flex', alignItems: 'center', gap: 8 }}>{a.launch}<i data-lucide="clock" style={{ width: 16, height: 16 }}></i></button>
            : <Button variant="primary" iconRight={<i data-lucide="arrow-up-right"></i>} onClick={open}>{a.launch}</Button>}
        </div>
      </Reveal>

      <Reveal delay={220}>
        <div style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)', marginTop: 'var(--space-9)' }}>
          <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)' }}>
            <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', height: a.hero.tall ? 'min(78vh, 680px)' : (a.hero.image ? 'auto' : 'min(62vh, 560px)'), aspectRatio: a.hero.aspect ? a.hero.aspect : ((a.hero.image && !a.hero.tall) ? '3104 / 1834' : undefined), position: 'relative' }}>
              <Photo mood={a.hero.mood} style={{ position: 'absolute', inset: 0 }}>
                {a.hero.video && (
                  <video ref={heroVideoRef} src={(window.__videoBlobs && window.__videoBlobs[a.hero.video]) || a.hero.video} poster={(window.__videoPosters || {})[a.hero.video]} autoPlay loop muted playsInline preload="auto"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}></video>
                )}
                {a.hero.image && (
                  <img src={(window.__imgCache && window.__imgCache[a.hero.image]) || a.hero.image} alt=""
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: a.hero.fit || 'contain', objectPosition: 'center', padding: a.hero.tall ? 'clamp(16px,3vw,40px)' : 0 }} />
                )}
                <span style={{
                  position: 'absolute', left: 14, bottom: 12, fontFamily: 'var(--font-mono)',
                  fontSize: 11, letterSpacing: '.04em', color: 'rgba(255,255,255,.92)',
                  background: 'rgba(11,13,19,.34)', backdropFilter: 'blur(6px)',
                  padding: '4px 10px', borderRadius: 'var(--radius-full)',
                }}>{a.hero.caption}</span>
              </Photo>
            </div>
          </div>
        </div>
      </Reveal>

      {a.book3d ? (
        <div className="book-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 'var(--space-10)', marginTop: 'var(--space-9)', alignItems: 'center' }}>
          <Reveal>
            <div>
              <Eyebrow>What it is</Eyebrow>
              {a.body.map((p, i) => (
                <p key={i} style={{ fontSize: 16.5, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: i === 0 ? 16 : 14, textWrap: 'pretty' }}>{p}</p>
              ))}
              <div style={{ marginTop: 'var(--space-8)' }}>
                <Eyebrow>{a.aside.title}</Eyebrow>
                <div style={{ marginTop: 10 }}>
                  {a.aside.items.map(([k, action]) => <ListRow key={k} k={k} action={action} />)}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="book-3d-wrap" style={{ transform: 'translateX(-46px)' }}>
              <BookFlip />
            </div>
          </Reveal>
        </div>
      ) : (
        <div className="case-intro" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--space-10)', marginTop: 'var(--space-9)' }}>
          <Reveal>
            <div>
              <Eyebrow>What it is</Eyebrow>
              {a.body.map((p, i) => (
                <p key={i} style={{ fontSize: 16.5, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: i === 0 ? 16 : 14, textWrap: 'pretty' }}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <Eyebrow>{a.aside.title}</Eyebrow>
              <div style={{ marginTop: 10 }}>
                {a.aside.type === 'controls'
                  ? a.aside.items.map(([k, action]) => <ControlRow key={k} k={k} action={action} />)
                  : a.aside.items.map(([k, action]) => <ListRow key={k} k={k} action={action} />)}
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}

// every image a detail page renders (hero first; book pages add the spreads)
function appAssets(id) {
  const a = APP_DETAILS[id];
  if (!a) return { hero: null, all: [], video: null };
  const all = [];
  let hero = null;
  if (a.hero && a.hero.image) { hero = a.hero.image; all.push(hero); }
  if (a.book3d) ['00', '01', '02', '03', '04', '05', 's01', 's02'].forEach(n => all.push('images/' + n + '.png'));
  return { hero, all: Array.from(new Set(all)), video: (a.hero && a.hero.video) || null };
}

Object.assign(window, { AppDetailScreen, appAssets });
