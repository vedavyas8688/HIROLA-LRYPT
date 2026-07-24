import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

function ProductSelector({ products, onOpen }) {
  const [open, setOpen] = useState(false);
  const hasProducts = products.length > 0;

  return (
    <div className={`sim-product-select${open ? " is-open" : ""}`}>
      <button type="button" aria-expanded={open} disabled={!hasProducts} onClick={() => setOpen((value) => !value)}>
        <span>{hasProducts ? "Select Product" : "Products coming soon"}</span>
        <ChevronDown size={19} />
      </button>
      {open && (
        <div className="sim-product-select__menu">
          {products.map((product) => (
            <button type="button" onClick={() => onOpen(product.href)} key={product.href}>
              <span>{product.label}</span><ArrowRight size={18} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SimulationSolutionsGrid({ kicker, heading, subheading, items }) {
  const navigate = useNavigate();

  const openProduct = (href) => navigate(href);

  return (
    <section className="sim-solutions sec sec--cream">
      <style>{`
        .sim-solutions__head{text-align:center;max-width:800px;margin:0 auto clamp(56px,8vw,110px)}
        .sim-solutions__kicker{display:block;margin-bottom:22px;font-size:.72rem;letter-spacing:.32em;text-transform:uppercase;color:var(--mute-cream)}
        .sim-solutions__head h2{margin:0 auto;font-size:clamp(2rem,3.4vw,3.15rem);line-height:1.12;letter-spacing:-.025em;text-transform:none;max-width:24ch}
        .sim-solutions__head p{margin:28px auto 0;max-width:58ch;font-size:clamp(1rem,1.4vw,1.18rem);line-height:1.65;color:var(--mute-cream)}
        .sim-solutions__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px}
        .sim-solution-card{display:flex;flex-direction:column;min-height:330px;padding:clamp(28px,3vw,40px);background:#fff}
        .sim-solution-card h3{margin:0 0 18px;font-size:clamp(1.25rem,1.7vw,1.55rem);line-height:1.3;text-transform:none;letter-spacing:-.015em}
        .sim-solution-card p{margin:0 0 28px;color:var(--mute-cream);font-size:1rem;line-height:1.6}
        .sim-product-select{position:relative;margin-top:auto}.sim-product-select>button{display:flex;width:100%;min-height:46px;align-items:center;justify-content:space-between;padding:0 13px;border:1px solid #777;background:#fff;color:var(--ink);font:inherit;cursor:pointer;transition:border-color .2s ease,color .2s ease,box-shadow .2s ease}.sim-product-select>button:hover:not(:disabled),.sim-product-select.is-open>button{border-color:#087bd8;color:#087bd8;box-shadow:0 0 0 1px #087bd8}.sim-product-select>button svg{transition:transform .25s ease}.sim-product-select.is-open>button svg{transform:rotate(180deg)}.sim-product-select>button:disabled{cursor:not-allowed;color:#666;background:#fafafa}.sim-product-select__menu{position:absolute;z-index:5;top:calc(100% + 8px);left:0;width:100%;border:1px solid #87bce7;background:#fff;box-shadow:0 10px 28px rgba(0,0,0,.1)}.sim-product-select__menu button{display:flex;width:100%;align-items:center;justify-content:space-between;padding:13px;border:0;background:#fff;color:#087bd8;font:inherit;cursor:pointer;transition:background .2s ease,padding .2s ease}.sim-product-select__menu button:hover{padding-left:18px;background:#f0f7fd}
        @media(max-width:900px){.sim-solutions__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:600px){.sim-solutions__grid{grid-template-columns:1fr;gap:18px}.sim-solution-card{min-height:290px}.sim-solutions__head{margin-bottom:48px}}
      `}</style>
      <div className="wrap">
        <header className="sim-solutions__head">
          {kicker && <span className="sim-solutions__kicker" data-reveal="">{kicker}</span>}
          <h2 data-reveal="">{heading}</h2>
          {subheading && <p data-reveal="">{subheading}</p>}
        </header>
        <div className="sim-solutions__grid" data-stagger="">
          {items.map((item) => {
            const products = item.products || [];
            return (
              <article className="sim-solution-card" data-reveal="" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ProductSelector products={products} onOpen={openProduct} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
