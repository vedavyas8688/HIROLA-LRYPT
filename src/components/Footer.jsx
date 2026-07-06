import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div>
            <span className="label" style={{ color: "var(--mute-dark)" }}>
              Let's build
            </span>
            <h2 data-reveal style={{ marginTop: 16 }}>
              Let&rsquo;s build something great together
            </h2>
          </div>
          <Link className="btn btn--invert" to="/contact">
            <span className="btn__ico">&#8594;</span>
            <span className="btn__t">Get a free quote</span>
          </Link>
        </div>
        <div className="foot__grid">
          <div className="foot__about">
            <Link className="logo foot__logo" to="/">
              <img className="logo__img" src="/assets/img/logo.png" alt="LRYPT Technologies" />
            </Link>
            <p>Empowering the future through cutting-edge technology solutions and services.</p>
            <div style={{ display: "flex", gap: 10 }}>
              {["IN", "X", "FB", "IG"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  style={{
                    width: 42,
                    height: 42,
                    border: "1px solid var(--line-dark)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: ".72rem",
                    fontWeight: 700,
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5>Solutions</h5>
            <Link to="/cad-design">CAD Design</Link>
            <Link to="/ansys-simulation">ANSYS Simulation</Link>
            <Link to="/formlabs">Formlabs 3D Printing</Link>
          </div>
          <div>
            <h5>Services</h5>
            <Link to="/utility-network">Utility Network</Link>
            <Link to="/engineering-design">Engineering Design</Link>
            <Link to="/hrms">HR Management</Link>
          </div>
          <div>
            <h5>Get in touch</h5>
            <a href="tel:+917827488464">+91 78274 88464</a>
            <a href="mailto:info@lrypt.com">info@lrypt.com</a>
            <Link to="/contact">Vadarpalya, Hennur, Bangalore 560043</Link>
            <a href="#">Mon&ndash;Fri, 9:00&ndash;18:30</a>
          </div>
        </div>
        <div className="foot__bot">
          <span>&copy; {year} LRYPT Technologies. All rights reserved.</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <Link to="/faq">FAQ</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
