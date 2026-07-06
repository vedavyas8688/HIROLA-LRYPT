export default function SplitFeature({ bg = "cream", imgFirst = true, image, imageAlt, label, heading, paragraphs }) {
  const media = (
    <div className="opp__img" data-reveal="mask" style={{ background: "#fff" }}>
      <img src={image} alt={imageAlt} decoding="async" loading="lazy" style={{ objectFit: "contain", padding: 20 }} />
    </div>
  );
  const copy = (
    <div className="opp__r">
      {label && (
        <span className="label" data-reveal="">
          {label}
        </span>
      )}
      {heading && (
        <h2 data-reveal="" style={{ marginTop: 14 }}>
          {heading}
        </h2>
      )}
      {paragraphs.map((p, i) => (
        <p className="lead" data-reveal="" style={{ marginTop: 14 }} key={i}>
          {p}
        </p>
      ))}
    </div>
  );
  return (
    <section className={`sec sec--${bg}`}>
      <div className="wrap opp">
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
