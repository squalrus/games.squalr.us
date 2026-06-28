# InfinitySpace — Marketing Site

A static "coming soon" landing page for InfinitySpace. Lives outside `Assets/`, so it's never picked up by the Unity build.

The animated starfield background is generated entirely on `<canvas>` at load time (`background.js`) — no image assets to ship. Drag to pan; it idles with a slow auto-drift otherwise.

## Preview locally

No build step. Either open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```shell
npx serve Site
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and copy |
| `style.css` | Layout, typography, animations |
| `background.js` | Procedural nebula/galaxy canvas generator + parallax drag/drift camera |
