import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaHandsHelping, FaUsers, FaChartLine, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#12071A] via-[#2A1638] to-[#190B24] text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#D4AF37]/20 bg-[#1A0B24]/90 backdrop-blur-2xl p-6 hidden md:flex md:flex-col">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-9 w-9 rounded-full border border-[#D4AF37]"
          />
          <h2 className="text-lg font-['Cinzel'] tracking-wider text-[#D4AF37]">Sanctuary Admin</h2>
        </div>

        <nav className="space-y-2">
          <a href="#bookings" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#D4AF37]/15 text-[#F6E27A] border border-[#D4AF37]/30 text-sm font-semibold transition">
            <FaCalendarCheck /> Bookings
          </a>
          <a href="#services" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white text-sm font-medium transition">
            <FaHandsHelping /> Services
          </a>
          <a href="#seekers" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white text-sm font-medium transition">
            <FaUsers /> Seekers
          </a>
          <a href="#analytics" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/5 hover:text-white text-sm font-medium transition">
            <FaChartLine /> Frequency Insights
          </a>
        </nav>

        <div className="mt-auto pt-24 flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-2 text-xs text-white/50 hover:text-[#D4AF37] transition">
            <FaArrowLeft /> Return to Sanctuary
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs text-white/50 hover:text-red-400 transition"
          >
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="badge-spiritual">Sanctuary Overview</span>
          <h1 className="text-3xl sm:text-4xl font-normal font-['Cinzel'] text-[#D4AF37]">
            Healer Management Portal
          </h1>
          <p className="text-sm text-white/70 mt-1">
            Welcome back, <span className="text-[#F6E27A] font-semibold">{user.username}</span>. Track active reservations, schedule updates, and spiritual offerings.
          </p>
        </motion.div>

        {/* Dashboard Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-card rounded-[2rem] p-6 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37]/80">Active Bookings</span>
              <FaCalendarCheck className="text-[#D4AF37] text-xl" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">24</h3>
            <p className="text-xs text-white/60">Upcoming healing sessions this week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="premium-card rounded-[2rem] p-6 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37]/80">Energy Offerings</span>
              <FaHandsHelping className="text-[#D4AF37] text-xl" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">7 Modalities</h3>
            <p className="text-xs text-white/60">Reiki, Sound, Pranic, Crystals, Aromatherapy</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="premium-card rounded-[2rem] p-6 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37]/80">Academy Students</span>
              <FaUsers className="text-[#D4AF37] text-xl" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">148 Seekers</h3>
            <p className="text-xs text-white/60">Enrolled across 9 transformation courses</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;