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
    tertiaryColor: "#865053",
    tertiaryHover: "#643c3e",
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
    tertiaryColor: "#5CCACA",
    tertiaryHover: "#3bb5b5",
    backgroundColor: "#2B3333",
  },
}