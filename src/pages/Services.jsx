import PageHead from "../components/sections/PageHead";
import CardGrid from "../components/sections/CardGrid";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, servicesGrid, whyChooseUs, faq, cta } from "../data/servicesData";

export default function Services() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <CardGrid {...servicesGrid} />
      <IconGrid {...whyChooseUs} />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
