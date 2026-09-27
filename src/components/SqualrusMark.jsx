// The squalrus: walrus up front, squirrel out back, drawn on a 16×16 pixel grid.
// Render only at whole multiples of 16 (16, 32, 48, 64…) so every edge stays crisp.
export const MARK_PATHS = {
  body: 'M1 2h1v1h-1zM5 2h1v1h-1zM1 3h2v1h-2zM4 3h2v1h-2zM0 4h7v1h-7zM0 5h1v1h-1zM2 5h2v1h-2zM5 5h2v1h-2zM0 6h8v1h-8zM5 7h3v1h-3zM5 8h4v1h-4zM4 9h6v1h-6zM4 10h7v1h-7zM4 11h7v1h-7zM4 12h8v1h-8zM4 13h9v1h-9zM5 14h4v1h-4zM10 14h4v1h-4z',
  tail: 'M10 0h4v1h-4zM9 1h6v1h-6zM8 2h8v1h-8zM8 3h2v1h-2zM13 3h3v1h-3zM8 4h5v1h-5zM14 4h2v1h-2zM9 5h4v1h-4zM14 5h2v1h-2zM10 6h2v1h-2zM13 6h3v1h-3zM11 7h1v1h-1zM13 7h3v1h-3zM11 8h5v1h-5zM11 9h4v1h-4zM11 10h4v1h-4zM11 11h3v1h-3zM12 12h1v1h-1z',
  shade: 'M1 8h1v1h-1zM3 8h1v1h-1zM0 14h5v1h-5zM9 14h1v1h-1zM10 3h3v1h-3zM13 4h1v1h-1zM13 5h1v1h-1zM12 6h1v1h-1zM12 7h1v1h-1z',
  snout: 'M0 7h2v1h-2zM3 7h2v1h-2zM0 8h1v1h-1zM2 8h1v1h-1zM4 8h1v1h-1zM1 9h3v1h-3z',
  eye: 'M1 5h1v1h-1zM4 5h1v1h-1z',
  nose: 'M2 7h1v1h-1z',
  tusk: 'M1 10h1v1h-1zM3 10h1v1h-1zM1 11h1v1h-1zM3 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM1 13h1v1h-1zM3 13h1v1h-1z',
};

// `dark` is for dark grounds (the default); `light` darkens the cyan and inks the tusks so they don't vanish on cream/white.
const PALETTES = {
  dark: { body: '#2de2e6', tail: '#9af3f3', shade: '#1a8f9c', snout: '#c8fbf5', eye: '#06131a', nose: '#ff4f9a', tusk: '#fff1d0' },
  light: { body: '#1bb8bd', tail: '#6fd9db', shade: '#157a86', snout: '#c8fbf5', eye: '#231a14', nose: '#ff4f9a', tusk: '#231a14' },
};

// Single-color silhouette: eyes and nose drop out as holes.
const MONO_PARTS = ['body', 'tail', 'shade', 'snout', 'tusk'];

export default function SqualrusMark({ size = 32, variant = 'dark', mono, className, title }) {
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true };

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      {...a11y}
    >
      {mono
        ? <path fill={mono} d={MONO_PARTS.map((part) => MARK_PATHS[part]).join('')} />
        : Object.entries(MARK_PATHS).map(([part, d]) => <path key={part} fill={PALETTES[variant][part]} d={d} />)}
    </svg>
  );
}
