import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import ProgramsPage from "./pages/programs";
import AboutPage from "@/pages/about";
import ContactPage from "./pages/contact";
import GetInvolved from "./pages/getInvolved";

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
    </Routes>
  );
}

export default App;
