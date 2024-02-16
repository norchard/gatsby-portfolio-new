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
        <h2 className={styles.title}>Blog Posts</h2>
        {posts.map((post) => (
          <div className={styles.post}>
            <h3 key={post.id}>
              <Link to={"/blog/" + post.slug}>{post.title}</Link>
            </h3>
            {post.slug === "compilers" ? (
              <p>
                <a
                  className="btn pink"
                  href="https://news.ycombinator.com/item?id=15005031"
                >
                  #1 on Hacker News
                </a>
              </p>
            ) : (
              ""
            )}
          </div>
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
