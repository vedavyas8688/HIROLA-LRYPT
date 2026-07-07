import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import IconGrid from "../components/sections/IconGrid";
import MissionVision from "../components/sections/MissionVision";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, whyChoose, missionVision, cta } from "../data/aboutData";

export default function About() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <IconGrid {...whyChoose} />
      <MissionVision {...missionVision} />
      <CTABand {...cta} />
    </>
  );
}
