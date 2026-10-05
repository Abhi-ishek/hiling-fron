import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

const PayDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#12071A] via-[#2A1638] to-[#190B24] text-white overflow-hidden">
      {/* Mystical Background Glows */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#4A2C5D]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="premium-panel relative z-10 w-full max-w-md rounded-[2.5rem] border border-[#D4AF37]/35 p-8 sm:p-10 shadow-[0_24px_80px_rgba(10,4,18,0.7)] text-center"
      >
        <span className="badge-spiritual mx-auto">Sacred Exchange</span>
        <h2 className="text-3xl font-['Cinzel'] text-[#D4AF37] mb-2">
          Payment Portal
        </h2>
        <p className="text-xs text-white/70 mb-6">
          Encrypted energetic exchange demonstration
        </p>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => alert("UPI demonstration payment completed.")}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/15 bg-white/5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition duration-300 text-left"
          >
            <span className="text-sm font-semibold text-white">Instant UPI Transfer</span>
            <span className="text-xs uppercase tracking-wider text-[#F6E27A]">GPay / PhonePe</span>
          </button>

          <button
            onClick={() => alert("Card demonstration payment completed.")}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/15 bg-white/5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition duration-300 text-left"
          >
            <span className="text-sm font-semibold text-white">Credit / Debit Card</span>
            <span className="text-xs uppercase tracking-wider text-[#F6E27A]">Visa / Mastercard</span>
          </button>

          <button
            onClick={() => alert("Wallet demonstration payment completed.")}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/15 bg-white/5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition duration-300 text-left"
          >
            <span className="text-sm font-semibold text-white">Digital Wallet</span>
            <span className="text-xs uppercase tracking-wider text-[#F6E27A]">PayTM / NetBanking</span>
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="btn-gold w-full text-center py-3 text-xs uppercase tracking-widest mb-4"
        >
          Complete Session Booking
        </button>

        <div className="flex items-center justify-center gap-2 text-[0.7rem] text-white/50">
          <FaShieldAlt className="text-[#D4AF37]" />
          <span>256-bit encrypted demonstration gateway</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PayDemo;
