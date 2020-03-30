import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import _chunk from "lodash/chunk"

import {
  PostListWrapper,
  ListWrapperStyled,
  ListItemStyled,
  CreatedDateStyled,
  PaginationStyled,
  PaginationButtonStyled,
  PageCounterStyled,
} from "./postList.styles"

const perPage = 5

const PostList = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const posts = _chunk(data.allContentfulClimbingPosts.edges, perPage)

  const [currentPage, setCurrentPage] = useState(0)
  const pageCount = posts.length

  const handlePageClick = direction => {
    if (direction === "next" && currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1)
    }

    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <PostListWrapper>
      <ListWrapperStyled>
        {posts &&
          posts[currentPage].map(post => (
            <ListItemStyled key={post.node.id}>
              <Link to={`/posts/${post.node.slug}`}>
                <div>
                  <span>{post.node.title}</span>
                  <CreatedDateStyled>{post.node.createdAt}</CreatedDateStyled>
                </div>
              </Link>
            </ListItemStyled>
          ))}
      </ListWrapperStyled>
      <PaginationStyled>
        <PaginationButtonStyled
          isVisible={currentPage > 0}
          onClick={() => handlePageClick("prev")}
        >
          PREV
        </PaginationButtonStyled>
        <PageCounterStyled as="span">
          {currentPage + 1}/{pageCount}
        </PageCounterStyled>
        <PaginationButtonStyled
          isVisible={currentPage < pageCount - 1}
          onClick={() => handlePageClick("next")}
        >
          NEXT
        </PaginationButtonStyled>
      </PaginationStyled>
    </PostListWrapper>
  )
}

export default PostList
