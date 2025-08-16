import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const DisclaimerModal = () => {
  // Use state to control the visibility of the modal
  const [show, setShow] = useState(false);

  // useEffect runs when the component mounts
  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    if (!hasAccepted) {
      setShow(true); // Show the modal if they haven't accepted
    }
  }, []); // The empty array ensures this effect runs only once

  const handleClose = () => {
    // Set a flag in local storage so the modal doesn't reappear
    localStorage.setItem("disclaimerAccepted", "true");
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The Bar Council of India does not permit solicitation of work and
          advertising by legal practitioners and advocates. By accessing this
          website, the user acknowledges that:
        </p>
        <hr />
        <ul>
          <li>
            The user wishes to gain more information about us for his/her
            information and use.
          </li>
          <li>
            He/She also acknowledges that there has been no attempt by us to
            advertise or solicit work.
          </li>
          <li>
            Any information obtained or downloaded by the user from our website
            does not lead to the creation of the client–attorney relationship
            between the Firm and the user.
          </li>
          <li>
            None of the information contained in our website amounts to any form
            of legal opinion or legal advice.
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          I Acknowledge
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DisclaimerModal;
