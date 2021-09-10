import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="success" variant="dark" fixed="bottom" margin="auto">
          <Navbar.Brand class="font-italic">
            Done by Abdallah Alabed
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
