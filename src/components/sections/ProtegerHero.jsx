import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProtegerHero({ image, video, imageAlt, lines, logo, logoAlt }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled((current) => current ? window.scrollY > 20 : window.scrollY > 120);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className={`proteger-hero${scrolled ? " is-scrolled" : ""}`}>
      <style>{`
        .proteger-hero{position:relative;min-height:100vh;overflow:hidden;background:#07121a}
        .proteger-hero__image,.proteger-hero__video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .proteger-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,15,24,.72),rgba(3,15,24,.28) 62%,rgba(3,15,24,.5))}
        .proteger-hero__content{position:absolute;z-index:1;left:4.2vw;right:4.2vw;bottom:8%;width:auto;color:#fff}
        .proteger-hero__brand-logo{display:inline-flex;align-items:center;justify-content:center;max-width:min(220px,60vw);min-height:52px;margin-bottom:24px;padding:10px 14px;border-radius:8px;background:rgba(3,15,24,.88);box-shadow:0 14px 34px rgba(0,0,0,.2)}
        .proteger-hero__brand-logo img{display:block;max-width:190px;max-height:42px;width:auto;height:auto;object-fit:contain}
        .proteger-hero h1{margin:0;font-size:clamp(2.25rem,4vw,4rem);font-weight:700;line-height:1.2;letter-spacing:-.035em;text-transform:none;white-space:nowrap}
        .proteger-hero h1 span{display:block}
        .proteger-hero__contact{display:none;align-items:center;gap:12px;flex:none;padding:14px 22px;background:var(--black);color:var(--white);font-size:.78rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;transition:transform .25s ease,background .25s ease}
        .proteger-hero__contact:hover{transform:translateY(-2px);background:var(--ink-2)}.proteger-hero__contact svg{width:18px;height:18px;transition:transform .25s ease}.proteger-hero__contact:hover svg{transform:translateX(4px)}
        .proteger-hero__rule{display:flex;align-items:center;gap:6px;width:min(740px,100%);margin-top:22px}
        .proteger-hero__rule::before{content:"";height:6px;flex:1;border-radius:99px;background:#5aa5ff}
        .proteger-hero__dots{display:flex;gap:4px}
        .proteger-hero__dots i{width:6px;height:6px;border-radius:50%;background:#5aa5ff}
        .proteger-hero.is-scrolled{min-height:0;padding:26px 27px 38px;background:#fff}
        .proteger-hero.is-scrolled::after{content:none}
        .proteger-hero.is-scrolled .proteger-hero__image,.proteger-hero.is-scrolled .proteger-hero__video{position:relative;display:block;height:auto;aspect-ratio:3.68/1;border-radius:16px;object-fit:cover;object-position:center top}
        .proteger-hero.is-scrolled .proteger-hero__content{position:relative;left:auto;right:auto;bottom:auto;display:flex;align-items:center;justify-content:space-between;gap:32px;width:100%;margin-top:28px;color:var(--ink)}
        .proteger-hero.is-scrolled h1{font-size:clamp(2rem,3vw,3.2rem);line-height:1.25}
        .proteger-hero.is-scrolled .proteger-hero__contact{display:inline-flex;margin-right:200px}
        @media(max-width:700px){.proteger-hero{min-height:0;padding:0 0 42px;background:#fff}.proteger-hero::after{content:none}.proteger-hero__image,.proteger-hero__video,.proteger-hero.is-scrolled .proteger-hero__image,.proteger-hero.is-scrolled .proteger-hero__video{position:relative;display:block;width:100%;height:auto;aspect-ratio:4/3;border-radius:0;object-fit:contain;object-position:center;background:#07121a;transform:none!important}.proteger-hero__content,.proteger-hero.is-scrolled .proteger-hero__content{position:relative;left:auto;right:auto;bottom:auto;align-items:flex-start;flex-direction:column;width:auto;margin:14px 18px 0;color:var(--ink)}.proteger-hero__brand-logo{min-height:44px;margin-bottom:18px;padding:8px 12px}.proteger-hero__brand-logo img{max-width:150px;max-height:34px}.proteger-hero.is-scrolled .proteger-hero__contact{margin-right:0}.proteger-hero h1{font-size:clamp(2rem,9vw,3.3rem);line-height:1.25;white-space:normal}.proteger-hero__rule{margin-top:18px}.proteger-hero__rule::before{height:4px}.proteger-hero__dots i{width:4px;height:4px}}
      `}</style>
      {video ? (
        <video
          className="proteger-hero__video"
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          aria-label={imageAlt}
        />
      ) : (
        <img className="proteger-hero__image" src={image} alt={imageAlt} />
      )}
      <div className="proteger-hero__content">
        {logo && (
          <span className="proteger-hero__brand-logo">
            <img src={logo} alt={logoAlt || ""} decoding="async" />
          </span>
        )}
        <h1>{lines.map((line) => <span key={line}>{line}</span>)}</h1>
        <Link className="proteger-hero__contact" to="/contact">Contact Us <ArrowRight /></Link>
      </div>
    </section>
  );
}
