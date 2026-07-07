import { useState } from "react";

/* ============================================================
   FAQ — clean, premium, self-contained.
   All styles live in this component. Uses a grid-rows height
   animation (smooth, no max-height guessing) and a lucide Plus
   icon that rotates into a minus when open.
   ============================================================ */
function FAQStyles() {
  return (
    <style>{`
      .faq-scope .faq{max-width:860px;margin:0 auto;
        border:1px solid var(--line-cream);background:var(--white)}
      .faq-scope.sec--dark .faq{border-color:var(--line-dark);background:transparent}

      .faq-scope .faq__item{border-top:1px solid var(--line-cream)}
      .faq-scope .faq__item:first-child{border-top:0}
      .faq-scope.sec--dark .faq__item{border-color:var(--line-dark)}

      .faq-scope .faq__q{width:100%;text-align:left;background:none;border:0;cursor:pointer;
        display:flex;align-items:center;gap:20px;justify-content:space-between;
        padding:clamp(20px,2.4vw,26px) clamp(20px,2.6vw,30px);
        font-family:"Roboto",system-ui,sans-serif;font-weight:600;
        font-size:clamp(1rem,1.5vw,1.18rem);letter-spacing:-.01em;
        color:inherit;line-height:1.35;transition:color .25s var(--ease)}
      .faq-scope .faq__q:hover{color:var(--mute-cream)}
      .faq-scope.sec--dark .faq__q:hover{color:var(--on-dark)}
      .faq-scope .faq__item.open .faq__q{color:inherit}

      .faq-scope .faq__ico{flex:none;width:34px;height:34px;display:grid;place-items:center;
        border:1px solid var(--line-cream);border-radius:50%;
        transition:background .3s var(--ease),color .3s var(--ease),transform .35s var(--ease)}
      .faq-scope.sec--dark .faq__ico{border-color:var(--line-dark)}
      .faq-scope .faq__ico svg{width:16px;height:16px;transition:transform .35s var(--ease)}
      .faq-scope .faq__item.open .faq__ico{background:var(--black);color:var(--white);transform:rotate(0deg)}
      .faq-scope.sec--dark .faq__item.open .faq__ico{background:var(--white);color:var(--black)}
      .faq-scope .faq__item.open .faq__ico svg{transform:rotate(45deg)}

      .faq-scope .faq__a{display:grid;grid-template-rows:0fr;
        transition:grid-template-rows .4s var(--ease)}
      .faq-scope .faq__item.open .faq__a{grid-template-rows:1fr}
      .faq-scope .faq__a > div{overflow:hidden;min-height:0}
      .faq-scope .faq__a p{margin:0;
        padding:0 clamp(20px,2.6vw,30px) clamp(22px,2.6vw,28px);
        color:var(--mute-cream);font-size:1rem;line-height:1.7;max-width:70ch}
      .faq-scope.sec--dark .faq__a p{color:var(--mute-dark)}

      .faq-scope .faq__head{text-align:center;margin-bottom:clamp(30px,4.5vw,46px)}
      .faq-scope .faq__head .label{display:inline-block;margin-bottom:14px;color:var(--mute-cream)}
      .faq-scope.sec--dark .faq__head .label{color:var(--mute-dark)}

      .faq-scope .faq__cat{margin-bottom:clamp(26px,4vw,40px)}
      .faq-scope .faq__cat:last-child{margin-bottom:0}
      .faq-scope .faq__cat > h3{text-transform:none;font-size:1.3rem;letter-spacing:-.01em;
        margin:0 0 16px;max-width:860px;margin-inline:auto}

      @media(max-width:760px){
        .faq-scope .faq__q{gap:14px}
      }
    `}</style>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className={`faq__item${open ? " open" : ""}`} data-reveal="">
      <button className="faq__q" aria-expanded={open} onClick={onToggle}>
        <span>{q}</span>
        <span className="faq__ico"><PlusIcon /></span>
      </button>
      <div className="faq__a">
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({
  heading = "Frequently asked questions",
  items,
  bg = "cream",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`sec sec--${bg} faq-scope`}>
      <FAQStyles />
      <div className="wrap">
        <div className="faq__head">
          <span className="label">FAQ</span>
          <h2 className="h2-xl center" data-reveal="" style={{ maxWidth: "22ch" }}>
            {heading}
          </h2>
        </div>
        <div className="faq" data-stagger="">
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
  );
}

export function FAQCategorized({ categories, heading }) {
  const [openKey, setOpenKey] = useState("0-0");

  return (
    <section className="sec sec--cream faq-scope">
      <FAQStyles />
      <div className="wrap">
        {heading && (
          <div className="faq__head">
            <span className="label">FAQ</span>
            <h2 className="h2-xl center" data-reveal="" style={{ maxWidth: "22ch" }}>
              {heading}
            </h2>
          </div>
        )}
        {categories.map((cat, i) => (
          <div className="faq__cat" key={i}>
            <h3 data-reveal="">{cat.category}</h3>
            <div className="faq" data-stagger="">
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
  );
}
