/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "deep-blue": "#010026",
        red: "#DC4492",
      }
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
}