export default function ProductGrid({ bg = "cream", heading, subheading, wide = false, items }) {
  return (
    <section className={`sec sec--${bg}`}>
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
        <div className={`prodgrid${wide ? " prodwide" : ""}`} data-stagger="">
          {items.map((p, i) => (
            <div className="prod" data-reveal="" style={p.white ? { background: "#fff" } : undefined} key={i}>
              <div className="prod__img">
                <img src={p.img} alt={p.alt} decoding="async" loading="lazy" />
              </div>
              <div className="prod__b">
                <div className="k">{p.kicker}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
