import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("virtual-test-drive");

export default function VirtualTestDrive() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
