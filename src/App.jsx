import React from "react";
import "./App.css";
import ScrollToTop from "./static/ScrollTop";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
