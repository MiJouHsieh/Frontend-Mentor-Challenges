/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue300: "#D0D6F9",
        blue900: "#0B0D17"
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'serif'],
        barlowCondensed: ['"Barlow Condensed"', 'serif'],
        bellefair: ['"Bellefair"', 'serif'],
      },
    },
  },
  plugins: [],
}