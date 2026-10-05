/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sacred: {
          gold: "#D4AF37",
          "gold-light": "#F6E27A",
          "gold-hover": "#B8860B",
          "gold-dark": "#996515",
          plum: "#4A2C5D",
          "plum-dark": "#2A1638",
          "plum-deep": "#190B24",
          "plum-light": "#6B3E84",
          obsidian: "#12071A",
          surface: "rgba(33, 16, 44, 0.7)",
        },
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'purple-glow': '0 0 35px rgba(74, 44, 93, 0.4)',
      },
    },
  },
  plugins: [],
};
