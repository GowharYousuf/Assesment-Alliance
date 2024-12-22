import React from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
      }}
      className="custom-navbar bg-white shadow-sm mb-"
    >
      <Container className="d-flex align-items-center">
        {/* Logo Section */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/logo/logo-alliance-university.webp"
            alt="Logo"
            style={{ height: '50px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="mx-auto d-flex align-items-center custom-nav">
            <Nav.Link href="#course-program" className="custom-nav-link px-3">
              Why Alliance MBA
            </Nav.Link>
            <Nav.Link href="#about" className="custom-nav-link px-3">
              Curriculum
            </Nav.Link>
            <Nav.Link href="#faculty" className="custom-nav-link px-3">
              Faculty
            </Nav.Link>
            <Nav.Link href="#study-abroad" className="custom-nav-link px-3">
              Study Abroad
            </Nav.Link>
            <Nav.Link href="#recruiters" className="custom-nav-link px-3">
              Top Recruiters
            </Nav.Link>
            <Nav.Link href="#testimonials" className="custom-nav-link px-3">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#faqs" className="custom-nav-link px-3">
              FAQs
            </Nav.Link>
          </Nav>

          {/* Apply Now Button */}
          <Button
            style={{
              backgroundColor: 'darkred',
              border: 'none',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            className="custom-apply-btn text-white"
          >
            Apply Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

