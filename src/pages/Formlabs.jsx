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
    <main className="formlabs-page">
      <style>{`
        .formlabs-page .feacta__r h2,
        .formlabs-page .tabgrid__h,
        .formlabs-page .headc h2,
        .formlabs-page .faq-heading,
        .formlabs-page .partner h2{
          font-size:clamp(1.8rem,2.6vw,2.5rem);
        }
      `}</style>
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
    </main>
  );
}
