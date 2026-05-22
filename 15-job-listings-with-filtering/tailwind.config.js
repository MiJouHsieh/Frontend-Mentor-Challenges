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
        black: "#000000",

        customGray: {
          300: "#B7C4C4",
          400: "#7C8F8F",
        },

        customGreen: {
          50: "#EFFAFA",
          350: "#63BABA",
          400: "#5CA5A5",
          900: "#2B3939",
        },
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
}

