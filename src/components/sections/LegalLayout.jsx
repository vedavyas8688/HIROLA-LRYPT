import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ============================================================
   LegalLayout — shared shell for Privacy & Terms.
   Signature: a hero styled like an engineering drawing's
   title block (Document / Rev / Effective / Status), paired
   with a sticky numbered index that tracks scroll position —
   a nod to drawing sheet indexes and revision stamps.
   ============================================================ */

function LegalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

      .lg-scope{
        --ink:#12151A;
        --ink-soft:#4A5058;
        --paper:#FFFFFF;
        --wash:#F6F6F4;
        --line:#E1E1DC;
        --accent:#1E5B7A;
        --accent-soft:#EAF2F5;
        --on-dark:#F3F1EA;
        --on-dark-soft:#A9AFB6;
        font-family:'Inter',system-ui,sans-serif;
        color:var(--ink);
        background:var(--paper);
      }

      .lg-mono{ font-family:'IBM Plex Mono',ui-monospace,monospace; }

      /* ---------- hero / title block ---------- */
      .lg-hero{
        position:relative;
        background:var(--ink);
        color:var(--on-dark);
        padding:clamp(52px,8vw,88px) clamp(20px,6vw,64px) 0;
        overflow:hidden;
      }
      .lg-hero::before{
        content:'';
        position:absolute; inset:0;
        background-image:
          repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 88px),
          repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 88px);
        mask-image:linear-gradient(to bottom, black, transparent 85%);
        pointer-events:none;
      }
      .lg-hero-inner{ position:relative; max-width:960px; margin:0 auto; }
      .lg-eyebrow{
        display:flex; align-items:center; gap:10px;
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.72rem; letter-spacing:.16em; text-transform:uppercase;
        color:#8FB8CC; margin-bottom:22px;
      }
      .lg-eyebrow::before{ content:''; width:26px; height:1px; background:#8FB8CC; }

      .lg-title{
        font-family:'Newsreader', Georgia, serif;
        font-weight:500;
        font-size:clamp(2.2rem, 5vw, 3.6rem);
        line-height:1.08;
        letter-spacing:-.01em;
        margin:0 0 16px;
      }
      .lg-subhead{
        font-family:'Newsreader', Georgia, serif;
        font-style:italic;
        font-weight:400;
        font-size:clamp(1rem,1.6vw,1.2rem);
        color:var(--on-dark-soft);
        max-width:52ch;
        margin:0 0 clamp(36px,5vw,52px);
        line-height:1.6;
      }

      /* title block: like a drawing sheet's corner stamp */
      .lg-titleblock{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        border:1px solid rgba(255,255,255,.16);
        border-bottom:none;
      }
      .lg-tb-cell{
        padding:14px clamp(14px,2vw,20px);
        border-right:1px solid rgba(255,255,255,.16);
      }
      .lg-tb-cell:last-child{ border-right:none; }
      .lg-tb-label{
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.64rem; letter-spacing:.1em; text-transform:uppercase;
        color:var(--on-dark-soft); margin-bottom:6px;
      }
      .lg-tb-value{
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.86rem; color:var(--on-dark);
      }
      @media(max-width:640px){
        .lg-titleblock{ grid-template-columns:repeat(2,1fr); }
        .lg-tb-cell:nth-child(2){ border-right:none; }
      }

      /* ---------- body: index + content ---------- */
      .lg-body{
        max-width:960px; margin:0 auto;
        padding:0 clamp(20px,6vw,64px);
        display:grid;
        grid-template-columns:200px 1fr;
        gap:clamp(32px,5vw,64px);
      }
      @media(max-width:860px){
        .lg-body{ grid-template-columns:1fr; }
      }

      .lg-index{
        display:none;
      }
      @media(min-width:861px){
        .lg-index{
          display:block;
          position:sticky; top:0;
          align-self:start;
          padding-top:clamp(48px,6vw,72px);
          max-height:100vh; overflow-y:auto;
        }
      }
      .lg-index-label{
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.66rem; letter-spacing:.14em; text-transform:uppercase;
        color:var(--ink-soft); margin-bottom:16px;
      }
      .lg-index-list{ list-style:none; margin:0; padding:0; }
      .lg-index-item{ margin:0; }
      .lg-index-link{
        display:flex; gap:10px; align-items:baseline;
        padding:7px 0 7px 12px;
        border-left:2px solid transparent;
        font-size:.83rem; color:var(--ink-soft);
        text-decoration:none;
        transition:color .2s ease, border-color .2s ease;
      }
      .lg-index-link:hover{ color:var(--ink); }
      .lg-index-link.active{
        color:var(--accent);
        border-left-color:var(--accent);
      }
      .lg-index-num{
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.72rem; color:inherit; opacity:.7;
      }

      /* mobile index: horizontal pill strip */
      .lg-index-mobile{
        display:flex; gap:8px; overflow-x:auto;
        padding:16px 0 20px;
        border-bottom:1px solid var(--line);
        margin-bottom:8px;
        scrollbar-width:none;
      }
      .lg-index-mobile::-webkit-scrollbar{ display:none; }
      @media(min-width:861px){ .lg-index-mobile{ display:none; } }
      .lg-pill{
        flex:none;
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.72rem; white-space:nowrap;
        padding:6px 12px;
        border:1px solid var(--line);
        border-radius:999px;
        color:var(--ink-soft);
        text-decoration:none;
      }
      .lg-pill.active{
        border-color:var(--accent);
        color:var(--accent);
        background:var(--accent-soft);
      }

      .lg-content{ padding:clamp(40px,6vw,64px) 0 96px; }

      .lg-section{
        padding-top:44px; margin-top:-20px;
        border-top:1px solid var(--line);
      }
      .lg-section:first-child{ border-top:none; padding-top:0; margin-top:0; }
      .lg-section + .lg-section{ padding-top:44px; }

      .lg-section-head{
        display:flex; align-items:baseline; gap:14px;
        margin-bottom:16px;
      }
      .lg-section-num{
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.8rem; color:var(--accent);
      }
      .lg-section-heading{
        font-family:'Newsreader', Georgia, serif;
        font-weight:500;
        font-size:clamp(1.2rem,2vw,1.44rem);
        letter-spacing:-.005em;
        margin:0;
      }
      .lg-p{
        margin:0 0 14px;
        font-size:.98rem; line-height:1.75;
        color:var(--ink-soft);
        max-width:66ch;
        white-space:pre-line;
      }
      .lg-ul{ margin:8px 0 14px; padding:0; list-style:none; max-width:66ch; }
      .lg-ul li{
        position:relative; padding-left:20px;
        font-size:.98rem; line-height:1.7; color:var(--ink-soft);
        margin-bottom:8px;
      }
      .lg-ul li::before{
        content:''; position:absolute; left:0; top:.55em;
        width:6px; height:6px; background:var(--accent);
      }

      .lg-footer{
        border-top:1px solid var(--line);
        background:var(--wash);
      }
      .lg-footer-inner{
        max-width:960px; margin:0 auto;
        padding:clamp(32px,5vw,48px) clamp(20px,6vw,64px);
        display:flex; flex-wrap:wrap; gap:24px;
        justify-content:space-between; align-items:center;
      }
      .lg-footer-note{ font-size:.86rem; color:var(--ink-soft); }
      .lg-footer-link{
        font-family:'IBM Plex Mono',ui-monospace,monospace;
        font-size:.8rem; color:var(--accent);
        text-decoration:none;
        border-bottom:1px solid transparent;
      }
      .lg-footer-link:hover{ border-bottom-color:var(--accent); }

      .lg-index-link:focus-visible,
      .lg-pill:focus-visible,
      .lg-footer-link:focus-visible{
        outline:2px solid var(--accent); outline-offset:3px;
      }

      @media (prefers-reduced-motion: reduce){
        .lg-index-link, .lg-footer-link{ transition:none; }
      }
    `}</style>
  );
}

export default function LegalLayout({
  eyebrow,
  title,
  subhead,
  docNumber,
  revision,
  effectiveDate,
  status = "Active",
  sections,
  crossLinkTo,
  crossLinkLabel,
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="lg-scope">
      <LegalStyles />

      <header className="lg-hero">
        <div className="lg-hero-inner">
          <div className="lg-eyebrow">{eyebrow}</div>
          <h1 className="lg-title">{title}</h1>
          {subhead && <p className="lg-subhead">{subhead}</p>}

          <div className="lg-titleblock">
            <div className="lg-tb-cell">
              <div className="lg-tb-label">Document</div>
              <div className="lg-tb-value">{docNumber}</div>
            </div>
            <div className="lg-tb-cell">
              <div className="lg-tb-label">Revision</div>
              <div className="lg-tb-value">{revision}</div>
            </div>
            <div className="lg-tb-cell">
              <div className="lg-tb-label">Effective</div>
              <div className="lg-tb-value">{effectiveDate}</div>
            </div>
            <div className="lg-tb-cell">
              <div className="lg-tb-label">Status</div>
              <div className="lg-tb-value">{status}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="lg-body">
        <nav className="lg-index" aria-label="Table of contents">
          <div className="lg-index-inner">
            <div className="lg-index-label">Contents</div>
            <ul className="lg-index-list">
              {sections.map((s, i) => (
                <li key={s.id} className="lg-index-item">
                  <a
                    href={`#${s.id}`}
                    className={`lg-index-link ${activeId === s.id ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = sectionRefs.current[s.id];
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    <span className="lg-index-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.heading}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="lg-content">
          <div className="lg-index-mobile">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`lg-pill ${activeId === s.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = sectionRefs.current[s.id];
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {s.heading}
              </a>
            ))}
          </div>

          {sections.map((s) => (
            <section
              id={s.id}
              key={s.id}
              className="lg-section"
              ref={(el) => (sectionRefs.current[s.id] = el)}
            >
              <div className="lg-section-head">
                <div className="lg-section-num">{String(sections.indexOf(s) + 1).padStart(2, "0")}</div>
                <h3 className="lg-section-heading">{s.heading}</h3>
              </div>
              {s.body && s.body.map((p, idx) => <p key={idx} className="lg-p">{p}</p>)}
              {s.bullets && (
                <ul className="lg-ul">{s.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
              )}
            </section>
          ))}

          <footer className="lg-footer">
            <div className="lg-footer-inner">
              <div className="lg-footer-note">© {new Date().getFullYear()} LRYPT Technologies</div>
              <div>
                {crossLinkTo && (
                  <Link to={crossLinkTo} className="lg-footer-link">
                    {crossLinkLabel}
                  </Link>
                )}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
