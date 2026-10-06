import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Estore from "./Estore";
import Academy from "./Academy";

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden lg:min-h-[96vh]">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover object-bottom">
          <source src="/video/asdfg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#160C22]/90 via-[#221233]/70 to-[#1D102B]/45" />

        <div className="container relative z-10 mx-auto px-6 py-16 md:px-10 lg:px-14">
          <div className="reveal-on-load max-w-3xl rounded-[2.5rem] border border-[#D4AF37]/25 bg-gradient-to-r from-[#1F142A]/80 via-[#1F142A]/40 to-transparent p-8 shadow-[0_20px_60px_rgba(8,4,16,0.6)] backdrop-blur-md md:p-12">
            <span className="badge-spiritual">Ascend with Clarity</span>
            <h1 className="mb-6 text-4xl font-light leading-tight text-[#FFF8EE] [text-shadow:0_2px_15px_rgba(20,10,34,0.6)] sm:text-5xl md:text-6xl font-['Cinzel']">
              Find Purpose, Peace,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6E27A] via-[#D4AF37] to-[#FFF8EE]">
                and Spiritual Growth.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-base italic leading-relaxed text-[#EEE4D2]/90 sm:text-lg">
              Your divine path to inner alchemy and restoration begins here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => setShowModal(true)}
                className="btn-gold"
              >
                BEGIN YOUR READING
              </button>

              <button
                onClick={() => navigate("/energyhealing")}
                className="btn-outline-gold"
              >
                EXPLORE HEALING
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tarot Booking Modal with Glassmorphism */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 transition-all">
          <div className="relative w-full max-w-md rounded-[2rem] border border-[#D4AF37]/40 bg-gradient-to-b from-[#2A1638] via-[#1E0F2B] to-[#12071A] p-8 shadow-[0_24px_80px_rgba(10,4,18,0.85)] text-white text-center">
            <span className="badge-spiritual mx-auto">Sacred Session</span>
            <h2 className="mb-2 text-3xl font-['Cinzel'] text-[#D4AF37]">Tarot Reading</h2>
            <p className="mb-6 text-xs text-white/70 italic">Select your consecrated reading duration</p>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => { setShowModal(false); navigate("/book"); }}
                className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-left group"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#F6E27A]">20 Minutes Spread</h4>
                  <p className="text-xs text-white/50">Focused inquiry & current cycle</p>
                </div>
                <span className="text-base font-bold text-[#D4AF37]">₹499</span>
              </button>

              <button
                onClick={() => { setShowModal(false); navigate("/book"); }}
                className="w-full flex items-center justify-between rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/15 p-4 hover:border-[#D4AF37] hover:bg-[#D4AF37]/25 transition-all text-left group"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#F6E27A]">45 Minutes Deep Spread</h4>
                  <p className="text-xs text-white/60">Comprehensive life crossroads & aura reading</p>
                </div>
                <span className="text-base font-bold text-[#F6E27A]">₹1499</span>
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      <Estore />
      <Academy />
    </>
  );
};

export default Home;
