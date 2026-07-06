import PageHead from "../components/sections/PageHead";
import { FAQCategorized } from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, faqCategories, cta } from "../data/faqData";

export default function Faq() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <FAQCategorized {...faqCategories} />
      <CTABand {...cta} />
    </>
  );
}
