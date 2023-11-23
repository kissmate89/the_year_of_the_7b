const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.slate,
      red: colors.red,
      blue: colors.blue,
    },
    fontFamily: {
      heading: ["Vollkorn"],
      body: ["Raleway"],
    },
  },
  plugins: [],
}
