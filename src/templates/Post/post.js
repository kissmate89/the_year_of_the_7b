import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"
import _get from "lodash/get"

import { H3, P, LinkStyled } from "../../styles/component.styles"
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
          paragraph: (props) => <P {...props} />,
          heading: (props) => <H3 {...props} />,
          softbreak: (props) => <br {...props} />,
        }}
      />
    </MarkDownWrapperStyled>

    {pageContext.images && (
      <PostImageGalleryStyled>
        {pageContext.images.map((image) => (
          <PostImageStyled
            key={image.description}
            alt={image.description}
            image={image.gatsbyImageData}
          />
        ))}
      </PostImageGalleryStyled>
    )}

    <PostNavigationWrapperStyled>
      <LinkStyled
        to={`/posts/${_get(pageContext.previous, "slug")}`}
        isHidden={!pageContext.previous}
      >
        NEWER POST
      </LinkStyled>
      <LinkStyled
        to={`/posts/${_get(pageContext.next, "slug")}`}
        isHidden={!pageContext.next}
      >
        OLDER POST
      </LinkStyled>
    </PostNavigationWrapperStyled>
  </Fragment>
)

export default Post
