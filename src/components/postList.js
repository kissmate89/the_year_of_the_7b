import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import {
  PostListWrapper,
  ListWrapperStyled,
  ListItemStyled,
} from "../styles/postList.styles"
import { H2 } from "../styles/component.styles"

const PostList = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulClimbingPosts {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allContentfulClimbingPosts.edges
      return (
        <PostListWrapper>
          <H2>Posts</H2>
          <ListWrapperStyled>
            {posts &&
              posts.map(post => (
                <ListItemStyled key={post.node.id}>
                  <Link to={`/posts/${post.node.slug}`}>{post.node.title}</Link>
                </ListItemStyled>
              ))}
          </ListWrapperStyled>
        </PostListWrapper>
      )
    }}
  />
)

export default PostList
