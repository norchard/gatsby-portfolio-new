import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import Seo from "../../components/SEO";

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects & Websites I've Created</h3>
        <div>
          <div className={styles.projectTile}>
            <h1>Zoya</h1>
            <img src="../zoya.png" />
            <p>
              Art Gallery website with headless CMS for managing artists and
              artwork
            </p>
            <p>
              <a className="btn pink">View Website</a>
              <a className="btn">View Code</a>
            </p>
            <p className={styles.tools}>Next.js | React | Sanity.io</p>
          </div>
          <div className={styles.projectTile}>
            <h1>Minesweeper</h1>
            <img src="../minesweeper.png" />
            <p>An emoji twist on the classic game</p>
            <p>
              <a className="btn blue">Play Game</a>
              <a className="btn">View Code</a>
            </p>
            <p className={styles.tools}>Javascript | React</p>
          </div>
          <div className={styles.projectTile}>
            <h1>NYC Public Art</h1>
            <img src="../nyc-public-art.png" />
            <p>
              An app that maps temporary public art from an open source dataset
            </p>
            <p>
              <a className="btn green">View Demo</a>
              <a className="btn">View Code</a>
            </p>
            <p className={styles.tools}>Javascript | D3.js</p>
          </div>
          <div className={styles.projectTile}>
            <h1>Art Collection</h1>
            <img src="../art-collection.png" />
            <p>
              A simple CRUD app with authentication for keeping track of an art
              collection
            </p>
            <p>
              <a className="btn green">View Demo</a>
              <a className="btn">View Code</a>
            </p>
            <p className={styles.tools}>
              MongoDB | Express.js | React | Node | AWS S3
            </p>
          </div>
          <div className={styles.projectTile}>
            <h1>White Unicorn Copycat</h1>
            <img src="../white-unicorn.png" />
            <p>
              Replication of website styles from design agency White Unicorn.
            </p>
            <p>
              <a className="btn pink">Visit Website</a>
              <a className="btn">View Code</a>
            </p>
            <p className={styles.tools}>Javascript | React | Bootstrap</p>
          </div>
          <div className={styles.projectTile}>
            <h1>Hangman</h1>
            <img src="../hangman.png" />
            <p>
              Command-line version of game with a random API-generated word.
            </p>
            <p>
              <a className="btn">View Code</a>
            </p>
            <p className={styles.tools}>Javascript | Node | Chalk</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return <Seo title="Projects" />;
}
