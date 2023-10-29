import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import Seo from "../../components/SEO";
import { graphql } from "gatsby";
import { Link } from "gatsby";

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects & Websites I've Created</h3>
        <div>
          {projects.map((project) => {
            const info = project.frontmatter;
            return (
              <div key={project.id} className={styles.projectTile}>
                <h1>{info.title}</h1>
                <img alt={info.title} src={"../" + info.image} />
                <p>{info.description}</p>
                <p>
                  {info.demolink && (
                    <a
                      href={info.demolink}
                      className={
                        "btn " +
                        ["green", "blue"][Math.floor(Math.random() * 2)]
                      }
                    >
                      View Demo
                    </a>
                  )}
                  {info.codelink && (
                    <a href={info.codelink} className="btn">
                      View Code
                    </a>
                  )}
                  {info.slug && (
                    <Link to={"/projects/" + info.slug} className="btn pink">
                      View Project
                    </Link>
                  )}
                </p>
                <p className={styles.tools}>{info.stack}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Projects" />;
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
      nodes {
        id
        frontmatter {
          title
          stack
          description
          image
          codelink
          demolink
          slug
        }
      }
    }
  }
`;
