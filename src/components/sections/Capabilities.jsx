function Bullets({ bullets, style = "check", cols = 1 }) {
  return (
    <ul className={`blist${style === "star" ? " blist--star" : ""}${cols === 2 ? " cols2" : ""}`} data-reveal="">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

export default function Capabilities({ bg = "cream", kicker, heading, items }) {
  return (
    <section className={`sec sec--${bg}`}>
      <div className="wrap">
        {(kicker || heading) && (
          <div className="headc">
            {kicker && <span className="kick">{kicker}</span>}
            {heading && <h2 data-reveal="">{heading}</h2>}
          </div>
        )}
        <div className="caps">
          {items.map((cap, i) => (
            <div className="cap" data-reveal="" key={i}>
              <div className="cap__grid">
                <div>
                  {cap.label && (
                    <span className="label" style={{ color: bg === "dark" ? "var(--mute-dark)" : undefined }}>
                      {cap.label}
                    </span>
                  )}
                  <h3>{cap.title}</h3>
                </div>
                <div>
                  <p className="cap__p">{cap.desc}</p>
                  <Bullets bullets={cap.bullets} style={cap.bulletStyle} cols={cap.cols} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SoloCapability({ bg = "dark", label, title, desc, bullets, bulletStyle = "check" }) {
  return (
    <section className={`sec sec--${bg}`}>
      <div className="wrap">
        <div className="cap" style={{ border: 0, paddingTop: 0 }}>
          <div className="cap__grid">
            <div>
              {label && (
                <span className="label" data-reveal="" style={{ color: "var(--mute-dark)" }}>
                  {label}
                </span>
              )}
              <h3 data-reveal="" style={{ marginTop: 12 }}>
                {title}
              </h3>
            </div>
            <div>
              <p className="cap__p" data-reveal="">
                {desc}
              </p>
              <Bullets bullets={bullets} style={bulletStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
