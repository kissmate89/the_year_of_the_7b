import React, { Fragment } from "react";

import SeoMeta from "../components/seo";
import PostList from "../components/postList";

const PostsPage = () => {
  return (
    <Fragment>
      <SeoMeta title="Posts" />
      <h2 className="text-center">Posts</h2>
      <PostList />
    </Fragment>
  );
};

export default PostsPage;
