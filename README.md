# Infinity Space — Marketing Site

A "coming soon" marketing site for Infinity Space, built as a small React + React Router single-page app (Vite). Lives outside `Assets/`, so it's never picked up by the Unity build.

The animated starfield background is generated entirely on `<canvas>` at load time (`src/lib/starfield.js`) — no image assets to ship. Drag to pan; it idles with a slow auto-drift otherwise. It only mounts on the landing page.

## Routes

| Path | Page |
|---|---|
| `/` | Coming-soon landing page |
| `/privacy` | Privacy policy — hosted here for store listing submission (Google Play, Microsoft Partner Center, Steamworks, Nintendo Developer Portal all require a public URL) |
| `/support` | Support/contact page — hosted here for the same store listing requirement |

React Router renders these as clean paths (no `.html`, no hash). Azure Static Web Apps needs `staticwebapp.config.json`'s `navigationFallback` to serve `index.html` for any of these paths on a direct load/refresh, since there's no server-side route for them.

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
| `src/pages/Home.jsx` | Landing page structure and copy |
| `src/pages/Privacy.jsx` | Privacy policy route |
| `src/pages/Support.jsx` | Support/contact route |
| `src/components/StarfieldBackground.jsx` | Mounts the procedural starfield canvas behind the landing page |
| `src/components/SiteFooter.jsx` | Shared publisher/legal footer (SQUALRUS GAMES LLC, `games@squalr.us`), used on every page |
| `src/lib/starfield.js` | Procedural nebula/galaxy canvas generator + parallax drag/drift camera |
| `src/style.css` | Layout, typography, animations |
| `staticwebapp.config.json` | Azure Static Web Apps SPA fallback so React Router routes survive a hard refresh |
