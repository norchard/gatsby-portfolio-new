import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import * as styles from "../styles/about.module.css";
import Img from "gatsby-image";
import { graphql } from "gatsby";

export default function About({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.text}>
          <h2>Hi, I'm Nicole,</h2>
          <h3>Web Designer & Developer</h3>
          <p>
            I used to call myself a "designer turned developer", but I'm
            actually both. My designer-self and my developer-self have both been
            fueled by my curiousity to learn how things are made. I enjoy the
            sense of satisfaction that comes from creating something new. I
            started building websites when I needed a design portfolio. Every
            couple of years I would update it and learn more HTML, CSS, and
            Javascript. I was hooked.
          </p>
          <p>
            Eventually I decided to focus my attention on programming. After
            studying & traveling for five months and attending the{" "}
            <a href="https://recursecenter.com">Recurse Center</a> in NYC, I
            landed my first software engineering job working on APIs at{" "}
            <a href="https://mapbox.com">Mapbox</a>. There I gained experience
            programming professionally, managing global resources on AWS, being
            on-call for services and responding to incidents, as well as
            onboarding teammates to new technology.
          </p>
          <p>
            In the last several years I have done more web design work and these
            days I'm most interested in front-end development. Recently I have
            been working with React and exploring frontend tools like Gatsby,
            which I used to build this site. I find the cycle of frontend
            tooling to be really interesting.
          </p>
        </div>
        <div className={styles.image}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="nicole portrait"
            style={{
              maxWidth: "400px",
              marginLeft: "200px",
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="About" />;
}

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "nicole.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
