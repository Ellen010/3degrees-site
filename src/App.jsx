import React from "react";
import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <Router>
      <main className="bg-black">
        {/* Navbar is always visible */}
        <Navbar />

        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Canon />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/model" element={<Model />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>

        {/* Footer is always visible */}
        <Footer />
      </main>
    </Router>
  );
}

export default Sentry.withProfiler(App);
