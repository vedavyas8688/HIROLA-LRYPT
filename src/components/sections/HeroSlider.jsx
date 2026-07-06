import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSlider({ slides }) {
  const [i, setI] = useState(0);
  const timerRef = useRef(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const go = (n) => setI(((n % slides.length) + slides.length) % slides.length);

  useEffect(() => {
    if (reduce) return;
    stop();
    timerRef.current = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  return (
    <section className="hero slider">
      {slides.map((s, idx) => (
        <div className={`slide${idx === i ? " is-active" : ""}`} key={idx}>
          <div className="hero__media">
            <img
              className="parallax"
              data-parallax="0.1"
              src={s.image}
              alt={s.imageAlt}
              fetchpriority={idx === 0 ? "high" : undefined}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
          <div className="slide__in">
            <span className="label">{s.label}</span>
            <h1>
              {s.lines.map((line, li) => (
                <span className="line" key={li}>
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <p className="hero__sub">{s.sub}</p>
            <div className="hero__btn">
              <Link className="btn btn--invert" to={s.btnHref}>
                <span className="btn__ico">&#8594;</span>
                <span className="btn__t">{s.btnText}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="slider__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider__dot${idx === i ? " is-active" : ""}`}
            aria-label="Slide"
            onClick={() => go(idx)}
          />
        ))}
      </div>
      <div className="slider__nav">
        <button className="slider__prev" aria-label="Previous" onClick={() => go(i - 1)}>
          &#8249;
        </button>
        <button className="slider__next" aria-label="Next" onClick={() => go(i + 1)}>
          &#8250;
        </button>
      </div>
    </section>
  );
}
