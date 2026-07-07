 import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Page not found (404) | LRYPT Technologies",
    "The page you're looking for can't be found. Explore LRYPT Technologies' solutions and services or head back home."
  );
  return (
    <section
      className="phead phead--cream"
      style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}
    >
      {/* Same .phead / .crumb rules as PageHead.jsx's scoped <style>
          (kept here too since this page renders its own markup instead
          of using <PageHead>). */}
      <style>{`
        :root{
          --black:#0B0B0B; --white:#FFFFFF; --cream:#F3F0E6; --on-cream:#0B0B0B; --on-dark:#F2F1EC;
          --mute-cream:#6E6E66; --line-cream:#0B0B0B1f; --line-dark:#ffffff1f;
          --maxw:1320px; --pad:clamp(20px,4.5vw,64px); --ease:cubic-bezier(.22,1,.36,1);
        }
        .wrap{max-width:var(--maxw);margin:0 auto;padding-inline:var(--pad)}
        .lead{font-size:clamp(1.02rem,1.35vw,1.18rem);line-height:1.62;color:var(--mute-cream);max-width:56ch}
        .btn{display:inline-flex;align-items:stretch;border:0;background:var(--black);color:var(--white);
          text-transform:uppercase;font-weight:600;font-size:.82rem;letter-spacing:.04em;overflow:hidden;
          transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
        .btn__ico{display:grid;place-items:center;width:54px;background:var(--white);color:var(--black);
          font-size:1rem;transition:background .35s,color .35s}
        .btn__t{display:flex;align-items:center;padding:0 26px}
        .btn:hover{transform:translateY(-2px)}
        .btn:hover .btn__ico{background:var(--black);color:var(--white);box-shadow:inset 0 0 0 1px var(--white)}
        .btn--outline{background:transparent;color:var(--on-dark);box-shadow:inset 0 0 0 1px var(--line-dark)}
        .btn--outline .btn__ico{background:var(--white);color:var(--black)}
        .sec--cream .btn--outline,.phead--cream .btn--outline{color:var(--on-cream);box-shadow:inset 0 0 0 1px var(--line-cream)}
        @media(max-width:420px){.btn__t{padding:0 20px}}

        .phead{padding:clamp(150px,18vh,230px) 0 clamp(50px,7vw,80px);position:relative;overflow:hidden;background:var(--black);color:#fff}
        .phead--cream{background:var(--cream);color:var(--on-cream)}
        .crumb{font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:.78rem;margin-bottom:22px;opacity:.8}
      `}</style>

      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="crumb" style={{ justifyContent: "center" }}>
          Error 404
        </div>
        <h1 style={{ fontSize: "clamp(3rem,10vw,8rem)" }}>404</h1>
        <p className="lead" style={{ margin: "20px auto 34px", maxWidth: "44ch" }}>
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn" to="/">
            <span className="btn__ico">
              <ArrowRight size={18} />
            </span>
            <span className="btn__t">Back to home</span>
          </Link>
          <Link className="btn btn--outline" to="/contact">
            <span className="btn__ico">
              <ArrowRight size={18} />
            </span>
            <span className="btn__t">Contact us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}