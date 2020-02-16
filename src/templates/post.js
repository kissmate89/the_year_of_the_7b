import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const Post = () => (
  <StaticQuery
    query={graphql`
      query($slug: String) {
        contentfulClimbingPosts(slug: { eq: $slug }) {
          title
          content {
            content
          }
        }
      }
    `}
    render={data => {
      const title = data.contentfulClimbingPosts.title
      const content = data.contentfulClimbingPosts.content.content

      return (
        <Layout>
          <h1>{title}</h1>
          <p>{content}</p>
        </Layout>
      )
    }}
  />
)

export default Post
