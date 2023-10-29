const path = require("path");

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
