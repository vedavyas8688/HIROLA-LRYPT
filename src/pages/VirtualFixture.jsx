import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("virtual-fixture");

export default function VirtualFixture() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
