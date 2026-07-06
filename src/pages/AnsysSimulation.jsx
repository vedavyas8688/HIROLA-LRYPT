import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, capabilities, faq, cta } from "../data/ansysSimulationData";

export default function AnsysSimulation() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <IconGrid {...capabilities} tightTop />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
