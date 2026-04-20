/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1C232B",
        grey: "#6C7289",
        cream: "#F2EAE2",
        white: "#FFFFFF",
        green500: "#3D8168",
        green700: "#1A4032"
      }
    },
  },
  plugins: [],
}

