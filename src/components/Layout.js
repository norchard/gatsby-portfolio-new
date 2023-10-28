import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <div className="copyright">
            <p>© 2023 Nicole Orchard</p>
          </div>
          <div className="socials">
            <a className="btn pink" href="github.com">
              Resume
            </a>
            <a className="btn" href="github.com">
              Github
            </a>
            <a className="btn blue" href="github.com">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
