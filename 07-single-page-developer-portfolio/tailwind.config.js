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
        gray: "#D9D9D9",
        green: "#4EE1A0",
        darkGray: "#242424",
        black: "#151515",
      },
      screens: {
        '1440': '1440px',
        '900': '900px',
      },
    },
  },
  plugins: [],
}

