import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import Capabilities from "../components/sections/Capabilities";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, capabilities, faq, cta } from "../data/hrmsData";

export default function Hrms() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <Capabilities {...capabilities} tightTop />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
