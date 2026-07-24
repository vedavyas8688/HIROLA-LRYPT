import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Intelligent Digitization", text: "Transform paper-based forms into automated digital workflows", className: "digitization" },
  { title: "Live Monitoring", text: "Real-time visibility into operations, performance, and process anomalies", className: "monitoring" },
  { title: "Connected Systems", text: "Machines, sensors, software and people working in sync", className: "connected" },
  { title: "Industry 4.0 Ready", text: "Future-proof infrastructure supporting automation, AI, and IoT integration", className: "industry" },
];

export default function ProtegerWhatWeDo() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const stickyOffset = 76;
        const distance = Math.max(rect.height - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, (stickyOffset - rect.top) / distance));
        setActive(Math.min(4, Math.max(0, Math.ceil(progress * 4))));
      });
    };
    update();
    const resizeObserver = new ResizeObserver(update);
    if (sectionRef.current) resizeObserver.observe(sectionRef.current);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="proteger-what" ref={sectionRef}>
      <style>{`
        .proteger-what{position:relative;min-height:190vh;background:var(--cream)}
        .proteger-what__sticky{position:sticky;top:76px;min-height:calc(100vh - 76px);display:flex;align-items:flex-start;padding:34px 0 18px;overflow:hidden}
        .proteger-what__wrap{width:min(1440px,calc(100% - 70px));margin-inline:auto}
        .proteger-what__eyebrow{display:block;margin-bottom:12px;color:var(--on-cream);font-size:.92rem;font-weight:700;letter-spacing:.02em;text-transform:uppercase}
        .proteger-what h2{max-width:620px;margin:0;font-size:clamp(1.8rem,2.65vw,2.75rem);line-height:1.22;text-transform:none;letter-spacing:-.025em}
        .proteger-what__progress{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;width:min(510px,100%);margin-top:14px}
        .proteger-what__progress span{height:6px;border-radius:99px;background:var(--line-cream);transition:background .35s ease}
        .proteger-what__progress span.is-active{background:var(--black)}
        .proteger-what__figure{position:relative;width:min(900px,78vw);margin:18px auto 0;padding:42px 0 112px}
        .proteger-what__figure>img{display:block;width:100%;height:auto}
        .proteger-what__callout{position:absolute;z-index:1;width:240px;text-align:center;opacity:0;transform:translateY(14px);transition:opacity .5s ease,transform .5s ease}
        .proteger-what__callout.is-active{opacity:1;transform:none}
        .proteger-what__callout h3{margin:0 0 8px;color:var(--on-cream);font-size:1rem;text-transform:uppercase}
        .proteger-what__callout p{margin:0;color:var(--mute-cream);font-size:.9rem;line-height:1.5}
        .proteger-what__callout::after{content:"";position:absolute;border-left:1px dashed var(--mute-cream);height:42px}
        .proteger-what__callout.digitization{left:3%;top:0}.proteger-what__callout.digitization::after{left:72%;top:calc(100% + 8px)}
        .proteger-what__callout.monitoring{right:calc(1.5% - 40px);top:18px}.proteger-what__callout.monitoring::after{left:34%;top:calc(100% + 8px)}
        .proteger-what__callout.connected{left:37%;bottom:10px}.proteger-what__callout.connected::after{left:50%;bottom:calc(100% + 8px)}
        .proteger-what__callout.industry{right:2%;bottom:10px}.proteger-what__callout.industry::after{left:25%;bottom:calc(100% + 8px)}
        @media(max-width:800px){.proteger-what{min-height:auto}.proteger-what__sticky{position:relative;top:auto;min-height:0;padding:70px 0}.proteger-what__wrap{width:calc(100% - 40px)}.proteger-what__figure{width:100%;padding:0;margin-top:36px}.proteger-what__callout{position:relative;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;width:100%;margin:22px 0;text-align:left;opacity:1;transform:none}.proteger-what__callout::after{display:none}.proteger-what__figure>img{margin-bottom:30px}.proteger-what__progress{gap:7px}}
      `}</style>
      <div className="proteger-what__sticky">
        <div className="proteger-what__wrap">
          <span className="proteger-what__eyebrow">What We Do</span>
          <h2>Digital Transformation for<br />Predictable Operations</h2>
          <div className="proteger-what__progress" aria-hidden="true">
            {steps.map((step, index) => <span className={index < active ? "is-active" : ""} key={step.title} />)}
          </div>
          <div className="proteger-what__figure">
            <img src="/assets/img/proteger/solutions.svg" alt="Digital transformation connecting factory operations, monitoring, and teams" />
            {steps.map((step, index) => (
              <div className={`proteger-what__callout ${step.className}${index < active ? " is-active" : ""}`} key={step.title}>
                <h3>{step.title}</h3><p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
