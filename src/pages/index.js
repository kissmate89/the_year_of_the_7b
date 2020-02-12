import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulClimbingPosts {
          edges {
            node {
              id
              title
              createdAt
            }
          }
        }
        allContentfulClimbingMainPage {
          nodes {
            id
            title
            content {
              content
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allContentfulClimbingPosts.edges
      const mainData = data.allContentfulClimbingMainPage.nodes[0]
      return (
        <Layout>
          <SEO title={mainData.title} />
          <p>{mainData.content.content}</p>
          <ul>
            {posts &&
              posts.map(post => (
                <li key={post.node.id}>
                  <Link to={`/posts/${post.node.title.replace(/\s/g, "-")}`}>
                    {post.node.title}
                  </Link>
                </li>
              ))}
          </ul>
        </Layout>
      )
    }}
  />
)

export default IndexPage
