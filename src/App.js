import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Event from "./Pages/event/Event";
import Team from "./Pages/team/Team";
import Footer from "./components/contact/Footer";
import Navbar from "./components/navbar/Nabvar";
import Alumni from "./Pages/Alumni/Alumni";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Alumni" element={<Alumni />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
