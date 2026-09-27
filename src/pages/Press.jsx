import { useState } from 'react';
import { Link } from 'react-router-dom';
import DocPage from '../components/DocPage.jsx';
import SqualrusMark from '../components/SqualrusMark.jsx';
import { useSeo } from '../lib/seo.js';

// Copy below comes from docs/game-bio-*.md, the source of truth for external-facing text. Keep them in sync.
const FACTS = [
  ['Developer / publisher', 'SQUALRUS GAMES LLC'],
  ['Based in', 'Seattle, Washington'],
  ['Team', 'One person, six job titles'],
  ['Games', 'Chogots, Infinity Space'],
  ['Website', <a key="site" href="https://games.squalr.us/">games.squalr.us</a>],
  ['Press contact', <a key="mail" href="mailto:games@squalr.us?subject=Press">games@squalr.us</a>],
];

const GAMES = [
  {
    tag: 'Game 01',
    name: 'Chogots',
    tone: 'chogots',
    tagline: "It's probably fine.",
    description: "A pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to keep it happy, and check back later — it's probably fine.",
    rows: [
      ['Genre', 'Simulation, casual — pixel-art creature care'],
      ['Platforms', 'Android'],
      ['Status', 'Closed testing on Google Play'],
    ],
    anchor: '/#chogots',
  },
  {
    tag: 'Game 02',
    name: 'Infinity Space',
    tone: 'infinity',
    tagline: 'Worlds that never end.',
    description: 'A top-down survival space shooter with procedurally generated sectors. Fight through hostile space, scavenge ship parts to stay fueled and armed, and push as deep as you can before the next sector ends you.',
    rows: [
      ['Genre', 'Survival shooter — top-down, procedurally generated'],
      ['Platforms', 'Android, Xbox, Steam (all TBD)'],
      ['Status', 'In development'],
    ],
    anchor: '/#infinity-space',
  },
];

const COLORS = [
  { name: 'Void', hex: '#050C11', use: 'Page background' },
  { name: 'Deep', hex: '#0A1820', use: 'Menus, hover, cards' },
  { name: 'Grid', hex: '#17323D', use: 'Rules, borders, dots' },
  { name: 'Static', hex: '#8FA8AD', use: 'Secondary text' },
  { name: 'Phosphor', hex: '#E8F1EF', use: 'Primary text' },
  { name: 'Walrus Cyan', hex: '#2DE2E6', use: 'Mark, links, primary' },
  { name: 'Nose Pink', hex: '#FF4F9A', use: 'Logo shadow, HUD labels' },
  { name: 'Tusk', hex: '#FFF1D0', use: 'Highlights, badges' },
];

const TYPE = [
  {
    name: 'Silkscreen',
    href: 'https://fonts.google.com/specimen/Silkscreen',
    use: 'Wordmark, nav, HUD, buttons, labels. Uppercase, tracked +6–24%.',
    sample: <span className="type-sample type-sample--silk">Press start</span>,
  },
  {
    name: 'Pixelify Sans',
    href: 'https://fonts.google.com/specimen/Pixelify+Sans',
    use: 'Page titles, section headings, taglines. Sentence case, 500–600.',
    sample: <span className="type-sample type-sample--pixel">Small, focused games.</span>,
  },
  {
    name: 'Space Grotesk',
    href: 'https://fonts.google.com/specimen/Space+Grotesk',
    use: 'Body copy and game titles.',
    sample: <span className="type-sample type-sample--grotesk">Chogots</span>,
  },
];

const DOWNLOADS = [
  { file: 'squalrus-mark.svg', label: 'Full color', note: 'For dark backgrounds' },
  { file: 'squalrus-mark-light.svg', label: 'Full color, light', note: 'For light backgrounds' },
  { file: 'squalrus-mark-mono-white.svg', label: 'Mono white', note: 'Single color' },
  { file: 'squalrus-mark-mono-black.svg', label: 'Mono black', note: 'Single color' },
];

function Swatch({ name, hex, use }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // Clipboard can be blocked; the hex is still on screen to select by hand.
    }
  };

  return (
    <li className="swatch">
      <button type="button" className="swatch-chip px" style={{ background: hex }} onClick={copy} aria-label={`Copy ${name} ${hex}`}></button>
      <span className="swatch-name">{name}</span>
      <span className="swatch-hex" aria-live="polite">{copied ? 'Copied' : hex}</span>
      <span className="swatch-use">{use}</span>
    </li>
  );
}

export default function Press() {
  useSeo({
    title: 'Press Kit — Squalrus Games',
    description: 'Press kit and brand guide for Squalrus Games: studio facts, game fact sheets for Chogots and Infinity Space, logo downloads, colors, and type.',
    path: '/press',
  });

  return (
    <DocPage crumb="Press" title="Press Kit" meta="Brand & press resources · Updated September 26, 2026" wide>
      <p className="lede">Everything you need to write about Squalrus Games: who we are, what we're making, and how to use the squalrus. For anything that isn't here, email <a href="mailto:games@squalr.us?subject=Press">games@squalr.us</a>.</p>

      <section className="press-section" aria-labelledby="press-studio">
        <h2 id="press-studio"><span className="section-num">01</span>The studio</h2>
        <div className="press-split">
          <div>
            <p>Squalrus Games is an independent studio based in Seattle, Washington. We make small games, try out strange ideas, and build software that no one asked for — then finish it anyway, out of spite.</p>
            <p>Our games are self-published and deliberately small. A creature that is probably fine. A space shooter that goes on forever. None of them require an account, and none of them collect personal data.</p>
          </div>
          <dl className="fact-sheet">
            {FACTS.map(([label, value]) => (
              <div key={label} className="fact">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="press-section" aria-labelledby="press-games">
        <h2 id="press-games"><span className="section-num">02</span>The games</h2>
        <div className="game-cards">
          {GAMES.map(({ tag, name, tone, tagline, description, rows, anchor }) => (
            <div key={name} className={`game-card game-card--${tone}`}>
              <span className="game-tag game-tag--inline px">{tag}</span>
              <h3>{name}</h3>
              <p className="game-card-tagline">{tagline}</p>
              <p>{description}</p>
              <dl>
                {rows.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <Link to={anchor} className="game-card-link">See it on the homepage ▸</Link>
            </div>
          ))}
        </div>
        <p className="fine-print">Screenshots and key art are on the way. Need something sooner? Email us and we'll send what we have.</p>
      </section>

      <section className="press-section" aria-labelledby="press-logo">
        <h2 id="press-logo"><span className="section-num">03</span>Logo</h2>
        <p>The squalrus: walrus up front, squirrel out back, drawn on a 16-pixel grid. The smallest size is the source, not a squashed copy, so scale it in whole multiples only — 16, 32, 48, 64 and up.</p>

        <div className="logo-grid">
          <figure className="logo-tile logo-tile--primary dots">
            <figcaption>Primary lockup</figcaption>
            <div className="lockup">
              <SqualrusMark size={96} />
              <div className="lockup-text">
                <span className="lockup-word">Squalrus</span>
                <span className="lockup-games"><span className="rule"></span>Games<span className="rule"></span></span>
              </div>
            </div>
          </figure>
          <figure className="logo-tile logo-tile--cream">
            <figcaption>On light</figcaption>
            <div className="lockup lockup--light">
              <SqualrusMark size={64} variant="light" />
              <div className="lockup-text">
                <span className="lockup-word">Squalrus</span>
                <span className="lockup-chip px">Games</span>
              </div>
            </div>
          </figure>
          <figure className="logo-tile logo-tile--stacked dots">
            <figcaption>Stacked</figcaption>
            <div className="lockup lockup--stacked">
              <SqualrusMark size={96} />
              <span className="lockup-word">Squalrus</span>
              <span className="lockup-games">Games</span>
            </div>
          </figure>
          <figure className="logo-tile logo-tile--black">
            <figcaption>Mono light</figcaption>
            <SqualrusMark size={96} mono="#e8f1ef" />
          </figure>
          <figure className="logo-tile logo-tile--cyan">
            <figcaption>Mono dark</figcaption>
            <SqualrusMark size={96} mono="#050c11" />
          </figure>
        </div>

        <ul className="downloads">
          {DOWNLOADS.map(({ file, label, note }) => (
            <li key={file}>
              <a className="download px" href={`/press/${file}`} download>
                <span className="download-label">{label}</span>
                <span className="download-note">{note} · SVG</span>
              </a>
            </li>
          ))}
        </ul>

        <dl className="rules">
          <div><dt>Clear space</dt><dd>2 mark-pixels on every side</dd></div>
          <div><dt>Min size</dt><dd>Mark 16 px · lockup 120 px wide</dd></div>
          <div><dt>Don't</dt><dd>Anti-alias, flip, rotate, recolor the nose, or scale by non-integers</dd></div>
        </dl>
      </section>

      <section className="press-section" aria-labelledby="press-color">
        <h2 id="press-color"><span className="section-num">04</span>Color</h2>
        <p>Arcade after dark: phosphor text on a near-black teal, one cyan, one hot pink, and hard pixel edges. Tap a swatch to copy its hex.</p>
        <ul className="swatches">
          {COLORS.map((c) => <Swatch key={c.hex} {...c} />)}
        </ul>
      </section>

      <section className="press-section" aria-labelledby="press-type">
        <h2 id="press-type"><span className="section-num">05</span>Type</h2>
        <p>Three free Google Fonts.</p>
        <ul className="type-rows">
          {TYPE.map(({ name, href, use, sample }) => (
            <li key={name} className="type-row">
              <div className="type-meta">
                <a href={href} target="_blank" rel="noopener noreferrer" className="type-name">{name} ↗</a>
                <span>{use}</span>
              </div>
              {sample}
            </li>
          ))}
        </ul>
      </section>

      <section className="press-section" aria-labelledby="press-name">
        <h2 id="press-name"><span className="section-num">06</span>Writing about us</h2>
        <ul className="naming">
          <li><b>Squalrus Games</b> in running text. <b>SQUALRUS GAMES LLC</b> only where the legal entity matters.</li>
          <li><b>Chogots</b>, one word. A single creature is a chogot.</li>
          <li><b>Infinity Space</b>, two words, never “InfinitySpace”.</li>
          <li>The name is a squirrel and a walrus. So is the logo.</li>
        </ul>
      </section>
    </DocPage>
  );
}
