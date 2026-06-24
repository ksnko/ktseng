# Image migration — ktseng.com → self-hosted

Goal: replace every `https://ktseng.com/wp-content/uploads/…` URL in the site with a
local file under `images/`, so the site ships self-contained.

---

## ✅ STATUS — done so far (June 2026)

All mapped industrial-design imagery is now **local** under `images/` (95 files copied).
Repointed: splash stills, home/work covers, all case studies, About portrait.
**Three new case studies added & wired into the work grid:** Thync, LifeSmart, Jawbone Era.

**Still remote (still loads from ktseng.com) — swap when you add files:**
- The photography (Moments gallery + home photo strip + splash "Moments" panel still)
- The 3 splash hero videos (`works_vid.webm`, `apps_vid.webm`, `photo_vid.mp4`)

**Dropped (no files in archive):** the Independent sub-projects *2P Portable Restroom*,
*Strata Steam Iron*, and *Eco-Cartridge*. Independent now shows GS-1 + Viscous only.
Add the files and tell me if you want those three back.

**Guessed mappings to confirm:** Motorcycle Bag uses 5 of the `tribag_4 (n)` shots;
Independent cover = `gs1_1.jpg`. Thync/LifeSmart years (2016/2017) and studio ("Branch")
are my best guess — correct any copy that's off.

---

Your linked archive folder: **Website 2026/**

Legend:
- ✅ **direct** — file is in the archive, same name. Just copy.
- 🔁 **rename** — file is in the archive under a different name. Copy + map.
- ⚠️ **guess** — archive has *something* that fits, but the exact original isn't there; I picked the closest. Confirm or correct.
- ❌ **missing** — not in the archive. **You need to add these.** (Listed again at the bottom.)

---

## 1. Splash screen (the 3 entry panels)

| Slot | Site wants | Archive file | Status |
|---|---|---|---|
| Industrial Design — still | `2020/12/CrossHelmet_A.jpg` | `brdrlss/crosshelmet/CrossHelmetA.jpg` | 🔁 rename |
| Industrial Design — video | `2026/06/works_vid.webm` | — | ❌ missing |
| Apps — still | `2021/05/APPUI_S.jpg` | `brdrlss/crosshelmet/APPUI_S.jpg` | ✅ direct |
| Apps — video | `2026/06/apps_vid.webm` | — | ❌ missing |
| Moments — still | `2021/05/DSC00174b-scaled.jpg` | — | ❌ missing (photography) |
| Moments — video | `2026/06/photo_vid.mp4` | — | ❌ missing |

> The 3 splash **videos** are the loop clips behind each panel. None are in the archive.
> You *do* have turntable clips (`Mobility_turntable.mp4`, `720_AE_h264.mov`, `NL3/Sequence-01.mp4`)
> that could stand in for the Industrial panel if you don't have the originals — your call.

---

## 2. Home + Work grid (project cover images)

| Project | Site wants | Archive file | Status |
|---|---|---|---|
| CrossHelmet | `2020/12/CrossHelmet_A.jpg` | `brdrlss/crosshelmet/CrossHelmetA.jpg` | 🔁 rename |
| Personal Mobility | `2021/05/m2.jpg` | `brdrlss/mobility/m2.jpg` | ✅ direct |
| Motorcycle Bag | `2021/05/20180821splitbag_2-scaled.jpg` | `brdrlss/tribag/20180821_tribag_4.jpg` | ⚠️ guess |
| Jawbone UP | `…/Jawbone_UP3_5_…-c-default-scaled.jpg` | `fuseproject/UP3/Jawbone_UP3_5_…-c-default.jpg` | 🔁 rename (drop `-scaled`) |
| Mini Jambox | `…/Jawbone-MINI-Jambox-Product_1_…-scaled.jpg` | `fuseproject/Jambox/…Product_1_…-c-default.jpg` | 🔁 rename |
| Ninja Lock 3 | `2021/05/exploded-1.jpg` | `brdrlss/NL3/exploded.jpg` | 🔁 rename |
| Independent | `2021/05/1.jpg` | `independent/GS-1/camera1.jpg` | ⚠️ guess (cover choice) |

---

## 3. Photo strip (home) + Gallery ("Moments")

Both use the **same 6 photography files**, and the whole gallery is photography:

| Site wants | Status |
|---|---|
| `DSC00174b-scaled.jpg` | ❌ missing |
| `00010022b-scaled.jpg` | ❌ missing |
| `00010006b-scaled.jpg` | ❌ missing |
| `00010001b-scaled.jpg` | ❌ missing |
| `DSC09513b-scaled.jpg` | ❌ missing |
| `DSC05971s2.jpg` | ❌ missing |

> The archive has **no street/film photography** — it's industrial-design only.
> (Only stray photos present: `singapore2.jpg`, `branch/cover.jpg`.)
> The gallery's embedded film (Vimeo) still works without any local files.

---

## 4. About screen

| Slot | Site wants | Archive file | Status |
|---|---|---|---|
| Portrait | `2021/05/download.png` | `download.PNG` | ✅ direct (case differs only) |

---

## 5. Case studies (detail pages)

### CrossHelmet — ✅ fully covered
| Slot | Site wants | Archive file | Status |
|---|---|---|---|
| Hero | `CrossHelmet_A.jpg` | `crosshelmet/CrossHelmetA.jpg` | 🔁 |
| Slide · App UI | `APPUI_S.jpg` | `crosshelmet/APPUI_S.jpg` | ✅ |
| Slide · Firmware | `FWUI-scaled.jpg` | `crosshelmet/FWUI.jpg` | 🔁 |
| Slide · Storyboard | `VIDSB-scaled.jpg` | `crosshelmet/VIDSB.jpg` | 🔁 |
| Slide · Packaging | `packaging_S.jpg` | `crosshelmet/packaging_S.jpg` | ✅ |
| Compare A | `CrossHelmet_A.jpg` / `CrossHelmetB.jpg` | `CrossHelmetA.jpg` / `CrossHelmetB.jpg` | 🔁 / ✅ |
| Compare B | `CrossHelmetC-1.jpg` / `CrossHelmetD2.jpg` | `CrossHelmetC.jpg` / `CrossHelmetD.jpg` | 🔁 / 🔁 |

### Jawbone UP — ✅ fully covered (all UP3/UP2/UP Move files present, just drop `-scaled`)
Every image in the UP3 (5), UP2 (6), and UP Move (7) sections maps 1:1 to
`fuseproject/UP3`, `fuseproject/UP2`, `fuseproject/UPMOVE` by removing the `-scaled` suffix.

### Mini Jambox — ✅ covered
Hero + 2 images all in `fuseproject/Jambox/` (drop `-scaled`).

### Mini Jambox / Mobility / Ninja Lock
| Case | Site wants | Archive | Status |
|---|---|---|---|
| Mobility hero / img | `m2.jpg` / `m1.jpg` | `brdrlss/mobility/m2.jpg` / `m1.jpg` | ✅ |
| Ninja Lock hero / img | `exploded-1.jpg` / `aligned.jpg` | `brdrlss/NL3/exploded.jpg` / `aligned.jpg` | 🔁 / ✅ |

### Motorcycle Bag — ⚠️ partial / guess
| Site wants | Archive | Status |
|---|---|---|
| `20180821splitbag_2-scaled.jpg` (hero) | `tribag/20180821_tribag_4.jpg` | ⚠️ |
| `20180821splitbag_3-scaled.jpg` | `tribag/20180821_tribag_4 (2).jpg` | ⚠️ |
| `20180821splitbag_1-scaled.jpg` | `tribag/20180821_tribag_4 (3).jpg` | ⚠️ |
| `bagbuckle.jpg` | `brdrlss/bagbuckle.jpg` | ✅ |
| `20180821_tribag_1.jpg` | `tribag/20180821_tribag_4 (4).jpg` | ⚠️ |

> The archive's tribag folder is 8 near-identical shots named `20180821_tribag_4 (n).jpg`.
> I can wire them in, but tell me if specific shots should go in specific slots.

### Independent — ⚠️ half covered
| Section | Site wants | Archive | Status |
|---|---|---|---|
| Panasonic GS-1 | `1.jpg … 8.jpg` | `independent/GS-1/camera1.jpg … camera8.jpg` | 🔁 (8 files) |
| Viscous Lighting | `cover, sketch1/3/4, idea1/2/3, exploded, closeup, renders, context2-5` | `independent/viscous/…` | ✅ all present |
| 2P Portable Restroom | `1-1.jpg … 6-1.jpg` | — | ❌ missing (6) |
| Strata Steam Iron | `1-2.jpg … 5-2.jpg` | — | ❌ missing (5) |
| Eco-Cartridge | `1-3.jpg … 5-3.jpg` | — | ❌ missing (5) |

---

## ❌ MISSING — please add these to the folder

Drop them anywhere sensible in **Website 2026/** and tell me where; I'll wire them up.

1. **Photography (the whole "Moments" gallery + home photo strip)** — at minimum the 6:
   `DSC00174b`, `00010022b`, `00010006b`, `00010001b`, `DSC09513b`, `DSC05971s2`.
   (Add as many gallery frames as you like — the gallery scales to any count.)
2. **Splash hero videos** — `works_vid.webm`, `apps_vid.webm`, `photo_vid.mp4`
   (or say "use the turntables" and I'll substitute).
3. **Independent sub-projects** (student/freelance work) — currently no files:
   - 2P Portable Restroom (6 images)
   - Strata Steam Iron (5 images)
   - Eco-Cartridge (5 images)
   *(Or: drop these three sub-projects from the Independent page — also fine.)*

---

## ✨ BONUS — in the archive but NOT used on the site yet

You have material the current site doesn't show. Worth considering:

- **Thync** (`branch/thync/`, 14 images) — could be its own case study.
- **LifeSmart** (`branch/lifesmart/`, 11 images) — ditto.
- **Jawbone ERA** (`fuseproject/ERA/`, 4 images) — could join the Jawbone family.
- **Turntable / motion clips** — `Mobility_turntable.mp4`, `dashboard 4_1.mp4`,
  `NL3/Sequence-01.mp4`, `720_AE_h264.mov`, `GS-1/camera.mp4`. Could add motion to case pages.

Tell me if you want any of these added.

---

## What I'll do once you confirm

1. Copy every ✅/🔁/⚠️ file into a flat `images/` folder in the project (renamed to match the code).
2. Repoint the ~6 base-path constants and inline URLs to `images/…`.
3. Leave ❌ slots on graceful placeholders until you supply them, then wire those in too.
4. You download the project (HTML + `images/`) and upload to your host. Done.
