import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";

const HiringPartners = () => {
  const [opportunities, setOpportunities] = useState(0);
  const [recruiters, setRecruiters] = useState(0);
  const [newRecruiters, setNewRecruiters] = useState(0);
  const [highestPackage, setHighestPackage] = useState(0);

  const logos = [
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/aa.webp", alt: "Alliance" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/bosch.webp", alt: "Bosch" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/brillio.webp", alt: "Brillio" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/cafe-coffee-day.webp", alt: "Cafe Coffee Day" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/cbre.webp", alt: "CBRE" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/d.webp", alt: "Deloitte" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/hpe.webp", alt: "Hpe" },
    { src: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/recruiting/icici.webp", alt: "Hpe" },
  ];

  // Function to chunk the logos array into groups of 4
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const logoChunks = chunkArray(logos, 4);

  useEffect(() => {
    const animateNumbers = (setter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setter(Math.floor(start));
      }, 10);
    };

    animateNumbers(setOpportunities, 6000, 2000);
    animateNumbers(setRecruiters, 800, 2000);
    animateNumbers(setNewRecruiters, 52, 2000);
    animateNumbers(setHighestPackage, 38.05, 2000);
  }, []);

  return (
    <div style={{ padding: "40px 0" }}>
      <Container>
        <h2 className="text-center mb-4 text-muted">Top Recruiting Partners</h2>
        <Carousel interval={1000} indicators={false}>
          {logoChunks.map((chunk, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {chunk.map((item, index) => (
                  <Col key={index} md={2} sm={3} xs={4} className="mb-4">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="img-fluid rounded shadow"
                      style={{ backgroundColor: "#fff", padding: "10px" }}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <Row className="text-center mt-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="display-4 fw-bold">{opportunities.toLocaleString()}+</h3>
                <p className="text-muted">Opportunities Created</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="display-4 fw-bold">{recruiters.toLocaleString()}+</h3>
                <p className="text-muted">Recruiters</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="display-4 fw-bold">{newRecruiters}%</h3>
                <p className="text-muted">New Recruiters</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="display-4 fw-bold">₹ {highestPackage}</h3>
                <p className="text-muted">LPA Highest Placement Package</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HiringPartners;
