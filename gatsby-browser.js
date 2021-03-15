/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { DarkLightProvider } from "./src/utils/darkLight.provider"
import Layout from "./src/components/layout"

import "./src/styles/index.css"

export const wrapRootElement = ({ element }) => {
  return <DarkLightProvider>{element}</DarkLightProvider>
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
