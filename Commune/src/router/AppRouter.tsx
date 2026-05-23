import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Commune from "../pages/Commune";
import Footer from "../components/Footer";
// import Administration from "../pages/Administration";
// import Services from "../pages/Services";
// import News from "../pages/News";
// import Agenda from "../pages/Agenda";
// import Economy from "../pages/Economy";
// import Education from "../pages/Education";
// import Health from "../pages/Health";
// import Tourism from "../pages/Tourism";
// import Gallery from "../pages/Gallery";
// import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

         <Route path="/commune" element={<Commune />} />
    
        {/*<Route path="/administration" element={<Administration />} />

        <Route path="/services" element={<Services />} />

        <Route path="/actualites" element={<News />} />

        <Route path="/agenda" element={<Agenda />} />

        <Route path="/economie" element={<Economy />} />

        <Route path="/education" element={<Education />} />

        <Route path="/sante" element={<Health />} />

        <Route path="/tourisme" element={<Tourism />} />

        <Route path="/galerie" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/Footer" element={<Footer />} />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;