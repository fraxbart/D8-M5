import React from "react";
import "../Styles/errorPage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.UregPabMQqVdz7Dju4DebAHaFj&pid=Api&P=0"
          style={{ marginLeft: "35%", marginTop: "7%" }}
        />
      </div>
      <Link to="/">
        <Button variant="primary">Go back to Home Page</Button>
      </Link>
    </>
  );
};

export default ErrorPage;
