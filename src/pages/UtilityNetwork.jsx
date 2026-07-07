import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import Capabilities, { SoloCapability } from "../components/sections/Capabilities";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, capabilities, whyLrypt, capabilities2, faq, cta } from "../data/utilityNetworkData";

export default function UtilityNetwork() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <Capabilities {...capabilities} />
      <SoloCapability {...whyLrypt} />
      <Capabilities {...capabilities2} />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
