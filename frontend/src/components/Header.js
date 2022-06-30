import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand> Tech Shop </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/Cart">
              <Nav.Link>
                <i class="fa-solid fa-cart-shopping"></i> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/logun">
              <Nav.Link>
                <i class="fa-solid fa-user"></i> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
