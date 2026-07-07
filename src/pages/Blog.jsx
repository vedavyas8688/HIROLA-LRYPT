import PageHead from "../components/sections/PageHead";
import CardGrid from "../components/sections/CardGrid";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, posts, cta } from "../data/blogsData";

export default function Blog() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <CardGrid {...posts} />
      <CTABand {...cta} />
    </>
  );
}
