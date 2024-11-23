/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "960px",
      // => @media (min-width: 640px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1640px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
