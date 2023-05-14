import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import LatestRelease from "../components/LatestReleases";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../components/ThemeContext";

const Home = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <div style={{ background: theme.background, color: theme.text }}>
            <Navigation />
            <Welcome />
            <Hero />
            <LatestRelease />
            <Footer />
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Home
//D5 I parte
//import React from 'react';
//import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
//import LatestReleases from './LatestReleases';

//class App extends Component {
//state = {
// query: '',
// };

//handleQueryChange = (event) => {
// this.setState({ query: event.target.value });
//};

// render() {
// return (
//  <div>
//<Navigation query={this.state.query} onQueryChange={this.handleQueryChange} />
// <LatestReleases query={this.state.query} />
// </div>
// );
// }
//}

//const Navigation = (props) => {
//return (
// <Navbar bg="light" expand="lg">
// <Navbar.Brand href="#home">Book Search</Navbar.Brand>
// <Navbar.Toggle aria-controls="basic-navbar-nav" />
//<Navbar.Collapse id="basic-navbar-nav">
//  <Form inline>
//   <FormControl
// type="text"
//  placeholder="Search"
//  className="mr-sm-2"
//  value={props.query}
//  onChange={props.onQueryChange}
//  />
//  <Button variant="outline-success">Search</Button>
//</Form>
//</Navbar.Collapse>
//   </Navbar>
// );
//};

//export default App;
