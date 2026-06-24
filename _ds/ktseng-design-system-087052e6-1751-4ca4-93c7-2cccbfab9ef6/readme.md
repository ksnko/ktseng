# Kevin Tseng — Design System

A personal design system for **Kevin Tseng**, a product designer whose portfolio spans three things: **slides** (case-study decks), **photographs** (a full-bleed gallery), and **small online apps designed & built with AI**. The brand is *playful but serious* — closer to serious (≈ 40 / 100 on the play↔serious dial): cool, precise, and gallery-clean, with one warm violet signature that keeps it human.

> **Sources.** This system was generated greenfield from a brief — no existing codebase, Figma, or decks were supplied. If you have brand source files (a real wordmark, font licenses, actual photography), drop them in and we'll replace the stand-ins noted below.

---

## The system at a glance

- **Aesthetic:** cool & clean, generous whitespace, editorial-meets-technical. Type does the heavy lifting; colour is disciplined.
- **Type:** **Space Grotesk** (display + UI) · **Hanken Grotesk** (body) · **Space Mono** (labels, metadata, eyebrows). A designer/technical sans + mono pairing.
- **Colour:** cool **paper white** background, a **cool-slate** neutral ramp for ink and structure, **electric indigo** (`#4B3DFF`) as the single hero accent, and **violet** (`#9D4EFF`) as a sparing pop (the dot after the wordmark, a hover underline, a status dot — never a fill).
- **Photography:** full-bleed, immersive, colour. Placeholder duotone tiles stand in until real photos are supplied.

---

## CONTENT FUNDAMENTALS — how it's written

The voice is **plain, confident, and quietly playful**. It trusts the work to carry weight, so it underclaims rather than oversells.

- **Casing:** lowercase for the brand and nav (`kevin tseng.`, `work / photos / apps`); sentence case for body and headlines. Reserve Title Case for proper nouns only. ALL-CAPS appears *only* in mono eyebrows/labels, always with wide tracking.
- **Person:** first person for the designer ("I design…", "I'm Kevin"), second person to address the visitor ("frames I kept", "say hello"). Warm, direct, never corporate "we."
- **Sentence shape:** short. Often a fragment for punch. *"Built in a weekend. Shipped anyway."* A trailing violet period is the brand's signature flourish in display type.
- **Punctuation:** **no em dashes.** Use a period, a comma, or a colon instead (*"selected work. not everything, just the good bits."*). Mono metadata uses the middot `·` as a separator.
- **Tone:** understated craft. *"selected work. not everything, just the good bits."* Honest about scrappiness: *"some are live, some are fossils."*
- **Numbers & metadata** are set in mono and treated as texture: `2026 · Product Design · Role: Lead`, `ƒ/2.8 · 1/250s`, `01 / 24`.
- **Emoji:** none. The playfulness comes from copy rhythm, the violet pop, and a little spring in motion — not emoji.
- **Avoid:** buzzwords (synergy, leverage, disruptive), exclamation-mark hype, "curated showcase of my finest creations." See `guidelines/brand-voice.html` for a do/don't card.

---

## VISUAL FOUNDATIONS

**Colour.** One cool neutral ramp (`--slate-50…950`) shifted slightly blue, on a cool paper white (`--paper #F7F8FA`). Exactly one accent — electric indigo — for primary actions, links, focus, and active states. Exactly one bright pop — violet — used on ~3% of any screen (the wordmark dot, an underline, a status dot, a featured tag). Semantic signals (green/amber/red) are cool-tuned and always paired with a faint tint surface. Full token set in `tokens/colors.css`.

**Type.** Space Grotesk sets display and UI with tight tracking (`-0.03em` on big sizes) and near-1.0 line-height for headlines — confident and architectural. Hanken Grotesk carries body at 1.5–1.65 line-height for an even reading colour. Space Mono handles eyebrows (11px, uppercase, `0.14em` tracking), metadata, and captions. Scale runs 76 → 11px (`tokens/typography.css`).

**Spacing & layout.** 4px base grid (`--space-1…14`). Content maxes at `--container 1240px`, wide media at `1480px`, prose at `680px`. Page gutters and section rhythm are fluid via `clamp()`. Layouts favour asymmetric two-column splits (content + meta sidebar) and full-bleed media that breaks the grid.

**Backgrounds.** Mostly flat paper or white. No decorative page gradients. The only gradients live *inside* photographic placeholders (duotone + film grain) and as protection scrims over full-bleed imagery (`linear-gradient(to top, rgba(11,13,19,.7), transparent)`), so white text stays legible.

**Imagery vibe.** Full-bleed, immersive, cool-leaning colour with occasional warm (dusk) and mono frames. A subtle grain overlay gives a photographic, slightly analog feel. Captions sit in mono on a blurred dark capsule, lower-left.

**Corners & cards.** Radii: inputs/buttons `md 10`, cards `lg 16`, hero/media `2xl 32`, pills/avatars `full`. Cards are white on paper with a **hairline inset + soft cool shadow** (`--inset-hairline, --shadow-sm`); interactive cards lift `-3px` and zoom their media `1.04×` on hover. An `inverse` card variant flips to slate-900 for emphasis blocks.

**Shadows.** Soft, low, **blue-shifted** (never muddy black): `--shadow-xs…xl`. Primary buttons get a coloured `--shadow-accent` glow on hover. Inputs and cards use a crisp `--inset-hairline` for edge definition.

**Borders.** 1px `--border` (slate-200) hairlines and `--border-strong` for inputs; the underline-tab indicator and hover underlines are 2px and electric indigo / violet.

**Motion.** Calm by default (`--ease-out`, 140–220ms) for the serious side; a little **spring** (`--ease-spring`) on the playful moments — the switch thumb, the violet motion demo. Big reveals use `--ease-emphasis`. Hover = colour darken / shadow lift; **press = scale 0.97** + `--accent-press`; focus = a 3px blue `--focus-ring`. All durations collapse to 0 under `prefers-reduced-motion`.

**Transparency & blur.** Used deliberately: the sticky top-nav is a translucent paper (or ink) panel with `backdrop-filter: blur(10px)`; photo captions and the lightbox chrome use blurred dark capsules. Not used decoratively elsewhere.

Specimen cards for every foundation live in `guidelines/` and render in the **Design System** tab.

---

## ICONOGRAPHY

- **Library:** [**Lucide**](https://lucide.dev) — loaded from CDN (`lucide@latest`). Its even ~2px stroke, rounded joins, and restrained set match the technical-but-warm tone. Use it for all UI glyphs: `arrow-up-right` (external/live), `arrow-right`/`arrow-left` (nav), `search`, `mail`, `x`, `check`, `heart`, `share`, `play`, `maximize`.
- **Usage:** render `<i data-lucide="name"></i>` and call `lucide.createIcons()` after mount/route change. Size via `font-size`/`width`. In components, icons are passed as nodes (`iconLeft`, `iconRight`, IconButton children).
- **Substitution flag:** Lucide is the closest CDN match to the intended stroke style; if you want a bespoke set, supply SVGs and we'll vendor them into `assets/icons/`.
- **Emoji / unicode:** not used as iconography. The only "symbol" flourishes are the violet period `.`, an occasional mono arrow (`↳`, `→`) in eyebrows, and status dots (drawn as small circles, not emoji).
- **Logo assets:** `assets/logo-mark.svg` (blue monogram tile with violet dot — favicon/app icon) and `assets/logo-wordmark.svg` (`kevin tseng.`). Both rely on Space Grotesk; for pixel-perfect standalone use, outline the text or supply a licensed build.

---

## SUBSTITUTIONS & THINGS TO REPLACE (please review)

1. **Fonts** — Space Grotesk / Hanken Grotesk / Space Mono are loaded from **Google Fonts CDN** (`tokens/fonts.css`); no licensed font files were supplied, so `@font-face`/self-hosting is not set up. For offline/production use, drop the font files in and swap the `@import` for local `@font-face`.
2. **Photography** — every image is a `<Photo>` placeholder (duotone + grain). Supply real photos to make the gallery and case studies sing.
3. **Logo** — a generated typographic wordmark + monogram. If you have a real mark, replace the SVGs and `guidelines/brand-logo.html`.

---

## INDEX — what's in this project

**Root**
- `styles.css` — the entry point consumers link. `@import`-only; reaches every token + font.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `elevation.css` (radii/borders/shadows) · `motion.css` · `base.css` (element defaults).

**`guidelines/`** — foundation specimen cards (Design System tab): colours (primary, neutrals, pop, semantic, surfaces), type (display, body, mono, scale), spacing/radius/shadow/motion, brand (logo, colorways, voice).

**`components/`** — reusable React primitives (namespace `window.KevinTsengDesignSystem_087052`):
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Input**, **Switch**
- `data/` — **Tag**, **Badge**, **Avatar**
- `surfaces/` — **Card**, **Tabs**
- Each has `.jsx` + `.d.ts` + `.prompt.md`, with a `@dsCard` demo HTML per directory.

**`ui_kits/portfolio/`** — interactive 5-screen recreation of the site (Home with 3 hero directions, Gallery, Case study, Apps, About). See its `README.md`.

**`assets/`** — `logo-mark.svg`, `logo-wordmark.svg`.

**Starting points** — Button, Card (component seeds, tagged in their `.d.ts`).
