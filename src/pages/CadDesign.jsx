import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import IconGrid from "../components/sections/IconGrid";
import TagList from "../components/sections/TagList";
import FAQSection from "../components/sections/FAQSection";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, capabilities, industries, faq, cta } from "../data/cadDesignData";

export default function CadDesign() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <IconGrid {...capabilities} />
      <TagList {...industries} />
      <FAQSection {...faq} />
      <CTABand {...cta} />
    </>
  );
}
