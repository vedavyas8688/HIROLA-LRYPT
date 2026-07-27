import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("caefatigue");

export default function CAEfatigue() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
