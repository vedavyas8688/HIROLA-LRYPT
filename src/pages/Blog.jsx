import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { meta, postList } from "../data/blogsData";

function cleanMeta(value = "") {
  return value.replaceAll("Ã‚Â·", "·").replaceAll("Â·", "·");
}

function categoryFromMeta(value = "") {
  return cleanMeta(value).split("·")[0].trim();
}

export default function Blog() {
  const navigate = useNavigate();
  const [featured, ...rest] = postList;

  usePageMeta(meta.title, meta.description);

  const openPost = (post) => navigate(`/blog/${post.slug}`);

  return (
    <main className="blog-index">
      <style>{`
        .blog-index{min-height:100vh;background:var(--cream);color:var(--on-cream)}
        .blog-index__hero{position:relative;overflow:hidden;padding:clamp(120px,12vw,170px) 0 clamp(70px,8vw,104px);background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.4) 52%,rgba(0,0,0,.2)),url("/assets/img/solutionsbanner.webp") center/cover}
        .blog-index__hero::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.34))}
        .blog-index__hero::after{content:none}
        .blog-index__hero-inner{position:relative;z-index:1}
        .blog-index__kicker{display:block;margin-bottom:22px;color:rgba(255,255,255,.72);font-size:.76rem;font-weight:700;letter-spacing:.24em;text-transform:uppercase}
        .blog-index h1{max-width:900px;margin:0;color:#fff;font-size:clamp(3.1rem,8vw,7.8rem);line-height:.92;letter-spacing:-.05em;text-transform:none;text-shadow:0 10px 34px rgba(0,0,0,.35)}
        .blog-index h1 span{color:#f4efe4;font-style:italic;font-weight:500;text-shadow:0 10px 34px rgba(0,0,0,.35)}
        .blog-index__rule{width:76px;height:1px;margin-top:34px;background:rgba(255,255,255,.58)}
        .blog-index__body{padding:clamp(52px,6vw,86px) 0 clamp(80px,9vw,130px)}
        .blog-feature{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(340px,.88fr);overflow:hidden;border:1px solid var(--line-cream);background:#fff;cursor:pointer;transition:transform .35s var(--ease),border-color .35s var(--ease),box-shadow .35s var(--ease)}
        .blog-feature:hover{transform:translateY(-5px);border-color:rgba(0,0,0,.26);box-shadow:0 24px 70px rgba(0,0,0,.12)}
        .blog-feature__image{min-height:330px;aspect-ratio:16/10;background:#eee;overflow:hidden}
        .blog-feature__image img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
        .blog-feature:hover .blog-feature__image img{transform:scale(1.035)}
        .blog-feature__copy{display:flex;flex-direction:column;justify-content:space-between;padding:clamp(28px,4vw,48px)}
        .blog-chip{display:inline-flex;width:max-content;border:1px solid var(--line-cream);padding:8px 12px;color:var(--mute-cream);font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase}
        .blog-feature h2{margin:24px 0 0;color:var(--black);font-size:clamp(1.85rem,3.2vw,3rem);line-height:1.1;text-transform:none;letter-spacing:-.035em}
        .blog-feature p,.blog-card p{color:var(--mute-cream);line-height:1.65}
        .blog-feature p{margin:22px 0 0;font-size:1rem}
        .blog-meta{display:flex;align-items:center;gap:8px;color:var(--mute-cream);font-size:.78rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase}
        .blog-read{display:inline-flex;align-items:center;gap:12px;color:var(--black);font-size:.76rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;transition:gap .25s ease}
        .blog-feature:hover .blog-read,.blog-card:hover .blog-read{gap:18px}
        .blog-feature__foot{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:42px}
        .blog-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:28px}
        .blog-card{display:flex;min-height:100%;flex-direction:column;overflow:hidden;border:1px solid var(--line-cream);background:#fff;cursor:pointer;transition:transform .35s var(--ease),border-color .35s var(--ease),box-shadow .35s var(--ease)}
        .blog-card:hover{transform:translateY(-6px);border-color:rgba(0,0,0,.24);box-shadow:0 18px 56px rgba(0,0,0,.1)}
        .blog-card__image{display:block;aspect-ratio:16/10;overflow:hidden;background:#eee}
        .blog-card__image img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
        .blog-card:hover .blog-card__image img{transform:scale(1.04)}
        .blog-card__copy{display:flex;flex:1;flex-direction:column;padding:24px}
        .blog-card h3{margin:0 0 14px;color:var(--black);font-size:clamp(1.16rem,1.45vw,1.45rem);line-height:1.3;text-transform:none;letter-spacing:-.02em}
        .blog-card p{margin:0 0 24px;font-size:.94rem}
        .blog-card__foot{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:auto}
        .blog-card__foot svg:last-child{opacity:0;transform:translateX(-7px);transition:opacity .25s ease,transform .25s ease}
        .blog-card:hover .blog-card__foot svg:last-child{opacity:1;transform:translateX(0)}
        @media(max-width:980px){.blog-feature{grid-template-columns:1fr}.blog-feature__image{min-height:0}.blog-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:640px){.blog-index__hero{padding-top:104px}.blog-index h1{font-size:clamp(2.35rem,12.8vw,3.45rem);letter-spacing:-.04em}.blog-feature__copy,.blog-card__copy{padding:22px}.blog-feature__foot{align-items:flex-start;flex-direction:column}.blog-grid{grid-template-columns:1fr}}
      `}</style>

      <section className="blog-index__hero">
        <div className="wrap blog-index__hero-inner">
          <span className="blog-index__kicker">LRYPT Insights</span>
          <h1>
            Engineering,
            <br />
            <span>technology,</span>
            <br />
            growth.
          </h1>
          <div className="blog-index__rule" />
        </div>
      </section>

      <section className="blog-index__body">
        <div className="wrap">
          {featured && (
            <article className="blog-feature" onClick={() => openPost(featured)}>
              <div className="blog-feature__image">
                <img src={featured.img} alt={featured.alt} decoding="async" />
              </div>
              <div className="blog-feature__copy">
                <div>
                  <span className="blog-chip">{categoryFromMeta(featured.meta)}</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.desc}</p>
                </div>
                <div className="blog-feature__foot">
                  <span className="blog-meta"><Calendar size={13} /> {cleanMeta(featured.meta)}</span>
                  <span className="blog-read">Read Article <ArrowRight size={16} /></span>
                </div>
              </div>
            </article>
          )}

          {rest.length > 0 && (
            <div className="blog-grid">
              {rest.map((post) => (
                <article className="blog-card" onClick={() => openPost(post)} key={post.slug}>
                  <div className="blog-card__image">
                    <img src={post.img} alt={post.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="blog-card__copy">
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <div className="blog-card__foot">
                      <span className="blog-meta"><Calendar size={12} /> {cleanMeta(post.meta)}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
