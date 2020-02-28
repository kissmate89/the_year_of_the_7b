/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const { ThemeProvider } = require("styled-components")
const {
  DarkLightProvider,
  DarkLightContext,
} = require("./src/utils/darkLight.provider")

const { GlobalStyled } = require("./src/styles/main.styles")
const { lightTheme, darkTheme } = require("./src/styles/theme")

exports.wrapRootElement = ({ element }) => {
  return (
    <DarkLightProvider>
      <DarkLightContext.Consumer>
        {({ isDark }) => (
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyled />
            {element}
          </ThemeProvider>
        )}
      </DarkLightContext.Consumer>
    </DarkLightProvider>
  )
}

exports.registerServiceWorker = () => true

exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
