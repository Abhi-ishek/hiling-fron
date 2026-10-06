import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#1E0F2B] via-[#160A20] to-[#0D0414] py-16 text-white">
      <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="h-9 w-9 rounded-full border border-[#D4AF37]"
            />
            <h3 className="text-2xl font-['Cinzel'] tracking-wider text-[#D4AF37]">
              S Healing Center
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            A consecrated spiritual sanctuary guiding your inner evolution through intuition-led tarot, universal energy healing, crystalline alignments, and sacred mystical training.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Sanctuary Paths
          </h4>
          <div className="flex flex-col gap-2.5 text-xs uppercase tracking-wider text-white/75 font-medium">
            <Link to="/" className="hover:text-[#F6E27A] transition duration-300">Home</Link>
            <Link to="/energyhealing" className="hover:text-[#F6E27A] transition duration-300">Energy Healing</Link>
            <Link to="/tarot" className="hover:text-[#F6E27A] transition duration-300">Tarot Readings</Link>
            <Link to="/estore" className="hover:text-[#F6E27A] transition duration-300">Spiritual E-Store</Link>
            <Link to="/academy" className="hover:text-[#F6E27A] transition duration-300">Sacred Academy</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Direct Resonance
          </h4>
          <p className="text-xs text-white/70 mb-1">support@shealingcenter.com</p>
          <p className="text-xs text-white/70 mb-4">+1 (555) 012-8899</p>
          <div className="flex items-center gap-3">
            {[
              ["https://www.instagram.com", <FaInstagram key="ig" />, "Instagram"],
              ["https://youtu.be/jHUOzixQ8Wg", <FaYoutube key="yt" />, "YouTube"],
              ["https://t.me/+tkCnkzT96kxmMzQ1", <FaTelegramPlane key="tg" />, "Telegram"]
            ].map(([href, icon, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#190B24] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs tracking-widest text-white/40 uppercase">
        © 2026 S Healing Center • Consecrated Spiritual Sanctuary • All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
