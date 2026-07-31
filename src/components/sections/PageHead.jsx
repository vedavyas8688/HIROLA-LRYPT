import { useEffect, useRef, useState } from "react";

function PageHeadStyles() {
  return (
    <style>{`
      .phead-scope{padding:clamp(140px,18vh,230px) 0 80px;position:relative;overflow:hidden;background:var(--black);color:#fff}
      .phead-scope.phead--img{min-height:62vh;display:flex;align-items:flex-start;color:#fff}
      .phead-scope.phead--cream{background:var(--cream);color:var(--on-cream)}
      .phead-scope .phead__media{position:absolute;inset:0;z-index:0}
      .phead-scope .phead__media img{width:100%;height:100%;object-fit:cover}
      .phead-scope .phead__media::after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.08)}
      .phead-scope .wrap{position:relative;z-index:1}

      .phead-scope .phead__content{display:flex;flex-direction:column;align-items:flex-start;text-align:left}
      .phead-scope .phead__brand-logo{display:inline-flex;align-items:center;justify-content:center;max-width:min(220px,60vw);min-height:52px;margin-bottom:24px;padding:10px 14px;border-radius:8px;background:rgba(255,255,255,.92);box-shadow:0 14px 34px rgba(0,0,0,.2)}
      .phead-scope .phead__brand-logo--corner{position:absolute;z-index:2;top:110px;left:clamp(24px,5vw,76px);margin:0}
      .phead-scope .phead__brand-logo img{display:block;max-width:190px;max-height:42px;width:auto;height:auto;object-fit:contain}
      .phead-scope .crumb{font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:.78rem;opacity:.9;margin-bottom:18px}
      .phead-scope h1{margin:0}
      .phead-scope .lead{margin-top:24px;max-width:52ch}
      .phead-scope.phead--img h1,.phead-scope.phead--img .lead{text-shadow:0 2px 18px rgba(0,0,0,.38)}
      .phead-scope.phead--img .lead{color:#fff;font-weight:700}

      @media(max-width:900px){
        .phead-scope .crumb{margin-bottom:12px}
        .phead-scope .lead{margin-top:18px}
      }
      @media(max-width:560px){
        .phead-scope{padding:clamp(110px,20vh,170px) 0 56px}
        .phead-scope .phead__brand-logo{min-height:44px;margin-bottom:18px;padding:8px 12px}
        .phead-scope .phead__brand-logo--corner{top:86px;left:18px;margin:0}
        .phead-scope .phead__brand-logo img{max-width:150px;max-height:34px}
        .phead-scope .crumb{font-size:.7rem;margin-bottom:10px}
        .phead-scope .lead{margin-top:14px;font-size:.95rem}
      }

      .phead-scope h1{
        font-family:"Roboto",system-ui,sans-serif;
        font-weight:700;
        text-transform:none;
        color:inherit;
        letter-spacing:-.015em;
        line-height:1.06;
        font-size:clamp(1.8rem,4.5vw,3.6rem);
      }
      @media(max-width:900px){
        .phead-scope h1{font-size:clamp(1.6rem,5.5vw,2.6rem)}
      }
      @media(max-width:560px){
        .phead-scope h1{font-size:clamp(1.4rem,7vw,2rem)}
      }

      .phead-scope h1 .line{display:block;overflow:hidden}
      .phead-scope h1 .line > span{display:block;transform:translateY(110%);transition:transform .9s cubic-bezier(.22,1,.36,1)}
      .phead-scope.in-view h1 .line > span{transform:none}
      .phead-scope.in-view h1 .line:nth-child(2) > span{transition-delay:.08s}
      .phead-scope.in-view h1 .line:nth-child(3) > span{transition-delay:.16s}

      .phead-scope .lead{opacity:0;transform:translateY(20px);transition:opacity .8s ease,transform .8s ease}
      .phead-scope.in-view .lead{opacity:1;transform:none;transition-delay:.35s}

      @media (prefers-reduced-motion: reduce){
        .phead-scope h1 .line > span,.phead-scope .lead{transform:none!important;transition:none!important;opacity:1!important}
      }
    `}</style>
  );
}

export default function PageHead({
  lines,
  lead,
  variant = "cream",
  image,
  imageAlt,
  logo,
  logoAlt,
  logoBg,
  logoPosition = "content",
  imageFit = "cover",
  imagePosition = "center",
  tone = "dark",
  minHeight,
  headingWidth = 44, // in "ch" units — controls how the heading wraps
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`phead phead--${variant === "img" ? "img" : "cream"}${variant === "img" && tone === "light" ? " phead--light" : ""} phead-scope${inView ? " in-view" : ""}`}
      style={minHeight ? { minHeight } : undefined}
    >
      <PageHeadStyles />
      {variant === "img" && image && (
        <div className="phead__media">
          <img
            className="parallax"
            data-parallax="0.1"
            src={image}
            alt={imageAlt || ""}
            style={{ objectFit: imageFit, objectPosition: imagePosition }}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
      <div className="wrap">
        <div className="phead__content">
          {logo && logoPosition !== "top-left" && (
            <span className="phead__brand-logo" data-reveal="" style={logoBg ? { background: logoBg } : undefined}>
              <img src={logo} alt={logoAlt || ""} decoding="async" />
            </span>
          )}
          {/* <div className="crumb">
            <b>LRYPT</b> / {crumb}
          </div> */}
          <h1 style={{ maxWidth: `${headingWidth}ch` }}>
            {lines.map((line, i) => (
              <span className="line" key={i}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </div>
      {logo && logoPosition === "top-left" && (
        <span className="phead__brand-logo phead__brand-logo--corner" data-reveal="" style={logoBg ? { background: logoBg } : undefined}>
          <img src={logo} alt={logoAlt || ""} decoding="async" />
        </span>
      )}
    </section>
  );
}
