import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"
import PostList from "../components/PostList/postList"

import { MainTextStyled } from "../styles/index.styles"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulClimbingMainPage {
          nodes {
            title
            content {
              content
            }
          }
        }
      }
    `}
    render={data => {
      const mainData = data.allContentfulClimbingMainPage.nodes[0]
      return (
        <Layout>
          <SEO title={mainData.title} />
          <MainTextStyled>{mainData.content.content}</MainTextStyled>
          <PostList />
        </Layout>
      )
    }}
  />
)

export default IndexPage
