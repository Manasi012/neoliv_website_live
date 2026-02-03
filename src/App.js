import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Headercopy from "./Components/Header/Headercopy";
import Home from "./Components/Home/Home";
import Sustainability from "./Pages/Sustainability";
import Career from "./Pages/Career";
import ProfessionallyBuilt from "./Pages/ThreePillars/ProfessionallyBuilt";
import FinanciallySecure from "./Pages/ThreePillars/FinanciallySecure";
import CustomerCentric from "./Pages/ThreePillars/CustomerCentric";
import Footer from "./Components/Footer/Footer";
import FooterLinks from "./Components/Footer/FooterLinks";
import JuneMedia from "./Pages/Media/JuneMedia";
import NovemberMedia from "./Pages/Media/NovemberMedia";
import ScrollToTopOnPageChange from "./Components/ScrollToTopOnPageChange";
import ModalDisclaimer from "./Components/ModalDisclaimer";
import Disclaimer from "./Components/Disclaimer";
import PmsLink from "./Pages/CapitalAdvisory/PmsLink";
import { Feescalculation } from "./Pages/FeesCalcuation/Feescalculation";
import { UpcomingLaunches } from "./Pages/UpcomingLaunches";
import FeesCalculationTool from "./Pages/FeesCalcuation/FeesCalculationTool";
import IntroVideo from "./Components/IntroVideo";
import ContactFlap from "./Components/ContactFlap";



function App() {
  const location = useLocation();

  return (
    <div className="App overflow-hidden scroll-smooth">
      {/* <Bluenavbar /> */}
      {/* {location.pathname === '/' ? <Bluenavbarcopy /> : <Bluenavbar />} */}
      {location.pathname === "/" ? <Headercopy /> : <Header />}
      <ModalDisclaimer />
      <IntroVideo />
      <ScrollToTopOnPageChange />
      <ContactFlap />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/career" element={<Career />} />
        <Route path="/professionallybuilt" element={<ProfessionallyBuilt />} />
        <Route path="/financiallysecure" element={<FinanciallySecure />} />
        <Route path="/customercentric" element={<CustomerCentric />} />
        <Route path="/junemedia" element={<JuneMedia />} />
        <Route path="/novembermedia" element={<NovemberMedia />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/pms" element={<PmsLink />} />
        <Route path="/feescalculationtool" element={<FeesCalculationTool />} />
        <Route path="/upcominglaunches" element={<UpcomingLaunches />} />       


      </Routes>
      <Footer />
      <FooterLinks />

    </div>
  );
}

export default App;
