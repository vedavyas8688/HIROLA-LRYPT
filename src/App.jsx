import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";


const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const CadDesign = lazy(() => import("./pages/CadDesign"));
const AnsysSimulation = lazy(() => import("./pages/AnsysSimulation"));
const SimulationSoftware = lazy(() => import("./pages/SimulationSoftware"));
const Actran = lazy(() => import("./pages/Actran"));
const VirtualTestDrive = lazy(() => import("./pages/VirtualTestDrive"));
const VirtualTestDriveX = lazy(() => import("./pages/VirtualTestDriveX"));
const CradleCFD = lazy(() => import("./pages/CradleCFD"));
const Digimat = lazy(() => import("./pages/Digimat"));
const MaterialCenter = lazy(() => import("./pages/MaterialCenter"));
const MscNastran = lazy(() => import("./pages/MscNastran"));
const MscCoSim = lazy(() => import("./pages/MscCoSim"));
const Patran = lazy(() => import("./pages/Patran"));
const Marc = lazy(() => import("./pages/Marc"));
const Dytran = lazy(() => import("./pages/Dytran"));
const CAEfatigue = lazy(() => import("./pages/CAEfatigue"));
const MscApex = lazy(() => import("./pages/MscApex"));
const MscApexGD = lazy(() => import("./pages/MscApexGD"));
const Romax = lazy(() => import("./pages/Romax"));
const SimufactAdditive = lazy(() => import("./pages/SimufactAdditive"));
const SimufactForming = lazy(() => import("./pages/SimufactForming"));
const SimufactWelding = lazy(() => import("./pages/SimufactWelding"));
const VirtualFixture = lazy(() => import("./pages/VirtualFixture"));
const FtiFormingSuite = lazy(() => import("./pages/FtiFormingSuite"));
const Odyssee = lazy(() => import("./pages/Odyssee"));
const Adams = lazy(() => import("./pages/Adams"));
const CloudSimulationSolutions = lazy(() => import("./pages/CloudSimulationSolutions"));
const SimManager = lazy(() => import("./pages/SimManager"));
const MscOne = lazy(() => import("./pages/MscOne"));
const Proteger = lazy(() => import("./pages/Proteger"));
const Formlabs = lazy(() => import("./pages/Formlabs"));
const Services = lazy(() => import("./pages/Services"));
const UtilityNetwork = lazy(() => import("./pages/UtilityNetwork"));
const EngineeringDesign = lazy(() => import("./pages/EngineeringDesign"));
const Hrms = lazy(() => import("./pages/Hrms"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./components/sections/Privacy"));
const Terms = lazy(() => import("./components/sections/Terms"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/cad-design" element={<CadDesign />} />
            <Route path="/ansys-simulation" element={<AnsysSimulation />} />
            <Route path="/cadence-simulation" element={<SimulationSoftware />} />
            <Route path="/cadence-simulation/actran" element={<Actran />} />
            <Route path="/cadence-simulation/virtual-test-drive" element={<VirtualTestDrive />} />
            <Route path="/cadence-simulation/virtual-test-drive-x" element={<VirtualTestDriveX />} />
            <Route path="/cadence-simulation/cradle-cfd" element={<CradleCFD />} />
            <Route path="/cadence-simulation/digimat" element={<Digimat />} />
            <Route path="/cadence-simulation/materialcenter" element={<MaterialCenter />} />
            <Route path="/cadence-simulation/msc-nastran" element={<MscNastran />} />
            <Route path="/cadence-simulation/msc-cosim" element={<MscCoSim />} />
            <Route path="/cadence-simulation/patran" element={<Patran />} />
            <Route path="/cadence-simulation/marc" element={<Marc />} />
            <Route path="/cadence-simulation/dytran" element={<Dytran />} />
            <Route path="/cadence-simulation/caefatigue" element={<CAEfatigue />} />
            <Route path="/cadence-simulation/msc-apex" element={<MscApex />} />
            <Route path="/cadence-simulation/msc-apex-gd" element={<MscApexGD />} />
            <Route path="/cadence-simulation/romax" element={<Romax />} />
            <Route path="/cadence-simulation/simufact-additive" element={<SimufactAdditive />} />
            <Route path="/cadence-simulation/simufact-forming" element={<SimufactForming />} />
            <Route path="/cadence-simulation/simufact-welding" element={<SimufactWelding />} />
            <Route path="/cadence-simulation/virtual-fixture" element={<VirtualFixture />} />
            <Route path="/cadence-simulation/fti-formingsuite" element={<FtiFormingSuite />} />
            <Route path="/cadence-simulation/odyssee" element={<Odyssee />} />
            <Route path="/cadence-simulation/adams" element={<Adams />} />
            <Route path="/cadence-simulation/cloud-simulation-solutions" element={<CloudSimulationSolutions />} />
            <Route path="/cadence-simulation/simmanager" element={<SimManager />} />
            <Route path="/cadence-simulation/mscone" element={<MscOne />} />
            <Route path="/proteger" element={<Proteger />} />
            <Route path="/formlabs" element={<Formlabs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/utility-network" element={<UtilityNetwork />} />
            <Route path="/engineering-design" element={<EngineeringDesign />} />
            <Route path="/hrms" element={<Hrms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
