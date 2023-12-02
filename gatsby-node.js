const path = require("path");
const { slash } = require("gatsby-core-utils");

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
  // The “graphql” function allows us to run arbitrary
  // queries against the local Contentful graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/Post/post.js`);

  const results = await graphql(`
    {
      allContentfulClimbingPosts(sort: { createdAt: DESC }) {
        edges {
          node {
            slug
            title
            content {
              childMarkdownRemark {
                rawMarkdownBody
                html
              }
            }
            images {
              description
              gatsbyImageData(width: 400)
            }
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `);

  results.data.allContentfulClimbingPosts.edges.forEach((result) => {
    const { node, next, previous } = result;

    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/posts/${node.slug}`,
      component: slash(postTemplate),
      context: {
        slug: node.slug,
        title: node.title,
        content: node.content.childMarkdownRemark.html,
        images: node.images,
        next: next,
        previous: previous,
      },
    });
  });

  const callRefresh = `https://www.strava.com/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&refresh_token=${process.env.STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`;
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?per_page=6&access_token=`;
  const activityPage = path.resolve(`./src/templates/activities.js`);
  const getActivities = (access) =>
    fetch(callActivities + access)
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));

  const stravaResult = await fetch(callRefresh, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return getActivities(result.access_token);
    });

  createPage({
    // Each page is required to have a `path` as well
    // as a template component. The `context` is
    // optional but is often necessary so the template
    // can query data specific to each page.
    path: `/activities`,
    component: slash(activityPage),
    context: {
      activities: stravaResult,
    },
  });
};
