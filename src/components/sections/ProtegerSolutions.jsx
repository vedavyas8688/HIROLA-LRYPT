import { Link } from "react-router-dom";
import { ArrowUpRight, BarChart3, ClipboardPenLine, QrCode, ShieldCheck, Wrench } from "lucide-react";

const solutions = [
  {
    title: "Trace",
    subtitle: "Seamless Traceability from Raw Materials to Dispatch",
    icon: QrCode,
    points: ["Monitor batches, lots, and serials in real time", "Auto-map genealogy and routes", "Link barcodes/RFID with audit trails", "Generate instant reports for recall and trace-back"],
  },
  {
    title: "Collect",
    subtitle: "Digital-first Data Collection",
    icon: ClipboardPenLine,
    points: ["Mobile-friendly forms, checklists, and logbooks", "IoT integration for automatic data logging", "Operator workflows with validation logic", "SOP-driven, configurable data templates"],
  },
  {
    title: "CMMS",
    subtitle: "Smart Maintenance for Uninterrupted Operations",
    icon: Wrench,
    points: ["Preventive and breakdown maintenance schedules", "Work order management with escalation logic", "Asset health and repair history logs", "Spare parts and inventory tracking"],
  },
  {
    title: "QMS",
    subtitle: "Digitise Quality Control and Ensure Regulatory Compliance",
    icon: ShieldCheck,
    points: ["Score-based inspection and audit checklists", "NCR/CAPA with root cause workflows", "Sync with production and inventory systems", "Manage calibration and certificates"],
  },
  {
    title: "Analytics",
    subtitle: "One Dashboard for Performance and Predictive Insights",
    icon: BarChart3,
    points: ["Real-time KPIs: OEE, quality, and downtime", "Drill-down dashboards across Proteger Apps", "Custom reports with export and sharing options", "AI/ML for anomalies and forecasts"],
  },
];

function ModuleVisual({ index, title }) {
  return (
    <div className="proteger-solutions__visual">
      <img src={`/assets/img/proteger/solutioncard${index + 1}.webp`} alt={`${title} solution interface`} />
    </div>
  );
}

export default function ProtegerSolutions() {
  return (
    <section className="proteger-solutions">
      <style>{`
        .proteger-solutions{position:relative;overflow:hidden;padding:clamp(38px,4vw,58px) 0 clamp(38px,4vw,58px);background:var(--black);color:var(--on-dark)}
        .proteger-solutions__wrap{width:min(1320px,calc(100% - 80px));margin-inline:auto}
        .proteger-solutions__eyebrow{display:block;margin-bottom:22px;color:var(--mute-dark);font-size:.8rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
        .proteger-solutions h2{max-width:820px;margin:0;font-size:clamp(2.25rem,4vw,4.35rem);line-height:1.1;letter-spacing:-.04em;text-transform:none}
        .proteger-solutions__list{display:grid;gap:30px;margin-top:clamp(62px,8vw,104px)}
        .proteger-solutions__card{display:grid;grid-template-columns:minmax(0,.92fr) minmax(360px,1.08fr);align-items:center;gap:clamp(50px,7vw,110px);min-height:410px;padding:clamp(36px,5vw,72px);border-radius:20px;background:var(--cream);color:var(--on-cream);box-shadow:0 20px 50px rgba(0,0,0,.28)}
        .proteger-solutions__card:nth-child(even) .proteger-solutions__copy{order:2}.proteger-solutions__card:nth-child(even) .proteger-solutions__visual{order:1}
        .proteger-solutions__icon{display:block;width:36px;height:36px;margin-bottom:22px}.proteger-solutions__icon svg{width:100%;height:100%;stroke-width:1.6}
        .proteger-solutions__title{display:flex;align-items:center;gap:9px;margin-bottom:20px}.proteger-solutions__title h3{margin:0;font-size:clamp(1.45rem,2vw,2rem);text-transform:uppercase}.proteger-solutions__title svg{width:21px;height:21px}
        .proteger-solutions__subtitle{max-width:35ch;margin:0 0 22px;font-size:clamp(1.08rem,1.35vw,1.28rem);font-weight:700;line-height:1.48}
        .proteger-solutions__copy ul{display:grid;gap:9px;margin:0;padding:0;list-style:none}.proteger-solutions__copy li{position:relative;padding-left:19px;color:var(--mute-cream);font-size:.98rem;line-height:1.45}.proteger-solutions__copy li::before{content:"";position:absolute;left:1px;top:.62em;width:6px;height:6px;border-radius:50%;background:var(--black)}
        .proteger-solutions__visual{position:relative;display:grid;place-items:center;min-height:280px;border:1px solid var(--line-cream);border-radius:18px;background:var(--cream-2);overflow:hidden}
        .proteger-solutions__visual>img{display:block;width:100%;height:100%;max-height:330px;object-fit:contain;padding:18px}
        .proteger-solutions__visual::before{content:"";position:absolute;width:270px;height:270px;border:1px solid var(--line-cream);border-radius:50%}
        .proteger-solutions__visual::after{content:"";position:absolute;width:190px;height:190px;border:1px solid var(--line-cream);border-radius:50%}
        .proteger-solutions__visual-main{position:relative;z-index:2;display:grid;place-items:center;width:112px;height:112px;border-radius:24px;background:var(--black);color:var(--on-dark);box-shadow:0 18px 34px rgba(11,11,11,.2)}
        .proteger-solutions__visual-main svg{width:52px;height:52px;stroke-width:1.25}
        .trace-visual::before,.trace-visual::after{content:none}.trace-visual{min-height:320px;background:var(--cream-2)}
        .trace-map{position:absolute;left:9%;top:22%;width:58%;height:60%;border:2px solid var(--mute-cream);border-radius:13px;color:var(--mute-cream);opacity:.82}
        .trace-map::before{content:"";position:absolute;inset:18px;border:1px dashed currentColor;background:linear-gradient(90deg,transparent 49%,currentColor 50% 50.5%,transparent 51%),linear-gradient(transparent 49%,currentColor 50% 50.5%,transparent 51%);opacity:.55}
        .trace-route{position:absolute;z-index:1;display:block;border:2px dashed currentColor}.route-one{left:18%;top:25%;width:48%;height:36%;border-right:0;border-bottom:0}.route-two{right:10%;bottom:12%;width:42%;height:34%;border-left:0;border-top:0}
        .trace-node{position:absolute;z-index:2;width:18px;height:18px;border:2px solid currentColor;border-radius:50%;background:var(--cream-2)}.node-one{left:12%;top:18%}.node-two{left:46%;bottom:20%}.node-three{right:12%;top:35%}
        .trace-block{position:absolute;z-index:2;width:30px;height:26px;background:var(--mute-cream);opacity:.7}.block-one{left:32%;top:38%}.block-two{right:16%;bottom:12%}.block-three{left:12%;bottom:8%}
        .trace-phone{position:absolute;z-index:3;right:9%;top:9%;display:grid;place-items:center;width:31%;height:82%;border:4px solid var(--on-cream);border-radius:28px;background:var(--black);color:var(--cream);box-shadow:0 18px 35px rgba(11,11,11,.24)}
        .trace-phone::before{content:"";position:absolute;inset:7px;border:1px solid rgba(243,240,230,.3);border-radius:20px}.trace-phone .trace-speaker{position:absolute;top:0;width:48%;height:13px;border-radius:0 0 10px 10px;background:var(--cream)}
        .trace-phone svg{position:relative;z-index:1;width:62%;height:auto;stroke-width:1.7;padding:7px;background:var(--cream);color:var(--black)}
        .visual-chip{position:absolute;z-index:1;height:12px;border-radius:99px;background:var(--black);opacity:.18}.chip-one{width:84px;left:11%;top:23%}.chip-two{width:54px;right:13%;top:32%}.chip-three{width:72px;left:17%;bottom:20%}
        .visual-bars{position:absolute;right:12%;bottom:16%;display:flex;align-items:end;gap:8px;height:66px}.visual-bars i{display:block;width:11px;background:var(--black);opacity:.25}.visual-bars i:nth-child(1){height:35%}.visual-bars i:nth-child(2){height:78%}.visual-bars i:nth-child(3){height:55%}.visual-bars i:nth-child(4){height:100%}
        .proteger-solutions__cta{display:flex;justify-content:center;margin-top:56px}.proteger-solutions__cta a{display:inline-flex;align-items:center;gap:15px;padding:16px 25px;background:var(--cream);color:var(--black);font-weight:700;transition:transform .25s ease,background .25s ease}.proteger-solutions__cta a:hover{transform:translateY(-3px);background:var(--white)}.proteger-solutions__cta svg{width:19px;height:19px;transition:transform .25s ease}.proteger-solutions__cta a:hover svg{transform:translateX(4px)}
        @media(max-width:900px){.proteger-solutions__wrap{width:calc(100% - 46px)}.proteger-solutions__card{grid-template-columns:1fr;gap:38px}.proteger-solutions__card:nth-child(even) .proteger-solutions__copy,.proteger-solutions__card:nth-child(even) .proteger-solutions__visual{order:initial}.proteger-solutions__visual{min-height:250px}}
        @media(max-width:560px){.proteger-solutions__wrap{width:calc(100% - 28px)}.proteger-solutions__card{padding:30px 24px;border-radius:14px}.proteger-solutions__visual{min-height:210px}.proteger-solutions__visual-main{width:92px;height:92px}.proteger-solutions__visual-main svg{width:44px;height:44px}}
      `}</style>
      <div className="proteger-solutions__wrap">
        <span className="proteger-solutions__eyebrow">Solutions</span>
        <h2>A Modular Stack for Plug 'n Play Resilience in your Operations</h2>
        <div className="proteger-solutions__list">
          {solutions.map(({ title, subtitle, icon: Icon, points }, index) => (
            <article className="proteger-solutions__card" key={title}>
              <div className="proteger-solutions__copy">
                <span className="proteger-solutions__icon" aria-hidden="true"><Icon /></span>
                <div className="proteger-solutions__title"><h3>{title}</h3><ArrowUpRight aria-hidden="true" /></div>
                <p className="proteger-solutions__subtitle">{subtitle}</p>
                <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
              <ModuleVisual index={index} title={title} />
            </article>
          ))}
        </div>
        <div className="proteger-solutions__cta"><Link to="/contact">Book a Demo <ArrowUpRight aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
