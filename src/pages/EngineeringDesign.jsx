import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import Capabilities from "../components/sections/Capabilities";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, capabilities, npdLifecycle, faq, cta } from "../data/engineeringDesignData";

export default function EngineeringDesign() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <Capabilities {...capabilities} />
      <IconGrid {...npdLifecycle} headingStyle="center" />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
