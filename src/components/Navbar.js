import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <div className="nav">
      <div className="home">
        <Link to="/">{title}</Link>
      </div>
      <div className="links">
        <Link to="/about">
          <span>👩‍💻</span>About
        </Link>
        <Link to="/projects">
          <span>🖼️</span>Projects
        </Link>
        <Link to="/blog">
          <span>📓</span>Writing
        </Link>
      </div>
    </div>
  );
}
