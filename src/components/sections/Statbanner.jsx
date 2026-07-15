import { Download } from "lucide-react";

/* ============================================================
   StatBanner — dark full-width band: a big stat number + label
   + icon on the left, a background photo with a download/CTA
   button on the right, separated by a thin vertical rule.
   Matches the "50+ Materials — Download The Complete Formlabs
   Material Library" pattern, recolored to the site's monochrome
   black/cream system (no brand colors).

   Usage (data lives in the page's data/*.js file, per README):

   import StatBanner from "../components/sections/StatBanner";
   <StatBanner
     stat="50+"
     statLabel="Materials"
     icon="/assets/img/formlabs/materials-icon.webp"   // optional
     sub="Download The Complete Formlabs Material Library Now"
     btnText="Download"
     btnHref="/assets/files/formlabs-materials.pdf"
     image="/assets/img/formlabs/form-cure-scene.webp"
   />
   ============================================================ */

function StatBannerStyles() {
  return (
    <style>{`
      .statband{padding-top:0;padding-bottom:0}
      .statband__in{display:grid;grid-template-columns:1.1fr auto 1fr;gap:clamp(28px,4vw,60px);align-items:center;
        min-height:280px}
      .statband__l{padding-block:clamp(34px,5vw,50px)}
      .statband__toprow{display:flex;align-items:center;flex-wrap:wrap;gap:16px 20px}
      .statband__num{font-family:"Roboto",system-ui,sans-serif;font-weight:700;line-height:1;
        font-size:clamp(2.6rem,6vw,4.4rem);letter-spacing:-.02em;color:var(--on-dark)}
      .statband__icon{height:56px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:.9}
      .statband__lab{font-weight:700;text-transform:uppercase;letter-spacing:.02em;
        font-size:clamp(1.3rem,2.4vw,1.9rem);color:var(--on-dark)}
      .statband__sub{margin-top:18px;color:var(--mute-dark);max-width:38ch;font-size:1rem;line-height:1.6}

      .statband__divider{width:1px;align-self:stretch;background:var(--line-dark)}

      .statband__r{position:relative;overflow:hidden;align-self:stretch;min-height:220px;
        display:flex;align-items:center}
      .statband__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
      .statband__overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.7) 0%,rgba(0,0,0,.35) 100%)}
      .statband__btn{position:relative;z-index:1;margin-left:clamp(20px,3vw,44px)}

      @media(max-width:900px){
        .statband__in{grid-template-columns:1fr}
        .statband__divider{display:none}
        .statband__r{min-height:200px}
        .statband__btn{margin-left:24px}
      }
      @media(max-width:560px){
        .statband__toprow{gap:12px 14px}
        .statband__icon{height:42px}
      }
    `}</style>
  );
}

export default function StatBanner({
  stat,
  statLabel,
  icon,
  sub,
  btnText = "Download",
  btnHref = "#",
  image,
}) {
  return (
    <section className="sec statband sec--dark">
      <StatBannerStyles />
      <div className="wrap statband__in">
        <div className="statband__l" data-reveal="">
          <div className="statband__toprow">
            {stat && <span className="statband__num">{stat}</span>}
            {icon && <img className="statband__icon" src={icon} alt="" decoding="async" loading="lazy" />}
            {statLabel && <span className="statband__lab">{statLabel}</span>}
          </div>
          {sub && <p className="statband__sub">{sub}</p>}
        </div>

        {image && <div className="statband__divider" aria-hidden="true" />}

        <div className="statband__r" data-reveal="mask">
          {image && <img className="statband__bg" src={image} alt="" decoding="async" loading="lazy" />}
          {image && <div className="statband__overlay" />}
          {btnText && (
            <a className="btn btn--invert statband__btn" href={btnHref} download>
              <span className="btn__ico">
                <Download size={18} />
              </span>
              <span className="btn__t">{btnText}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}