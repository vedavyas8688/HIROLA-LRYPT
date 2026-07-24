import { useParams, Link } from "react-router-dom";
import PageHead from "../components/sections/PageHead";
import CardGrid from "../components/sections/CardGrid";
import CTABand from "../components/sections/CTABand";
import { ArrowLeft, ArrowRight } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { getPost, postList, cta } from "../data/blogsData";

function PostStyles() {
  return (
    <style>{`
      .post-scope .article{max-width:760px;margin:0 auto}
      .post-scope .article__hero{aspect-ratio:16/8;overflow:hidden;margin-bottom:clamp(30px,4vw,48px);
        border:1px solid var(--line-cream)}
      .post-scope .article__hero img{width:100%;height:100%;object-fit:cover}
      .post-scope .article__meta{font-weight:700;text-transform:uppercase;letter-spacing:.04em;
        font-size:.74rem;color:var(--mute-cream);margin-bottom:20px}
      .post-scope .article p{margin:0 0 22px;color:#2c2c2c;font-size:1.1rem;line-height:1.75}
      .post-scope .article p:first-of-type{font-size:1.22rem;line-height:1.65;color:var(--ink)}
      .post-scope .article__back{display:inline-flex;align-items:center;gap:8px;
        font-weight:600;text-transform:uppercase;letter-spacing:.03em;font-size:.8rem;
        color:var(--mute-cream);margin-bottom:26px;transition:.25s var(--ease)}
      .post-scope .article__back:hover{color:var(--black);gap:12px}
      .post-scope .article__back svg{width:16px;height:16px}
    `}</style>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  usePageMeta(
    post ? `${post.title} | LRYPT Technologies` : "Post not found | LRYPT Technologies",
    post ? post.desc : "The article you're looking for can't be found."
  );

  if (!post) {
    return (
      <>
        <PageHead
          variant="cream"
          crumb="Blog"
          lines={["Post not found"]}
          lead="The article you're looking for doesn't exist or has moved."
        />
        <section className="sec sec--cream">
          <div className="wrap" style={{ textAlign: "center" }}>
            <Link className="btn" to="/blog">
              <span className="btn__ico"><ArrowRight size={18} /></span>
              <span className="btn__t">Back to blog</span>
            </Link>
          </div>
        </section>
      </>
    );
  }

  const related = {
    bg: "cream",
    heading: "More insights",
    subheading: null,
    items: postList
      .filter((p) => p.slug !== post.slug && p.slug !== "payroll-and-compliance")
      .slice(0, 3)
      .map((p) => ({
        href: `/blog/${p.slug}`,
        img: p.img,
        alt: p.alt,
        meta: p.meta,
        title: p.title,
        desc: p.desc,
      })),
  };

  return (
    <div className="post-scope">
      <PostStyles />
      <PageHead
        variant="cream"
        crumb="Blog"
        lines={[post.title]}
        headingWidth={26}
      />

      <section className="sec sec--cream">
        <div className="wrap">
          <article className="article" data-stagger="">
            <Link className="article__back" to="/blog" data-reveal="">
              <ArrowLeft />
              <span>All articles</span>
            </Link>
            <div className="article__hero" data-reveal="mask">
              <img src={post.img} alt={post.alt} decoding="async" />
            </div>
            <div className="article__meta" data-reveal="">{post.meta}</div>
            {post.body.map((para, i) => (
              <p key={i} data-reveal="">{para}</p>
            ))}
          </article>
        </div>
      </section>

      <CardGrid {...related} />
      <CTABand {...cta} />
    </div>
  );
}
