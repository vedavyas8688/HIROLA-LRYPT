import { useState } from "react";

/* ============================================================
   FAQ — premium editorial style.
   Self-contained: no dependency on external theme variables.
   Signature move: a slim accent rule draws in on the left edge
   of the open item (like a bookmark tab), paired with a
   serif/sans type pairing and a soft paper background.
   ============================================================ */

function FAQStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');

      .faq-scope{
        --paper:#FBF9F5;
        --paper-dark:#14140F;
        --ink:#1B1A17;
        --ink-soft:#5B5750;
        --line:#E4DFD3;
        --accent:#33463B;
        --accent-tint:#E9EEE9;
        --on-dark:#F2EFE7;
        --on-dark-soft:#A6A398;
        --line-dark:#2B2B24;
        color-scheme:light;
      }

      .faq-scope{
        background:var(--paper);
        padding:clamp(56px,8vw,104px) clamp(20px,5vw,32px);
        font-family:'Inter',system-ui,sans-serif;
      }
      .faq-scope.faq--dark{ background:var(--paper-dark); }

      .faq-shell{ width:min(100%, 70vw); max-width:980px; margin:0 auto; }

      .faq-eyebrow{
        display:flex; align-items:center; gap:10px;
        font-size:.75rem; letter-spacing:.14em; text-transform:uppercase;
        color:var(--accent); font-weight:600; margin-bottom:18px;
      }
      .faq-eyebrow::before{
        content:''; width:22px; height:1px; background:var(--accent);
      }
      .faq--dark .faq-eyebrow{ color:#B7C9BE; }
      .faq--dark .faq-eyebrow::before{ background:#B7C9BE; }

      .faq-heading{
        font-family:'Fraunces', Georgia, serif;
        font-weight:500;
        font-size:clamp(1.9rem, 3.4vw, 2.7rem);
        line-height:1.15;
        letter-spacing:-.01em;
        color:var(--ink);
        max-width:18ch;
        margin:0 0 clamp(36px,5vw,54px);
      }
      .faq--dark .faq-heading{ color:var(--on-dark); }

      .faq-list{
        border-top:1px solid var(--line);
      }
      .faq--dark .faq-list{ border-color:var(--line-dark); }

      .faq-item{
        position:relative;
        border-bottom:1px solid var(--line);
        padding-left:22px;
      }
      .faq--dark .faq-item{ border-color:var(--line-dark); }

      .faq-q{
        width:100%; display:flex; align-items:center; justify-content:space-between;
        gap:24px; text-align:left; background:none; border:0; cursor:pointer;
        padding:clamp(22px,2.6vw,28px) 4px;
        font-family:'Inter',system-ui,sans-serif;
        font-weight:500; font-size:clamp(1.02rem,1.4vw,1.14rem);
        color:var(--ink); letter-spacing:-.005em; line-height:1.4;
        transition:color .25s ease;
      }
      .faq--dark .faq-q{ color:var(--on-dark); }
      .faq-q:hover{ color:var(--accent); }
      .faq--dark .faq-q:hover{ color:#B7C9BE; }
      .faq-q:focus-visible{ outline:2px solid var(--accent); outline-offset:4px; }

      .faq-mark{
        flex:none; position:relative; width:20px; height:20px;
      }
      .faq-mark span{
        position:absolute; left:50%; top:50%; background:var(--ink);
        transform:translate(-50%,-50%);
        transition:transform .35s cubic-bezier(.4,0,.2,1), background .25s ease;
      }
      .faq--dark .faq-mark span{ background:var(--on-dark); }
      .faq-mark span.h{ width:14px; height:1.5px; }
      .faq-mark span.v{ width:1.5px; height:14px; }
      .faq-item.open .faq-mark span.v{ transform:translate(-50%,-50%) scaleY(0); }
      .faq-item.open .faq-mark span.h{ background:var(--accent); }
      .faq--dark .faq-item.open .faq-mark span.h{ background:#B7C9BE; }

      .faq-a{
        display:grid; grid-template-rows:0fr;
        transition:grid-template-rows .45s cubic-bezier(.4,0,.2,1);
        width:100%;
      }
      .faq-item.open .faq-a{ grid-template-rows:1fr; }
      .faq-a > div{ overflow:hidden; width:100%; }
      .faq-a p{
        margin:0; padding:0 4px clamp(24px,3vw,30px);
        font-size:.98rem; line-height:1.75; color:var(--ink-soft);
        width:100%; max-width:none;
      }
      .faq--dark .faq-a p{ color:var(--on-dark-soft); }

      .faq-cat{ margin-bottom:clamp(40px,5vw,56px); }
      .faq-cat:last-child{ margin-bottom:0; }
      .faq-cat h3{
        font-family:'Fraunces', Georgia, serif; font-weight:500;
        font-size:1.2rem; letter-spacing:-.005em;
        color:var(--ink); margin:0 0 14px;
      }
      .faq--dark .faq-cat h3{ color:var(--on-dark); }

      @media(max-width:600px){
        .faq-q{ gap:16px; }
      }
    `}</style>
  );
}

function Mark() {
  return (
    <span className="faq-mark" aria-hidden="true">
      <span className="h" />
      <span className="v" />
    </span>
  );
}

export function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-q" aria-expanded={open} onClick={onToggle}>
        <span>{q}</span>
        <Mark />
      </button>
      <div className="faq-a">
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({
  eyebrow = "Support",
  heading = "Frequently asked questions",
  items,
  dark = false,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <FAQStyles />
      <section className={`faq-scope${dark ? " faq--dark" : ""}`}>
        <div className="faq-shell">
          {eyebrow && <div className="faq-eyebrow">{eyebrow}</div>}
          <h2 className="faq-heading">{heading}</h2>
          <div className="faq-list">
            {items.map((it, i) => (
              <FAQItem
                q={it.q}
                a={it.a}
                key={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FAQCategorized({ categories, heading, eyebrow = "Support", dark = false }) {
  const [openKey, setOpenKey] = useState("0-0");

  return (
    <>
      <FAQStyles />
      <section className={`faq-scope${dark ? " faq--dark" : ""}`}>
        <div className="faq-shell">
          {heading && (
            <>
              {eyebrow && <div className="faq-eyebrow">{eyebrow}</div>}
              <h2 className="faq-heading">{heading}</h2>
            </>
          )}
          {categories.map((cat, i) => (
            <div className="faq-cat" key={i}>
              <h3>{cat.category}</h3>
              <div className="faq-list">
                {cat.items.map((it, j) => {
                  const key = `${i}-${j}`;
                  return (
                    <FAQItem
                      q={it.q}
                      a={it.a}
                      key={j}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? "" : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}