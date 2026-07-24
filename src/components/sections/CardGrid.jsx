import { Link } from "react-router-dom";

export default function CardGrid({ bg = "cream", heading, subheading, items }) {
  const twoCardLayout = items.length === 2;

  return (
    <section className={`sec sec--${bg}`}>
      <style>{`
        .posts.posts--two{grid-template-columns:repeat(2,minmax(0,1fr));max-width:900px;margin-inline:auto}
        @media(max-width:600px){.posts.posts--two{grid-template-columns:1fr}}
      `}</style>
      <div className="wrap">
        {(heading || subheading) && (
          <div className="proj-head">
            {heading && <h2 data-reveal="">{heading}</h2>}
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
                <div className="post__meta">{item.meta}</div>
                <h3 style={{ color: "#000" }}>{item.title}</h3>
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
