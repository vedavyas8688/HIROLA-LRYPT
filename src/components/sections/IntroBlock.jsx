export default function IntroBlock({ bg = "cream", label, lede, lead }) {
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
          {lead && (
            <p
              className="lead"
              data-reveal=""
              style={{ marginTop: label ? 22 : 20, maxWidth: label ? "72ch" : "70ch" }}
            >
              {lead}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
