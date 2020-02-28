/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"
import {
  DarkLightProvider,
  DarkLightContext,
} from "./src/utils/darkLight.provider"

import { GlobalStyled } from "./src/styles/main.styles"
import { lightTheme, darkTheme } from "./src/styles/theme"
import Layout from "./src/components/Layout/layout"

export const wrapRootElement = ({ element }) => (
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

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
