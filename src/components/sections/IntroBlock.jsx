export default function IntroBlock({ bg = "cream", label, lede, lead }) {
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
        </div>
      </div>
    </section>
  );
}
