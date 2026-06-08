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

        moodNeutral: {
          900: "#21214D",
          600: "#57577B",
          300: "#9393B7",
          200: "#CBCDD0",
          0: "#FFFFFF",
        },

        moodBlue: {
          700: "#2A4CD5",
          600: "#4865DB",
          300: "#89CAFF",
          200: "#C7D3F7",
          100: "#E0E6FA",
        },

        moodRed: {
          700: "#E60013",
          300: "#FF8989",
        },

        moodIndigo: {
          200: "#B8B1FF",
        },

        moodGreen: {
          300: "#89E780",
        },

        moodAmber: {
          300: "#FFC97C",
        },
      },

      backgroundImage: {
        "light-gradient": "linear-gradient(180deg, #F5F5FF 72.99%, #E0E0FF 100%)",
      },
      fontFamily: {
        "reddit-sans": ["Reddit Sans", "sans-serif"],
      },
      screens: {
        "1440": "1440px"
      },
    }
  },
  plugins: [],
}

