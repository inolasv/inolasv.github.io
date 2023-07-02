/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "light-pink": "#FFEBEB",
      brown: "#463939",
      "dark-pink": "#EEC7C7",
    },
    fontFamily: {
      body: ["Lora", "serif"],
      heading: ["Metamorphous", "serif"],
    },
  },
  variants: {
    stroke: ["hover", "focus"],
    fill: ["hover", "focus"],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
