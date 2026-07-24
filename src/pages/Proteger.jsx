import ProtegerHero from "../components/sections/ProtegerHero";
import ProtegerWhatWeDo from "../components/sections/ProtegerWhatWeDo";
import ProtegerEdge from "../components/sections/ProtegerEdge";
import ProtegerSolutions from "../components/sections/ProtegerSolutions";
import ProtegerCompany from "../components/sections/ProtegerCompany";
import ProtegerWhyChoose from "../components/sections/ProtegerWhyChoose";
import ProtegerBlogs from "../components/sections/ProtegerBlogs";
import ProtegerContact from "../components/sections/ProtegerContact";
import usePageMeta from "../hooks/usePageMeta";
import { meta, hero } from "../data/protegerData";

export default function Proteger() {
  usePageMeta(meta.title, meta.description);

  return (
    <>
      <ProtegerHero {...hero} />
      <ProtegerWhatWeDo />
      <ProtegerEdge />
      <ProtegerSolutions />
      <ProtegerCompany />
      <ProtegerWhyChoose />
      <ProtegerBlogs />
      <ProtegerContact />
    </>
  );
}
