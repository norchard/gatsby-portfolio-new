import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
// import { Link, graphql } from "gatsby";
import { Link } from "gatsby";
import Seo from "../components/SEO";

export default function Home({ data }) {
  // const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web designer & developer based in Houston, Texas</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img
          src="/nicole_rc.png"
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

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `;
