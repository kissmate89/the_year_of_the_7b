import React, { Fragment } from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import { H3, P } from "../../styles/component.styles"
import {
  PostTitleStyled,
  MarkDownWrapperStyled,
  PostNavigationWrapperStyled,
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

    <PostNavigationWrapperStyled>
      {pageContext.previous && (
        <Link to={`posts/${pageContext.previous.slug}`}>
          {"<- "}
          {pageContext.previous.title}
        </Link>
      )}
      {pageContext.next && (
        <Link to={`posts/${pageContext.next.slug}`}>
          {pageContext.next.title}
          {" ->"}
        </Link>
      )}
    </PostNavigationWrapperStyled>

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
