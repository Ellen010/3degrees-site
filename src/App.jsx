import React from "react";
import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

 function App  () {

  return (
      <main className= 'bg-black'>
           <Navbar/>
           <Canon/>
           <Highlights/>
           <Model/>
           {/* 
           <Features />
           <HowItWorks />
           <Footer /> */}
    
      </main>
  )
}

export default App
