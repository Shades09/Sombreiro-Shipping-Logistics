/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#D94E0F",
          green: "#1A5C2A",
          blue: "#2196F3",
          dark: "#1A1A1A",
          sand: "#F5F0E8",
          gold: "#C9943A",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
