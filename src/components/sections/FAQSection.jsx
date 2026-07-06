import { useRef, useState } from "react";

export function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  return (
    <div className={`faq__item${open ? " open" : ""}`} data-reveal="">
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {q}
      </button>
      <div
        className="faq__a"
        style={{ maxHeight: open ? bodyRef.current?.scrollHeight ?? 1000 : 0 }}
      >
        <p ref={bodyRef}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection({ heading = "Frequently asked questions", items, bg = "cream", tight = false }) {
  return (
    <section className={`sec sec--${bg}`} style={tight ? { paddingTop: 0 } : undefined}>
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "clamp(34px,5vw,52px)" }}>
          <span className="label">FAQ</span>
          <h2 className="h2-xl center" data-reveal="" style={{ marginTop: 14, maxWidth: "22ch" }}>
            {heading}
          </h2>
        </div>
        <div className="faq" data-stagger="">
          {items.map((it, i) => (
            <FAQItem q={it.q} a={it.a} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQCategorized({ categories }) {
  return (
    <section className="sec sec--cream" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="faq" style={{ maxWidth: 920 }}>
          {categories.map((cat, i) => (
            <div style={{ marginBottom: 18 }} key={i}>
              <h3 data-reveal="" style={{ textTransform: "none", fontSize: "1.4rem", margin: "24px 0 8px" }}>
                {cat.category}
              </h3>
              <div className="faq" data-stagger="">
                {cat.items.map((it, j) => (
                  <FAQItem q={it.q} a={it.a} key={j} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
