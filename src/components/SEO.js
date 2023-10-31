import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Seo({ title, description, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title: siteTitle, description: siteDescription } =
    data.site.siteMetadata;

  return (
    <>
      <title>
        {title} | {siteTitle}
      </title>
      <meta name="description" content={description || siteDescription} />
      {children}
    </>
  );
}
