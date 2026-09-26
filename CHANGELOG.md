# Changelog

User-visible changes, newest first. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [semver](https://semver.org/) versioning.

## [0.2.0] — 2026-09-25

### Added

- **Header navigation.** The site header now has nav links: Chogots and Infinity Space deep-link to their homepage sections from any page, plus About and Careers. Navigating now scrolls to the linked section, or to the top of a new page. (`src/components/SiteHeader.jsx`, `src/components/Layout.jsx`, `src/style.css`)
- **About page.** New `/about` page describing the studio — Washington-based, small games, strange ideas, software no one asked for — with a team roster of six roles, all staffed by the same person. (`src/pages/About.jsx`, `public/team/chad.jpg`, `src/App.jsx`)
- **Careers page.** New `/careers` page: no open positions, but open to collaborators, with a contact link to `games@squalr.us`. (`src/pages/Careers.jsx`, `src/App.jsx`)
- **Chogots sprites in the background.** The Chogots section background is now an animated canvas: square pixels of varying sizes drifting in different directions, plus creatures, gems, food and toys from the game floating among them, each creature playing one of its in-game animations. Pauses when off screen and respects reduced-motion settings. (`src/lib/pixelfield.js`, `src/components/PixelBackground.jsx`, `public/chogots/`)

### Changed

- **Left-aligned header.** The brand mark now sits at the left of the header instead of centered. (`src/style.css`)
- **Chogots comes first.** The Chogots section now appears above Infinity Space on the homepage. (`src/pages/Home.jsx`)
- **Roomier homepage sections.** Each section now fills at least the full viewport height with more padding above and below its content. (`src/style.css`)
- **Sitemap and README cover the new pages.** (`public/sitemap.xml`, `README.md`)

### Fixed

- **Off-center stats row.** The stats under "Coming Soon" now use equal-width columns, so the middle stat stays centered even when labels differ in length (most visible on Chogots). (`src/style.css`)

## [0.1.2] — 2026-09-22

### Changed

- **Game bio docs split per game.** `docs/game-bio.md` was Infinity-Space-only despite its generic name; renamed to `docs/game-bio-infinity-space.md` and retitled to make that explicit. Added `docs/game-bio-chogots.md` as the same canonical copy reference (name, taglines, descriptions, genre/tags, core pillars, legal/support links, asset references, platform availability) for Chogots. (`docs/game-bio.md` → `docs/game-bio-infinity-space.md`, `docs/game-bio-chogots.md`, `docs/README.md`)

## [0.1.1] — 2026-09-22

### Fixed

- **Deprecated checkout action in deploy workflow.** Bumped `actions/checkout` from v3 to v4 in the Azure Static Web Apps CI/CD workflow, resolving a Node.js 20 deprecation warning on GitHub-hosted runners. (`.github/workflows/azure-static-web-apps-jolly-cliff-050e71a1e.yml`)

## [0.1.0] — 2026-09-22

### Added

- **Multi-game homepage.** The marketing site now covers every Squalrus Games title instead of just Infinity Space: a shared brand header, a scrollable panel per game, and a persistent site header/footer via a new shared layout. (`src/pages/Home.jsx`, `src/components/Layout.jsx`, `src/components/SiteHeader.jsx`)
- **Chogots section.** Added a homepage panel for Chogots, a pixel-art creature-care game for Android, with its own animated tiled pixel-art background. (`src/pages/Home.jsx`, `src/components/PixelBackground.jsx`, `src/lib/pixelfield.js`)

### Changed

- **Site rebrand.** Renamed the site from "Infinity Space — Coming Soon" to "Squalrus Games" across the page title, meta tags, Open Graph/Twitter cards, and `package.json`, and added an `Organization` JSON-LD block alongside a `VideoGame` block per game. (`index.html`, `package.json`)
- **Privacy and Support pages now cover all titles.** Reworded to speak generically about "our games" instead of Infinity Space specifically, and dropped their standalone header/footer now that `Layout` provides one on every route. (`src/pages/Privacy.jsx`, `src/pages/Support.jsx`)
- **Starfield background decoupled from page content.** `StarfieldBackground` now renders only its background layers instead of wrapping page content as children, so it can sit as a sibling inside the Infinity Space panel. (`src/components/StarfieldBackground.jsx`)
- **Docs updated for the rebrand.** README and `docs/game-bio.md` updated to describe the multi-game homepage structure and how to add a new game section. (`README.md`, `docs/game-bio.md`)
