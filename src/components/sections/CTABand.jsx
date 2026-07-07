import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABand({
  heading = "Need our expert help? We\u2019re here!",
  sub = "Need our professional assistance? We are here to help you! Advanced telecom networking solutions, first-rate engineering services, and all-inclusive recruitment services are provided by LRYPT Technologies. In order to guarantee that your projects and workforce are always at the forefront of success, our devoted team is committed to providing creative, dependable, and efficient solutions tailored to your needs. Reach out to us right now!",
  btnText = "Get a quote",
  btnHref = "/contact",
  image = "/assets/img/ph-about.webp",
}) {
  const headingParts = typeof heading === "string" ? heading.split("? ") : [heading];

  return (
    <section className="sec sec--dark">
      <div className="wrap partner">
        <div>
          <span className="label" style={{ color: "var(--mute-dark)" }}>
            Get a quote
          </span>
          <h2 data-reveal="" style={{ marginTop: 16 }}>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>{headingParts[0]}</span>
            <span style={{ display: "block" }}>{headingParts.slice(1).join("? ")}</span>
          </h2>
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
