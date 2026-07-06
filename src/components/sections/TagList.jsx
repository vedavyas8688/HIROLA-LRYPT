export default function TagList({ bg = "dark", label, heading, tags }) {
  return (
    <section className={`sec sec--${bg}`}>
      <div className="wrap">
        {label && (
          <span className="label" data-reveal="" style={{ color: "var(--mute-dark)" }}>
            {label}
          </span>
        )}
        {heading && (
          <h2 className="h2-xl" data-reveal="" style={{ margin: "14px 0 26px", maxWidth: "20ch" }}>
            {heading}
          </h2>
        )}
        <div className="tags" data-reveal="">
          {tags.map((t, i) => (
            <span className="tag" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
