import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* First Box - Logo and All Info */}
          <Col md={6} className="d-flex flex-column align-items-start mb-3">
            <div className="d-flex align-items-center mb-2">
              <img
                src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/logo/logo-alliance-university-w.webp"
                alt="Alliance University Logo"
                height="50"
                className="me-3"
              />
              <p className="mb-0">&copy; Alliance University 2025</p>
            </div>
            <p className="mb-0">
              Chandapura - Anekal Main Road, Bengaluru – 562 106, Karnataka, India.
            </p>
          </Col>

          {/* Second Box - Quick Links */}
          <Col md={2} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/about" className="text-light text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/admissions" className="text-light text-decoration-none">Admissions</a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </Col>

          {/* Third Box - Policies */}
          <Col md={2} className="mb-3">
            <h6>Policies</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a>
              </li>
            </ul>
          </Col>

          {/* Fourth Box - Social Media */}
          <Col md={2}>
            <h6>Follow Us</h6>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
