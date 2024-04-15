const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Pages {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(projects)/" }
          wordCount: { words: { gt: 0 } }
        }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.posts.nodes.forEach((blog) => {
    actions.createPage({
      path: "/blog/" + blog.frontmatter.slug,
      component: path.resolve("./src/templates/blog-template.js"),
      context: { slug: blog.frontmatter.slug },
    });
  });

  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: "/projects/" + project.frontmatter.slug,
      component: path.resolve("./src/templates/project-template.js"),
      context: { slug: project.frontmatter.slug },
    });
  });
};
