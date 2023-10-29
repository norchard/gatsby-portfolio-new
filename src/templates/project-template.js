import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/project-template.module.css";
import { graphql } from "gatsby";

export default function ProjectTemplate({ data }) {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={styles.project}>
        <h1>{title}</h1>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Projects($slug: String) {
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
