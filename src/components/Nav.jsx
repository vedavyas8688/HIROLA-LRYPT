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
    <div className="nav-scope">
      <style>{`
        /* ============================================================
           NAVBAR + MOBILE DRAWER — scoped, self-contained
           ============================================================ */

        /* ---------- burger button ---------- */
        .nav-scope .burger{
          display:none;
          width:46px;height:46px;
          border:1px solid var(--line-cream, #0b0b0b1f);
          background:transparent;
          position:relative;z-index:81;
        }
        .nav-scope .burger span{
          position:absolute;left:13px;right:13px;height:1.6px;
          background:var(--black, #0b0b0b);
          transition:.35s cubic-bezier(.22,1,.36,1);
        }
        .nav-scope .burger span:nth-child(1){top:17px}
        .nav-scope .burger span:nth-child(2){top:23px}
        .nav-scope .burger span:nth-child(3){top:29px}
        body.menu-open .nav-scope .burger span:nth-child(1){top:23px;transform:rotate(45deg)}
        body.menu-open .nav-scope .burger span:nth-child(2){opacity:0}
        body.menu-open .nav-scope .burger span:nth-child(3){top:23px;transform:rotate(-45deg)}

        @media(max-width:980px){
          .nav-scope .nav__menu,
          .nav-scope .nav__cta .btn{display:none}
          .nav-scope .burger{display:block}
        }

        /* ---------- drawer shell ---------- */
        .nav-scope .drawer{
          position:fixed;inset:0;z-index:80;
          background:var(--black, #0b0b0b);
          color:var(--on-dark, #f2f1ec);
          display:flex;flex-direction:column;
          transform:translateY(-100%);
          transition:transform .5s cubic-bezier(.22,1,.36,1);
          padding:max(18px, env(safe-area-inset-top))
                  clamp(20px,4.5vw,64px)
                  max(24px, env(safe-area-inset-bottom));
          overflow-y:auto;
        }
        body.menu-open .nav-scope .drawer{transform:translateY(0)}
        body.menu-open{overflow:hidden;height:100%}

        /* ---------- drawer header ---------- */
        .nav-scope .drawer__head{
          display:flex;align-items:center;justify-content:space-between;
          padding-block:14px 8px;flex:none;
        }
        .nav-scope .drawer__logo .logo__img{height:38px;width:auto;display:block}
        .nav-scope .drawer__close{
          width:44px;height:44px;
          border:1px solid var(--line-dark, #ffffff1f);
          background:transparent;
          color:var(--on-dark, #f2f1ec);
          font-size:1rem;
          display:grid;place-items:center;
          transition:background .3s,color .3s;
        }
        .nav-scope .drawer__close:hover{background:#fff;color:#000}

        /* ---------- drawer nav list ---------- */
        .nav-scope .drawer__nav{flex:1;padding-top:18px;padding-bottom:18px}

        .nav-scope .drawer__group{border-top:1px solid var(--line-dark, #ffffff1f)}
        .nav-scope .drawer__group:last-child{border-bottom:1px solid var(--line-dark, #ffffff1f)}

        .nav-scope .drawer__row{display:flex;align-items:stretch}
        .nav-scope .drawer__link{
          flex:1;padding:18px 4px;
          font-family:"Roboto",system-ui,sans-serif;
          font-weight:700;
          font-size:clamp(1.15rem,4.8vw,1.5rem);
          text-transform:uppercase;
          letter-spacing:-.01em;
          color:var(--on-dark, #f2f1ec);
        }
        .nav-scope .drawer__link.is-active{color:var(--mute-dark, #9c9c95)}

        .nav-scope .drawer__caret{
          flex:none;width:56px;
          background:none;border:0;
          color:var(--on-dark, #f2f1ec);
          display:grid;place-items:center;
          cursor:pointer;
        }
        .nav-scope .drawer__caret i{
          width:9px;height:9px;
          border-right:1.6px solid currentColor;
          border-bottom:1.6px solid currentColor;
          transform:rotate(45deg);
          transition:transform .35s cubic-bezier(.22,1,.36,1);
          display:block;
        }
        .nav-scope .drawer__group.is-open .drawer__caret i{transform:rotate(225deg)}

        .nav-scope .drawer__sub{
          max-height:0;overflow:hidden;
          transition:max-height .4s cubic-bezier(.22,1,.36,1);
          padding-left:4px;
        }
        .nav-scope .drawer__group.is-open .drawer__sub{max-height:600px}
        .nav-scope .drawer__sub a{
          display:block;
          padding:12px 0 12px 18px;
          font-size:.92rem;font-weight:600;
          text-transform:uppercase;letter-spacing:.03em;
          color:var(--mute-dark, #9c9c95);
          border-left:1px solid var(--line-dark, #ffffff1f);
          transition:color .25s,padding-left .25s;
        }
        .nav-scope .drawer__sub a:hover{color:var(--on-dark, #f2f1ec);padding-left:24px}

        /* ---------- drawer CTA ---------- */
        .nav-scope .drawer__cta{
          flex:none;
          display:flex;align-items:center;justify-content:space-between;
          margin-top:8px;padding:18px 20px;
          background:#fff;color:#000;
          font-weight:700;text-transform:uppercase;
          font-size:.92rem;letter-spacing:.03em;
        }
        .nav-scope .drawer__cta-ico{font-size:1.1rem}

        /* ---------- small phones ---------- */
        @media(max-width:360px){
          .nav-scope .drawer__link{font-size:1.1rem;padding-block:15px}
          .nav-scope .drawer__sub a{font-size:.85rem}
        }

        /* ---------- kill stuck hover on touch devices ---------- */
        @media (hover:none), (pointer:coarse){
          .nav-scope .drawer__sub a:hover{color:var(--mute-dark, #9c9c95);padding-left:18px}
          .nav-scope .drawer__close:hover{background:transparent;color:var(--on-dark, #f2f1ec)}
        }
      `}</style>

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
    </div>
  );
}