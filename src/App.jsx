import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import CadDesign from "./pages/CadDesign";
import AnsysSimulation from "./pages/AnsysSimulation";
import SimulationSoftware from "./pages/SimulationSoftware";
import Actran from "./pages/Actran";
import VirtualTestDrive from "./pages/VirtualTestDrive";
import VirtualTestDriveX from "./pages/VirtualTestDriveX";
import CradleCFD from "./pages/CradleCFD";
import Digimat from "./pages/Digimat";
import MaterialCenter from "./pages/MaterialCenter";
import MscNastran from "./pages/MscNastran";
import MscCoSim from "./pages/MscCoSim";
import Patran from "./pages/Patran";
import Marc from "./pages/Marc";
import Dytran from "./pages/Dytran";
import CAEfatigue from "./pages/CAEfatigue";
import MscApex from "./pages/MscApex";
import MscApexGD from "./pages/MscApexGD";
import Romax from "./pages/Romax";
import SimufactAdditive from "./pages/SimufactAdditive";
import SimufactForming from "./pages/SimufactForming";
import SimufactWelding from "./pages/SimufactWelding";
import VirtualFixture from "./pages/VirtualFixture";
import FtiFormingSuite from "./pages/FtiFormingSuite";
import Odyssee from "./pages/Odyssee";
import Adams from "./pages/Adams";
import CloudSimulationSolutions from "./pages/CloudSimulationSolutions";
import SimManager from "./pages/SimManager";
import MscOne from "./pages/MscOne";
import Proteger from "./pages/Proteger";
import Formlabs from "./pages/Formlabs";
import Services from "./pages/Services";
import UtilityNetwork from "./pages/UtilityNetwork";
import EngineeringDesign from "./pages/EngineeringDesign";
import Hrms from "./pages/Hrms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./components/sections/Privacy";
import Terms from "./components/sections/Terms";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
