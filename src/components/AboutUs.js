import React from "react";
import Layout from "../components/Layout";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
    <div  style={{
        backgroundColor: theme.background,
        color: theme.text,
        padding: "2rem",
        textAlign: "center",
        height: "68vh"
      }}
      className="d-flex align-items-center justify-content-center "
     
    >
      <div className="text-center">
        <h1>Find Us on Instagram</h1>
        <h2>Use the hashtag</h2>
        <h2>#epibook</h2>
      </div>
    </div>
    </Layout>
  );
};

export default AboutUs;
