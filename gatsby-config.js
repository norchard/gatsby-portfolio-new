/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `posts`,
        // Path to the directory
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
  siteMetadata: {
    title: "Nicole Orchard",
    description: "Web Dev Portfolio",
    copyright: "This website is copyright 2023 Nicole Orchard",
  },
};
