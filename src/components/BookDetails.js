import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Styles/bookDetails.css";
import Layout from "../components/Layout";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const BookDetails = () => {
  const { theme } = useContext(ThemeContext);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { asin } = useParams();
  const bookDetails = async () => {
    setLoading(true);
    try {
      const data = await fetch(`https://epibooks.onrender.com/${asin}`);
      const response = await data.json();
      setDetails(response);
      setLoading(false);
    } catch (error) {
      if (error) setError("si è verificato un errore");
    }
  };
  useEffect(() => {
    bookDetails();
  }, []);
  return (
    <Layout>
      
      {loading && <div>caricamento</div>}
      {!loading && error && <div>si è verificato un errore</div>}
      {!loading && !error && details && (
        <div style={{
          backgroundColor: theme.background,
          color: theme.text,
          padding: "2rem",
          textAlign: "center",
        }} >
        <Card 
        className="mt-5 mx-5" style={{ width: "18rem" }}>
          <Card.Img
            className="object-fit-cover w-100 book-card"
            variant="top"
            src={details[0].img}
          />
          <Card.Body>
            <Card.Title>{details[0].asin}</Card.Title>
            <Card.Title>{details[0].title}</Card.Title>
            <Card.Text>{details[0].category}</Card.Text>
            <Card.Text>{details[0].price}</Card.Text>
            <Link to="/">
              <Button variant="primary">Home</Button>
            </Link>
          </Card.Body>
        </Card>
        </div>
      )}
    </Layout>
  );
};

export default BookDetails;
