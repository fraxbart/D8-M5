import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/navigation.css";
import { ThemeContext } from "../components/ThemeContext";
import { lightTheme, darkTheme } from "../data/Theme";
import { useContext } from "react";


function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        padding: "1rem",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/AboutUs">About us</Nav.Link>

            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: theme.background,
              color: theme.text,
              padding: "0.5rem 1rem",
              border: `2px solid ${theme.text}`,
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            {theme === lightTheme
              ? "Switch to Dark Mode"
              : "Switch to Light Mode"}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
