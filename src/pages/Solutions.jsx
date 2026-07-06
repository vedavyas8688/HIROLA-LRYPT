import PageHead from "../components/sections/PageHead";
import CardGrid from "../components/sections/CardGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, solutionsGrid, faq, cta } from "../data/solutionsData";

export default function Solutions() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <CardGrid {...solutionsGrid} />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
