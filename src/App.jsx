import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import CadDesign from "./pages/CadDesign";
import AnsysSimulation from "./pages/AnsysSimulation";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
