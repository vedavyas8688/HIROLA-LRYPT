export default function TagList({ bg = "dark", label, heading, tags, top, blocks }) {
  const sectionLabel = label ?? top?.label;
  const sectionHeading = heading ?? top?.heading;
  const sections = Array.isArray(tags)
    ? [{ heading: null, tags }]
    : Array.isArray(blocks)
      ? blocks
      : [];

  return (
    <section className={`sec sec--${bg}`}>
      <div className="wrap">
        {sectionLabel && (
          <span className="label" data-reveal="" style={{ color: "var(--mute-dark)" }}>
            {sectionLabel}
          </span>
        )}
        {sectionHeading && (
          <h2 className="h2-xl" data-reveal="" style={{ margin: "14px 0 26px", maxWidth: "20ch" }}>
            {sectionHeading}
          </h2>
        )}
        {sections.map((block, i) => (
          <div key={i}>
            {block.heading && (
              <h3 data-reveal="" style={{ margin: i === 0 ? "44px 0 16px" : "36px 0 16px", textTransform: "none" }}>
                {block.heading}
              </h3>
            )}
            <div className="tags" data-reveal="">
              {(block.tags || []).map((t, ti) => (
                <span className="tag" key={ti}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
