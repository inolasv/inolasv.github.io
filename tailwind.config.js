/** @type {import('tailwindcss').Config} */

module.exports = {
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
  plugins: [],
};
