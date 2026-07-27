import SimulationProductDetail from "../components/sections/SimulationProductDetail";
import usePageMeta from "../hooks/usePageMeta";
import { getCadenceProduct } from "../data/cadenceProductsData";

const { meta, product } = getCadenceProduct("fti-formingsuite");

export default function FtiFormingSuite() {
  usePageMeta(meta.title, meta.description);
  return <SimulationProductDetail {...product} />;
}
