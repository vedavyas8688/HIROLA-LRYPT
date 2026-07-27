import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("msc-apex");

export default function MscApex() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
