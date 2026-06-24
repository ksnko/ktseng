/* ============================================================
   About — portrait, bio, resume/CV, contact.
   Resume merged in: experience, education, skills, downloadable CV.
   ============================================================ */

const EXPERIENCE = [
  { y: '2024 — 2026', r: 'Generalist & Designer', org: 'Integral AI', d: 'Worked on company branding, marketing material, the design of robotic spaces, and AI interfaces. Other works include marketing material, website, & public-facing presentation across various platforms and formats.' },
  { y: '2017 — 2023', r: 'Senior Industrial Designer / Corporate Officer', org: 'Borderless Inc', d: 'An industry-first smart motorcycle helmet, from design through multiple successful crowdfunding launches. UI and graphics, web, advertising, and client projects: smart locks, backpacks, and an automotive program.' },
  { y: '2012 — 2015', r: 'Independent Consultant', org: 'Industrial design', d: 'Short-term projects across roadmapping, ideation, research, modeling, and manufacturing for clients including Logitech, Chrysler, and Misfit.' },
  { y: '2014', r: 'Industrial Design Contractor', org: 'branch', d: 'Home security devices and the Thync wearable.' },
  { y: '2013 — 2014', r: 'Industrial Designer', org: 'fuseproject', d: 'On the Jawbone team: bluetooth audio and lifestyle products including the Jambox, headsets, and UP.' },
  { y: '2011 — 2012', r: 'Industrial Design Contractor', org: 'Nokia Research Center', d: 'Future concepts and functional prototypes for smart devices in the car: ultra-thin casings, dense component fittings, an accessory ecosystem.' },
  { y: '2011', r: 'Industrial Design Contractor', org: 'CNS Design Firm, Taipei', d: 'Innovative appliances and LED-based lighting products.' },
];

const EDUCATION = [
  { y: '2015 — 2017', r: 'Japanese Language Studies', org: 'Waseda University, Tokyo', d: '' },
  { y: '2006 — 2010', r: 'BFA, Industrial Design', org: 'California College of the Arts, San Francisco', d: '' },
  { y: '2004', r: 'Mechanical Engineering (transfer)', org: 'Ohio State University, Columbus', d: '' },
];

const SKILLS = [
  { group: 'Tools', items: ['Adobe CS Suite', 'Rhinoceros 3D', 'Keyshot', 'AliasStudio', 'Blender', 'HTML / CSS', 'Digital sketching'] },
  { group: 'Languages', items: ['English (native)', 'Japanese (JLPT N2)', 'Mandarin (spoken)'] },
  { group: 'Awards', items: ['Red Dot 2010 · Best of the Best', 'IF Concept 2010 · Finalist', 'Spark Awards 2011 · Gold, Silver', 'Core77 2011 · Product Notable', 'Taiwan Int’l Student Design 2011'] },
];

function ResumeRow({ item, first }) {
  return (
    <div className="resume-row" style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 24, padding: '20px 0', borderTop: first ? 'none' : '1px solid var(--border)' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: '.02em' }}>{item.y}</span>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 18, fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{item.r}</span>
          {item.org && <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>· {item.org}</span>}
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: 15, marginTop: 4, lineHeight: 1.55 }}>{item.d || null}</div>
      </div>
    </div>
  );
}

function AboutScreen() {
  return (
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(20px,3vw,40px) var(--gutter) var(--space-12)' }}>
      {/* intro */}
      <section className="about-intro" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div>
          <Reveal><Eyebrow>About</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h1 style={{ fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '-0.03em', marginTop: 14, lineHeight: 1.02 }}>
              I build things that connect design, technology, and human experience<span style={{ color: 'var(--pop)' }}>.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: 22, maxWidth: 540 }}>
              I'm an American-born Taiwanese designer based in Tokyo. I enjoy working across disciplines, which keeps me flexible and open to new challenges. I love photography, pop art, ceramics, and collectibles.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: 'var(--slate-100)' }}>
          <img src={(window.__imgCache||{})['images/portrait.png'] || 'images/portrait.png'} alt="kevin tseng" loading="eager" decoding="sync" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} />
        </Reveal>
      </section>

      {/* resume / CV */}
      <section style={{ marginTop: 'var(--space-12)' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', paddingBottom: 'var(--space-5)' }}>
            <div>
              <Eyebrow>Resume / CV</Eyebrow>
            </div>
            <Button variant="secondary" iconRight={<i data-lucide="arrow-down"></i>}>Download CV (PDF)</Button>
          </div>
        </Reveal>

        <div className="resume-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'clamp(32px,5vw,72px)', marginTop: 'var(--space-6)', alignItems: 'start' }}>
          <div style={{ paddingLeft: 'var(--space-7)' }}>
            <Reveal>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Experience</div>
              <div>{EXPERIENCE.map((e, i) => <ResumeRow key={i} item={e} first={i === 0} />)}</div>
            </Reveal>
            <Reveal style={{ marginTop: 'var(--space-9)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Education</div>
              <div>{EDUCATION.map((e, i) => <ResumeRow key={i} item={e} first={i === 0} />)}</div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <Card variant="flat" style={{ padding: 'var(--space-6)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>Capabilities</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {SKILLS.map(s => (
                  <div key={s.group}>
                    <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: 6 }}>{s.group}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                      {s.items.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* contact */}
      <section className="about-contact" style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)', letterSpacing: '-0.03em', marginTop: 12, maxWidth: 560, marginInline: 'auto', lineHeight: 1.05 }}>
            Have something in mind? Let's talk<span style={{ color: 'var(--pop)' }}>.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 18, maxWidth: 460, marginInline: 'auto' }}>
            Open to freelance product design, design-system work, and the occasional weird little app.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="primary" size="lg" iconRight={<i data-lucide="arrow-up-right"></i>}
                    onClick={() => window.open('https://www.linkedin.com/in/kkts/', '_blank', 'noopener')}>
              Connect on LinkedIn
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

Object.assign(window, { AboutScreen });
