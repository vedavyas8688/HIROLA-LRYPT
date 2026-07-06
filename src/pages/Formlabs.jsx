import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import ProductGrid from "../components/sections/ProductGrid";
import SplitFeature from "../components/sections/SplitFeature";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, slaProducts, slaFeature, slsFeature, slsProducts, printerLineup, faq, cta } from "../data/formlabsData";

export default function Formlabs() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <ProductGrid {...slaProducts} tightTop />
      <SplitFeature {...slaFeature} />
      <SplitFeature {...slsFeature} />
      <ProductGrid {...slsProducts} />
      <IconGrid {...printerLineup} headingStyle="headc" />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
