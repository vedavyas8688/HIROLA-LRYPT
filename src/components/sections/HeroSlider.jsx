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
    <section className="hero slider hero-slider-scope">
      <style>{`
        /* ============================================================
           HERO SLIDER — scoped styles (self-contained in this component)
           ============================================================ */

        .hero-slider-scope .hero__title{
          font-family:"Roboto", system-ui, sans-serif;
          font-weight:700;
          text-transform:uppercase;
          color:#fff;
          letter-spacing:-.015em;
          line-height:1.08;
          margin:0;
          font-size:clamp(1.9rem, 3.6vw, 3.4rem);
          max-width:34ch; /* generous — sizing controls line count, not wrapping */
        }

        @media(min-width:1200px){
          .hero-slider-scope .hero__title{
            font-size:clamp(2.1rem, 3.2vw, 3.6rem);
          }
        }

        @media(max-width:900px){
          .hero-slider-scope .hero__title{
            font-size:clamp(1.7rem, 5vw, 2.4rem);
            max-width:26ch;
          }
        }

        @media(max-width:560px){
          .hero-slider-scope .hero__title{
            font-size:clamp(1.5rem, 6.5vw, 2rem);
            line-height:1.12;
            max-width:22ch;
          }
        }

        /* line reveal animation, scoped to the title only */
        .hero-slider-scope .hero__title .line{
          display:block;
          overflow:hidden;
        }
        .hero-slider-scope .hero__title .line > span{
          display:block;
          transform:translateY(110%);
        }
        .hero-slider-scope .slide.is-active .hero__title .line > span{
          transform:none;
          transition:transform .9s cubic-bezier(.22,1,.36,1) .3s;
        }
        .hero-slider-scope .slide.is-active .hero__title .line:nth-child(1) > span{
          transition-delay:.3s;
        }
        .hero-slider-scope .slide.is-active .hero__title .line:nth-child(2) > span{
          transition-delay:.42s;
        }
        .hero-slider-scope .slide.is-active .hero__title .line:nth-child(3) > span{
          transition-delay:.54s;
        }

        /* reduced motion: skip the slide-up reveal entirely */
        @media (prefers-reduced-motion: reduce){
          .hero-slider-scope .hero__title .line > span{
            transform:none !important;
            transition:none !important;
          }
        }
      `}</style>

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
            <h1 className="hero__title">
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