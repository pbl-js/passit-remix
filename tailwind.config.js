/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-purple-light": "#7B3697",
        "gradient-purple-dark": "#4F1462",
        theme: {
          800: "#221447", // Primary bgc
          600: "#342068", // Secondary bgc
          500: "#5925E1", // Main color
          150: "#A59CD9", // Light text
        },
        purple: {
          200: '#A59CD9',
          300: "rgb(117, 93, 129)",
          800: "#321443", // BGC-primary
          700: '#361455',
          600: "#471875", // BGC-secondary
        },
        yellow: {
          400: "#DBE66A" // Main accent
        }
      },
    },
  },
  plugins: [],
};

// z-indexes
// 10 - modalWrapper
