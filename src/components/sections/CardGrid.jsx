import { Link } from "react-router-dom";

export default function CardGrid({ bg = "cream", heading, eyebrow, subheading, items, headLayout = "split" }) {
  const twoCardLayout = items.length === 2;
  const stackedHead = headLayout === "stacked";
  const splitEyebrowHead = headLayout === "split-eyebrow";

  return (
    <section className={`sec sec--${bg}`}>
      <style>{`
        .posts.posts--two{grid-template-columns:repeat(2,minmax(0,1fr));max-width:900px;margin-inline:auto}
        .proj-head.proj-head--stacked{display:block}
        .proj-head.proj-head--stacked h2{max-width:none}
        .proj-head.proj-head--split-eyebrow{align-items:flex-start}
        .proj-head.proj-head--split-eyebrow .lead{margin-left:auto}
        .proj-head.proj-head--split-eyebrow .proj-head__left{flex:1 1 420px;max-width:560px}
        .proj-head.proj-head--split-eyebrow .lead{flex:0 1 560px;margin-top:0}
        .proj-head__left{min-width:0}
        .proj-head__eyebrow{display:block;margin-top:16px;color:var(--on-cream);font-size:clamp(1.05rem,1.35vw,1.22rem);font-weight:700;line-height:1.45}
        .sec--dark .proj-head__eyebrow{color:var(--on-dark)}
        .proj-head.proj-head--stacked .lead{margin-top:10px;max-width:66ch}
        .post__subtitle{display:block;margin-top:4px;color:#111;font-size:.86rem;font-weight:800;line-height:1.35}
        @media(max-width:600px){.posts.posts--two{grid-template-columns:1fr}}
      `}</style>
      <div className="wrap">
        {(heading || eyebrow || subheading) && (
          <div className={`proj-head${stackedHead ? " proj-head--stacked" : ""}${splitEyebrowHead ? " proj-head--split-eyebrow" : ""}`}>
            {splitEyebrowHead ? (
              <div className="proj-head__left">
                {heading && <h2 data-reveal="">{heading}</h2>}
                {eyebrow && (
                  <span className="proj-head__eyebrow" data-reveal="">
                    {eyebrow}
                  </span>
                )}
              </div>
            ) : (
              <>
                {heading && <h2 data-reveal="">{heading}</h2>}
                {eyebrow && (
                  <span className="proj-head__eyebrow" data-reveal="">
                    {eyebrow}
                  </span>
                )}
              </>
            )}
            {subheading && (
              <p className="lead" data-reveal="">
                {subheading}
              </p>
            )}
          </div>
        )}
        <div className={`posts${twoCardLayout ? " posts--two" : ""}`} data-stagger="">
          {items.map((item, i) => (
            <Link className="post" data-reveal="" to={item.href} key={i}>
              <div className="post__img">
                <img src={item.img} alt={item.alt} decoding="async" loading="lazy" />
              </div>
              <div className="post__b">
                {item.meta && <div className="post__meta">{item.meta}</div>}
                <h3 style={{ color: "#000" }}>{item.title}</h3>
                {item.subTitle && <span className="post__subtitle">{item.subTitle}</span>}
                <p className="mute" style={{ fontSize: ".95rem" }}>
                  {item.desc}
                </p>
                <span className="more" style={{ color: "#000" }}>Learn more &#8594;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
