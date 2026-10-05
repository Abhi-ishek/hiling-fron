import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#12071A] via-[#2A1638] to-[#190B24] p-4 text-white overflow-hidden py-12">
      {/* Decorative Aura Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4A2C5D]/30 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="premium-panel relative z-10 w-full max-w-md rounded-[2.5rem] border border-[#D4AF37]/30 p-8 sm:p-10 text-center shadow-[0_24px_80px_rgba(10,4,18,0.7)]">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/logo.jpg"
            alt="S Healing Center"
            className="h-16 w-16 mb-3 rounded-full border-2 border-[#D4AF37] object-cover shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          />
          <h1 className="text-2xl font-['Cinzel'] tracking-wider text-[#D4AF37]">S Healing Center</h1>
          <p className="text-xs text-white/60 italic mt-1">
            Begin Your Spiritual Awakening
          </p>
        </div>

        {/* Welcome Message */}
        <h2 className="text-sm font-semibold tracking-wide text-white/90 mb-6">
          Create account to access courses & sacred readings
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="text-left">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Sacred Seeker"
              className="input-spiritual text-sm"
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="seeker@sanctuary.com"
              className="input-spiritual text-sm"
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-spiritual text-sm"
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-spiritual text-sm"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-gold w-full text-center py-3 text-xs uppercase tracking-[0.16em]"
            >
              Begin Initiation
            </button>
          </div>
        </form>

        {/* Sign In Link */}
        <p className="mt-5 text-xs text-white/65">
          Already part of the circle?{" "}
          <Link to="/login" className="text-[#F6E27A] hover:underline font-semibold">
            Sign In
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="px-3 text-white/40 text-[0.7rem] uppercase tracking-widest">Or connect via</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Social Register */}
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/15 rounded-xl hover:border-[#D4AF37] hover:bg-white/10 transition text-xs font-medium">
            <FaGoogle className="text-yellow-400" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/15 rounded-xl hover:border-[#D4AF37] hover:bg-white/10 transition text-xs font-medium">
            <FaFacebook className="text-blue-400" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
