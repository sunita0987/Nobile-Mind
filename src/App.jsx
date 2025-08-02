import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Choose from "./components/Choose";
import Company from "./components/Company";
import Blur from "./components/Blur";
import Footer from "./components/Footer";
// import Service from "./components/Service";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Mission />
        {/* <Service/> */}
        <Vision />
        <Choose />
        <Company />
        <Blur/>
        <Footer/>
        <Routes>
          <Route path="/" />
          <Route path="/about" />
          <Route path="/solutions" />
          <Route path="/resources" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
