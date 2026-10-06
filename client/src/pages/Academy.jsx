import React from "react";

const courses = [
  {
    title: "Reiki Healing & Teaching",
    details: ["Level 1 & 2 — $40 USD", "Level 3 — $55 USD", "Level 4 — $65 USD", "Level 5 — $111 USD", "Level 6 — $128 USD"],
    image: "/images/reiki.webp",
    imageAlt: "Hands channeling Reiki healing energy during a session",
  },
  {
    title: "Basic Numerology Course",
    details: ["$250 USD"],
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Numerology chart and sacred numbers",
  },
  {
    title: "Advance Numerology Course",
    details: ["$307 USD"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Mystical numerology symbols and cosmic study atmosphere",
  },
  {
    title: "Crystal Healing Course",
    details: ["Channel Crystal Vibrations"],
    image: "/images/crystal.webp",
    imageAlt: "Healing crystals for crystal therapy training",
  },
  {
    title: "Runes Course",
    details: ["$171 USD"],
    image: "https://images.pexels.com/photos/35639394/pexels-photo-35639394.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
    imageAlt: "Rune stones for divination learning",
  },
  {
    title: "Tarot For Beginners",
    details: ["Unlock Your Intuition"],
    image: "/images/tarot.webp",
    imageAlt: "Tarot cards arranged for a beginner reading course",
  },
  {
    title: "Aura Cleansing Course",
    details: ["Restore Spiritual Balance"],
    image: "/images/aura.webp",
    imageAlt: "Spiritual aura light for aura cleansing training",
  },
  {
    title: "Sound Healing Course",
    details: ["$190 USD"],
    image: "/images/sound.webp",
    imageAlt: "Singing bowls and meditation sound therapy",
  },
  {
    title: "Aroma Healing Course",
    details: ["$111 USD"],
    image: "/images/aroma.webp",
    imageAlt: "Essential oils and candles for aroma healing",
  },
];

const Academy = () => {
  return (
    <section className="section-shell relative overflow-hidden px-4 text-center text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,56,0.2),rgba(74,44,93,0.35),rgba(42,22,56,0.25))]" />
      <div className="relative mx-auto max-w-6xl">
        <span className="mb-3 inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
          Sacred Learning
        </span>
        <h2 className="section-heading text-[#D4AF37]">Transformational Courses</h2>
        <div className="mx-auto grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="premium-card group relative flex h-full min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/15 bg-[#1e1029] text-center shadow-[0_24px_70px_rgba(12,5,22,0.38)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_28px_80px_rgba(212,175,55,0.22)] sm:min-h-[26rem]"
            >
              <img
                src={course.image}
                alt={course.imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#16091f]/35 via-[#2f1642]/68 to-black/92 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#D4AF37]/55" />
              <div className="absolute inset-x-8 top-7 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/75 to-transparent opacity-70" />

              <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 sm:p-7">
                <h3 className="mb-4 text-2xl font-semibold leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.58)] transition-colors duration-300 group-hover:text-[#F6D96C] md:text-3xl">
                  {course.title}
                </h3>
                <div className="mb-6 space-y-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold tracking-[0.12em] text-[#F1D36B] shadow-[0_0_24px_rgba(212,175,55,0.12)] backdrop-blur-md md:text-base">
                  {course.details.map((detail) => (
                    <p className="text-[#F1D36B]" key={detail}>{detail}</p>
                  ))}
                </div>
                <button className="mt-auto rounded-full border border-[#D4AF37]/80 bg-[#D4AF37] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#2f1642] shadow-[0_0_28px_rgba(212,175,55,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F1D36B] hover:shadow-[0_0_38px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#4A2C5D]">
                  Enroll Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
