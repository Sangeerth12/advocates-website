import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contactHero from "../assets/contact-hero.jpg";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkozgor");

  if (state.succeeded) {
    return (
      <>
        <div
          className="hero-section"
          style={{ height: "50vh", backgroundImage: `url(${contactHero})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="py-5 bg-light">
          <Container className="p-4 shadow-lg rounded text-center">
            <h2 className="mb-4">Message Sent Successfully!</h2>
            <p className="lead">
              Thank you for your message! We will get back to you shortly.
            </p>
            <Button href="/" className="btn-gold mt-3">
              Go to Home
            </Button>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="hero-section"
        style={{ height: "50vh", backgroundImage: `url(${contactHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="py-5 bg-light">
        <Container className="p-4 shadow-lg rounded">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <p className="text-center mb-5 lead">
            We are ready to listen. Fill out the form below or reach out to us
            directly.
          </p>
          <Row className="g-5 justify-content-center">
            <Col md={7}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    id="name"
                    name="name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="subject">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject of your inquiry"
                    id="subject"
                    name="subject"
                    required
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message"
                    id="message"
                    name="message"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                  <Button
                    type="submit"
                    className="btn-gold-lg"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </Form>
              {state.errors && state.errors.length > 0 && (
                <div className="alert alert-danger mt-3" role="alert">
                  Oops! There was an error submitting your form. Please check
                  your inputs.
                </div>
              )}
            </Col>

            <Col md={5} className="mt-5 mt-md-0">
              <br />
              <br />
              <h3 className="mb-4">Contact Information</h3>
              <div className="mb-4">
                <h5 className="text-muted">Address</h5>
                <p>Ann's Apartment</p>
                <p>Amulya St, Kacheripady, Ernakulam, Kerala 682018</p>
                <h5 className="text-muted mt-3">Phone</h5>
                <p>+91 90724 47174</p>
                <h5 className="text-muted mt-3">Email</h5>
                <p>vshyamandassociates@gmail.com</p>
              </div>
              <h5 className="text-muted mb-3">Our Location</h5>
              <div className="ratio ratio-4x3 rounded shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3590022007375!2d76.2807897!3d9.9871746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5b1c14ced5%3A0xdf3b30a337c1a8aa!2sAnn&#39;s%20Apartment%2C%20Amulya%20St%2C%20Kacheripady%2C%20Ernakulam%2C%20Kerala%20682018!5e0!3m2!1sen!2sin!4v1755326265739!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
