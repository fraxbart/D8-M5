import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { colOne, colTwo, colThree } from "../data/footerLinks";
import "../Styles/footer.css";
import { useSelector } from "react-redux";
import { arrayOfComments } from "../states/commentsState";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const comments = useSelector(arrayOfComments);
  console.log("footer", comments);

  return (
    <footer className="footer">
      <Container
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Row>
          <Col>
            <ul>
              {colOne.map((item) => {
                return (
                  <li key={item.title}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <ul>
              {colTwo.map((item) => {
                return (
                  <li key={item.title}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <ul>
              {colThree.map((item) => {
                return <li key={item.title}>{item.title}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
