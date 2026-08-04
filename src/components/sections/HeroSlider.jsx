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
          text-transform:none;
          color:#fff;
          letter-spacing:-.015em;
          line-height:1.08;
          margin:0;
          font-size:clamp(1.9rem, 3.6vw, 3.4rem);
          max-width:34ch;
        }

        @media(min-width:1200px){
          .hero-slider-scope .hero__title{
            font-size:clamp(2.1rem, 3.2vw, 3.6rem);
          }
        }

        @media(max-width:900px){
          .hero-slider-scope{
            min-height:0;
            display:block;
            background:var(--black);
            padding-bottom:86px;
          }
          .hero-slider-scope .slide{
            position:relative;
            inset:auto;
            display:none;
            opacity:1;
            visibility:visible;
          }
          .hero-slider-scope .slide.is-active{
            display:grid;
            grid-template-rows:auto 1fr;
            min-height:0;
          }
          .hero-slider-scope .hero__media{
            position:relative;
            inset:auto;
            min-height:0;
            aspect-ratio:16/9;
            background:#050505;
            overflow:hidden;
          }
          .hero-slider-scope .hero__media img{
            display:block;
            width:100%;
            height:100%;
            object-fit:contain;
            object-position:center;
            transform:none!important;
          }
          .hero-slider-scope .hero__media::after{
            background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.34));
          }
          .hero-slider-scope .slide__in{
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            padding:34px var(--pad) 22px;
            min-height:300px;
          }
          .hero-slider-scope .hero__title{
            font-size:clamp(1.7rem, 5vw, 2.4rem);
            max-width:28ch;
          }
          .hero-slider-scope .hero__sub{
            max-width:34rem;
          }
        }

        @media(max-width:560px){
          .hero-slider-scope{
            padding-bottom:78px;
          }
          .hero-slider-scope .hero__media{
            aspect-ratio:4/3;
          }
          .hero-slider-scope .slide__in{
            padding:28px var(--pad) 20px;
            min-height:330px;
          }
          .hero-slider-scope .hero__title{
            font-size:clamp(1.5rem, 6.5vw, 2rem);
            line-height:1.12;
            max-width:100%;
          }
          .hero-slider-scope .hero__sub{
            margin-top:18px;
            font-size:.98rem;
            line-height:1.55;
          }
          .hero-slider-scope .hero__btn{
            margin-top:24px;
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
          transition:transform .5s ease; /* FIX: smooth exit, no instant snap-back */
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
        /* FIX: keep the outgoing slide's title from being interactive/overlapping visually */
        .hero-slider-scope .slide:not(.is-active) .hero__title{
          pointer-events:none;
        }

        @media (prefers-reduced-motion: reduce){
          .hero-slider-scope .hero__title .line > span{
            transform:none !important;
            transition:none !important;
          }
        }

        /* FIX: force prev/next arrows to show on mobile, regardless of global CSS */
        @media (max-width:900px){
          .hero-slider-scope .slider__nav{
            display:flex !important;
            gap:8px;
          }
          .hero-slider-scope .slider__prev,
          .hero-slider-scope .slider__next{
            display:flex !important;
            align-items:center;
            justify-content:center;
            width:36px;
            height:36px;
            font-size:1.4rem;
            opacity:1 !important;
            visibility:visible !important;
          }
        }
        @media (max-width:560px){
          .hero-slider-scope .slider__nav{
            bottom:14px;
            right:14px;
          }
          .hero-slider-scope .slider__prev,
          .hero-slider-scope .slider__next{
            width:32px;
            height:32px;
            font-size:1.2rem;
          }
        }
        .hero-slider-scope .slider__dot::after{
          content:none;
        }
        .hero-slider-scope .slider__dot{
          background:#ffffff42;
        }
        .hero-slider-scope .slider__dot-fill{
          display:block;
          width:0;
          height:100%;
          background:#fff;
        }
        .hero-slider-scope .slider__dot.is-active .slider__dot-fill{
          animation:heroDotProgress 6s linear forwards;
        }
        @keyframes heroDotProgress{
          from{width:0}
          to{width:100%}
        }
        @media (prefers-reduced-motion: reduce){
          .hero-slider-scope .slider__dot.is-active .slider__dot-fill{
            animation:none;
            width:100%;
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
          >
            <span className="slider__dot-fill" />
          </button>
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
