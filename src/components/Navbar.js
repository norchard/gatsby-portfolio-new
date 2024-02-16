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
        <Link to="/about" activeStyle={{ color: "#e23e15" }}>
          <span>👩‍💻</span>About
        </Link>
        <Link
          to="/projects"
          activeStyle={{ color: "#e23e15" }}
          partiallyActive={true}
        >
          <span>🖼️</span>Projects
        </Link>
        <Link
          to="/blog"
          activeStyle={{ color: "#e23e15" }}
          partiallyActive={true}
        >
          <span>📓</span>Writing
        </Link>
        {/* <Link
          to="/ceramics"
          activeStyle={{ color: "#e23e15" }}
          partiallyActive={true}
        >
          <span>🏺</span>Ceramics
        </Link> */}
      </div>
    </div>
  );
}
