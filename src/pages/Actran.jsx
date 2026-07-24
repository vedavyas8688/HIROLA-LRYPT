import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { meta, product } from "../data/actranData";

export default function Actran() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
