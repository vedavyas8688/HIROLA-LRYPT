import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import CadenceLogoBand from "../components/sections/CadenceLogoBand";
import SimulationSolutionsGrid from "../components/sections/SimulationSolutionsGrid";
import Capabilities from "../components/sections/Capabilities";
import IconGrid from "../components/sections/IconGrid";
import FAQSection from "../components/sections/FAQSection";
import usePageMeta from "../hooks/usePageMeta";
import {
  meta,
  pageHead,
  intro,
  solutions,
  simulationDisciplines,
  softwareCapabilities,
  industries,
  benefits,
  faq,
} from "../data/simulationSoftwareData";

export default function SimulationSoftware() {
  usePageMeta(meta.title, meta.description);

  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <CadenceLogoBand />
      <SimulationSolutionsGrid {...solutions} />
      <Capabilities {...simulationDisciplines} />
      <IconGrid {...softwareCapabilities} />
      <IconGrid {...industries} />
      <IconGrid {...benefits} />
      <FAQSection {...faq} />
    </>
  );
}
