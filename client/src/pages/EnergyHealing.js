import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EnergyHealingData = [
  {
    name: "Reiki Healing",
    image: "/images/reiki.webp",
    desc: "Channel universal life-force energy to dissolve physical tension and emotional blockages.",
    price: "Basic: ₹999 • Premium: ₹2999",
  },
  {
    name: "Sound Healing",
    image: "/images/sound.webp",
    desc: "Recalibrate your vibrational frequency with therapeutic Tibetan singing bowls and sacred bells.",
    price: "Group: ₹499 • Personal: ₹2499",
  },
  {
    name: "Crystal Healing",
    image: "/images/crystal.webp",
    desc: "Harness crystalline frequencies and sacred geometry to harmonize energy flow and aura fields.",
    price: "₹800 – ₹3000 • Premium: ₹3000 – ₹6000",
  },
  {
    name: "Angel Healing",
    image: "/images/angel.webp",
    desc: "Experience divine angelic presence, celestial frequency activations, and profound serenity.",
    price: "₹1000 – ₹4000 • Premium: ₹4000 – ₹8000",
  },
  {
    name: "Aura Cleansing / Chakra Healing",
    image: "/images/aura.webp",
    desc: "Deep energetic purification to revitalize the 7 chakras and protect your luminous energy field.",
    price: "₹800 – ₹3000 • Premium: ₹3000 – ₹6000",
  },
  {
    name: "Pranic Healing",
    image: "/images/pranic.webp",
    desc: "No-touch biofield cleansing and energizing to accelerate your body's natural self-healing.",
    price: "₹500 – ₹2500 • Premium: ₹2500 – ₹5000",
  },
  {
    name: "Aromatherapy",
    image: "/images/aroma.webp",
    desc: "Sacred essential oils and therapeutic botanical essences tailored for holistic sensory balance.",
    price: "₹800 – ₹3000 • Premium: ₹3000 – ₹6000",
  },
];

const EnergyHealing = () => {
  const navigate = useNavigate();
  return (
    <section className="section-shell bg-gradient-to-b from-[#12071A] via-[#2A1638] to-[#190B24] text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="badge-spiritual">
            Divine Restoration
          </span>
          <h2 className="section-heading">Sacred Healing Sessions</h2>
          <p className="section-subheading">
            Channel high-vibrational life force energy to rebalance your chakras, cleanse energetic blockages, and elevate your spiritual wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EnergyHealingData.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="premium-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 text-left"
            >
              <div>
                <div className="relative mb-5 h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#190B24]/90 via-transparent to-transparent" />
                </div>

                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#F6E27A]">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="mb-4">
                  <span className="text-[0.7rem] uppercase tracking-widest text-[#D4AF37]/80 block mb-1">Session Investment</span>
                  <span className="text-base font-bold text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                    {s.price}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/book")}
                  className="btn-gold w-full text-center"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyHealing;
