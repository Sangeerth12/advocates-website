import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-dark text-white py-5">
      <Container>
        <Row className="g-4 text-center text-md-start">
          <Col
            md={4}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <Link to="/">
              <img
                src={logo}
                alt="V. Shyam & Associates Logo"
                className="footer-logo mb-3"
              />
            </Link>
            <p className="mt-2 text-white">
              A Firm Built on Trust and Compassion.
            </p>
          </Col>

          <Col md={4}>
            <h5>Navigation</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-white">
                Practice Areas
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4}>
            <h5>Contact & Social</h5>
            <p className="text-white">Ann's Apartment,</p>
            <p className="text-white">
              Amulya St, Kacheripady, Ernakulam, Kerala 682018
            </p>
            <p className="text-white">+91 90724 47174</p>
            <p className="text-white">vshyamandassociates@gmail.com</p>
            <div className="social-icons mt-3">
              <a href="https://linkedin.com" className="me-3 text-white">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com" className="me-3 text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://facebook.com" className="me-3 text-white">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center text-white">
          <p className="mb-0">
            &copy; {currentYear} V. Shyam & Associates. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              to="/disclaimer"
              className="text-white text-decoration-none me-2"
            >
              Disclaimer
            </Link>
            <span className="text-white me-2">|</span>
            <Link to="/privacy" className="text-white text-decoration-none">
              Privacy Policy
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
