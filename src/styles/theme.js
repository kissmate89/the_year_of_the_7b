const theme = {
  // spacings

  get defaultSpacing() {
    return this.spacings.medium
  },

  spacings: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },

  // font sizes

  get defaultFontSize() {
    return this.fontSizes.medium
  },

  fontSizes: {
    small: "1rem",
    medium: "1.2rem",
    large: "1.5rem",
  },
}

export const lightTheme = {
  ...theme,

  // color themes
  get primaryColor() {
    return this.colors.primaryColor
  },
  get secondaryColor() {
    return this.colors.secondaryColor
  },

  colors: {
    primaryColor: "#485454",
    primaryHover: "#2B3333",
    secondaryColor: "#b9cdda",
    tertiaryColor: "#61776B",
    tertiaryHover: "#425149",
    backgroundColor: "#EFF3FF",
  },
}

export const darkTheme = {
  ...theme,

  // color themes
  get primaryColor() {
    return this.colors.primaryColor
  },
  get secondaryColor() {
    return this.colors.secondaryColor
  },

  colors: {
    primaryColor: "#EFF3FF",
    primaryHover: "#D0D3DD",
    secondaryColor: "#B9CDDA",
    tertiaryColor: "#B9CDDA",
    tertiaryHover: "#A0B1BC",
    backgroundColor: "#2B3333",
  },
}

export const mainTheme = {
  lightTheme: lightTheme,

  darkTheme: darkTheme,
}
