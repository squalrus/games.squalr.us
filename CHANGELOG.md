# Changelog

User-visible changes, newest first. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [semver](https://semver.org/) versioning.

## [0.1.0] — 2026-09-22

### Added

- **Multi-game homepage.** The marketing site now covers every Squalrus Games title instead of just Infinity Space: a shared brand header, a scrollable panel per game, and a persistent site header/footer via a new shared layout. (`src/pages/Home.jsx`, `src/components/Layout.jsx`, `src/components/SiteHeader.jsx`)
- **Chogots section.** Added a homepage panel for Chogots, a pixel-art creature-care game for Android, with its own animated tiled pixel-art background. (`src/pages/Home.jsx`, `src/components/PixelBackground.jsx`, `src/lib/pixelfield.js`)

### Changed

- **Site rebrand.** Renamed the site from "Infinity Space — Coming Soon" to "Squalrus Games" across the page title, meta tags, Open Graph/Twitter cards, and `package.json`, and added an `Organization` JSON-LD block alongside a `VideoGame` block per game. (`index.html`, `package.json`)
- **Privacy and Support pages now cover all titles.** Reworded to speak generically about "our games" instead of Infinity Space specifically, and dropped their standalone header/footer now that `Layout` provides one on every route. (`src/pages/Privacy.jsx`, `src/pages/Support.jsx`)
- **Starfield background decoupled from page content.** `StarfieldBackground` now renders only its background layers instead of wrapping page content as children, so it can sit as a sibling inside the Infinity Space panel. (`src/components/StarfieldBackground.jsx`)
- **Docs updated for the rebrand.** README and `docs/game-bio.md` updated to describe the multi-game homepage structure and how to add a new game section. (`README.md`, `docs/game-bio.md`)
