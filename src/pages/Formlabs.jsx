import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import ProductGrid from "../components/sections/ProductGrid";
import FeatureCTA from "../components/sections/Featurecta";
import TabbedProductGrid from "../components/sections/Tabbedproductgrid";
import StatBanner from "../components/sections/Statbanner";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, featureCta, slaProducts, ecosystemTabs, materialsBanner, printerLineup, faq, cta } from "../data/formlabsData";

export default function Formlabs() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <FeatureCTA {...featureCta} />
      {/* <ProductGrid {...slaProducts} /> */}
      <TabbedProductGrid {...ecosystemTabs} />
      <StatBanner {...materialsBanner} />
      {/* <SplitFeature {...slaFeature} />
      <SplitFeature {...slsFeature} />
      <ProductGrid {...slsProducts} /> */}
      <IconGrid {...printerLineup} headingStyle="headc" />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
