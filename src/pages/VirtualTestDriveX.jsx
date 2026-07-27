import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("virtual-test-drive-x");

export default function VirtualTestDriveX() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
