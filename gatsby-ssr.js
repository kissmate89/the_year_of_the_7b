/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { ThemeProvider } from "styled-components"
import {
  useDarkLightProvider,
  DarkLightProvider,
} from "./src/utils/darkLight.provider"

import { GlobalStyled } from "./src/styles/main.styles"
import { lightTheme, darkTheme } from "./src/styles/theme"

export const wrapRootElement = ({ element }) => {
  const { isDark } = useDarkLightProvider()
  return (
    <DarkLightProvider>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyled />
        {element}
      </ThemeProvider>
    </DarkLightProvider>
  )
}
