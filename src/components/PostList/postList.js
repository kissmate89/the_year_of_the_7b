import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import {
  PostListWrapper,
  PostListHeaderStyled,
  ListWrapperStyled,
  ListItemStyled,
  CreatedDateStyled,
} from "./postList.styles"

const PostList = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulClimbingPosts(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              slug
              title
              createdAt(formatString: "DD MMM YYYY")
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allContentfulClimbingPosts.edges
      return (
        <PostListWrapper>
          <PostListHeaderStyled>Posts</PostListHeaderStyled>
          <ListWrapperStyled>
            {posts &&
              posts.map(post => (
                <ListItemStyled key={post.node.id}>
                  <Link to={`/posts/${post.node.slug}`}>
                    <div>
                      <span>{post.node.title}</span>
                      <CreatedDateStyled>
                        {post.node.createdAt}
                      </CreatedDateStyled>
                    </div>
                  </Link>
                </ListItemStyled>
              ))}
          </ListWrapperStyled>
        </PostListWrapper>
      )
    }}
  />
)

export default PostList
