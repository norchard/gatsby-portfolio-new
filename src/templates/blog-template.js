import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/blog-template.module.css";
import { graphql } from "gatsby";
import Seo from "../components/SEO";

export default function BlogTemplate({ data }) {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={styles.blog}>
        <h1>{title}</h1>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  );
}

export function Head({ data }) {
  return <Seo title={data.markdownRemark.frontmatter.title} />;
}

export const query = graphql`
  query Posts($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }, html: {}) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`;
