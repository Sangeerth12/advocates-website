import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import servicesHero from "../assets/services-hero.jpg";
import AnimatedCounter from "../components/AnimatedCounter";

const Services = () => {
  return (
    <>
      {/* Page Hero Banner */}
      <div
        className="hero-section"
        style={{ height: "50vh", backgroundImage: `url(${servicesHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Practice Areas</h1>
        </div>
      </div>

      {/* Stats Section with Dynamic Counters */}
      <div className="py-5 bg-custom-dark text-white text-center">
        <Container>
          <Row>
            <Col md={3} className="mb-4">
              <AnimatedCounter end={30} duration={2000} />
              <p className="lead">Our Team</p>
            </Col>
            <Col md={3} className="mb-4">
              <AnimatedCounter end={1500} duration={2000} />
              <p className="lead">Cases Completed</p>
            </Col>
            <Col md={3} className="mb-4">
              <AnimatedCounter end={2000} duration={2000} />
              <p className="lead">Satisfied Clients</p>
            </Col>
            <Col md={3} className="mb-4">
              <AnimatedCounter end={750} duration={2000} />
              <p className="lead">Cases Pending</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Accordion for Practice Areas */}
      <Container className="my-5 py-5 bg-light rounded shadow-sm">
        <h2 className="text-center mb-5">Areas of Expertise</h2>
        <p className="text-center mb-5 lead">
          At V. Shyam & Associates, we provide a wide range of legal services to
          meet the diverse needs of our individual clients. Our expertise is
          focused on providing clear, effective, and compassionate legal
          counsel.
        </p>

        <Accordion defaultActiveKey="0" className="bg-white">
          {/* Practice Area 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Family Law</Accordion.Header>
            <Accordion.Body className="p-4">
              <p>
                Navigating family disputes requires sensitivity and a deep
                understanding of the law. We provide compassionate and
                professional guidance for matters including:
              </p>
              <ul>
                <li>Divorce and separation proceedings</li>
                <li>Child custody and visitation rights</li>
                <li>Spousal and child support agreements</li>
                <li>Pre-nuptial and post-nuptial agreements</li>
                <li>Adoption proceedings</li>
              </ul>
              <p>
                Our goal is to help you achieve a fair and peaceful resolution
                while protecting your rights and the best interests of your
                family.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Practice Area 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Personal Injury</Accordion.Header>
            <Accordion.Body className="p-4">
              <p>
                If you have been injured due to the negligence of another, you
                may be entitled to compensation. We fight tirelessly to secure
                the justice and financial recovery you deserve. Our services
                include:
              </p>
              <ul>
                <li>Motor vehicle accidents</li>
                <li>Slip and fall incidents</li>
                <li>Medical malpractice claims</li>
                <li>Workplace injuries</li>
                <li>Wrongful death claims</li>
              </ul>
              <p>
                We handle all aspects of your case, from initial investigation
                to negotiation and trial, allowing you to focus on your
                recovery.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Practice Area 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Civil Disputes</Accordion.Header>
            <Accordion.Body className="p-4">
              <p>
                Civil disputes can be complex and time-consuming. Our firm
                offers skilled representation for a variety of civil matters,
                including:
              </p>
              <ul>
                <li>Contract disputes and breaches</li>
                <li>Property and real estate disputes</li>
                <li>Neighbor disputes</li>
                <li>Debt collection issues</li>
                <li>Small claims litigation</li>
              </ul>
              <p>
                We work to find a strategic and cost-effective resolution,
                whether through negotiation, mediation, or courtroom litigation.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* NEW Practice Area 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Criminal Defense</Accordion.Header>
            <Accordion.Body className="p-4">
              <p>
                Facing a criminal charge can be a life-altering experience. Our
                firm provides robust and strategic defense services for
                individuals accused of various crimes, including:
              </p>
              <ul>
                <li>DUI/DWI and traffic offenses</li>
                <li>Drug-related charges</li>
                <li>Assault and battery</li>
                <li>Theft and property crimes</li>
                <li>White-collar crimes</li>
              </ul>
              <p>
                We are committed to protecting your rights and ensuring you
                receive a fair trial.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* NEW Practice Area 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>Real Estate Law</Accordion.Header>
            <Accordion.Body className="p-4">
              <p>
                Whether you are buying, selling, or leasing property, having
                expert legal guidance is essential. Our services cover a wide
                range of real estate transactions and disputes, such as:
              </p>
              <ul>
                <li>Purchase and sale agreements</li>
                <li>Lease and rental agreements</li>
                <li>Property disputes and title issues</li>
                <li>Zoning and land use matters</li>
                <li>Foreclosure proceedings</li>
              </ul>
              <p>
                We help ensure your real estate transactions are handled
                smoothly and securely.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Services;
