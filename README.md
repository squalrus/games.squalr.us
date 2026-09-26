# Squalrus Games — Marketing Site

The marketing site for Squalrus Games' titles, built as a small React + React Router single-page app (Vite). A single homepage with a section per game — currently Infinity Space and Chogots — plus shared Privacy/Support pages covering every title.

The animated starfield background is generated entirely on `<canvas>` at load time (`src/lib/starfield.js`) — no image assets to ship. Drag to pan; it idles with a slow auto-drift otherwise. It only mounts on the landing page, which scrolls independently over the fixed background (`.home-page` in `src/style.css`) so more game sections can be added without needing their own routes.

## Routes

| Path | Page |
|---|---|
| `/` | Homepage — a Squalrus Games header, then one section per game |
| `/about` | Studio about page, including the team roster (headshots in `public/team/`, set per role via `photo` in `About.jsx`) |
| `/careers` | Careers page — no openings, open to collaboration via email |
| `/privacy` | Privacy policy, covering every Squalrus Games title — hosted here for store listing submission (Google Play, Microsoft Partner Center, Steamworks, Nintendo Developer Portal all require a public URL) |
| `/support` | Support/contact page, covering every title — hosted here for the same store listing requirement |

React Router renders these as clean paths (no `.html`, no hash). Azure Static Web Apps needs `staticwebapp.config.json`'s `navigationFallback` to serve `index.html` for any of these paths on a direct load/refresh, since there's no server-side route for them.

## Adding a new game to the homepage

Add a `<section className="game-section" id="...">` block to `src/pages/Home.jsx` (kicker, headline, tagline, subhead, CTA pill, optional `.stats` row — copy the Chogots section as a template), separated from the previous section by a `<div className="section-divider">`. No routing changes needed — everything lives on `/`. Privacy/Support already speak generically about "our games," so they don't need per-game edits unless a new title's data practices actually differ (accounts, ads, IAP, etc.).

## Develop locally

```shell
npm install
npm run dev
```

## Build

```shell
npm run build
```

Outputs static files to `dist/`, which is what the Azure Static Web Apps deploy workflow (`.github/workflows/azure-static-web-apps-jolly-cliff-050e71a1e.yml`) builds and uploads.

## Files

| File | Purpose |
|---|---|
| `src/pages/Home.jsx` | Homepage structure and copy — Squalrus Games header plus one section per game |
| `src/pages/About.jsx` | About route — studio blurb and team roster |
| `src/pages/Careers.jsx` | Careers route — collaboration contact |
| `src/pages/Privacy.jsx` | Privacy policy route, covering all games |
| `src/pages/Support.jsx` | Support/contact route, covering all games |
| `src/components/StarfieldBackground.jsx` | Mounts the procedural starfield canvas behind the homepage |
| `src/components/SiteHeader.jsx` | Fixed header — brand mark plus nav (homepage section deep links, About, Careers) |
| `src/components/SiteFooter.jsx` | Shared publisher/legal footer (SQUALRUS GAMES LLC, `games@squalr.us`), used on every page |
| `src/lib/starfield.js` | Procedural nebula/galaxy canvas generator + parallax drag/drift camera |
| `src/lib/seo.js` | `useSeo()` hook — sets per-route title, meta description, OG/Twitter description, and canonical URL |
| `src/style.css` | Layout, typography, animations |
| `staticwebapp.config.json` | Azure Static Web Apps SPA fallback so React Router routes survive a hard refresh |
| `public/robots.txt` | Allows all crawlers, points to `sitemap.xml` |
| `public/sitemap.xml` | Static sitemap listing `/`, `/about`, `/careers`, `/privacy`, `/support`. Update by hand if routes change — not generated at build time |

## SEO

- `index.html` carries the global `<meta>`/Open Graph/Twitter Card defaults (an `Organization` JSON-LD block for Squalrus Games, plus one `VideoGame` JSON-LD block per game); `src/lib/seo.js`'s `useSeo()` hook overrides title/description/canonical per route on top of that baseline.
- No `og:image`/social preview image exists yet — neither game has shipped key art. Infinity Space has a tracked backlog item for this (see [Logo and Icon Design](https://github.com/squalrus/infinity-space/blob/main/BACKLOG.md#logo-and-icon-design) in its own repo); Chogots doesn't yet. Add `og:image`/`twitter:image` meta tags once art ships for a game.
- `public/robots.txt` and `public/sitemap.xml` are static files served as-is by Vite/Azure Static Web Apps — `staticwebapp.config.json`'s SPA fallback explicitly excludes `.txt`/`.xml` so they aren't rewritten to `index.html`.
