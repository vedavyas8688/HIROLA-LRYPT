import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("cloud-simulation-solutions");

export default function CloudSimulationSolutions() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
