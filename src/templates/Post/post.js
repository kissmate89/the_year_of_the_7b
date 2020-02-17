import React from "react"
import ReactMarkdown from "react-markdown"

import Layout from "../../components/Layout/layout"

import { H3, P } from "../../styles/component.styles"
import { PostTitleStyled, MarkDownWrapperStyled } from "./post.styles"

const Post = ({ pageContext }) => (
  <Layout>
    <PostTitleStyled>{pageContext.title}</PostTitleStyled>
    <MarkDownWrapperStyled>
      <ReactMarkdown
        source={pageContext.content}
        renderers={{
          paragraph: props => <P {...props} />,
          heading: props => <H3 {...props} />,
          softbreak: props => <br {...props} />,
        }}
      />
    </MarkDownWrapperStyled>
  </Layout>
)

export default Post
