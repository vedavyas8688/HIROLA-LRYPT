function Bullets({ bullets, style = "check", cols = 1 }) {
  const safeBullets = Array.isArray(bullets) ? bullets : [];

  return (
    <ul className={`blist${style === "star" ? " blist--star" : ""}${cols === 2 ? " cols2" : ""}`} data-reveal="">
      {safeBullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}

export default function Capabilities({ bg = "cream", kicker, heading, items }) {
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <section className={`sec sec--${bg} caps-sec`}>
      <style>{`
        .caps-sec .headc{margin:0 auto clamp(38px,6vw,60px);text-align:center;max-width:820px}
        .caps-sec .headc .kick{display:block;font-size:clamp(1.7rem,3vw,2.6rem);font-weight:700;letter-spacing:-.01em;text-transform:none;margin-bottom:10px;color:var(--on-cream)}
        .caps-sec.sec--dark .headc .kick{color:var(--on-dark)}
        .caps-sec .headc .kick::before,.caps-sec .headc .kick::after{content:none}
        .caps-sec .headc h2{font-size:.95rem;font-weight:400;text-transform:none;letter-spacing:0;line-height:1.6;max-width:52ch;margin-inline:auto;color:var(--mute-cream)}
        .caps-sec.sec--dark .headc h2{color:var(--mute-dark)}
        .caps-sec .cap{padding:clamp(28px,4vw,46px) 0;border-top:1px solid var(--line-cream)}
        .caps-sec .cap:first-child{border-top:0;padding-top:0}
        .caps-sec.sec--dark .cap{border-color:var(--line-dark)}
        .caps-sec .cap__grid{display:grid;grid-template-columns:minmax(200px,.8fr) 1.2fr;gap:clamp(18px,4vw,56px);align-items:start}
        @media(max-width:820px){.caps-sec .cap__grid{grid-template-columns:1fr;gap:14px}}
        .caps-sec .cap h3{text-transform:none;font-size:clamp(1.35rem,2.1vw,1.8rem);letter-spacing:-.01em}
        .caps-sec .cap__p{color:var(--mute-cream);margin-bottom:20px;max-width:62ch;line-height:1.72}
        .caps-sec.sec--dark .cap__p{color:var(--mute-dark)}
        .caps-sec .blist{display:grid;gap:11px;margin:0}
        .caps-sec .blist.cols2{grid-template-columns:1fr 1fr;gap:11px 34px}
        @media(max-width:620px){.caps-sec .blist.cols2{grid-template-columns:1fr}}
        .caps-sec .blist li{position:relative;padding-left:24px;line-height:1.5;font-size:.97rem}
        .caps-sec .blist li::before{content:"";position:absolute;left:2px;top:.55em;width:8px;height:8px;border-radius:50%;background:var(--ink)}
        .caps-sec.sec--dark .blist li::before{background:#fff}
        .caps-sec .blist--star li::before{content:"✱";background:none;width:auto;height:auto;top:0;left:0;font-size:1.05rem;line-height:1.5;font-weight:700}
      `}</style>
      <div className="wrap">
        {(kicker || heading) && (
          <div className="headc">
            {kicker && <span className="kick">{kicker}</span>}
            {heading && <h2 data-reveal="">{heading}</h2>}
          </div>
        )}
        <div className="caps">
          {safeItems.map((cap, i) => (
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
