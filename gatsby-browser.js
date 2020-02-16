/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const { ThemeProvider } = require("styled-components")

const { GlobalStyled, theme } = require("./src/styles/main.styles")

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      {element}
    </ThemeProvider>
  )
}
