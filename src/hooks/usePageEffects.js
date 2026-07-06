import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

function count(el) {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const raw = el.dataset.count,
    to = parseFloat(raw),
    dec = (raw.split(".")[1] || "").length;
  if (reduce) {
    el.textContent = to.toFixed(dec);
    return;
  }
  const dur = 1700,
    t0 = performance.now();
  const step = (now) => {
    const p = Math.min((now - t0) / dur, 1),
      e = 1 - Math.pow(1 - p, 3);
    el.textContent = (to * e).toFixed(dec);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initReveal() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = $$("[data-reveal],[data-stagger]");
  const counted = new Set();
  const fc = (el) =>
    $$("[data-count]", el).forEach((c) => {
      if (!counted.has(c)) {
        counted.add(c);
        count(c);
      }
    });
  const check = () => {
    const vh = innerHeight;
    items.forEach((el) => {
      if (el.classList.contains("in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) {
        el.classList.add("in");
        if (el.hasAttribute("data-stagger"))
          $$("[data-reveal]", el).forEach((c, i) =>
            setTimeout(() => c.classList.add("in"), i * 90)
          );
        fc(el);
      }
    });
  };
  if (reduce) {
    items.forEach((el) => el.classList.add("in"));
  }
  let tk = false;
  const onScroll = () => {
    if (!tk) {
      tk = true;
      requestAnimationFrame(() => {
        check();
        tk = false;
      });
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", check, { passive: true });
  check();
  return () => {
    removeEventListener("scroll", onScroll);
    removeEventListener("resize", check);
  };
}

function initParallax() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return () => {};
  const els = $$("[data-parallax]");
  if (!els.length) return () => {};
  let tk = false;
  const upd = () => {
    const vh = innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      const sp = parseFloat(el.dataset.parallax) || 0.12;
      const off = (r.top + r.height / 2 - vh / 2) * -sp;
      el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    });
    tk = false;
  };
  const onScroll = () => {
    if (!tk) {
      requestAnimationFrame(upd);
      tk = true;
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  upd();
  return () => removeEventListener("scroll", onScroll);
}

function pheadIntro() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = $(".phead");
  if (!hero) return;
  const lines = $$(".line>span", hero),
    extras = $$("[data-hero]", hero);
  if (reduce) {
    lines.forEach((l) => (l.style.transform = "none"));
    extras.forEach((e) => {
      e.style.opacity = 1;
      e.style.transform = "none";
    });
    return;
  }
  requestAnimationFrame(() => {
    lines.forEach((l, i) => {
      l.style.transition = "transform 1s var(--ease)";
      l.style.transitionDelay = 0.12 + i * 0.1 + "s";
      l.style.transform = "translateY(0)";
    });
    extras.forEach((e, i) => {
      e.style.transition = "opacity .9s var(--ease),transform .9s var(--ease)";
      e.style.transitionDelay = 0.45 + i * 0.1 + "s";
      e.style.opacity = 1;
      e.style.transform = "none";
    });
  });
}

function initSlider() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slider = $(".slider");
  if (!slider) return () => {};
  const slides = $$(".slide", slider),
    dots = $$(".slider__dot", slider);
  if (!slides.length) return () => {};
  let i = 0,
    timer = null;
  const set = (n) => {
    slides[i].classList.remove("is-active");
    dots[i] && dots[i].classList.remove("is-active");
    i = (n + slides.length) % slides.length;
    slides[i].classList.add("is-active");
    dots[i] && dots[i].classList.add("is-active");
  };
  const stop = () => {
    if (timer) clearInterval(timer);
  };
  const start = () => {
    stop();
    if (!reduce) timer = setInterval(() => set(i + 1), 6000);
  };
  slides[0].classList.add("is-active");
  dots[0] && dots[0].classList.add("is-active");
  const cleanups = [];
  dots.forEach((d, n) => {
    const fn = () => {
      set(n);
      start();
    };
    d.addEventListener("click", fn);
    cleanups.push(() => d.removeEventListener("click", fn));
  });
  const prev = $(".slider__prev", slider),
    next = $(".slider__next", slider);
  const prevFn = () => {
    set(i - 1);
    start();
  };
  const nextFn = () => {
    set(i + 1);
    start();
  };
  prev && prev.addEventListener("click", prevFn);
  next && next.addEventListener("click", nextFn);
  start();
  return () => {
    stop();
    cleanups.forEach((c) => c());
    prev && prev.removeEventListener("click", prevFn);
    next && next.removeEventListener("click", nextFn);
  };
}

function initFAQ() {
  const cleanups = [];
  $$(".faq__item").forEach((it) => {
    const q = $(".faq__q", it);
    if (!q) return;
    q.setAttribute("aria-expanded", "false");
    const fn = () => {
      const open = it.classList.contains("open");
      it.classList.toggle("open");
      q.setAttribute("aria-expanded", String(!open));
    };
    q.addEventListener("click", fn);
    cleanups.push(() => q.removeEventListener("click", fn));
  });
  return () => cleanups.forEach((c) => c());
}

// Runs the page-level animation/interaction engine after each route change.
export function usePageEffects(deps) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanups = [];
    // wait a tick so dangerouslySetInnerHTML content is painted
    const id = requestAnimationFrame(() => {
      cleanups.push(initReveal());
      cleanups.push(initParallax());
      pheadIntro();
      cleanups.push(initSlider());
      cleanups.push(initFAQ());
    });
    return () => {
      cancelAnimationFrame(id);
      cleanups.forEach((fn) => fn && fn());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
}
