import React, { Fragment } from "react"

const Post = ({ pageContext: { title, content } }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{content}</p>
    </Fragment>
  )
}

export default Post
