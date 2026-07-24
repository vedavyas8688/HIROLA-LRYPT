import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABand({
  heading = "Need our expert help? We\u2019re here!",
  subheading,
  sub = "Tell us about your goals and challenges. Our experts will help you identify a practical, reliable solution tailored to your requirements.",
  btnText = "Get a quote",
  btnHref = "/contact",
  image = "/assets/img/ph-about.webp",
  wide = false,
}) {
  return (
    <section className="sec sec--dark cta-band">
      <style>{`
        .cta-band .partner{align-items:stretch}
        .cta-band .cta-band__content{display:flex;min-width:0;flex-direction:column;justify-content:center}
        .cta-band .partner h2{max-width:100%;text-wrap:balance;line-height:1.08}
        .cta-band .partner__sub{max-width:58ch;line-height:1.7}
        .cta-band .partner__img{width:100%;min-height:420px;height:100%;aspect-ratio:auto}
        .partner.cta-band--wide{width:90%;max-width:none;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
        .partner.cta-band--wide>div{min-width:0}
        .partner.cta-band--wide h2,.partner.cta-band--wide .partner__sub{max-width:none}
        @media(max-width:880px){.partner.cta-band--wide{width:calc(100% - 40px);grid-template-columns:1fr}.cta-band .partner__img{min-height:0;height:auto;aspect-ratio:4/3}}
      `}</style>
      <div className={`wrap partner${wide ? " cta-band--wide" : ""}`}>
        <div className="cta-band__content">
          <span className="label" style={{ color: "var(--mute-dark)" }}>
            Get a quote
          </span>
          <h2 data-reveal="" style={{ marginTop: 16 }}>{heading}</h2>
          {subheading && (
            <p data-reveal="" style={{ margin: "18px 0 0", color: "var(--on-dark)", fontSize: "1.15rem", fontWeight: 500 }}>
              {subheading}
            </p>
          )}
          <p className="partner__sub" data-reveal="" style={{ borderColor: "var(--line-dark)" }}>
            {sub}
          </p>
          <div data-reveal="">
            <Link className="btn btn--invert" to={btnHref}>
              <span className="btn__ico">
                <ArrowRight size={18} />
              </span>
              <span className="btn__t">{btnText}</span>
            </Link>
          </div>
        </div>
        <div className="partner__img" data-reveal="mask">
          <img className="parallax" data-parallax="0.05" src={image} alt="LRYPT Technologies" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
