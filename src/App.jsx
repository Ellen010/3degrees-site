import React from "react";
import Navbar from "./components/Navbar";
import Canon from "./components/Canon";
import Highlights from "./components/Highlights";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

 function App  () {

  return (
      <main className= 'bg-black'>
           <Router>
           <Navbar/>
           <Canon/>
           <Highlights/>
           {/* <Model />
           <Features />
           <HowItWorks />
           <Footer /> */}
           <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
           </Router>
       {/* <Model/> */}
      </main>
  )
}

export default App
