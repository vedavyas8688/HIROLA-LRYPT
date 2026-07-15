import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

/* ============================================================
   TabbedProductGrid — heading, a row of top-level tabs, an
   optional row of secondary tabs, and a grid of product cards
   (image + label). Matches the "SLA / SLS → Printers / Post
   Processing → product cards" pattern, recolored to the site's
   monochrome black/cream system.

   Any item can optionally include a `detail` object — if it
   does, the card becomes clickable and opens ProductDetailModal
   with that data. `detail.variant` picks the layout:

     "gallery"  → big image + arrows + thumbnails + specs +
                  Key Features / Ideal For tabs
     "simple"   → single image + heading + paragraph + CTA

   Example item with a gallery-variant detail:
   {
     img: "/assets/img/formlabs/form4l.webp",
     alt: "Form 4L",
     label: "Form 4L",
     detail: {
       variant: "gallery",
       title: "FORM 4L",
       tagline: "Where Speed Meets Precision",
       images: [
         { src: "/assets/img/formlabs/form4l.webp", alt: "Form 4L" },
         { src: "/assets/img/formlabs/form4l-2.webp", alt: "Form 4L detail" },
       ],
       paragraphs: [
         "The Form 4L's incredible speed is powered by Formlabs' Low Force Display Print Engine...",
       ],
       specs: [
         { label: "Build Volume", value: "35.3 x 19.6 x 35.0 cm\n13.9 x 7.7 x 13.8 in" },
         { label: "Technology", value: "Low Force Display (LFD)" },
       ],
       keyFeatures: [
         { label: "Blazing Fast", text: "Large prints in under 6 hours." },
       ],
       idealFor: ["Engineering teams needing large-format parts fast"],
       btnText: "Request a Quote",
       btnHref: "/contact",
     },
   }

   Example item with a simple-variant detail:
   {
     img: "/assets/img/formlabs/fuse-sift.webp",
     alt: "Fuse Sift X1",
     label: "Fuse Sift X1",
     detail: {
       variant: "simple",
       title: "FUSE SIFT X1",
       heading: "Automated Large-Format Powder Recovery For Uninterrupted Production",
       paragraphs: ["Fuse Sift X1 is a large format powder recovery station..."],
       btnText: "Request a Quote",
       btnHref: "/contact",
     },
   }

   Items without a `detail` object render exactly as before —
   no click behavior, no modal.

   `groups` with just one entry hides the top tab row; a
   `subgroups` array with just one entry hides the sub-tab row —
   so the same component also works as a plain product grid.
   ============================================================ */

function TabGridStyles() {
  return (
    <style>{`
      .tabgrid__h{max-width:26ch}
      .tabgrid__h.center{margin-inline:auto;text-align:center;max-width:34ch}

      .tabgrid__tabs{display:flex;justify-content:center;flex-wrap:wrap;gap:clamp(20px,4vw,44px);
        margin-top:clamp(34px,5vw,52px);border-bottom:1px solid var(--line-cream)}
      .sec--dark .tabgrid__tabs{border-color:var(--line-dark)}
      .tabgrid__tab{background:none;border:0;padding:0 0 16px;font-weight:700;text-transform:uppercase;
        letter-spacing:.04em;font-size:.86rem;color:var(--mute-cream);position:relative;transition:color .3s var(--ease)}
      .sec--dark .tabgrid__tab{color:var(--mute-dark)}
      .tabgrid__tab::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--black);
        transform:scaleX(0);transform-origin:left;transition:transform .35s var(--ease)}
      .sec--dark .tabgrid__tab::after{background:var(--white)}
      .tabgrid__tab.is-active{color:var(--on-cream)}
      .sec--dark .tabgrid__tab.is-active{color:var(--on-dark)}
      .tabgrid__tab.is-active::after{transform:scaleX(1)}
      .tabgrid__tab:hover{color:var(--on-cream)}
      .sec--dark .tabgrid__tab:hover{color:var(--on-dark)}

      .tabgrid__subtabs{display:flex;justify-content:center;flex-wrap:wrap;gap:26px;margin-top:22px}
      .tabgrid__subtab{background:none;border:0;padding:0 0 6px;font-weight:600;text-transform:uppercase;
        letter-spacing:.03em;font-size:.76rem;color:var(--mute-cream);border-bottom:1px solid transparent;
        transition:color .3s var(--ease),border-color .3s var(--ease)}
      .sec--dark .tabgrid__subtab{color:var(--mute-dark)}
      .tabgrid__subtab.is-active{color:var(--on-cream);border-color:var(--on-cream)}
      .sec--dark .tabgrid__subtab.is-active{color:var(--on-dark);border-color:var(--on-dark)}

      .tabgrid__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:clamp(34px,5vw,52px)}
      .tabgrid__card{background:#fff;border:1px solid var(--line-cream);display:flex;flex-direction:column;
        transition:transform .5s var(--ease),box-shadow .5s var(--ease)}
      .sec--dark .tabgrid__card{border-color:var(--line-dark)}
      .tabgrid__card:hover{transform:translateY(-4px);box-shadow:0 24px 50px -24px rgba(0,0,0,.28)}
      .tabgrid__card.is-clickable{cursor:pointer}
      .tabgrid__imgwrap{aspect-ratio:1/1;display:grid;place-items:center;padding:22px;background:#faf9f6}
      .tabgrid__imgwrap img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
      .tabgrid__lab{padding:16px 14px 20px;text-align:center;font-weight:700;text-transform:uppercase;
        letter-spacing:.03em;font-size:.82rem;border-top:1px solid var(--line-cream);color:#000}
      .sec--dark .tabgrid__lab{border-color:var(--line-dark);color:var(--on-dark)}

      @media(max-width:900px){.tabgrid__grid{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:480px){.tabgrid__grid{grid-template-columns:1fr}.tabgrid__tabs{gap:18px}}
    `}</style>
  );
}

export default function TabbedProductGrid({ bg = "cream", heading, center = true, groups = [] }) {
  const [groupIdx, setGroupIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [activeItem, setActiveItem] = useState(null);

  const group = groups[groupIdx] || {};
  const subgroups = group.subgroups || [];
  const sub = subgroups[subIdx] || subgroups[0] || {};
  const items = sub.items || group.items || [];

  function selectGroup(i) {
    setGroupIdx(i);
    setSubIdx(0);
  }

  function buildFallbackDetail(product) {
    return {
      variant: "simple",
      title: (product.label || "PRODUCT").toUpperCase(),
      heading: product.label || "Product details",
      paragraphs: [
        product.alt
          ? `${product.alt} is available through LRYPT Technologies. Contact our team for specifications, availability, and pricing.`
          : "Get in touch with our team for specifications, availability, and pricing for this solution."
      ],
      btnText: "Request a Quote",
      btnHref: "/contact",
      imgFirst: false,
    };
  }

  function handleCardClick(product) {
    const detail = product.detail || buildFallbackDetail(product);
    setActiveItem({ ...product, detail });
  }

  return (
    <section className={`sec sec--${bg}`}>
      <TabGridStyles />
      <div className="wrap tabgrid">
        {heading && (
          <h2 className={center ? "tabgrid__h center" : "tabgrid__h"} data-reveal="">
            {heading}
          </h2>
        )}

        {groups.length > 1 && (
          <div className="tabgrid__tabs" role="tablist">
            {groups.map((g, i) => (
              <button
                key={g.id || i}
                type="button"
                role="tab"
                aria-selected={i === groupIdx}
                className={`tabgrid__tab${i === groupIdx ? " is-active" : ""}`}
                onClick={() => selectGroup(i)}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}

        {subgroups.length > 1 && (
          <div className="tabgrid__subtabs" role="tablist">
            {subgroups.map((s, i) => (
              <button
                key={s.id || i}
                type="button"
                role="tab"
                aria-selected={i === subIdx}
                className={`tabgrid__subtab${i === subIdx ? " is-active" : ""}`}
                onClick={() => setSubIdx(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <div className="tabgrid__grid" data-stagger="">
          {items.map((p, i) => (
            <div
              className="tabgrid__card is-clickable"
              style={{ cursor: "pointer" }}
              data-reveal=""
              key={i}
              onClick={() => handleCardClick(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(p);
                }
              }}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
            >
              <div className="tabgrid__imgwrap">
                <img src={p.img} alt={p.alt || p.label} decoding="async" loading="lazy" />
              </div>
              {p.label && <div className="tabgrid__lab">{p.label}</div>}
            </div>
          ))}
        </div>
      </div>

      <ProductDetailModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}