import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function LegalStyles() {
  return (
    <style>{`/* minimal placeholder to ensure component loads */
      .lg-scope { font-family: Inter, system-ui, sans-serif; }
    `}</style>
  );
}

export default function LegalLayout({ eyebrow = "Legal", title = "Title", sections = [] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const sectionRefs = useRef({});

  useEffect(() => {
    if (!sections || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="lg-scope">
      <LegalStyles />
      <header>
        <div>{eyebrow}</div>
        <h1>{title}</h1>
      </header>
      <div>
        {sections.map((s) => (
          <section id={s.id} key={s.id} ref={(el) => (sectionRefs.current[s.id] = el)}>
            <h3>{s.heading}</h3>
            {s.body && s.body.map((p, i) => <p key={i}>{p}</p>)}
          </section>
        ))}
      </div>
    </main>
  );
}
