import { Link } from "react-router-dom";
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
            <span className="btn__ico">&#8594;</span>
            <span className="btn__t">Back to home</span>
          </Link>
          <Link className="btn btn--outline" to="/contact">
            <span className="btn__ico">&#8594;</span>
            <span className="btn__t">Contact us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
