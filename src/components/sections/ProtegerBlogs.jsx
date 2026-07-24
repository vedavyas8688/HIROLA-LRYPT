import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { postList } from "../../data/blogsData";

const featuredSlugs = ["proteger-reliable-operations", "simulation-driven-product-development", "npd-lifecycle-end-to-end"];
const featuredPosts = featuredSlugs.map((slug) => postList.find((post) => post.slug === slug)).filter(Boolean);

export default function ProtegerBlogs() {
  return (
    <section className="proteger-blogs">
      <style>{`
        .proteger-blogs{padding:clamp(82px,9vw,140px) 0;background:var(--cream-2);color:var(--on-cream)}
        .proteger-blogs__wrap{width:min(1320px,calc(100% - 80px));margin-inline:auto}
        .proteger-blogs__eyebrow{display:block;margin-bottom:22px;font-size:.82rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
        .proteger-blogs__head{display:flex;align-items:end;justify-content:space-between;gap:40px}
        .proteger-blogs h2{max-width:880px;margin:0;font-size:clamp(2.15rem,3.75vw,4rem);line-height:1.13;letter-spacing:-.04em;text-transform:none}
        .proteger-blogs__all{display:inline-flex;align-items:center;gap:12px;flex:none;padding:14px 20px;border:1px solid var(--black);font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;transition:background .25s ease,color .25s ease}.proteger-blogs__all:hover{background:var(--black);color:var(--white)}.proteger-blogs__all svg{width:18px;height:18px;transition:transform .25s ease}.proteger-blogs__all:hover svg{transform:translateX(4px)}
        .proteger-blogs__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px;margin-top:clamp(52px,7vw,86px)}
        .proteger-blog{display:flex;flex-direction:column;background:var(--cream);border:1px solid var(--line-cream);min-height:100%}
        .proteger-blog__image{display:block;aspect-ratio:16/10;overflow:hidden;background:var(--black)}.proteger-blog__image img{width:100%;height:100%;object-fit:cover;transition:transform .55s var(--ease)}.proteger-blog:hover .proteger-blog__image img{transform:scale(1.045)}
        .proteger-blog__copy{display:flex;flex:1;flex-direction:column;padding:28px}.proteger-blog__meta{margin-bottom:18px;color:var(--mute-cream);font-size:.73rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .proteger-blog h3{margin:0 0 16px;font-size:clamp(1.18rem,1.55vw,1.5rem);line-height:1.35;text-transform:none}.proteger-blog p{margin:0;color:var(--mute-cream);font-size:.95rem;line-height:1.65}
        .proteger-blog__link{display:inline-flex;align-items:center;gap:10px;margin-top:auto;padding-top:28px;font-size:.76rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.proteger-blog__link svg{width:17px;height:17px;transition:transform .25s ease}.proteger-blog:hover .proteger-blog__link svg{transform:translateX(4px)}
        @media(max-width:900px){.proteger-blogs__wrap{width:calc(100% - 46px)}.proteger-blogs__grid{grid-template-columns:repeat(2,1fr)}.proteger-blog:first-child{grid-column:1/-1}.proteger-blogs__head{align-items:start;flex-direction:column}}
        @media(max-width:620px){.proteger-blogs__wrap{width:calc(100% - 32px)}.proteger-blogs__grid{grid-template-columns:1fr}.proteger-blog:first-child{grid-column:auto}}
      `}</style>
      <div className="proteger-blogs__wrap">
        <span className="proteger-blogs__eyebrow">Blogs</span>
        <div className="proteger-blogs__head">
          <h2>Inside the Synergy: How Proteger Delivers Reliable Operations</h2>
          <Link className="proteger-blogs__all" to="/blog">Explore All <ArrowRight /></Link>
        </div>
        <div className="proteger-blogs__grid">
          {featuredPosts.map((post) => (
            <article className="proteger-blog" key={post.slug}>
              <Link className="proteger-blog__image" to={`/blog/${post.slug}`}><img src={post.img} alt={post.alt} /></Link>
              <div className="proteger-blog__copy">
                <span className="proteger-blog__meta">{post.meta}</span>
                <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.desc}</p>
                <Link className="proteger-blog__link" to={`/blog/${post.slug}`}>Read Article <ArrowRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
