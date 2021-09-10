import React, { Component } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="success" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" class="font-italic">
            Watch Palace
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#home">Sign Up</Nav.Link>
            <Nav.Link>
              <Form.Select
                onChange={(e) => {
                  this.props.handle(e);
                }}
                size="lg"
              >
                <option value="0">Filter Watches By:</option>
                <option value="1"> Filter By Price (High to Low) </option>
                <option value="2"> Filter By Price (Low to High) </option>
                <option value="3"> Filter By Brand (High to Low) </option>
                <option value="4"> Filter By Brand (Low to High) </option>
              </Form.Select>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
