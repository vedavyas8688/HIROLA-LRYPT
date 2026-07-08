import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  company: "",
  solution: "",
  service: "",
  message: "",
};

export function ContactPanel({ label, heading, intro, info }) {
  return (
    <section className="sec sec--cream">
      <div
        className="wrap cgrid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "start",
          gap: "48px",
        }}
      >
        {/* Left column: label, heading, intro, info — all share one vertical rhythm */}
        <div data-stagger="" style={{ display: "flex", flexDirection: "column" }}>
          {label && (
            <span
              className="label"
              data-reveal=""
              style={{ display: "block", marginBottom: 12, lineHeight: 1.2 }}
            >
              {label}
            </span>
          )}
          {heading && (
            <h2
              data-reveal=""
              style={{
                fontSize: "var(--fs-h3)",
                lineHeight: 1.15,
                margin: 0,
                marginBottom: intro ? 12 : 24,
                whiteSpace: "nowrap",
              }}
            >
              {heading.split("\n").map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </h2>
          )}
          {intro && (
            <p className="mute" data-reveal="" style={{ margin: 0, marginBottom: 24, lineHeight: 1.5, maxWidth: "48ch" }}>
              {intro}
            </p>
          )}
          <ul
            className="cinfo"
            data-stagger=""
            style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}
          >
            {info.map((it, i) => (
              <li data-reveal="" key={i} style={{ margin: 0 }}>
                <div className="k" style={{ marginBottom: 4 }}>
                  {it.k}
                </div>
                <b style={{ display: "block" }}>{it.v}</b>
                <div className="mute">{it.sub}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: form, top-aligned with the label/heading above */}
        <ContactForm />
      </div>
    </section>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSend = () => {
    // Front-end only for now — wire this up to a real endpoint before publishing.
    setSent(true);
  };

  return (
    <div className="cform" data-reveal="" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div className="f2">
          <label>First name</label>
          <input type="text" placeholder="Jane" value={form.firstName} onChange={set("firstName")} />
        </div>
        <div className="f2">
          <label>Last name</label>
          <input type="text" placeholder="Cooper" value={form.lastName} onChange={set("lastName")} />
        </div>
      </div>
      <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div className="f2">
          <label>Email</label>
          <input type="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} />
        </div>
        <div className="f2">
          <label>Mobile</label>
          <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={set("mobile")} />
        </div>
      </div>
      <div className="f2">
        <label>
          Company <span style={{ color: "var(--mute-cream)", fontWeight: 400 }}>(optional)</span>
        </label>
        <input type="text" placeholder="Company name" value={form.company} onChange={set("company")} />
      </div>
      <div className="row2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div className="f2">
          <label>Solution of interest</label>
          <select value={form.solution} onChange={set("solution")}>
            <option value="">Select a solution&hellip;</option>
            <option>CAD Design</option>
            <option>ANSYS Simulation</option>
            <option>Formlabs 3D Printing</option>
          </select>
        </div>
        <div className="f2">
          <label>Service of interest</label>
          <select value={form.service} onChange={set("service")}>
            <option value="">Select a service&hellip;</option>
            <option>Utility Network Services</option>
            <option>Engineering Design Services</option>
            <option>HR Management (HRMS)</option>
          </select>
        </div>
      </div>
      <div className="f2">
        <label>How can we help?</label>
        <textarea
          placeholder="Tell us about your project, timeline, and goals..."
          value={form.message}
          onChange={set("message")}
        />
      </div>
      <div
        className="cform__foot"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginTop: 8 }}
      >
        <span className="cform__note" style={{ fontSize: 13, lineHeight: 1.4 }}>
          Your details are used only to respond to your enquiry.
        </span>
        <button className="btn" type="button" onClick={handleSend}>
          <span className="btn__ico">{sent ? <Check size={18} /> : <ArrowRight size={18} />}</span>
          <span className="btn__t">{sent ? "Thanks \u2014 we\u2019ll be in touch" : "Send message"}</span>
        </button>
      </div>
    </div>
  );
}