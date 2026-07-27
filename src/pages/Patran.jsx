import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("patran");

export default function Patran() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
