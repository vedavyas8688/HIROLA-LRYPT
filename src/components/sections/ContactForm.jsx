import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

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
        <div
          data-stagger=""
          style={{ display: "flex", flexDirection: "column" }}
        >
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
            <p
              className="mute"
              data-reveal=""
              style={{
                margin: 0,
                marginBottom: 24,
                lineHeight: 1.5,
                maxWidth: "48ch",
              }}
            >
              {intro}
            </p>
          )}
          <ul
            className="cinfo"
            data-stagger=""
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    solutionOfInterest: "",
    serviceOfInterest: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccessMessage("");
    setErrorMessage("");
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    const cleanedPhone = formData.phone.replace(/\D/g, "");

    if (!cleanedPhone) {
      errors.phone = "Phone number is required";
    } else if (!/^(91)?[6-9]\d{9}$/.test(cleanedPhone)) {
      errors.phone = "Phone number is invalid";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost/lrypt/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log("response", response);

        if (response.ok) {
          const data = await response.json();

          if (data.status === "success") {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              company: "",
              solutionOfInterest: "",
              serviceOfInterest: "",
              message: "",
            });
            setSuccessMessage(
              "Thank you! Your enquiry has been submitted successfully.",
            );
            setErrorMessage("");
          } else {
            console.error("Error:", data.message);
            setErrorMessage(data.message);
            setSuccessMessage("");
          }
        } else {
          console.error("Error:", response.statusText);
          setErrorMessage("An error occurred. Please try again.");
          setSuccessMessage("");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage("An error occurred. Please try again later.");
        setSuccessMessage("");
      }
    } else {
      setErrors(formErrors);
      setErrorMessage(Object.values(formErrors)[0]);
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  return (
    <form
      className="cform"
      data-reveal=""
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div
        className="row2"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <div className="f2">
          <label>First name</label>
          <input
            name="firstName"
            type="text"
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="f2">
          <label>Last name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Cooper"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div
        className="row2"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <div className="f2">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="f2">
          <label>Mobile</label>
          <input
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="f2">
        <label>
          Company{" "}
          <span style={{ color: "var(--mute-cream)", fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <input
          name="company"
          type="text"
          placeholder="Company name"
          value={formData.company}
          onChange={handleInputChange}
        />
      </div>
      <div
        className="row2"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <div className="f2">
          <label>Solution of interest</label>
          <select
            name="solutionOfInterest"
            value={formData.solutionOfInterest}
            onChange={handleInputChange}
          >
            <option value="">Select a solution&hellip;</option>
            <option>Formlabs 3D Printing</option>
            <option>MSC Software</option>
            <option>Digital Transformation</option>
          </select>
        </div>
        <div className="f2">
          <label>Service of interest</label>
          <select
            name="serviceOfInterest"
            value={formData.serviceOfInterest}
            onChange={handleInputChange}
          >
            <option value="">Select a service&hellip;</option>
            <option>Utility Engineering</option>
            <option>Engineering Design</option>
          </select>
        </div>
      </div>
      <div className="f2">
        <label>How can we help?</label>
        <textarea
          name="message"
          placeholder="Tell us about your project, timeline, and goals..."
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <div
        className="cform__foot"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          marginTop: 8,
        }}
      >
        <span className="cform__note" style={{ fontSize: 13, lineHeight: 1.4 }}>
          Your details are used only to respond to your enquiry.
        </span>
        <div>
          <button className="btn" type="submit" disabled={isLoading}>
            <span className="btn__ico">
              {isLoading ? <Check size={18} /> : <ArrowRight size={18} />}
            </span>
            <span className="btn__t">
              {isLoading ? "Sending..." : "Send message"}
            </span>
          </button>
          {successMessage && (
            <p
              style={{
                color: "#16a34a",
                marginTop: "12px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
