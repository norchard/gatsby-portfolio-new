import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/ceramics.module.css";
import { Link, graphql } from "gatsby";
import Seo from "../components/SEO";
import Img from "gatsby-image";

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.ceramics}>
        <div>
          <h3>Ceramics</h3>
          <p>
            When I'm not pushing pixels or writing lines of code, you can
            sometimes find me spinning on the wheel.
          </p>
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
    file(relativePath: { eq: "ceramics-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
