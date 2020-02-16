import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

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
          <p>{mainData.content.content}</p>
          <PostList />
        </Layout>
      )
    }}
  />
)

export default IndexPage
