/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { DarkLightProvider } from "./src/utils/darkLight.provider"

import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => (
  <DarkLightProvider>{element}</DarkLightProvider>
)

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
