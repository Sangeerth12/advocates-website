import React from "react";
import { Container, Button, Row, Col, Card, Carousel } from "react-bootstrap";
import heroImage from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Your Trusted Lawyers for Life's Challenges</h1>
          <p>
            Providing compassionate and effective legal solutions tailored to
            your unique needs.
          </p>
          <Button href="/contact" className="btn-gold mt-3 px-4 py-2">
            Schedule a Consultation
          </Button>
        </div>
      </div>

      {/* Introduction Section */}
      <Container className="my-5 py-5 text-center animate-on-scroll">
        <h2 className="mb-4">A Firm Built on Trust and Compassion</h2>
        <p className="lead px-lg-5 mx-lg-5">
          At V. Shyam & Associates, we understand that navigating the legal
          system can be a daunting experience. Our mission is to provide clear,
          honest, and effective legal counsel to individuals when they need it
          most. We are committed to upholding your rights with integrity and
          providing the personal attention you deserve.
        </p>
      </Container>

      {/* Practice Areas Section with Dark Background and 'View More' Button */}
      <div className="py-5 bg-custom-dark text-white">
        <Container>
          <h2 className="text-center mb-5">Our Key Practice Areas</h2>
          <Row className="g-4">
            {/* Card 1 */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Family Law</Card.Title>
                  <Card.Text>
                    Offering sensitive and professional guidance through complex
                    family matters, including divorce, child custody, and
                    support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Personal Injury</Card.Title>
                  <Card.Text>
                    Representing clients who have suffered injuries due to
                    negligence, fighting to secure the compensation you deserve.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Civil Disputes</Card.Title>
                  <Card.Text>
                    Providing expert litigation and dispute resolution for a
                    wide range of civil cases.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* View All Button */}
          <div className="text-center mt-5">
            <Button href="/services" className="btn-gold px-4 py-2">
              View All Practice Areas
            </Button>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Carousel indicators={false} controls={false}>
            <Carousel.Item interval={5000}>
              <div className="text-center p-5 bg-light rounded shadow-sm">
                <blockquote className="blockquote mb-0">
                  <p className="fs-4 fst-italic">
                    "The team at V. Shyam & Associates provided exceptional
                    support during a very difficult time. Their expertise and
                    empathy made all the difference."
                  </p>
                </blockquote>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="text-center p-5 bg-light rounded shadow-sm">
                <blockquote className="blockquote mb-0">
                  <p className="fs-4 fst-italic">
                    "Their legal advice was clear, strategic, and ultimately led
                    to a favorable outcome for my case. I couldn't have asked
                    for a better advocate."
                  </p>
                </blockquote>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="text-center p-5 bg-light rounded shadow-sm">
                <blockquote className="blockquote mb-0">
                  <p className="fs-4 fst-italic">
                    "From the initial consultation to the final resolution, the
                    guidance I received was professional and reassuring. I
                    highly recommend their services."
                  </p>
                </blockquote>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="text-center p-5 bg-light rounded shadow-sm">
                <blockquote className="blockquote mb-0">
                  <p className="fs-4 fst-italic">
                    "They handled my case with utmost confidentiality and care.
                    The outcome was beyond my expectations, thanks to their
                    dedicated approach."
                  </p>
                </blockquote>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default Home;
