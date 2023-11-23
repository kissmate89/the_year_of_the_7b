import React, { Fragment } from "react";
import _get from "lodash/get";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import classnames from "classnames";

import SeoMeta from "../../components/seo";

const Post = ({ pageContext }) => (
  <Fragment>
    <SeoMeta title={pageContext.title} />
    <h1 className="mb-6">{pageContext.title}</h1>
    <div className="post-body" dangerouslySetInnerHTML={{ __html: pageContext.content }} />

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
