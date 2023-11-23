const _ = require(`lodash`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // The “graphql” function allows us to run arbitrary
  // queries against the local Contentful graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const postTemplate = path.resolve(`./src/templates/Post/post.js`)

  const results = await graphql(
    `{
      allContentfulClimbingPosts(sort: {createdAt: DESC}) {
        edges {
          node {
            slug
            title
            content {
              childMarkdownRemark {
                rawMarkdownBody
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
    }`
  )

  results.data.allContentfulClimbingPosts.edges.forEach((result) => {
    const { node, next, previous } = result

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
        content: node.content.childMarkdownRemark.rawMarkdownBody,
        images: node.images,
        next: next,
        previous: previous,
      },
    })
  })
}
