/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const { ThemeProvider } = require("styled-components")

const { GlobalStyled } = require("./src/styles/main.styles")
const { lightTheme } = require("./src/styles/theme")

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyled />
      {element}
    </ThemeProvider>
  )
}
