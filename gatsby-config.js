require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}),
  (module.exports = {
    siteMetadata: {
      title: `The year of the 7b`,
      description: `A blog about climbing`,
      author: `@kissmate89`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      // {
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     name: `images`,
      //     path: `${__dirname}/src/images`,
      //   },
      // },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/carabiner.png`, // This path is relative to the root of the site.
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `ue2kj8671j6d`,
          // Learn about environment variables: https://gatsby.app/env-vars
          host: `https://cdn.contentful.com`,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          environment: `prod-1`,
        },
      },
      {
        resolve: `gatsby-plugin-styled-components`,
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {},
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  })
