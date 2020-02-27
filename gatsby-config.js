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
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: `${__dirname}/src/images/`, // See below to configure properly
          },
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `The year of the 7b`,
          short_name: `7b`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/logo_circle.svg`, // This path is relative to the root of the site.
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
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Raleway`,
              variants: [`400`, `600`],
            },
            {
              family: `Vollkorn`,
              variants: [`400, 600`],
            },
          ],
        },
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
