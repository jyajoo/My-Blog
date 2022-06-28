import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <main>
      <title>Home</title>
      <Layout pageTitle="Home Page">
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
          <p>Home page 내용</p>
      </Layout>
    </main>
  );
};

export default IndexPage;