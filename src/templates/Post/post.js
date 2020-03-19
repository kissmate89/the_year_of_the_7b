import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"

import { H3, P } from "../../styles/component.styles"
import {
  PostTitleStyled,
  MarkDownWrapperStyled,
  PostImageGalleryStyled,
  PostImageStyled,
} from "./post.styles"

const Post = ({ pageContext }) => (
  <Fragment>
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
    {pageContext.images && (
      <PostImageGalleryStyled>
        {pageContext.images.map(image => (
          <PostImageStyled
            key={image.description}
            alt={image.description}
            fluid={image.fluid}
          />
        ))}
      </PostImageGalleryStyled>
    )}
  </Fragment>
)

export default Post
