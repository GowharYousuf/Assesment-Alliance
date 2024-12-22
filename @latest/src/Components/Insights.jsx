import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Insights = () => {
    return (
        <div className="py-2 mb-3 container">
            <Container>
                <Row className="justify-content-center">
                    {/* Box 1 */}
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <div className="insight-box">
                            <img
                                src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/rankings/iacbe.webp"
                                alt="Insight 1"
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    {/* Box 2 */}
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <div className="insight-box">
                            <img
                                src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/rankings/aacsb.webp"
                                alt="Insight 2"
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    {/* Box 3 */}
                    <Col xs={12} md={3} className="d-flex justify-content-center">
                        <div className="insight-box">
                            <img
                                src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/rankings/qs.webp"
                                alt="Insight 3"
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    {/* Box 4 */}
                    <Col xs={12} md={3} className="d-flex justify-content-center box">
                        <div className="insight-box">
                            <img
                                src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/rankings/nirf.webp"
                                alt="Insight 4"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <p className="text-center mt-3 text-muted fs-5">More than a degree, the top-ranked MBA program at Alliance is immersive and experiential in nature that equips students with most-in demand skills, connects them to a network of corporate professionals, entrepreneurs, and innovators.</p>

        </div>
    );
};

export default Insights;
