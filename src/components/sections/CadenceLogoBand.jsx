export default function CadenceLogoBand() {
  return (
    <section className="cadence-logo-band">
      <style>{`
        .cadence-logo-band{background:var(--cream);padding:0 0 clamp(64px,8vw,104px)}
        .cadence-logo-band__inner{position:relative;width:min(1120px,calc(100% - 48px));margin-inline:auto;overflow:hidden;background:#e9e9e7 url("/assets/img/msc-sofware-promo.webp") center/cover no-repeat;padding:clamp(44px,6vw,76px) clamp(28px,5vw,70px);text-align:center}
        .cadence-logo-band__mark{position:relative;display:block;width:min(520px,86%);height:auto;margin:0 auto 24px}
        .cadence-logo-band p{position:relative;max-width:620px;margin:0 auto;color:var(--mute-cream);font-size:clamp(1rem,1.25vw,1.12rem);line-height:1.55}
        @media(max-width:620px){.cadence-logo-band{padding-bottom:64px}.cadence-logo-band__inner{width:calc(100% - 32px);padding:38px 20px}.cadence-logo-band__mark{width:min(420px,92%)}}
      `}</style>
      <div className="cadence-logo-band__inner">
        <img className="cadence-logo-band__mark" src="/assets/img/c-e-logo.png" alt="Hexagon and MSC Software" decoding="async" loading="lazy" />
        <p>Hexagon's Design and Engineering (MSC Software) is now part of Cadence Design Systems.</p>
      </div>
    </section>
  );
}
