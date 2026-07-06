import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV } from "../navdata";

export default function Nav() {
  const location = useLocation();
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null); // which drawer accordion is expanded

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
    setMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 980 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

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
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" id="mobile-drawer" aria-hidden={!menuOpen}>
        <div className="drawer__head">
          <Link className="drawer__logo" to="/" onClick={closeAll}>
            <img className="logo__img" src="/assets/img/logo.png" alt="LRYPT Technologies" />
          </Link>
          <button className="drawer__close" aria-label="Close menu" onClick={closeAll}>
            &#10005;
          </button>
        </div>

        <nav className="drawer__nav">
          {NAV.map((n) => {
            const isOpen = openGroup === n.label;
            return (
              <div className={`drawer__group${isOpen ? " is-open" : ""}`} key={n.label}>
                <div className="drawer__row">
                  <Link
                    className={`drawer__link${location.pathname === n.href ? " is-active" : ""}`}
                    to={n.href}
                    onClick={closeAll}
                  >
                    {n.label}
                  </Link>
                  {n.drop && (
                    <button
                      className="drawer__caret"
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${n.label} submenu`}
                      aria-expanded={isOpen}
                      onClick={() => setOpenGroup(isOpen ? null : n.label)}
                    >
                      <i />
                    </button>
                  )}
                </div>
                {n.drop && (
                  <div className="drawer__sub">
                    {n.drop.map(([t, h]) => (
                      <Link key={h} to={h} onClick={closeAll}>
                        {t}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link className="drawer__cta" to="/contact" onClick={closeAll}>
          <span>Get a quote</span>
          <span className="drawer__cta-ico">&#8599;</span>
        </Link>
      </div>
    </>
  );
}