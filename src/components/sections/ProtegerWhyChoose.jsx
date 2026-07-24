const reasons = [
  { title: "Go Live Faster", image: "/assets/img/image11.jpeg" },
  { title: "Designed for Shopfloors", image: "/assets/img/image15.jpeg" },
  { title: "Compliance Built-In", image: "/assets/img/image12.jpeg" },
  { title: "Cost Efficiency Unlocked", image: "/assets/img/image25.jpeg" },
];

export default function ProtegerWhyChoose() {
  return (
    <section className="proteger-why">
      <style>{`
        .proteger-why{padding:clamp(20px,2.5vw,34px) 0 clamp(80px,9vw,138px);background:var(--cream);color:var(--on-cream)}
        .proteger-why__wrap{width:min(1320px,calc(100% - 80px));margin-inline:auto}
        .proteger-why__eyebrow{display:block;margin-bottom:22px;font-size:.82rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
        .proteger-why h2{max-width:720px;margin:0;font-size:clamp(2.2rem,4vw,4.1rem);line-height:1.13;letter-spacing:-.04em;text-transform:none}
        .proteger-why__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:clamp(54px,7vw,88px)}
        .proteger-why__card{position:relative;display:flex;align-items:flex-end;min-height:220px;padding:30px;border-radius:18px;overflow:hidden;background:var(--black);color:var(--white)}
        .proteger-why__card::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(11,11,11,.88) 0%,rgba(11,11,11,.56) 48%,rgba(11,11,11,.18) 100%)}
        .proteger-why__card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s var(--ease)}
        .proteger-why__card:hover img{transform:scale(1.045)}
        .proteger-why__card h3{position:relative;z-index:1;margin:0;font-size:clamp(1.3rem,2vw,1.8rem);line-height:1.25;text-transform:none}
        .proteger-why__india{display:grid;grid-template-columns:210px 1fr;align-items:center;gap:42px;margin-top:28px;padding:28px 42px;border:1px solid var(--line-cream);border-radius:16px;background:var(--cream-2)}
        .proteger-why__india-mark{position:relative;display:grid;place-items:center;min-height:74px;font-size:.78rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
        .proteger-why__india-mark::before,.proteger-why__india-mark::after{content:"";position:absolute;left:0;width:100%;height:13px;border-radius:50%}
        .proteger-why__india-mark::before{top:13px;background:#e87522;transform:rotate(-8deg)}.proteger-why__india-mark::after{bottom:13px;background:#25853d;transform:rotate(8deg)}
        .proteger-why__india-mark span{position:relative;z-index:1;padding:8px 13px;background:var(--cream-2)}
        .proteger-why__india-copy strong{display:block;margin-bottom:8px;font-size:1.15rem}.proteger-why__india-copy p{margin:0;color:var(--mute-cream);font-size:1rem;line-height:1.55}
        @media(max-width:760px){.proteger-why__wrap{width:calc(100% - 36px)}.proteger-why__grid{grid-template-columns:1fr}.proteger-why__india{grid-template-columns:1fr;gap:18px;padding:26px}.proteger-why__india-mark{width:180px}.proteger-why__card{min-height:190px}}
      `}</style>
      <div className="proteger-why__wrap">
        <span className="proteger-why__eyebrow">Why Choose Proteger</span>
        <h2>We Are Built for Modern<br />Manufacturing Realities</h2>
        <div className="proteger-why__grid">
          {reasons.map((reason) => (
            <article className="proteger-why__card" key={reason.title}>
              <img src={reason.image} alt="" />
              <h3>{reason.title}</h3>
            </article>
          ))}
        </div>
        <div className="proteger-why__india">
          <div className="proteger-why__india-mark"><span>Make in India</span></div>
          <div className="proteger-why__india-copy">
            <strong>We support #MakeInIndia.</strong>
            <p>Built on global standards to bolster the needs of Indian industries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
