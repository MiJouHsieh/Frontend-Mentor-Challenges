/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        navy950: "#0E1323",
        navy900: "#1C204B",
        navy800: "#33397A",
        navy200: "#BBC0FF",

        purple700: "#7335D2",
        purple600: "#5747EA",
        purple500: "#7078C9",

        work: "#FF8B64",
        play: "#55C2E6",
        study: "#FF5E7D",
        exercise: "#4BCF82",
        social: "#7335D2",
        selfCare: "#F1C75B",

        grey200: "#D8D8D8",
      }
    },
  },
  plugins: [],
}

