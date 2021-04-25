import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import _get from "lodash/get";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import classnames from "classnames";

import SeoMeta from "../../components/seo";

const Post = ({ pageContext }) => (
  <Fragment>
    <SeoMeta title={pageContext.title} />
    <h1 className="mb-6">{pageContext.title}</h1>
    <ReactMarkdown
      source={pageContext.content}
      renderers={{
        paragraph: (props) => <p className="mb-4" {...props} />,
        heading: (props) => (
          <h3 className="mb-4" {...props}>
            {props.children}
          </h3>
        ),
        softbreak: (props) => <br className="mb-4" {...props} />,
        link: (props) => (
          <a className="underline" {...props}>
            {props.children}
          </a>
        ),
      }}
    />

    {pageContext.images && (
      <div className="grid gap-4 sm:grid-cols-2">
        {pageContext.images.map((image) => (
          <GatsbyImage
            key={image.description}
            alt={image.description}
            image={image.gatsbyImageData}
            className="rounded-sm"
          />
        ))}
      </div>
    )}

    <div className="flex w-full mt-4 sm:justify-between">
      <Link
        to={`/posts/${_get(pageContext.previous, "slug")}`}
        className={classnames("scale-transition px-4 py-2", {
          "invisible pointer-events-none": !pageContext.previous,
        })}
      >
        NEWER POST
      </Link>
      <Link
        to={`/posts/${_get(pageContext.next, "slug")}`}
        className={classnames("scale-transition px-4 py-2", {
          "invisible pointer-events-none": !pageContext.next,
        })}
      >
        OLDER POST
      </Link>
    </div>
  </Fragment>
);

export default Post;
