import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  // This function is called when a Nav.Link is clicked
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="py-3 navbar-with-logo"
      expanded={expanded} // Control the expanded state
      onToggle={() => setExpanded(!expanded)} // Handle the toggle button click
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavLinkClick}>
          <img
            src={logo}
            alt="V. Shyam & Associates Logo"
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-custom"
              onClick={handleNavLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="nav-link-custom"
              onClick={handleNavLinkClick}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="nav-link-custom"
              onClick={handleNavLinkClick}
            >
              Practice Areas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link-custom"
              onClick={handleNavLinkClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
