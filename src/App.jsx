import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path="/"  />
          <Route path="/about"  />
          <Route
            path="/solutions"
          
          />
          <Route
            path="/resources"
          />
          <Route
            path="/contact"
           
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
