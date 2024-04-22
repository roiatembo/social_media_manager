import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./NavBar";
import { Companies } from "./Companies";
import { CompanyPage } from "./CompanyPage";

function App () {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Companies />} />
          <Route path="/company/:companyID" element={<CompanyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
