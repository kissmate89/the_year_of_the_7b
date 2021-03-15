import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import _chunk from "lodash/chunk"
import classnames from "classnames"

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

  const handlePageClick = (direction) => {
    if (direction === "next" && currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1)
    }

    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="mx-auto my-6">
      <ul className="pl-0 text-center">
        {posts &&
          posts[currentPage].map((post) => (
            <li
              key={post.node.id}
              className="m-auto py-4 px-0 scale-transition"
            >
              <Link to={`/posts/${post.node.slug}`}>
                <div className="flex flex-col">
                  <span className="text-xl text-red-800 dark:text-blue-200 truncate">
                    {post.node.title}
                  </span>
                  <span className="mt-2 text-sm">{post.node.createdAt}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <div className="grid max-w-lg gap-4 grid-cols-3 items-center py-4 px-0 m-auto border-t border-gray-400">
        <button
          onClick={() => handlePageClick("prev")}
          className={classnames("scale-transition", {
            "invisible pointer-events-none": currentPage === 0,
          })}
        >
          PREV
        </button>
        <span className="text-center">
          {currentPage + 1}/{pageCount}
        </span>
        <button
          onClick={() => handlePageClick("next")}
          className={classnames("scale-transition", {
            "invisible pointer-events-none": currentPage === pageCount - 1,
          })}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default PostList
