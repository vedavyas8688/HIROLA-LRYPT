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
      {/* Scoped styles for this component only.
          Note: .logo/.logo__img (base rule) is also used by Footer.jsx,
          which adds its own small override on top — both components are
          always mounted together via Layout.jsx so this is safe. */}
      <style>{`
        :root{
          --black:#0B0B0B; --white:#FFFFFF; --maxw:1320px; --pad:clamp(20px,4.5vw,64px);
          --ease:cubic-bezier(.22,1,.36,1);
        }
        /* .btn family used by the "Get a quote" nav CTA */
        .btn{display:inline-flex;align-items:stretch;border:0;background:var(--black);color:var(--white);
          text-transform:uppercase;font-weight:600;font-size:.82rem;letter-spacing:.04em;overflow:hidden;
          transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
        .btn__ico{display:grid;place-items:center;width:54px;background:var(--white);color:var(--black);
          font-size:1rem;transition:background .35s,color .35s}
        .btn__t{display:flex;align-items:center;padding:0 26px}
        .btn:hover{transform:translateY(-2px)}
        .btn:hover .btn__ico{background:var(--black);color:var(--white);box-shadow:inset 0 0 0 1px var(--white)}
        @media(max-width:420px){.btn__t{padding:0 20px}}

        .nav{position:fixed;inset:0 0 auto 0;z-index:90;transition:background .4s var(--ease);background:var(--white);border-bottom:1px solid var(--line-cream)}
        .nav.is-stuck{box-shadow:0 6px 30px -14px rgba(0,0,0,.25)}
        .nav__bar{display:flex;align-items:center;justify-content:space-between;gap:24px;
          max-width:var(--maxw);margin:0 auto;padding:16px var(--pad)}

        .logo{display:inline-flex;align-items:center;flex:none}
        .logo__img{height:52px;width:auto;display:block}

        .nav__menu{display:flex;align-items:center;gap:34px}
        .nav__item{position:relative}
        .nav__link{display:inline-flex;align-items:center;gap:.45em;color:var(--on-cream);font-size:.92rem;
          font-weight:600;text-transform:uppercase;letter-spacing:.03em;padding:8px 0}
        .nav__link .car{width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;
          transform:rotate(45deg) translateY(-1px);opacity:.7;transition:transform .3s}
        .nav__item:hover .nav__link .car{transform:rotate(225deg) translateY(-2px)}
        .nav__link::after{content:"";position:absolute;left:0;right:100%;bottom:2px;height:1.5px;background:var(--black);transition:right .3s var(--ease)}
        .nav__item:hover .nav__link::after,.nav__link.is-active::after{right:0}

        .dropdown{position:absolute;top:calc(100% + 14px);left:50%;transform:translate(-50%,8px);min-width:210px;
          background:var(--white);border:1px solid var(--line-cream);padding:8px;opacity:0;visibility:hidden;
          transition:.3s var(--ease);box-shadow:0 24px 50px -20px rgba(0,0,0,.3)}
        .nav__item:hover .dropdown{opacity:1;visibility:visible;transform:translate(-50%,0)}
        .dropdown a{display:block;padding:11px 14px;font-size:.85rem;text-transform:uppercase;letter-spacing:.03em;
          color:var(--mute-cream);transition:.25s}
        .dropdown a:hover{color:var(--black);background:#0000000a;padding-left:18px}

        .nav__cta{display:flex;align-items:center;gap:14px}
        .burger{display:none;width:46px;height:46px;border:1px solid var(--line-cream);background:transparent;position:relative;z-index:81}
        .burger span{position:absolute;left:13px;right:13px;height:1.6px;background:var(--black);transition:.35s var(--ease)}
        .burger span:nth-child(1){top:17px}.burger span:nth-child(2){top:23px}.burger span:nth-child(3){top:29px}
        body.menu-open .burger span:nth-child(1){top:23px;transform:rotate(45deg)}
        body.menu-open .burger span:nth-child(2){opacity:0}
        body.menu-open .burger span:nth-child(3){top:23px;transform:rotate(-45deg)}

        .drawer{position:fixed;inset:0;z-index:80;background:var(--black);padding:100px var(--pad) 40px;
          transform:translateY(-100%);transition:transform .55s var(--ease);overflow-y:auto}
        body.menu-open .drawer{transform:translateY(0)}
        .drawer a{display:block;font-family:"Roboto";font-size:2rem;font-weight:700;text-transform:uppercase;
          padding:14px 0;border-bottom:1px solid var(--line-dark);color:var(--on-dark)}

        @media(max-width:980px){
          .nav__menu,.nav__cta .btn{display:none}
          .burger{display:block}
        }
        @media(max-width:560px){
          .logo__img{height:42px}
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