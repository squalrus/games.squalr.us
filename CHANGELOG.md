# Changelog

User-visible changes, newest first. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [semver](https://semver.org/) versioning.

## [0.3.1] — 2026-10-03

### Changed

- **Copy pass for voice.** Site copy now follows the squalr.us writing style guide: contractions throughout, "folks" over "people" on Careers, and the Privacy Policy rewritten in active voice ("we'll update this policy first", "Send questions to…") with no change to what it promises. The Support page's search description no longer reads "an Infinity Space" or uses the all-caps legal name in running text. (`src/pages/About.jsx`, `src/pages/Press.jsx`, `src/pages/Careers.jsx`, `src/pages/Privacy.jsx`, `src/pages/Support.jsx`)
- **Chogots listed first everywhere.** The page description, social share text and structured data, plus the Privacy, Support and README mentions, now list Chogots before Infinity Space to match the homepage order. The default page description now matches the homepage's. (`index.html`, `src/pages/Privacy.jsx`, `src/pages/Support.jsx`, `README.md`)

## [0.3.0] — 2026-09-27

### Added

- **Press kit.** New `/press` page, linked from the footer: a studio blurb and fact sheet, fact cards for Chogots and Infinity Space (copy from `docs/game-bio-*.md`), the logo in full-color, stacked, light-background and one-color versions with SVG downloads, logo usage rules, the 8 brand colors (click a swatch to copy its hex), the three brand fonts, and a short guide to writing the studio and game names. Screenshots and key art are noted as coming soon. (`src/pages/Press.jsx`, `public/press/`, `src/App.jsx`)
- **Pixel squalrus logo and favicon.** The 16×16 pixel squalrus (walrus up front, squirrel out back) now appears in the header, hero, footer and press kit, and is the site favicon. The favicon switches to its light-background colors when the browser's tab bar is light. (`src/components/SqualrusMark.jsx`, `public/favicon.svg`, `index.html`)

### Changed

- **"Arcade after dark" redesign.** The whole site moves to the new brand: near-black teal background, one cyan and one hot-pink accent, Silkscreen / Pixelify Sans / Space Grotesk type, stepped pixel corners, bevelled pixel buttons, blinking cursors and scanlines. Blinking and fade-ins turn off when reduced motion is on. (`src/style.css`, `index.html`)
- **Title-screen homepage hero.** The intro is now an arcade title screen: a score bar, the big logo and wordmark, the tagline, a "Select game" menu linking to each game, and a "Press start" link down to Chogots. (`src/pages/Home.jsx`)
- **Game sections restyled.** Chogots and Infinity Space get "Game 01" / "Game 02" tags, pixel-font labels and pixel buttons. The animated backgrounds, the Chogots tester buttons and all copy are unchanged. (`src/pages/Home.jsx`, `src/style.css`)
- **New header.** Pixel logo and wordmark, pixel-font nav with a blinking ▶ on the current page, and a squalr.us link. The nav now collapses into the menu below 960px instead of 640px, since the new type is wider. (`src/components/SiteHeader.jsx`)
- **New footer.** Checkered strip, logo, legal line with Seattle, WA, Privacy / Support / Press Kit / email links, a "Continue?" back-to-top button, and 88×31 badges (No ads, No IAP, Made in SEA, 60 FPS OK). (`src/components/SiteFooter.jsx`, `src/components/Layout.jsx`)
- **Shared subpage template.** About, Careers, Privacy and Support now share a dotted title band with a breadcrumb, a pixel-font title and a colored stripe, over a narrower reading column. (`src/components/DocPage.jsx`, `src/pages/About.jsx`, `src/pages/Careers.jsx`, `src/pages/Privacy.jsx`, `src/pages/Support.jsx`)
- **Sitemap and README cover the press kit.** (`public/sitemap.xml`, `README.md`)

## [0.2.2] — 2026-09-26

### Added

- **Mobile menu.** On screens 640px and narrower, the header nav collapses behind a menu button that opens a full-width dropdown with large tap targets. It closes when you pick a link or press Esc. Previously the nav scrolled sideways with no scrollbar, which hid About and Careers on phones. (`src/components/SiteHeader.jsx`, `src/style.css`)

### Changed

- **Mobile layout pass.** Homepage sections now fit the visible screen under the header, even with mobile browser toolbars showing, and keep clear of the notch in landscape. Paired Chogots buttons stack at equal width on narrow screens, the stats row uses the full width, footer links wrap and are easier to tap, text pages have tighter top padding and wrap long links, and the About team grid shows two columns on phones. (`src/style.css`)
- **Seattle, Washington.** The About page now says the studio is based in Seattle, Washington. (`src/pages/About.jsx`)
- **Opinions welcome.** The Careers collaboration section now invites people with strong opinions about the games to get in touch, not just people who make things. (`src/pages/Careers.jsx`)

### Fixed

- **Kicker letter spacing on phones.** The small caps label above each game title got its widest letter spacing on small screens because of a formula bug. It now uses tighter spacing on phones. (`src/style.css`)

## [0.2.1] — 2026-09-26

### Added

- **Chogots tester sign-up.** The Chogots "Coming Soon" pill is replaced by two buttons: "Get the Test Build" opens the Google Play closed-testing page, and "Request to Join" opens an email to `games@squalr.us` for people not yet on the tester list. A short note under the buttons explains that the Play link only works once you're on the list. (`src/pages/Home.jsx`, `src/style.css`)

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
