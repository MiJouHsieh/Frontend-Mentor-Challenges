/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galacticBlue: "#755CDE",
        black: "#030303",
        gray: "#7A736E",
        lightCream:"#FFF7F0",
        summerYellow: "#F6A560",
        pink:"#F39E9E",
        lightRed: "#EB7565",
        cyan:"#61C4B7",
        purple: "#552049"
      },
      screens: {
        '1440': '1440px',
      }
    },
  },
  plugins: [],
};
