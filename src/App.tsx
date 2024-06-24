import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import ProgramsPage from "./pages/programs";
import AboutPage from "@/pages/about";
import ContactPage from "./pages/contact";
import GetInvolved from "./pages/getInvolved";
import "./utils/i18n.js";
import FAQ from "./pages/faq.js";
import Gallery from "./pages/gallery.js";
import ResourcesPage from "./pages/resources.js";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProgramsPage />} path="/programs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route path="/about" element={<AboutPage />} />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<GetInvolved />} path="/getInvolved" />
      <Route element={<FAQ />} path="/faq" />
      <Route element={<Gallery />} path="/gallery" />
      <Route element={<ResourcesPage />} path="/resources" />
    </Routes>
  );
}

export default App;
