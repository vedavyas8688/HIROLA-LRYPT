import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("adams");

export default function Adams() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
