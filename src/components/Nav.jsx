import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV } from "../navdata";

export default function Nav() {
  const location = useLocation();
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    // close drawer on route change
    setMenuOpen(false);
  }, [location.pathname]);

  const seen = new Set();
  const drawerLinks = [];
  NAV.forEach((n) => {
    if (n.href && !seen.has(n.href)) {
      seen.add(n.href);
      drawerLinks.push([n.label, n.href]);
    }
    if (n.drop)
      n.drop.forEach(([t, h]) => {
        if (!seen.has(h)) {
          seen.add(h);
          drawerLinks.push([t, h]);
        }
      });
  });

  return (
    <>
      <header id="nav" className={`nav${stuck ? " is-stuck" : ""}`}>
        <div className="nav__bar">
          <Link className="logo" to="/">
            <img className="logo__img" src="/assets/img/logo.png" alt="LRYPT Technologies" />
          </Link>
          <ul className="nav__menu">
            {NAV.map((n) => (
              <li className="nav__item" key={n.label}>
                <Link
                  className={`nav__link${location.pathname === n.href ? " is-active" : ""}`}
                  to={n.href}
                >
                  {n.label}
                  {n.drop && <i className="car" />}
                </Link>
                {n.drop && (
                  <div className="dropdown">
                    {n.drop.map(([t, h]) => (
                      <Link key={h} to={h}>
                        {t}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="nav__cta">
            <Link className="btn" to="/contact">
              <span className="btn__ico">&#8594;</span>
              <span className="btn__t">Get a quote</span>
            </Link>
            <button
              className="burger"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div className="drawer">
        {drawerLinks.map(([t, h]) => (
          <Link key={h} to={h} onClick={() => setMenuOpen(false)}>
            {t}
          </Link>
        ))}
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Get a quote &#8599;
        </Link>
      </div>
    </>
  );
}
