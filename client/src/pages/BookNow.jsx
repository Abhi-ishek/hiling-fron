import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BookNow = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/pay-demo");
    }, 1200);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#12071A] via-[#2A1638] to-[#190B24] text-white">
      {/* Mystical Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4A2C5D]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="premium-panel relative z-10 w-full max-w-xl rounded-[2.5rem] border border-[#D4AF37]/30 p-8 sm:p-12 shadow-[0_24px_80px_rgba(10,4,18,0.7)]"
      >
        <div className="text-center mb-8">
          <span className="badge-spiritual">
            Personal Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-[0.12em] text-[#D4AF37] mb-2 font-['Cinzel']">
            Reserve Sacred Session
          </h1>
          <p className="text-sm text-white/70">
            Select your journey, choose a harmonious time, and begin your transformation.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-2xl shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              ✦
            </div>
            <h3 className="text-2xl font-['Cinzel'] text-white">Reservation Initiated</h3>
            <p className="text-sm text-white/70 max-w-sm mx-auto">
              Redirecting you to our secure spiritual exchange terminal...
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="input-spiritual text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@sanctuary.com"
                  className="input-spiritual text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                Sanctuary Service
              </label>
              <select
                required
                className="input-spiritual text-sm text-white cursor-pointer bg-[#2A1638]"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" className="bg-[#190B24] text-white/50">Choose a Sacred Service</option>
                <option value="Tarot Reading" className="bg-[#190B24] text-white">Tarot Reading Spread (20m / 45m)</option>
                <option value="Reiki Healing" className="bg-[#190B24] text-white">Reiki Universal Energy Therapy</option>
                <option value="Sound Healing" className="bg-[#190B24] text-white">Tibetan Sound Frequency Alignment</option>
                <option value="Crystal Healing" className="bg-[#190B24] text-white">Crystalline Energy Matrix</option>
                <option value="Aura Cleansing" className="bg-[#190B24] text-white">Aura Cleansing & Chakra Balancing</option>
                <option value="Pranic Healing" className="bg-[#190B24] text-white">Pranic Biofield Revitalization</option>
                <option value="Aroma Therapy" className="bg-[#190B24] text-white">Botanical Aromatherapy Session</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Session Date
                </label>
                <input
                  type="date"
                  required
                  className="input-spiritual text-sm cursor-pointer"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  required
                  className="input-spiritual text-sm cursor-pointer"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn-gold w-full py-3.5 text-sm uppercase tracking-[0.18em]"
              >
                Confirm & Proceed to Exchange
              </button>
            </div>

            <p className="text-center text-[0.75rem] text-white/45 italic">
              ✦ All sessions are private, confidential, and energetically consecrated.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default BookNow;
