import HeroSlider from "../components/sections/HeroSlider";
import IntroBlock from "../components/sections/IntroBlock";
import CardGrid from "../components/sections/CardGrid";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, hero, intro, solutionsGrid, servicesGrid, whyChoose, faq, cta } from "../data/homeData";

export default function Home() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <HeroSlider {...hero} />
      <IntroBlock {...intro} />
      <CardGrid {...solutionsGrid} />
      <CardGrid {...servicesGrid} />
      <IconGrid {...whyChoose} />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
