import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Aditi",
    text: "The tarot reading gave me absolute clarity, peaceful validation, and inner stillness.",
  },
  {
    name: "Rohan",
    text: "A truly sacred experience. I felt intimately connected and lovingly guided through life decisions.",
  },
  {
    name: "Meera",
    text: "Remarkably accurate and comforting. The spread illuminated issues I was holding deep inside.",
  },
];

const Tarot = () => {
  const navigate = useNavigate();

  return (
    <section className="section-shell bg-gradient-to-b from-[#12071A] via-[#2A1638] to-[#190B24] text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/35 bg-gradient-to-br from-[#2A1638]/90 via-[#1E0F2B]/95 to-[#12071A]/98 shadow-[0_24px_80px_rgba(10,4,18,0.7)] md:flex-row"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

          {/* Left Side Media */}
          <motion.div variants={childVariants} className="md:w-1/2 relative min-h-[350px] md:min-h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/tarot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#1E0F2B]/40 to-[#1E0F2B]" />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            variants={childVariants}
            className="relative z-10 flex flex-col justify-center p-8 sm:p-12 md:w-1/2"
          >
            <span className="badge-spiritual w-fit">
              Mystical Divination
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[0.14em] text-[#D4AF37] font-['Cinzel'] mb-3">
              Tarot Archetypes
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6 leading-relaxed">
              Unveil cosmic patterns, receive celestial clarity, and illuminate the crossroads of your destiny with intuition-led tarot spreads.
            </p>

            <div className="mb-6 flex items-baseline gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <span className="text-xs uppercase tracking-wider text-white/50">Tiers:</span>
              <span className="text-lg font-bold text-[#F6E27A]">20 Min: ₹499</span>
              <span className="text-white/30">•</span>
              <span className="text-lg font-bold text-[#D4AF37]">45 Min: ₹1499</span>
            </div>

            {/* Interactive Oracle Card */}
            <div className="mb-8" style={{ perspective: 1000 }}>
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
                className="group relative flex h-36 w-24 cursor-pointer items-center justify-center rounded-xl border border-[#D4AF37]/50 bg-gradient-to-b from-[#4A2C5D] to-[#190B24] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center" style={{ backfaceVisibility: "hidden" }}>
                  <span className="text-xl text-[#D4AF37]">✦</span>
                  <p className="text-[0.65rem] uppercase tracking-widest text-white/80 mt-1 font-['Cinzel']">Hover to Reveal</p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center rounded-xl bg-gradient-to-b from-[#D4AF37] to-[#B8860B] text-[#190B24]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <span className="text-base font-bold">The Star</span>
                  <p className="text-[0.6rem] font-semibold mt-1">Hope & Clarity</p>
                </div>
              </motion.div>
            </div>

            {/* Booking & Fast Access */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <button
                className="btn-gold w-full sm:w-auto text-center"
                onClick={() => navigate("/book")}
              >
                Book Tarot Reading
              </button>

              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-xl border border-[#D4AF37]/40 bg-white shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                  <QRCode value="https://yourwebsite.com/pay-demo" size={60} />
                </div>
                <span className="text-xs text-white/60 leading-tight">
                  Instant QR<br />Mobile Booking
                </span>
              </div>
            </div>

            {/* Testimonials Marquee */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37]/80 mb-3 font-semibold">
                Sanctuary Seekers
              </h4>
              <div className="overflow-hidden">
                <motion.div
                  className="flex space-x-4"
                  animate={{ x: [0, -320, 0] }}
                  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                >
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="min-w-[240px] rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-sm"
                    >
                      <p className="text-xs italic text-white/80 leading-relaxed">"{t.text}"</p>
                      <p className="text-xs font-bold text-[#F6E27A] mt-2 font-['Cinzel']">
                        — {t.name}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tarot;
