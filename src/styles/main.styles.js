import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    body {
        margin: 0;
    }

    a {
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        color: ${({ theme }) => theme.colors.tertiaryColor};

        &:hover {
            color: ${({ theme }) => theme.colors.tertiaryHover};
        }
    }

    li {
        list-style: none;
    }
`

export const theme = {
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
  },

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
