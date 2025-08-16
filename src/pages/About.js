import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import aboutImage from "../assets/about-us-hero.jpg";
import advocatePhotoPlaceholder from "../assets/advocate-photo-placeholder.png";
import teamData from "../data/teamData";

const About = () => {
  return (
    <>
      {/* Page Hero Banner */}
      <div
        className="hero-section"
        style={{ height: "50vh", backgroundImage: `url(${aboutImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About V. Shyam & Associates</h1>
        </div>
      </div>

      {/* Firm Story Section */}
      <Container className="my-5 py-5">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h2 className="mb-4">Our Commitment to You</h2>
            <p className="lead text-justify">
              Founded on the principles of integrity and client-first service,
              V. Shyam & Associates has been a cornerstone for legal support in
              the community for over a decade. We believe in providing
              personalized attention to every case, ensuring that our clients
              are not just heard, but also understood. Our mission is to
              demystify the legal process and empower you with the knowledge to
              make informed decisions.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Dynamic Team Profiles Section - Now highlighted with a shadow */}
      <div className="py-5 bg-light">
        <Container className="p-4 shadow-lg rounded">
          <h2 className="text-center mb-5">Meet Our Advocates</h2>
          <Row className="g-4 justify-content-center">
            {teamData.map((member) => (
              <Col md={6} lg={4} key={member.id}>
                <Card className="h-100 p-4 team-profile-card">
                  <div className="text-center">
                    <Image
                      src={advocatePhotoPlaceholder}
                      roundedCircle
                      className="mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <h3>{member.name}</h3>
                    <p className="text-muted">{member.title}</p>
                    <p className="text-justify">{member.bio}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
