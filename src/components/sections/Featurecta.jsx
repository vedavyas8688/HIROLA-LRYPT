import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ============================================================
   FeatureCTA — image + heading + copy + button, side by side.
   Self-contained (own scoped classes) but pulls colors/fonts
   from the site's global tokens (--black, --cream, --line-cream,
   --fs-h2 …) so it always matches the rest of LRYPT.

   Usage (put the data in the page's data/*.js file, per README):

   import FeatureCTA from "../components/sections/FeatureCTA";
   <FeatureCTA
     bg="cream"                // "cream" | "dark"
     imgFirst={true}           // image on the left, copy on the right
     image="/assets/img/formlabs/f4-wash-cure.webp"
     imageAlt="Formlabs 3D printers"
     label="Formlabs"                       // optional eyebrow
     heading="Precise and Versatile 3D Printing for Professionals Across Industries"
     paragraphs={["...", "..."]}            // string or array of strings
     btnText="Contact us"
     btnHref="/contact"
   />
   ============================================================ */

function FeatureCTAStyles() {
  return (
    <style>{`
      .feacta{display:grid;grid-template-columns:1fr 1.05fr;gap:clamp(30px,5vw,70px);align-items:center}
      .feacta__img{overflow:hidden;background:#fff;border:1px solid var(--line-cream)}
      .sec--dark .feacta__img{border-color:var(--line-dark)}
      .feacta__img img{width:100%;height:100%;object-fit:contain;min-height:340px;padding:26px}
      .feacta__r h2{font-size:var(--fs-h2);max-width:20ch}
      .feacta__r .lead{margin-top:20px}
      .feacta__r .lead + .lead{margin-top:14px}
      .feacta__btn{margin-top:36px}

      @media(max-width:900px){
        .feacta{grid-template-columns:1fr}
        .feacta__img img{min-height:260px}
      }
    `}</style>
  );
}

export default function FeatureCTA({
  bg = "cream",
  imgFirst = true,
  image,
  imageAlt = "",
  label,
  heading,
  paragraphs = [],
  btnText,
  btnHref = "/contact",
}) {
  const paras = Array.isArray(paragraphs) ? paragraphs : [paragraphs].filter(Boolean);

  const media = (
    <div className="feacta__img" data-reveal="mask">
      <img src={image} alt={imageAlt} decoding="async" loading="lazy" />
    </div>
  );

  const copy = (
    <div className="feacta__r">
      {label && (
        <span className="label" data-reveal="">
          {label}
        </span>
      )}
      {heading && (
        <h2 data-reveal="" style={{ marginTop: label ? 14 : 0 }}>
          {heading}
        </h2>
      )}
      {paras.map((p, i) => (
        <p className="lead" data-reveal="" key={i}>
          {p}
        </p>
      ))}
      {btnText && (
        <div className="feacta__btn" data-reveal="">
          <Link className="btn" to={btnHref}>
            <span className="btn__ico">
              <ArrowRight size={18} />
            </span>
            <span className="btn__t">{btnText}</span>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <section className={`sec sec--${bg}`}>
      <FeatureCTAStyles />
      <div className="wrap feacta">
        {imgFirst ? (
          <>
            {media}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {media}
          </>
        )}
      </div>
    </section>
  );
}