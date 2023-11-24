import React, { Fragment } from "react";

import SeoMeta from "../components/seo";

const PostsPage = () => {
  return (
    <Fragment>
      <SeoMeta title="Activities" />
      <h2 className="text-center">Recent Activities</h2>
      <div className="flex justify-center my-6">
        <iframe
          height="454"
          width="300"
          allowtransparency="true"
          title="Recent activities on Strava"
          src="https://www.strava.com/athletes/34057799/latest-rides/4b9e9a29e22b1a755630423ad2ed73bfec3143a7"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default PostsPage;
