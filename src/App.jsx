import React from "react";
import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";

 function App  () {
  
  return (
      <main className= 'bg-black'>
           <Navbar/>
           <Canon/>
           <Highlights/>
           <Model/>
           <Features />
           {/* 
           <HowItWorks />
           <Footer /> */}
    
      </main>
  )
}

export default Sentry.withProfiler(App);