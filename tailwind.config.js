const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
    },
    fontFamily: {
      heading: ["Vollkorn"],
      body: ["Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
