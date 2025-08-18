import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import PortfolioArchive from "./pages/PortfolioArchive";
import OpenPolytechnic from "./pages/OpenPolytechnic";
import BusinessInvoices from "./pages/BusinessInvoices";
import SvgIcons from "./pages/SvgIcons";
import YouShop from "./pages/YouShop";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/archive" element={<PortfolioArchive />} />
        <Route
          path="/portfolio/archive/open-polytechnic"
          element={<OpenPolytechnic />}
        />
        <Route
          path="/portfolio/archive/business-invoices"
          element={<BusinessInvoices />}
        />
        <Route path="/portfolio/archive/svg-icons" element={<SvgIcons />} />
        <Route path="/portfolio/archive/youshop" element={<YouShop />} />
      </Routes>
    </>
  );
}
