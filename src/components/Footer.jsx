import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const linkGroups = [
  {
    title: "Solutions",
    links: [
      { label: "Proteger", to: "/proteger" },
      { label: "Cadence Simulation", to: "/cadence-simulation" },
      { label: "Formlabs 3D Printing", to: "/formlabs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Utility Network", to: "/utility-network" },
      { label: "Engineering Design", to: "/engineering-design" },
    ],
  },
];

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

const hours = [{ day: "Monday – Friday", time: "9:00 AM – 6:30 PM" }];

function FooterStyles() {
  return (
    <style>{`
      .foot{background:var(--black);color:var(--on-dark);padding-top:50px}
      .foot__top{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;
        padding-bottom:40px;border-bottom:1px solid var(--line-dark)}
      .foot__top h2{max-width:none}
      .foot__grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1.2fr;gap:40px;padding-block:40px}
      @media(max-width:880px){.foot__grid{grid-template-columns:1fr 1fr}}
      @media(max-width:540px){.foot__grid{grid-template-columns:1fr}}
      .foot__grid h5{font-weight:700;text-transform:uppercase;font-size:.74rem;letter-spacing:.06em;color:var(--mute-dark);margin-bottom:20px}
      .foot__grid .foot__links a{display:block;padding:8px 0;color:var(--on-dark);text-transform:uppercase;font-size:.82rem;letter-spacing:.02em;transition:.25s}
      .foot__grid .foot__links a:hover{opacity:.6;padding-left:6px}
      .foot__about p{color:var(--mute-dark);max-width:34ch;margin:20px 0 26px;text-transform:none;font-size:.95rem}
      .foot__logo{display:inline-flex;align-items:center;gap:10px}
      .foot__logo .logo__img{height:42px;width:auto}
      .foot__bot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-block:28px;
        border-top:1px solid var(--line-dark);color:var(--mute-dark);font-size:.82rem;text-transform:uppercase;letter-spacing:.03em}
      .foot__bot a:hover{color:var(--on-dark)}
      .foot__social{display:flex;gap:10px;margin-top:18px}
      .foot__social a{display:grid;place-items:center;width:42px;height:42px;border:1px solid var(--line-dark);
        border-radius:8px;color:var(--on-dark);transition:background .25s,color .25s}
      .foot__social a:hover{background:var(--on-dark);color:var(--black)}

      /* premium "get in touch" rows */
      .foot__contact{display:flex;flex-direction:column;gap:2px}
      .foot__contact a,.foot__contact .foot__c-item{display:flex;align-items:flex-start;gap:12px;padding:10px 0;
        color:var(--on-dark);text-transform:none;font-size:.92rem;letter-spacing:0;transition:.25s}
      .foot__contact a:hover{opacity:.65}
      .foot__contact svg{flex:none;width:17px;height:17px;margin-top:2px;color:var(--mute-dark)}

      /* premium business-hours block */
      .foot__hours{margin-top:22px;border:1px solid var(--line-dark);border-radius:10px;padding:16px 18px}
      .foot__hours-head{display:flex;align-items:center;gap:9px;margin-bottom:12px;
        font-weight:700;text-transform:uppercase;font-size:.7rem;letter-spacing:.08em;color:var(--mute-dark)}
      .foot__hours-head svg{width:15px;height:15px}
      .foot__hours-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:5px 0;flex-wrap:nowrap;white-space:nowrap}
      .foot__hours-row .d{font-size:.86rem;color:var(--on-dark);flex:1;min-width:0}
      .foot__hours-row .t{font-size:.86rem;font-weight:600;color:var(--mute-dark);white-space:nowrap;flex-shrink:0}
      .foot__hours-row .t.closed{color:var(--on-dark);opacity:.55}
    `}</style>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="foot">
      <FooterStyles />
      <div className="wrap">
        <div className="foot__top">
          <div>
            <span className="label" style={{ color: "var(--mute-dark)" }}>
              Let&rsquo;s build
            </span>
            <h2 data-reveal style={{ marginTop: 16 }}>
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>Let&rsquo;s build something</span>
              <span style={{ display: "block" }}>great together</span>
            </h2>
          </div>
          <Link className="btn btn--invert" to="/contact">
            <span className="btn__ico">
              <ArrowRight size={18} />
            </span>
            <span className="btn__t">Get a free quote</span>
          </Link>
        </div>

        <div className="foot__grid">
          <div className="foot__about">
            <Link className="logo foot__logo" to="/">
              <img className="logo__img" src="/assets/img/logo.png" alt="LRYPT Technologies" />
            </Link>
            <p>Empowering the future through cutting-edge technology solutions and services.</p>
            <div className="foot__social">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h5>{group.title}</h5>
              <div className="foot__links">
                {group.links.map((link) => (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h5>Get in touch</h5>
            <div className="foot__contact">
              <a href="tel:+919036354564">
                <Phone size={17} />
                <span>9036354564</span>
              </a>
              <a href="mailto:enquiry@lrypt.com">
                <Mail size={17} />
                <span>enquiry@lrypt.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=4th+Floor,+Symphony+Managed+Office+Space,+Hormavu+Agara+Road,+Vadarpalya,+Hennur,+Bangalore+560043"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={17} />
                <span>4th Floor, Symphony Managed Office Space, Hormavu Agara Road, Vadarpalya, Hennur, Bangalore 560043</span>
              </a>
            </div>

            <div className="foot__hours">
              <div className="foot__hours-head">
                <Clock size={15} />
                <span>Business hours</span>
              </div>
              {hours.map((h) => (
                <div className="foot__hours-row" key={h.day}>
                  <span className="d">{h.day}</span>
                  <span className={`t${h.time === "Closed" ? " closed" : ""}`}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="foot__bot">
          <span>&copy; {year} LRYPT Technologies. All rights reserved.</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <Link to="/faq">FAQ</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
