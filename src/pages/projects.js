import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/projects.module.css";
import Seo from "../components/SEO";
import { Link, graphql } from "gatsby";

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <div>
          {projects.map((project) => {
            const info = project.frontmatter;
            const idBase = info.title.toLowerCase().split(" ").join("-");
            return (
              <div key={project.id} className={styles.projectTile}>
                <h1>{info.title}</h1>
                <img alt={info.title} src={`/thumbnails/${info.image}`} />
                <p>{info.description}</p>
                <p>
                  {info.demolink && (
                    <a
                      id={idBase + "-demo-btn"}
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
                    <a
                      id={idBase + "-code-btn"}
                      href={info.codelink}
                      className="btn"
                    >
                      View Code
                    </a>
                  )}
                  {info.slug && (
                    <Link
                      id={idBase + "-project-btn"}
                      to={"/projects/" + info.slug}
                      className="btn pink"
                    >
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
          codelink
          demolink
          slug
          image
        }
      }
    }
  }
`;
