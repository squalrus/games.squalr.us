# InfinitySpace — Marketing Site

A static "coming soon" landing page for InfinitySpace. Lives outside `Assets/`, so it's never picked up by the Unity build.

The animated starfield background is generated entirely on `<canvas>` at load time (`background.js`) — no image assets to ship. Drag to pan; it idles with a slow auto-drift otherwise.

## Preview locally

No build step. Either open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```shell
npx serve Site
```

All three pages share a footer with the publisher name (SQUALRUS GAMES LLC) and contact email (`games@squalr.us`), and link to each other.

## Files

| File | Purpose |
|---|---|
| `index.html` | Coming-soon landing page structure and copy |
| `privacy.html` | Privacy policy — hosted here for store listing submission (Google Play, Microsoft Partner Center, Steamworks, Nintendo Developer Portal all require a public URL) |
| `support.html` | Support/contact page — hosted here for the same store listing requirement |
| `style.css` | Layout, typography, animations |
| `background.js` | Procedural nebula/galaxy canvas generator + parallax drag/drift camera (landing page only) |
