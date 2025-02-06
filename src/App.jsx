import React from "react"; 
import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Contact from "./components/Contact";
import Designs from "./components/Designs";
import Equipment from "./components/Equipment";
import Features from "./components/Features";
import Filament from "./components/Filament";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <Router>
      <main className="bg-black">
        <Navbar />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Canon />
                <Highlights />
                <Model />
                <Features />
                <HowItWorks />
                <Footer />
              </>
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/features" element={<Features />} />
          <Route path="/filament" element={<Filament />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/model" element={<Model />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Sentry.withProfiler(App);
