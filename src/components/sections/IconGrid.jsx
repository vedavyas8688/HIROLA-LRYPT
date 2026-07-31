import Icon from "../Icon";
import { ClipboardList, FileText, Handshake, PenTool, Settings2 } from "lucide-react";

const lucideIcons = {
  consult: Handshake,
  design: PenTool,
  analyze: Settings2,
  document: FileText,
  support: ClipboardList,
};

function GridIcon({ icon }) {
  if (typeof icon === "string" && lucideIcons[icon]) {
    const LucideIcon = lucideIcons[icon];
    return <LucideIcon className="ic" aria-hidden="true" />;
  }

  return <Icon icon={icon} />;
}

export default function IconGrid({
  bg = "cream",
  kicker,
  heading,
  subheading,
  columns = 3,
  items,
  headingStyle = "proj-head", // "proj-head" | "headc" | "center" | "none"
  gap = "36px 46px",
  extraTags,
}) {
  return (
    <section className={`sec sec--${bg}`}>
      <style>{`
        .svc__step{display:block;margin-bottom:14px;color:currentColor;font-size:.78rem;font-weight:800;letter-spacing:.14em;opacity:.72}
      `}</style>
      <div className="wrap">
        {headingStyle === "headc" && (heading || kicker) && (
          <div className="headc">
            {kicker && <span className="kick">{kicker}</span>}
            {heading && <h2 data-reveal="">{heading}</h2>}
            {subheading && <p data-reveal="">{subheading}</p>}
          </div>
        )}
        {headingStyle === "proj-head" && heading && (
          <div className="proj-head">
            <h2 data-reveal="">{heading}</h2>
            {subheading && (
              <p className="lead" data-reveal="">
                {subheading}
              </p>
            )}
          </div>
        )}
        {headingStyle === "center" && heading && (
          <h2
            className="h2-xl center"
            data-reveal=""
            style={{ marginBottom: "clamp(38px,6vw,60px)", maxWidth: "22ch" }}
          >
            {heading}
          </h2>
        )}
        <div
          className="svc__grid"
          data-stagger=""
          style={{ gridTemplateColumns: `repeat(${columns},1fr)`, gap }}
        >
          {items.map((it, i) => (
            <div className="svc__item" data-reveal="" key={i}>
              {it.step && <span className="svc__step">{it.step}</span>}
              <GridIcon icon={it.icon} />
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
        {extraTags &&
          extraTags.map((block, i) => (
            <div key={i}>
              <h3
                data-reveal=""
                style={{ margin: i === 0 ? "44px 0 16px" : "36px 0 16px", textTransform: "none" }}
              >
                {block.heading}
              </h3>
              <div className="tags" data-reveal="">
                {block.tags.map((t, ti) => (
                  <span className="tag" key={ti}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
