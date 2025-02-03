import React from "react"; 
import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Filament from "./components/Filament";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
                <Filament />
                <HowItWorks />
                <Contact />
                <Footer />
              </>
            } 
          />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/model" element={<Model />} />
          <Route path="/features" element={<Features />} />
          <Route path="/Filament" element={<Filament />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Sentry.withProfiler(App);
