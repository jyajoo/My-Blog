import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

function BlogPage() {

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);


  return (
    <Layout pageTitle="My Blog Posts">
      <p>My posts will go in here</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default BlogPage;