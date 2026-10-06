import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientAuraFollower from "./components/AmbientAuraFollower";
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
import AIChat from "./pages/AIChat";

// Scroll to top automatically when changing route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AmbientAuraFollower />
      <Navbar />
      <main className="relative z-10 min-h-[80vh]">
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
          <Route path="/pay-demo" element={<Paydemo />} />

        </Routes>
      </main>
      <AIChat />
      <Footer />
    </Router>
  );
};

export default App;
