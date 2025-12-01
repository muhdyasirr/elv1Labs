import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navabar from "./compoents/Navabar";
import Hero from "./compoents/Hero";
import Hero2 from "./compoents/Hero2";
import Services from "./compoents/Services";
import SlidingBrand from "./compoents/SlidingBrand";
import Solutions from "./compoents/Solutions";
import Footer from "./compoents/Footer";
import CaseStudies from "./compoents/CaseStudies";


export default function App() {
  return (
    <BrowserRouter>
      <Navabar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SlidingBrand />
             <CaseStudies/>
              <Services />
              {/* <BookDemo/> */}
              <Solutions />
            </>
          }
        />

        {/* Other pages can go here */}
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<Hero2 />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
