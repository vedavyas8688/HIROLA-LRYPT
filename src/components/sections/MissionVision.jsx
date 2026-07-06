export default function MissionVision({ heading, columns }) {
  return (
    <section className="sec sec--dark">
      <div className="wrap">
        <h2 className="h2-xl center" data-reveal="" style={{ marginBottom: "clamp(38px,6vw,60px)", maxWidth: "20ch" }}>
          {heading}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(30px,5vw,64px)",
          }}
        >
          {columns.map((col, i) => (
            <div data-reveal="" key={i}>
              <span className="label" style={{ color: "var(--mute-dark)" }}>
                {col.label}
              </span>
              <h3 style={{ textTransform: "none", fontSize: "1.6rem", margin: "12px 0 14px" }}>{col.title}</h3>
              <p className="mute">{col.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
