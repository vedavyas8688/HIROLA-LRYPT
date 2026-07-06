export default function PageHead({ crumb, lines, lead, variant = "cream", image, imageAlt }) {
  return (
    <section className={`phead phead--${variant === "img" ? "img" : "cream"}`}>
      {variant === "img" && image && (
        <div className="phead__media">
          <img
            className="parallax"
            data-parallax="0.1"
            src={image}
            alt={imageAlt || ""}
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
      <div className="wrap">
        <div className="crumb">
          <b>LRYPT</b> / {crumb}
        </div>
        <h1>
          {lines.map((line, i) => (
            <span className="line" key={i}>
              <span>{line}</span>
            </span>
          ))}
        </h1>
        {lead && (
          <p className="lead" data-hero="" style={{ opacity: 0, transform: "translateY(20px)", marginTop: 24 }}>
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
