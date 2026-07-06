// Renders a small decorative SVG icon from a plain shape-description object,
// e.g. { viewBox: "0 0 40 40", shapes: [{ tag: "circle", props: {...} }, ...] }
// This keeps icons as real SVG JSX elements instead of raw HTML strings.
export default function Icon({ icon }) {
  if (!icon) return null;
  return (
    <svg className="ic" viewBox={icon.viewBox}>
      {icon.shapes.map((s, i) => {
        const Tag = s.tag;
        if (Tag === "text") {
          return (
            <text key={i} {...s.props}>
              {s.text}
            </text>
          );
        }
        return <Tag key={i} {...s.props} />;
      })}
    </svg>
  );
}
