export default function IntroBlock({ bg = "cream", label, lede, lead, tagline }) {
  const leadParagraphs = Array.isArray(lead) ? lead : lead ? [lead] : [];

  return (
    <section className={`sec sec--${bg}`}>
      <div className="wrap opp">
        <div className="opp__r" style={{ gridColumn: "1/-1" }}>
          {label && (
            <span className="label" data-reveal="">
              {label}
            </span>
          )}
          {lede && (
            <p className="lede" data-reveal="" style={{ maxWidth: "46ch" }}>
              {lede}
            </p>
          )}
          {leadParagraphs.map((paragraph, index) => (
            <p
              className="lead"
              data-reveal=""
              style={{ marginTop: index === 0 ? (label ? 22 : 20) : 18, maxWidth: label ? "72ch" : "70ch" }}
              key={index}
            >
              {paragraph}
            </p>
          ))}
          {tagline && (
            <p data-reveal="" style={{ marginTop: 24, maxWidth: "72ch", fontSize: "1.05rem", lineHeight: 1.6 }}>
              <strong>{tagline}</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
