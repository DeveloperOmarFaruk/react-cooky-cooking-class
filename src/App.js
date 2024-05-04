import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/gigs" element={<Gigs />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/messages" element={<Message />} />
  <Route path="/" element={<Dashboard />} />
  */}
      </Routes>
    </Router>
  );
}
export default App;
