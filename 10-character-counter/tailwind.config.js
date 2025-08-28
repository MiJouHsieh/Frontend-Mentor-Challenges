/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: "#FFFFFF",
        neutral100: "#F2F2F7",
        neutral200: "#E4E4EF",
        neutral600: "#404254",
        neutral700: "#2A2B37",
        neutral800: "#21222C",
        neutral900: "#12131A",
        purple400: "#D3A0FA",
        purple500: "#C27CF8",
        yellow500: "#FF9F00",
        orange500: "#FE8159",
        orange800: "#DA3701",
      }
    },
  },
  plugins: [],
}

