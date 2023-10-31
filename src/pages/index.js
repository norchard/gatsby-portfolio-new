import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import Seo from "../components/SEO";
import Img from "gatsby-image";

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web designer & developer based in Houston, Texas</p>
          <Link id="view-projects-cta" className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="nicole"
          style={{ maxWidth: "100%", marginTop: "20px" }}
        />
      </section>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Home" />;
}

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "nicole_rc.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
