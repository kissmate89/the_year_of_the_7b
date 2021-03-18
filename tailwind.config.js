const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
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
