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
        .caps-sec .cap__image{display:block;width:100%;max-width:360px;aspect-ratio:16/10;margin-top:24px;object-fit:cover}
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
                  {cap.image && <img className="cap__image" src={cap.image} alt={cap.imageAlt || cap.title} loading="lazy" decoding="async" />}
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

export function SoloCapability({ bg = "dark", label, title, desc, bullets, bulletStyle = "check", variant }) {
  if (variant === "modern") {
    return (
      <section className={`sec sec--${bg} solo-modern`}>
        <style>{`
          .solo-modern{position:relative;overflow:hidden;padding-block:clamp(58px,6vw,84px)}
          .solo-modern::before{content:"";position:absolute;right:-120px;top:-180px;width:480px;height:480px;border:1px solid var(--line-dark);border-radius:50%}
          .solo-modern::after{content:"";position:absolute;right:-20px;top:-80px;width:280px;height:280px;border:1px solid var(--line-dark);border-radius:50%}
          .solo-modern__inner{position:relative;z-index:1}
          .solo-modern__head{display:grid;grid-template-columns:minmax(240px,.85fr) 1.15fr;gap:clamp(32px,7vw,100px);align-items:end;margin-bottom:36px}
          .solo-modern .label{color:var(--mute-dark)}
          .solo-modern h2{max-width:12ch;margin:14px 0 0;color:var(--on-dark);font-size:clamp(2.2rem,4vw,4rem);line-height:1.04;text-transform:none;letter-spacing:-.035em}
          .solo-modern__desc{max-width:62ch;margin:0;color:var(--mute-dark);font-size:clamp(1rem,1.35vw,1.15rem);line-height:1.75}
          .solo-modern__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
          .solo-modern__item{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start;min-height:84px;padding:18px 17px;border:1px solid var(--line-dark);background:rgba(255,255,255,.035)}
          .solo-modern__dot{width:10px;height:10px;margin-top:7px;border-radius:50%;background:var(--white);box-shadow:0 0 0 6px rgba(255,255,255,.08)}
          .solo-modern__item span:last-child{color:var(--on-dark);font-size:.94rem;line-height:1.45}
          @media(max-width:1000px){.solo-modern__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:760px){.solo-modern__head,.solo-modern__grid{grid-template-columns:1fr}.solo-modern__head{align-items:start}.solo-modern h2{max-width:16ch}.solo-modern__item{min-height:0}}
        `}</style>
        <div className="wrap solo-modern__inner">
          <div className="solo-modern__head">
            <div>
              {label && <span className="label" data-reveal="">{label}</span>}
              <h2 data-reveal="">{title}</h2>
            </div>
            <p className="solo-modern__desc" data-reveal="">{desc}</p>
          </div>
          <div className="solo-modern__grid" data-stagger="">
            {bullets.map((bullet) => (
              <div className="solo-modern__item" data-reveal="" key={bullet}>
                <span className="solo-modern__dot" aria-hidden="true" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
              <div style={{ marginTop: 26 }}>
                <Bullets bullets={bullets} style={bulletStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
