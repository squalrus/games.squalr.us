import { Link } from 'react-router-dom';

// Shared subpage template: dotted title band with breadcrumb, pixel stripe and meta line, then a readable column.
export default function DocPage({ crumb, title, meta, wide, children }) {
  return (
    <>
      <div className="doc-hero dots">
        <div className={`doc-hero-inner${wide ? ' doc-hero-inner--wide' : ''}`}>
          <div className="crumb">
            <Link to="/">Home</Link> <span className="crumb-sep" aria-hidden="true">▸</span> {crumb}
          </div>
          <h1>{title}</h1>
          <div className="doc-meta">
            <span className="stripe" aria-hidden="true"><i></i><i></i><i></i></span>
            <span>{meta}</span>
          </div>
        </div>
      </div>
      <article className={`doc${wide ? ' doc--wide' : ''}`}>{children}</article>
    </>
  );
}
