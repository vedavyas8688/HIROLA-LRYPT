import { CalendarDays, CircleCheck, IndianRupee, MoveDownLeft, UsersRound, Microchip, Settings } from "lucide-react";

const benefits = [
  {
    icon: "calendar",
    title: "Predictable Uptime",
    text: "Predict failures with early warnings to minimise downtime and reduce costly disruptions.",
  },
  {
    icon: "cost",
    title: "Control Costs",
    text: "Extend equipment life, maintain quality, reduce energy waste, and lower operational costs.",
  },
  {
    icon: "teams",
    title: "Empower Teams",
    text: "Give teams easy access to machine history and embedded knowledge, making expertise accessible.",
  },
  {
    icon: "work",
    title: "Work Smarter, Not Harder",
    text: "Automate work orders, scheduling, and parts tracking to optimise technician productivity.",
  },
];

function EdgeIcon({ type }) {
  if (type === "calendar") return <span className="proteger-edge__icon-art"><CalendarDays /><CircleCheck className="icon-badge" /></span>;
  if (type === "cost") return <span className="proteger-edge__icon-art icon-cost"><IndianRupee /><MoveDownLeft className="icon-badge" /></span>;
  if (type === "teams") return <span className="proteger-edge__icon-art"><UsersRound /></span>;
  return <span className="proteger-edge__icon-art"><Microchip /><Settings className="icon-badge" /></span>;
}

export default function ProtegerEdge() {
  return (
    <section className="proteger-edge">
      <style>{`
        .proteger-edge{position:relative;isolation:isolate;overflow:hidden;background:var(--cream);padding:clamp(80px,9vw,138px) 0}
        .proteger-edge__wrap{width:min(1440px,calc(100% - 90px));margin-inline:auto}
        .proteger-edge__eyebrow{display:block;margin-bottom:22px;color:var(--on-cream);font-size:.82rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
        .proteger-edge h2{max-width:720px;margin:0;font-size:clamp(2.15rem,3.45vw,4rem);line-height:1.12;letter-spacing:-.035em;text-transform:none}
        .proteger-edge__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(52px,6vw,82px) clamp(60px,10vw,160px);margin:clamp(64px,8vw,108px) 7% 0}
        .proteger-edge__item{display:grid;grid-template-columns:56px minmax(0,1fr);gap:24px;align-items:start}
        .proteger-edge__icon{display:grid;place-items:center;width:56px;height:56px;color:var(--on-cream)}
        .proteger-edge__icon-art{position:relative;display:block;width:48px;height:48px}
        .proteger-edge__icon-art>svg:first-child{width:42px;height:42px;stroke-width:1.35}
        .proteger-edge__icon-art .icon-badge{position:absolute;right:-1px;bottom:0;width:21px;height:21px;padding:2px;color:var(--on-cream);stroke-width:1.8;background:var(--cream);border-radius:50%}
        .proteger-edge__icon-art.icon-cost{display:grid;place-items:center;border:1.4px solid var(--on-cream);border-right-color:transparent;border-radius:50%}
        .proteger-edge__icon-art.icon-cost>svg:first-child{width:25px;height:25px}
        .proteger-edge__icon-art.icon-cost .icon-badge{right:-5px;top:-5px;bottom:auto;border-radius:0}
        .proteger-edge__item h3{margin:0 0 12px;font-size:clamp(1.05rem,1.3vw,1.28rem);line-height:1.25;text-transform:uppercase;letter-spacing:-.01em}
        .proteger-edge__item p{max-width:48ch;margin:0;color:var(--mute-cream);font-size:1rem;line-height:1.72}
        @media(max-width:900px){.proteger-edge__wrap{width:calc(100% - 48px)}.proteger-edge__grid{margin-inline:0;gap:48px 38px}.proteger-edge__item{grid-template-columns:48px 1fr;gap:18px}.proteger-edge__icon{width:48px;height:48px}}
        @media(max-width:680px){.proteger-edge{padding:72px 0}.proteger-edge__wrap{width:calc(100% - 36px)}.proteger-edge__grid{grid-template-columns:1fr;margin-top:52px}.proteger-edge__item{grid-template-columns:46px 1fr}}
      `}</style>
      <div className="proteger-edge__wrap">
        <span className="proteger-edge__eyebrow">The Proteger Edge</span>
        <h2>Where Others Offer Visibility,<br />We Promise Reliability</h2>
        <div className="proteger-edge__grid">
          {benefits.map(({ icon, title, text }) => (
            <article className="proteger-edge__item" key={title}>
              <span className="proteger-edge__icon" aria-hidden="true"><EdgeIcon type={icon} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
