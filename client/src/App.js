import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EnergyHealing from "./pages/EnergyHealing";
import Tarot from "./pages/Tarot";
import Estore from "./pages/Estore";
import Academy from "./pages/Academy";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookNow from "./pages/BookNow";
import Dashboard from "./pages/dashboard";
import Paydemo from "./pages/Paydemo";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energyhealing" element={<EnergyHealing />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/estore" element={<Estore />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pay-demo" element={<Paydemo/>}/>
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
};

export default App;
