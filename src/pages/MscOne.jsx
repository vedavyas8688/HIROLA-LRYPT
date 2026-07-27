import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("mscone");

export default function MscOne() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
