import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { getPost, postList } from "../data/blogsData";

function cleanMeta(value = "") {
  return value.replaceAll("Ã‚Â·", "·").replaceAll("Â·", "·");
}

function BlogBlock({ block }) {
  if (typeof block === "string") return <p>{block}</p>;
  if (block.type === "h2") return <h2>{block.text}</h2>;
  if (block.type === "h3") return <h3>{block.text}</h3>;

  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    const [head, ...rows] = block.rows;
    return (
      <div className="blog-detail__table">
        <table>
          <thead>
            <tr>
              {head.map((cell) => (
                <th key={cell}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={`${row.join("-")}-${cell}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <p>{block.text}</p>;
}

function BlogPostStyles() {
  return (
    <style>{`
      .blog-detail{min-height:100vh;background:var(--cream);color:var(--on-cream);padding:clamp(108px,11vw,150px) 0 clamp(80px,9vw,128px)}
      .blog-detail__article{max-width:980px;margin:0 auto}
      .blog-detail__back{display:inline-flex;align-items:center;gap:10px;margin-bottom:34px;color:var(--mute-cream);font-size:.76rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;transition:gap .25s ease,color .25s ease}
      .blog-detail__back:hover{gap:14px;color:var(--black)}
      .blog-detail__back svg{width:16px;height:16px}
      .blog-detail__meta{display:inline-flex;align-items:center;gap:8px;margin-bottom:22px;color:var(--mute-cream);font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
      .blog-detail h1{max-width:900px;margin:0 0 clamp(34px,5vw,54px);color:var(--black);font-size:clamp(2.35rem,5.2vw,5rem);line-height:1.02;letter-spacing:-.045em;text-transform:none}
      .blog-detail__hero{overflow:hidden;margin-bottom:clamp(42px,6vw,70px);border:1px solid var(--line-cream);background:#eee}
      .blog-detail__hero img{display:block;width:100%;aspect-ratio:16/8.4;object-fit:cover;object-position:center}
      .blog-detail__content{max-width:760px;margin:0 auto}
      .blog-detail__content p{margin:0 0 24px;color:#363636;font-size:clamp(1.02rem,1.25vw,1.16rem);line-height:1.82}
      .blog-detail__content p:first-child{color:var(--black);font-size:clamp(1.12rem,1.5vw,1.32rem);line-height:1.68}
      .blog-detail__content h2{margin:54px 0 18px;color:var(--black);font-size:clamp(1.75rem,2.7vw,2.55rem);line-height:1.16;letter-spacing:-.03em;text-transform:none}
      .blog-detail__content h3{margin:36px 0 14px;color:var(--black);font-size:clamp(1.35rem,2vw,1.9rem);line-height:1.2;text-transform:none}
      .blog-detail__content ul{display:grid;gap:12px;margin:0 0 30px;padding:0;list-style:none}
      .blog-detail__content li{position:relative;padding-left:28px;color:#363636;font-size:clamp(1rem,1.18vw,1.1rem);line-height:1.65}
      .blog-detail__content li::before{content:"";position:absolute;left:0;top:.68em;width:8px;height:8px;border-radius:50%;background:var(--black)}
      .blog-detail__table{overflow-x:auto;margin:8px 0 34px;border:1px solid var(--line-cream);background:#fff}
      .blog-detail__table table{width:100%;min-width:620px;border-collapse:collapse}
      .blog-detail__table th{padding:15px 16px;background:#f2f0e8;color:var(--black);font-size:.75rem;letter-spacing:.12em;text-align:left;text-transform:uppercase}
      .blog-detail__table td{padding:16px;border-top:1px solid var(--line-cream);color:#363636;font-size:.98rem;line-height:1.55;vertical-align:top}
      .blog-detail__faq{max-width:760px;margin:clamp(58px,7vw,86px) auto 0;padding-top:34px;border-top:1px solid var(--line-cream)}
      .blog-detail__faq h2{margin:0 0 26px;color:var(--black);font-size:clamp(1.75rem,2.8vw,2.6rem);line-height:1.12;text-transform:none;letter-spacing:-.03em}
      .blog-detail__faq-item{padding:22px 0;border-top:1px solid var(--line-cream)}
      .blog-detail__faq-item:first-of-type{border-top:0;padding-top:0}
      .blog-detail__faq-item h3{margin:0 0 10px;color:var(--black);font-size:1.05rem;text-transform:none;letter-spacing:0}
      .blog-detail__faq-item p{margin:0;color:#363636;font-size:1rem;line-height:1.7}
      .blog-detail__related{margin-top:clamp(72px,8vw,110px)}
      .blog-detail__related-head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin-bottom:28px;border-top:1px solid var(--line-cream);padding-top:36px}
      .blog-detail__related h2{margin:0;color:var(--black);font-size:clamp(1.8rem,3vw,2.8rem);line-height:1.1;letter-spacing:-.035em;text-transform:none}
      .blog-detail__all{display:inline-flex;align-items:center;gap:10px;color:var(--black);font-size:.76rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;transition:gap .25s ease}
      .blog-detail__all:hover{gap:15px}
      .blog-detail__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
      .blog-detail__card{display:flex;min-height:100%;flex-direction:column;overflow:hidden;border:1px solid var(--line-cream);background:#fff;transition:transform .35s var(--ease),border-color .35s var(--ease),box-shadow .35s var(--ease)}
      .blog-detail__card:hover{transform:translateY(-5px);border-color:rgba(0,0,0,.24);box-shadow:0 18px 56px rgba(0,0,0,.1)}
      .blog-detail__card-img{display:block;aspect-ratio:16/10;overflow:hidden;background:#eee}
      .blog-detail__card-img img{width:100%;height:100%;object-fit:cover;transition:transform .65s var(--ease)}
      .blog-detail__card:hover .blog-detail__card-img img{transform:scale(1.04)}
      .blog-detail__card-copy{display:flex;flex:1;flex-direction:column;padding:22px}
      .blog-detail__card-meta{display:block;margin-bottom:14px;color:var(--mute-cream);font-size:.7rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
      .blog-detail__card h3{margin:0 0 14px;color:var(--black);font-size:1.14rem;line-height:1.34;text-transform:none;letter-spacing:-.015em}
      .blog-detail__card p{margin:0;color:var(--mute-cream);font-size:.9rem;line-height:1.62}
      .blog-detail__card-read{display:inline-flex;align-items:center;gap:10px;margin-top:auto;padding-top:22px;color:var(--black);font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
      .blog-detail__card-read svg{transition:transform .25s ease}.blog-detail__card:hover .blog-detail__card-read svg{transform:translateX(4px)}
      .blog-missing{min-height:70vh;display:grid;place-items:center;background:var(--cream);color:var(--black);text-align:center;padding:120px 24px}
      .blog-missing h1{margin:0 0 18px;font-size:clamp(2.2rem,5vw,4rem);text-transform:none;letter-spacing:-.04em}
      .blog-missing p{margin:0 0 28px;color:var(--mute-cream)}
      @media(max-width:900px){.blog-detail__grid{grid-template-columns:repeat(2,minmax(0,1fr))}.blog-detail__related-head{align-items:start;flex-direction:column}}
      @media(max-width:620px){.blog-detail{padding-top:104px}.blog-detail__hero img{aspect-ratio:16/10}.blog-detail__grid{grid-template-columns:1fr}.blog-detail__table table{min-width:520px}}
    `}</style>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(slug);

  usePageMeta(
    post ? post.metaTitle || `${post.title} | LRYPT Technologies` : "Post not found | LRYPT Technologies",
    post ? post.metaDescription || post.desc : "The article you're looking for can't be found."
  );

  if (!post) {
    return (
      <>
        <BlogPostStyles />
        <section className="blog-missing">
          <div>
            <h1>Article not found</h1>
            <p>The article you're looking for doesn't exist or has moved.</p>
            <Link className="blog-detail__back" to="/blog">
              <ArrowLeft />
              <span>Back to all articles</span>
            </Link>
          </div>
        </section>
      </>
    );
  }

  const related = postList.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <BlogPostStyles />
      <main className="blog-detail">
        <article className="wrap blog-detail__article">
          <button type="button" className="blog-detail__back" onClick={() => navigate("/blog")}>
            <ArrowLeft />
            <span>All Articles</span>
          </button>

          <div className="blog-detail__meta">
            <Calendar size={14} />
            <span>{cleanMeta(post.meta)}</span>
          </div>

          <h1>{post.title}</h1>

          <figure className="blog-detail__hero">
            <img src={post.img} alt={post.alt} decoding="async" />
          </figure>

          <div className="blog-detail__content">
            {post.body.map((block, index) => (
              <BlogBlock block={block} key={`${typeof block === "string" ? "p" : block.type}-${index}`} />
            ))}
          </div>

          {post.faqs?.length > 0 && (
            <section className="blog-detail__faq">
              <h2>FAQ</h2>
              {post.faqs.map((faq) => (
                <div className="blog-detail__faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          )}

          {related.length > 0 && (
            <section className="blog-detail__related">
              <div className="blog-detail__related-head">
                <h2>More insights</h2>
                <Link className="blog-detail__all" to="/blog">
                  Explore All <ArrowRight size={16} />
                </Link>
              </div>
              <div className="blog-detail__grid">
                {related.map((item) => (
                  <Link className="blog-detail__card" to={`/blog/${item.slug}`} key={item.slug}>
                    <span className="blog-detail__card-img">
                      <img src={item.img} alt={item.alt} loading="lazy" decoding="async" />
                    </span>
                    <span className="blog-detail__card-copy">
                      <span className="blog-detail__card-meta">{cleanMeta(item.meta)}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className="blog-detail__card-read">Read Article <ArrowRight size={15} /></span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
