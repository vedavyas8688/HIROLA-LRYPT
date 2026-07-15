 import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* ============================================================
   ProductDetailModal — popup shown when a product card in
   TabbedProductGrid is clicked. Supports two visual variants,
   so each product can use whichever fits it best:

   variant: "gallery"
     Large image + prev/next arrows + thumbnail strip on the
     left, heading/copy/specs + CTA on the right, and a
     Key Features / Ideal For tab switcher below the copy.
     (Matches the "FORM 4L" reference screenshot.)

   variant: "simple"
     Single image on one side, heading + paragraph + CTA on
     the other — no carousel, no tabs.
     (Matches the "FUSE SIFT X1" reference screenshot.)

   You don't render this directly on a page — TabbedProductGrid
   renders it automatically whenever a clicked item has a
   `detail` object. See formlabsData.js for the data shape.
   ============================================================ */

function PDMStyles() {
  return (
    <style>{`
      .pdm__overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;
        align-items:center;justify-content:center;padding:24px;z-index:10002;overflow-y:auto}
      .pdm__box{background:#fff;width:min(960px,100%);max-height:calc(100dvh - 48px);overflow-y:auto;
        border:1px solid var(--line-cream)}
      .pdm__head{display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:1;
        padding:18px 26px;border-bottom:1px solid var(--line-cream);background:#fff}
      .pdm__title{font-weight:700;text-transform:uppercase;letter-spacing:.04em;font-size:.95rem;color:#000}
      .pdm__close{background:none;border:0;font-size:1.3rem;line-height:1;cursor:pointer;color:#000;padding:4px}

      .pdm__body{padding:28px 30px 34px}
      .pdm__gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px}
      .pdm__mainimg-wrap{position:relative;aspect-ratio:1/1;background:#faf9f6;
        border:1px solid var(--line-cream);display:grid;place-items:center;overflow:hidden}
      .pdm__mainimg-wrap img{width:100%;height:100%;object-fit:contain;transform:scale(1.7)}
      .pdm__nav{position:absolute;top:50%;transform:translateY(-50%);background:none;
        border:0;font-size:1.6rem;color:#000;cursor:pointer;padding:6px 10px;opacity:.6;transition:opacity .25s}
      .pdm__nav:hover{opacity:1}
      .pdm__nav--prev{left:2px}
      .pdm__nav--next{right:2px}
      .pdm__thumbs{display:flex;gap:10px;margin-top:12px}
      .pdm__thumb{flex:1;aspect-ratio:1/1;background:#faf9f6;border:1px solid var(--line-cream);
        display:grid;place-items:center;cursor:pointer;padding:6px;transition:border-color .25s}
      .pdm__thumb img{max-width:100%;max-height:100%;object-fit:contain}
      .pdm__thumb.is-active{border-color:#000}

      .pdm__copy h3{font-size:1.3rem;margin:0 0 14px;color:#000}
      .pdm__copy p{font-size:.92rem;line-height:1.6;color:#555;margin:0 0 14px}
      .pdm__specs{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:20px 0 22px}
      .pdm__spec-label{font-weight:700;text-transform:uppercase;letter-spacing:.03em;font-size:.74rem;color:#000;margin-bottom:4px}
      .pdm__spec-value{font-size:.86rem;color:#555;white-space:pre-line}
      .pdm__cta{display:inline-block;background:#000;color:#fff;border:0;padding:13px 28px;
        font-weight:700;text-transform:uppercase;letter-spacing:.04em;font-size:.8rem;cursor:pointer;
        text-decoration:none;transition:opacity .25s}
      .pdm__cta:hover{opacity:.82}

      .pdm__tabs{display:flex;gap:30px;margin-top:30px;border-top:1px solid var(--line-cream);padding-top:16px}
      .pdm__tab{background:none;border:0;padding:0 0 8px;font-weight:700;text-transform:uppercase;
        letter-spacing:.03em;font-size:.78rem;color:#888;border-bottom:2px solid transparent;cursor:pointer}
      .pdm__tab.is-active{color:#000;border-color:#000}
      .pdm__tabpanel{margin-top:16px;display:grid;gap:10px;padding-left:20px}
      .pdm__tabpanel li{font-size:.88rem;line-height:1.6;color:#555}
      .pdm__tabpanel li b{color:#000}

      .pdm__simple-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:40px;align-items:center}
      .pdm__simple-grid.img-first{grid-template-columns:1fr 1.1fr}
      .pdm__simple-img{aspect-ratio:1/1;background:#faf9f6;border:1px solid var(--line-cream);
        display:grid;place-items:center;padding:20px;position:relative}
      .pdm__simple-img img{width:100%;height:100%;object-fit:contain}
      .pdm__simple-media .pdm__thumbs{margin-top:12px}
      .pdm__simple-copy h3{font-size:1.15rem;margin:0 0 14px;color:#000}

      @media(max-width:760px){
        .pdm__overlay{align-items:flex-start;padding:12px}
        .pdm__box{max-height:calc(100dvh - 24px)}
        .pdm__head{padding:15px 18px}
        .pdm__body{padding:22px 18px 26px}
        .pdm__gallery-grid,.pdm__simple-grid,.pdm__simple-grid.img-first{grid-template-columns:1fr}
        .pdm__specs{grid-template-columns:1fr 1fr}
      }
      @media(max-width:420px){
        .pdm__specs{grid-template-columns:1fr}
        .pdm__tabs{gap:18px}
      }
    `}</style>
  );
}

export default function ProductDetailModal({ item, onClose }) {
  const detail = item?.detail;
  const images = detail?.images?.length
    ? detail.images
    : item
    ? [{ src: item.img, alt: item.alt || item.label }]
    : [];

  const [imgIdx, setImgIdx] = useState(0);
  const [tab, setTab] = useState("features");

  useEffect(() => {
    setImgIdx(0);
    setTab("features");
  }, [item]);

  useEffect(() => {
    if (item) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [item]);

  useEffect(() => {
    if (!item) return undefined;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item || !detail) return null;

  const showTabs = detail.keyFeatures?.length || detail.idealFor?.length;

  return createPortal(
    <div
      className="pdm__overlay"
      style={{ zIndex: 10002 }}
      onClick={onClose}
    >
      <PDMStyles />
      <div
        className="pdm__box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdm-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pdm__head">
          <span id="pdm-title" className="pdm__title">{detail.title || item.label}</span>
          <button type="button" className="pdm__close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <div className="pdm__body">
          {detail.variant === "simple" ? (
            <>
            <div className={`pdm__simple-grid${detail.imgFirst ? "" : " img-first"}`}>
              {!detail.imgFirst && (
                <div className="pdm__simple-copy">
                  <h3>{detail.heading}</h3>
                  {(detail.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {detail.specs?.length > 0 && (
                    <div className="pdm__specs">
                      {detail.specs.map((s, i) => (
                        <div key={i}>
                          <div className="pdm__spec-label">{s.label}</div>
                          <div className="pdm__spec-value">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {detail.btnText && (
                    <a className="pdm__cta" href={detail.btnHref || "#"}>
                      {detail.btnText}
                    </a>
                  )}
                </div>
              )}
              <div className="pdm__simple-media">
                <div className="pdm__simple-img">
                  {images.length > 1 && (
                    <button
                      type="button"
                      className="pdm__nav pdm__nav--prev"
                      onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}
                      aria-label="Previous image"
                    >
                      &lsaquo;
                    </button>
                  )}
                  <img src={images[imgIdx]?.src} alt={images[imgIdx]?.alt} />
                  {images.length > 1 && (
                    <button
                      type="button"
                      className="pdm__nav pdm__nav--next"
                      onClick={() => setImgIdx((imgIdx + 1) % images.length)}
                      aria-label="Next image"
                    >
                      &rsaquo;
                    </button>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="pdm__thumbs">
                    {images.map((im, i) => (
                      <button
                        type="button"
                        key={i}
                        className={`pdm__thumb${i === imgIdx ? " is-active" : ""}`}
                        onClick={() => setImgIdx(i)}
                      >
                        <img src={im.src} alt={im.alt} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {detail.imgFirst && (
                <div className="pdm__simple-copy">
                  <h3>{detail.heading}</h3>
                  {(detail.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {detail.specs?.length > 0 && (
                    <div className="pdm__specs">
                      {detail.specs.map((s, i) => (
                        <div key={i}>
                          <div className="pdm__spec-label">{s.label}</div>
                          <div className="pdm__spec-value">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {detail.btnText && (
                    <a className="pdm__cta" href={detail.btnHref || "#"}>
                      {detail.btnText}
                    </a>
                  )}
                </div>
              )}
            </div>
            {showTabs && (
              <div className="pdm__details-tabs">
                <div className="pdm__tabs">
                  {detail.keyFeatures?.length > 0 && (
                    <button
                      type="button"
                      className={`pdm__tab${tab === "features" ? " is-active" : ""}`}
                      onClick={() => setTab("features")}
                    >
                      Key Features
                    </button>
                  )}
                  {detail.idealFor?.length > 0 && (
                    <button
                      type="button"
                      className={`pdm__tab${tab === "idealFor" ? " is-active" : ""}`}
                      onClick={() => setTab("idealFor")}
                    >
                      {detail.secondaryTabLabel || "Ideal For"}
                    </button>
                  )}
                </div>
                <ul className="pdm__tabpanel">
                  {(tab === "features" ? detail.keyFeatures : detail.idealFor || []).map((f, i) => (
                    <li key={i}>
                      {typeof f === "string" ? f : <><b>{f.label}: </b>{f.text}</>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            </>
          ) : (
            <>
              <div className="pdm__gallery-grid">
                <div className="pdm__media">
                <div className="pdm__mainimg-wrap">
                  {images.length > 1 && (
                    <button
                      type="button"
                      className="pdm__nav pdm__nav--prev"
                      onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}
                      aria-label="Previous image"
                    >
                      &lsaquo;
                    </button>
                  )}
                  <img src={images[imgIdx]?.src} alt={images[imgIdx]?.alt} />
                  {images.length > 1 && (
                    <button
                      type="button"
                      className="pdm__nav pdm__nav--next"
                      onClick={() => setImgIdx((imgIdx + 1) % images.length)}
                      aria-label="Next image"
                    >
                      &rsaquo;
                    </button>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="pdm__thumbs">
                    {images.map((im, i) => (
                      <button
                        type="button"
                        key={i}
                        className={`pdm__thumb${i === imgIdx ? " is-active" : ""}`}
                        onClick={() => setImgIdx(i)}
                      >
                        <img src={im.src} alt={im.alt} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

                <div className="pdm__copy">
                  <h3>{detail.tagline}</h3>
                  {(detail.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {detail.specs?.length > 0 && (
                    <div className="pdm__specs">
                      {detail.specs.map((s, i) => (
                        <div key={i}>
                          <div className="pdm__spec-label">{s.label}</div>
                          <div className="pdm__spec-value">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {detail.btnText && (
                    <a className="pdm__cta" href={detail.btnHref || "#"}>
                      {detail.btnText}
                    </a>
                  )}
                </div>
              </div>

              {showTabs && (
                <div className="pdm__details-tabs">
                  <div className="pdm__tabs">
                    {detail.keyFeatures?.length > 0 && (
                      <button
                        type="button"
                        className={`pdm__tab${tab === "features" ? " is-active" : ""}`}
                        onClick={() => setTab("features")}
                      >
                        Key Features
                      </button>
                    )}
                    {detail.idealFor?.length > 0 && (
                      <button
                        type="button"
                        className={`pdm__tab${tab === "idealFor" ? " is-active" : ""}`}
                        onClick={() => setTab("idealFor")}
                      >
                        {detail.secondaryTabLabel || "Ideal For"}
                      </button>
                    )}
                  </div>
                  <ul className="pdm__tabpanel">
                    {(tab === "features" ? detail.keyFeatures : detail.idealFor || []).map((f, i) => (
                      <li key={i}>
                        {typeof f === "string" ? (
                          f
                        ) : (
                          <>
                            <b>{f.label}: </b>
                            {f.text}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
