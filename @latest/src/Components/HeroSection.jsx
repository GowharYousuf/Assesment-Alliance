import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
    const [marginTop, setMarginTop] = useState("1rem");

    useEffect(() => {
        const updateMargin = () => {
            if (window.innerWidth >= 992) {
                setMarginTop("0"); // Large screens
            } else {
                setMarginTop("1rem"); // Small screens
            }
        };

        // Initial check
        updateMargin();

        // Add resize listener
        window.addEventListener("resize", updateMargin);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", updateMargin);
    }, []);

    return (
        <section className="py-3 py-lg-5 py-xl-8 mt-5">
            <Container className="overflow-hidden">
                <Row className="gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
                    {/* Left Section: Text and Buttons */}
                    <Col xs={12} lg={6} className="order-1 order-lg-0">
                        <h2 className="display-3 fw-bold mb-3 text-muted">
                            Master of Business Administration
                        </h2>
                        <p className="fs-4 mb-3 text-muted">
                            Empowering Careers, Transforming Lives
                        </p>
                        <p className="fs-6 mb-3 text-muted">
                            More than a degree, the top-ranked MBA program at Alliance is immersive and experiential in nature that equips students with most-in demand skills, connects them to a network of corporate professionals, entrepreneurs, and innovators.
                        </p>
                        <div className="d-grid d-sm-flex">
                            <Button
                                style={{
                                    backgroundColor: 'darkred',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    padding: '10px 20px',
                                }}
                                className="bsb-btn-2xl rounded-pill"
                            >
                                Enroll Now
                            </Button>
                        </div>
                    </Col>

                    {/* Right Section: Image and Circles */}
                    <Col xs={12} lg={5} className="text-center">
                        <div className="position-relative d-inline-block">
                            <img
                                className="img-fluid position-relative z-2 rounded-circle border border-3"
                                loading="lazy"
                                src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/infra/0.webp"
                                alt="A Digital Agency Specialized in AI and Web 3.0"
                                style={{
                                    width: "450px",
                                    height: "450px",
                                    objectFit: "cover",
                                    marginTop: marginTop,
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
