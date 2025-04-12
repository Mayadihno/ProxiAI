import React from "react";
import "./App.css";
import ScrollToTop from "./static/ScrollTop";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Login from "./component/admin/Login";
import Contact from "./screens/Contact";
import Solution from "./screens/Solution";
import PastProject from "./screens/PastProject";
import Blogs from "./screens/Blogs";
import Event from "./screens/Event";
import PRoute from "./protected/PRoute";
import Dashboard from "./component/admin/Dashboard";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/projects" element={<PastProject />} />
        <Route path="/articles" element={<Blogs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/*" element={<PRoute />}>
          <Route path="admin-dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
