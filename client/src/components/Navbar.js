import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  ["/", "Home"],
  ["/energyhealing", "Energy Healing"],
  ["/tarot", "Tarot"],
  ["/estore", "E-Store"],
  ["/academy", "Academy"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b px-4 py-3.5 text-white transition-all duration-300 md:px-8 ${
        isScrolled
          ? "border-[#D4AF37]/25 bg-[#190B24]/85 shadow-[0_20px_40px_rgba(10,4,18,0.7)] backdrop-blur-2xl"
          : "border-white/10 bg-gradient-to-r from-[#190B24]/95 via-[#2A1638]/90 to-[#190B24]/95"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-11 w-11 rounded-full border-2 border-[#D4AF37] object-cover shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          />
          <span className="bg-gradient-to-r from-[#F6E27A] via-[#D4AF37] to-white bg-clip-text text-base font-semibold tracking-[0.14em] text-transparent md:text-lg font-['Cinzel']">
            S Healing Center
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-xs tracking-[0.1em] uppercase font-medium md:flex">
          {navLinks.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:text-[#F6E27A] hover:after:scale-x-100 ${
                  isActive ? "text-[#D4AF37] font-semibold after:scale-x-100" : "text-white/80"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full p-2 transition duration-300 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]"
              aria-label="Account"
            >
              <FaUserCircle className="text-2xl text-white/80 transition hover:text-[#D4AF37]" />
            </button>

            {open && (
              <div className="premium-panel absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#1E0F2B]/95 text-white shadow-2xl backdrop-blur-2xl">
                <Link
                  to="/register"
                  className="block px-4 py-2.5 text-xs tracking-wider uppercase hover:bg-[#D4AF37]/20 hover:text-[#F6E27A] transition"
                  onClick={() => setOpen(false)}
                >
                  Register Seeker
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2.5 text-xs tracking-wider uppercase hover:bg-[#D4AF37]/20 hover:text-[#F6E27A] transition"
                  onClick={() => setOpen(false)}
                >
                  Seeker Login
                </Link>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2.5 text-xs tracking-wider uppercase hover:bg-[#D4AF37]/20 hover:text-[#F6E27A] transition border-t border-white/10"
                  onClick={() => setOpen(false)}
                >
                  Healer Portal
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/book"
            className="hidden btn-gold text-xs tracking-[0.14em] md:block"
          >
            Book Now
          </Link>

          <button className="rounded-md p-2 text-xl text-white transition hover:bg-white/10 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="premium-panel reveal-on-load absolute left-3 right-3 top-[calc(100%+0.5rem)] rounded-2xl border border-[#D4AF37]/30 bg-[#190B24]/95 py-5 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col items-center gap-4 text-xs uppercase tracking-[0.14em] text-white">
            {navLinks.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "text-[#D4AF37] font-bold" : "text-white/80")}>
                {label}
              </NavLink>
            ))}
            <Link
              to="/book"
              className="btn-gold mt-2 px-6 py-2.5 text-xs"
              onClick={() => setMenuOpen(false)}
            >
              Book Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
