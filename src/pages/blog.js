import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { Link, graphql } from "gatsby";
import * as styles from "../styles/blog.module.css";

export default function Blog({ data }) {
  const posts = data.posts.nodes.map((obj) => ({
    ...obj.frontmatter,
    id: obj.id,
  }));
  console.log(posts);
  return (
    <Layout>
      <div className={styles.blog}>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <p key={post.id}>
            <Link to={"/blog/" + post.slug}>{post.title}</Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Blog" />;
}

export const query = graphql`
  query BlogData {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        id
      }
    }
  }
`;
