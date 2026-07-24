import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CircleHelp,
  Clock3,
  FilePenLine,
  Microchip,
  PanelTop,
  RadioTower,
  Settings2,
  Smile,
  UserRound,
} from "lucide-react";

const detailIcons = {
  badgeCheck: BadgeCheck,
  clock: Clock3,
  settings: Settings2,
  radio: RadioTower,
  material: Microchip,
  smile: Smile,
  blog: FilePenLine,
};

function DetailIcon({ name }) {
  if (name === "support") {
    return <span className="spd-combo-icon" aria-hidden="true"><PanelTop /><CircleHelp className="spd-combo-icon__badge" /></span>;
  }
  if (name === "services") {
    return <span className="spd-combo-icon" aria-hidden="true"><UserRound /><Briefcase className="spd-combo-icon__badge" /></span>;
  }
  const Component = detailIcons[name];
  return Component ? <Component size={42} strokeWidth={1.5} aria-hidden="true" /> : null;
}

export default function SimulationProductDetail({ hero, overview, benefits, features, nextSteps, resources }) {
  return (
    <main className="spd">
      <style>{`
        .spd{--spd-blue:#0aa8e8;--spd-accent:var(--black)}.spd .spd-wrap{width:min(1290px,calc(100% - 80px));margin-inline:auto}
        .spd-kicker{display:block;margin-bottom:18px;font-size:.68rem;letter-spacing:.28em;text-transform:uppercase;color:var(--mute-cream)}
        .spd-hero{position:relative;min-height:540px;display:grid;align-items:center;overflow:hidden;background:#b9d9ec}
        .spd-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.spd-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(201,226,240,.92) 0%,rgba(201,226,240,.7) 40%,rgba(201,226,240,.05) 75%)}
        .spd-hero__content{position:relative;z-index:1;max-width:650px;padding-block:84px}.spd-hero h1{max-width:620px;margin:0;font-size:clamp(2.35rem,3.05vw,3rem);line-height:1.48;text-transform:none;letter-spacing:-.025em}.spd-hero p{font-size:1.08rem;margin:18px 0 14px}.spd-primary-btn{display:inline-flex;align-items:center;justify-content:center;min-width:229px;min-height:47px;padding:12px 28px;background:var(--spd-accent);color:var(--white);font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .spd-section{padding:clamp(70px,9vw,120px) 0}.spd-section h2{font-size:clamp(2rem,3vw,3rem);line-height:1.15;text-transform:none;letter-spacing:-.025em}.spd-overview{padding-bottom:40px}.spd-benefits{padding-top:40px}.spd-overview__inner{position:relative}.spd-overview__copy{max-width:820px}.spd-overview h2{max-width:760px}.spd-overview p{font-size:1.05rem;line-height:1.62;color:var(--mute-cream)}.spd-overview details{margin-top:20px;max-width:820px}.spd-overview summary{display:inline-flex;align-items:center;gap:14px;font-weight:700;cursor:pointer;list-style:none}.spd-overview summary::-webkit-details-marker{display:none}.spd-overview summary::after{content:"⌄";font-size:1.15rem;line-height:1;transform:translateY(-2px)}.spd-overview details[open] summary::after{transform:rotate(180deg)}.spd-overview__image{display:block;width:min(760px,72%);height:auto;margin-top:64px;max-height:430px;object-fit:cover}.spd-overview__signal{position:absolute;right:34px;top:0;width:250px;height:250px;color:#67aac9}.spd-overview__signal .sim-panel{fill:rgba(103,170,201,.035);stroke:currentColor;stroke-width:1}.spd-overview__signal .sim-mesh{fill:none;stroke:currentColor;stroke-width:.75;opacity:.48}.spd-overview__signal .sim-contour{fill:none;stroke-width:2;stroke-linecap:round}.spd-overview__signal .sim-node{fill:var(--cream);stroke:currentColor;stroke-width:1.3}.spd-overview__signal .sim-axis{fill:none;stroke:currentColor;stroke-width:1.2;stroke-linecap:round}.spd-overview__signal .sim-label{fill:currentColor;font-size:8px;font-weight:700;letter-spacing:.08em}
        .spd-overview__signal .sim-panel{stroke:none}
        .spd-benefits__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:60px 70px;margin-top:58px}.spd-benefit svg{color:var(--spd-blue);margin-bottom:22px}.spd-benefit h3{font-size:1rem;text-transform:none;margin-bottom:12px}.spd-benefit p{color:var(--mute-cream);line-height:1.6}
        .spd-features{background:#fff}.spd-features__intro{max-width:850px;color:var(--mute-cream);line-height:1.65}.spd-table{width:100%;border-collapse:collapse;margin-top:28px}.spd-table th,.spd-table td{text-align:left;padding:20px 16px;border-bottom:1px solid var(--line-cream);vertical-align:top}.spd-table th:first-child,.spd-table td:first-child{width:25%;font-weight:600}
        .spd-related{background:#f4f6f7}.spd-related__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:44px}.spd-related-card{display:flex;flex-direction:column;min-height:310px;padding:34px;border:1px solid #c9ced2;background:#fff}.spd-related-card::before{content:"";width:20px;height:5px;background:var(--spd-accent);margin-bottom:34px}.spd-related-card h3{font-size:1rem;text-transform:none}.spd-related-card p{color:var(--mute-cream);line-height:1.55}.spd-related-card a{margin-top:auto;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .spd-next{position:relative;padding:52px 0;color:#fff;background:#001c2d;overflow:hidden}.spd-next img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.35}.spd-next__inner{position:relative;display:flex;align-items:center;justify-content:space-between;gap:30px}.spd-next h2{font-size:clamp(1.7rem,3vw,2.6rem);text-transform:none}.spd-next .spd-kicker{color:#fff}
        .spd-resources .spd-wrap{width:min(1110px,calc(100% - 48px))}.spd-resources__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:72px;margin-top:76px}.spd-resource{display:flex;flex-direction:column;align-items:flex-start;min-height:360px}.spd-resource>svg,.spd-resource>.spd-combo-icon{margin-bottom:42px}.spd-resource h3{margin:0 0 18px;font-size:1.45rem;line-height:1.35;text-transform:none;letter-spacing:-.01em}.spd-resource p{max-width:31ch;margin:0;color:var(--mute-cream);font-size:1rem;line-height:1.65}.spd-combo-icon{position:relative;display:block;width:54px;height:48px}.spd-combo-icon>svg{position:absolute;left:0;top:0;width:38px;height:38px;stroke-width:1.5}.spd-combo-icon>.spd-combo-icon__badge{left:25px;top:19px;width:27px;height:27px;background:var(--cream);stroke-width:1.7}.spd-outline-btn{margin-top:auto;min-width:174px;padding:14px 25px;text-align:center;border:1px solid var(--ink);font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .spd-section h2+p{margin-top:24px}.spd-benefit h3+p,.spd-related-card h3+p,.spd-resource h3+p{margin-top:14px}.spd-primary-btn,.spd-outline-btn,.spd-related-card a{gap:10px;transition:transform .22s ease,background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}.spd-primary-btn svg,.spd-outline-btn svg,.spd-related-card a svg{transition:transform .22s ease}.spd-primary-btn:hover{background:var(--ink-2);transform:translateY(-2px);box-shadow:0 8px 20px rgba(11,11,11,.2)}.spd-outline-btn{display:inline-flex;align-items:center;justify-content:center}.spd-outline-btn:hover{background:var(--ink);color:#fff;transform:translateY(-2px)}.spd-related-card a{display:inline-flex;align-items:center}.spd-related-card a:hover{color:var(--black)}.spd-primary-btn:hover svg,.spd-outline-btn:hover svg,.spd-related-card a:hover svg{transform:translateX(4px)}
        @media(max-width:1100px){.spd-overview__signal{right:0;width:210px;height:210px}.spd-overview__copy{max-width:720px}}@media(max-width:800px){.spd .spd-wrap{width:min(100% - 40px,1290px)}.spd-benefits__grid,.spd-related__grid,.spd-resources__grid{grid-template-columns:1fr}.spd-next__inner{align-items:flex-start;flex-direction:column}.spd-table{display:block;overflow-x:auto}.spd-benefits__grid{gap:38px}.spd-hero{min-height:470px}.spd-hero h1{line-height:1.2}.spd-overview__signal{display:none}.spd-overview__image{width:100%;margin-top:42px}}
      `}</style>
      <section className="spd-hero">
        <img className="spd-hero__bg" src={hero.image} alt={hero.imageAlt} />
        <div className="spd-wrap spd-hero__content"><h1>{hero.title}</h1><p>{hero.subtitle}</p><Link className="spd-primary-btn" to={hero.btnHref}>{hero.btnText}<ArrowRight size={17} /></Link></div>
      </section>
      <section className="spd-section spd-overview"><div className="spd-wrap spd-overview__inner"><div className="spd-overview__copy"><span className="spd-kicker">{overview.kicker}</span><h2>{overview.heading}</h2><p>{overview.body}</p>{overview.more && <details><summary>Show more</summary><p>{overview.more}</p></details>}</div><svg className="spd-overview__signal" viewBox="0 0 250 250" aria-hidden="true"><defs><linearGradient id="simContour" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#16a9dd" /><stop offset=".52" stopColor="#6cc56c" /><stop offset="1" stopColor="#e1a437" /></linearGradient></defs><rect className="sim-panel" x="18" y="18" width="214" height="214" rx="24" /><path className="sim-mesh" d="M39 172 63 75 102 43 151 51 205 90 211 151 178 202 111 214 57 197 39 172Zm24-97 39 33 49-57m-49 57 48 39 55-57m-103 18-45 89m93-50 61 4m-61-4-39 67m39-67 28 55M63 75l-6 122m145-46-24 51M102 43v65m49-57-1 96M39 172l111-25 61 4M57 197l121 5" /><path className="sim-contour" stroke="url(#simContour)" d="M46 155c24-22 40-14 58-31 21-20 30-45 61-40 23 4 30 22 39 40M51 173c31-19 48-10 69-29 19-17 29-38 55-34 17 3 25 14 31 28M63 188c26-11 46-4 66-20 18-15 30-30 51-27 12 2 19 8 25 17" /><circle className="sim-node" cx="63" cy="75" r="4" /><circle className="sim-node" cx="102" cy="108" r="4" /><circle className="sim-node" cx="150" cy="147" r="4" /><circle className="sim-node" cx="178" cy="202" r="4" /><path className="sim-axis" d="M42 211v-28m0 28h28m-28 0 17-17" /><text className="sim-label" x="36" y="180">Y</text><text className="sim-label" x="72" y="216">X</text><text className="sim-label" x="61" y="191">Z</text></svg><img className="spd-overview__image" src={overview.image} alt={overview.imageAlt} /></div></section>
      <section className="spd-section spd-benefits"><div className="spd-wrap"><span className="spd-kicker">{benefits.kicker}</span><h2>{benefits.heading}</h2><p>{benefits.subheading}</p><div className="spd-benefits__grid">{benefits.items.map((item) => <article className="spd-benefit" key={item.title}><DetailIcon name={item.icon} /><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></div></section>
      <section className="spd-section spd-features"><div className="spd-wrap"><span className="spd-kicker">{features.kicker}</span><h2>{features.heading}</h2><p className="spd-features__intro">{features.intro}</p><table className="spd-table"><thead><tr><th>Feature Name</th><th>Description</th></tr></thead><tbody>{features.items.map((item) => <tr key={item.name}><td>{item.name}</td><td>{item.desc}</td></tr>)}</tbody></table></div></section>
      <section className="spd-next"><img src={nextSteps.image} alt="" /><div className="spd-wrap spd-next__inner"><div><span className="spd-kicker">{nextSteps.kicker}</span><h2>{nextSteps.heading}</h2></div><Link className="spd-primary-btn" to={nextSteps.btnHref}>{nextSteps.btnText}<ArrowRight size={17} /></Link></div></section>
      <section className="spd-section spd-resources"><div className="spd-wrap"><span className="spd-kicker">{resources.kicker}</span><h2>{resources.heading}</h2><div className="spd-resources__grid">{resources.items.map((item) => <article className="spd-resource" key={item.title}><DetailIcon name={item.icon} /><h3>{item.title}</h3><p>{item.desc}</p><Link className="spd-outline-btn" to={item.href}>Learn more <ArrowRight size={16} /></Link></article>)}</div></div></section>
    </main>
  );
}
