import { useState } from "react";

function FAQStyles() {
  return (
    <style>{`
      .faq-scope{
        background:var(--cream);
        color:var(--on-cream);
        padding:var(--sec-gap) 0;
      }
      .faq-scope.faq--dark{
        background:var(--black);
        color:var(--on-dark);
      }
      .faq-shell{
        max-width:var(--maxw);
        margin:0 auto;
        padding-inline:var(--pad);
      }
      .faq-eyebrow{
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:18px;
        color:currentColor;
        font-size:.86rem;
        font-weight:700;
        letter-spacing:.04em;
        text-transform:uppercase;
      }
      .faq-eyebrow::before{
        content:"";
        width:22px;
        height:1px;
        background:currentColor;
      }
      .faq-heading{
        max-width:20ch;
        margin:0 0 clamp(36px,5vw,54px);
        color:currentColor;
        font-family:"Roboto",system-ui,sans-serif;
        font-size:var(--fs-h2);
        font-weight:700;
        line-height:.98;
        letter-spacing:-.015em;
        text-transform:none;
      }
      .faq-list{
        max-width:980px;
        border-top:1px solid var(--line-cream);
      }
      .faq--dark .faq-list{
        border-color:var(--line-dark);
      }
      .faq-item{
        position:relative;
        border-bottom:1px solid var(--line-cream);
      }
      .faq--dark .faq-item{
        border-color:var(--line-dark);
      }
      .faq-q{
        display:flex;
        width:100%;
        align-items:center;
        justify-content:space-between;
        gap:24px;
        padding:clamp(22px,2.6vw,28px) 4px;
        border:0;
        background:none;
        color:currentColor;
        font:inherit;
        font-size:clamp(1.02rem,1.4vw,1.14rem);
        font-weight:700;
        line-height:1.4;
        text-align:left;
        cursor:pointer;
        transition:color .25s ease;
      }
      .faq-q:hover{
        color:var(--mute-cream);
      }
      .faq--dark .faq-q:hover{
        color:var(--mute-dark);
      }
      .faq-q:focus-visible{
        outline:2px solid currentColor;
        outline-offset:4px;
      }
      .faq-mark{
        position:relative;
        flex:none;
        width:20px;
        height:20px;
      }
      .faq-mark span{
        position:absolute;
        left:50%;
        top:50%;
        background:currentColor;
        transform:translate(-50%,-50%);
        transition:transform .35s cubic-bezier(.4,0,.2,1);
      }
      .faq-mark span.h{
        width:14px;
        height:1.5px;
      }
      .faq-mark span.v{
        width:1.5px;
        height:14px;
      }
      .faq-item.open .faq-mark span.v{
        transform:translate(-50%,-50%) scaleY(0);
      }
      .faq-a{
        display:grid;
        grid-template-rows:0fr;
        width:100%;
        transition:grid-template-rows .45s cubic-bezier(.4,0,.2,1);
      }
      .faq-item.open .faq-a{
        grid-template-rows:1fr;
      }
      .faq-a > div{
        overflow:hidden;
        width:100%;
      }
      .faq-a p{
        width:100%;
        max-width:none;
        margin:0;
        padding:0 4px clamp(24px,3vw,30px);
        color:var(--mute-cream);
        font-size:.98rem;
        line-height:1.75;
      }
      .faq--dark .faq-a p{
        color:var(--mute-dark);
      }
      .faq-cat{
        margin-bottom:clamp(40px,5vw,56px);
      }
      .faq-cat:last-child{
        margin-bottom:0;
      }
      .faq-cat h3{
        margin:0 0 14px;
        color:currentColor;
        font-family:"Roboto",system-ui,sans-serif;
        font-size:1.2rem;
        font-weight:700;
        letter-spacing:0;
        text-transform:none;
      }
      @media(max-width:600px){
        .faq-q{gap:16px}
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
