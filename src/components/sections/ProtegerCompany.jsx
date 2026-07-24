export default function ProtegerCompany() {
  return (
    <section className="proteger-company">
      <style>{`
        .proteger-company{padding:clamp(34px,4vw,54px) 0 clamp(32px,4vw,52px);background:var(--cream);color:var(--on-cream)}
        .proteger-company__wrap{width:min(1320px,calc(100% - 80px));margin-inline:auto}
        .proteger-company__eyebrow{display:block;margin-bottom:24px;font-size:.82rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
        .proteger-company h2{max-width:760px;margin:0;font-size:clamp(2.2rem,4vw,4.2rem);line-height:1.13;letter-spacing:-.04em;text-transform:none}
        .proteger-company p{max-width:920px;margin:clamp(38px,5vw,70px) 0 0;color:var(--mute-cream);font-size:clamp(1.05rem,1.35vw,1.22rem);line-height:1.72}
        @media(max-width:700px){.proteger-company__wrap{width:calc(100% - 36px)}}
      `}</style>
      <div className="proteger-company__wrap">
        <span className="proteger-company__eyebrow">Company</span>
        <h2>Trusted Partner for Leaders<br />Who Can't Afford Failure</h2>
        <p>With over 10 years of experience in digital transformation, we've worked closely with leading manufacturers to power their operations. Our team brings deep domain expertise in quality, maintenance, and operational reliability, shaped by real-world challenges on the shop floor.</p>
      </div>
    </section>
  );
}
