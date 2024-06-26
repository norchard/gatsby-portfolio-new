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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicole Orchard`,
        short_name: `NO`,
        start_url: `/`,
        background_color: `#ffffff`,
        // Generate PWA icons and a favicon
        icon: `src/images/icon.svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `posts`,
        // Path to the directory
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-DT7KG99G4T", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M78PLQTL",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const posts = allMarkdownRemark.nodes.filter(
                (node) => node.frontmatter.date
              );
              return posts.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  date: node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    node.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    html
                    frontmatter {
                      title
                      date
                      slug
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "Nicole Orchard",
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Nicole Orchard",
    siteUrl: "https://nicoleorchard.com",
    copyright: "This website is copyright 2024 Nicole Orchard",
  },
};
