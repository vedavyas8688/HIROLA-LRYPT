import { useEffect, useRef, useState } from "react";

function PageHeadStyles() {
  return (
    <style>{`
      .phead-scope{padding:clamp(140px,18vh,230px) 0 80px;position:relative;overflow:hidden;background:var(--black);color:#fff}
      .phead-scope.phead--img{min-height:62vh;display:flex;align-items:flex-start}
      .phead-scope.phead--cream{background:var(--cream);color:var(--on-cream)}
      .phead-scope .phead__media{position:absolute;inset:0;z-index:0}
      .phead-scope .phead__media img{width:100%;height:100%;object-fit:cover}
      .phead-scope .phead__media::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,8,9,.6),rgba(8,8,9,.85))}
      .phead-scope .wrap{position:relative;z-index:1}

      .phead-scope .phead__content{display:flex;flex-direction:column;align-items:flex-start;text-align:left}
      .phead-scope .crumb{font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:.78rem;opacity:.9;margin-bottom:18px}
      .phead-scope h1{margin:0}
      .phead-scope .lead{margin-top:24px;max-width:52ch}

      @media(max-width:900px){
        .phead-scope .crumb{margin-bottom:12px}
        .phead-scope .lead{margin-top:18px}
      }
      @media(max-width:560px){
        .phead-scope{padding:clamp(110px,20vh,170px) 0 56px}
        .phead-scope .crumb{font-size:.7rem;margin-bottom:10px}
        .phead-scope .lead{margin-top:14px;font-size:.95rem}
      }

      .phead-scope h1{
        font-family:"Roboto",system-ui,sans-serif;
        font-weight:700;
        text-transform:uppercase;
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
      className={`phead phead--${variant === "img" ? "img" : "cream"} phead-scope${inView ? " in-view" : ""}`}
    >
      <PageHeadStyles />
      {variant === "img" && image && (
        <div className="phead__media">
          <img
            className="parallax"
            data-parallax="0.1"
            src={image}
            alt={imageAlt || ""}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
      <div className="wrap">
        <div className="phead__content">
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
    </section>
  );
}
