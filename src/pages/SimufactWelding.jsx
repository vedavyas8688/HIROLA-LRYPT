import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("simufact-welding");

export default function SimufactWelding() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
