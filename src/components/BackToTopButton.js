import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="back-to-top">
      {isVisible && (
        <Button onClick={scrollToTop} className="rounded-circle btn-gold back-to-top-btn">
          <i className="bi bi-chevron-up"></i>
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;