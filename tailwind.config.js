/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#D94E0F",
          "orange-light": "#ff5100",
          green: "#1A5C2A",
          "green-light": "#009525",
          blue: "#2196F3",
          dark: "#1A1A1A",
          mid: "#4A5568",
          sand: "#F5F0E8",
          gold: "#C9943A",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Monsieur La Doulaise'", "cursive"],
        sans: ["'Sora'", "sans-serif"],
      },
      animation: {
        spinSlow: "spin 25s linear infinite",
        spinReverse: "spin 18s linear infinite reverse",
        floatLogo: "floatLogo 5s ease-in-out infinite",
        floatBadge: "floatBadge 4s ease-in-out infinite",
      },
      keyframes: {
        floatLogo: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatBadge: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      spacing: {
        "nav-h": "72px",
        "util-h": "36px",
      },
    },
  },
  plugins: [],
};
