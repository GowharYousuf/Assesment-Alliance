import React, { useEffect, useState } from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';

const facultyData = [
    {
        name: 'Dr. Ray Titus',
        qualification: 'DBA in Management',
        institute: 'Swiss Management Centre, Switzerland',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-ray-titus.webp',
    },
    {
        name: 'Dr. Anupam Tyagi',
        qualification: 'Ph.D. in Economics',
        institute: 'University of Utah, USA',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-anupam-tyagi.webp',
    },
    {
        name: 'Dr. Pratima Verma',
        qualification: 'Post Doc in Business Ethics',
        institute: 'Stockholm University',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-pratima-verma.webp',
    },
    {
        name: 'Dr. George Easaw',
        qualification: 'Ph.D. in Management',
        institute: 'IIT, Bombay',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-george-easaw.webp',
    },
    {
        name: 'Dr. Shamim S. Mondal',
        qualification: 'Ph.D. in Macroeconomics and Labour Economics',
        institute: 'University of Rochester, USA',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-shamim-s-mondal.webp',
    },
    {
        name: 'Dr. Jaya Ganesan',
        qualification: 'Ph.D. in Management',
        institute: 'Multimedia University, Malaysia',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-jaya-ganesan.webp',
    },
    {
        name: 'Dr. Aparna Choudary',
        qualification: 'Ph.D. in Management',
        institute: 'Multimedia University, Malaysia',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-aparna-choudhary.webp',
    },
    {
        name: 'Dr. Sarit Maitra',
        qualification: 'Ph.D. in Information Technology',
        institute: 'Universiti Teknologi Petronas, Malaysia',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-sarit-maitra.webp',
    },
    {
        name: 'Dr. Saikiran N',
        qualification: 'Ph.D. in Marketing Analytics',
        institute: 'National Institute of Technology Tiruchirappalli',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-saikiran-niduthavolu.webp',
    },
    {
        name: 'Dr. Heena Bhardwaj',
        qualification: 'Ph.D. in Organisational Behaviour',
        institute: 'Delhi University',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-heena-bhardwaj.webp',
    },
    {
        name: 'Dr. Ray Titus',
        qualification: 'DBA in Management',
        institute: 'Swiss Management Centre, Switzerland',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-ray-titus.webp',
    },
    {
        name: 'Dr. Anupam Tyagi',
        qualification: 'Ph.D. in Economics',
        institute: 'University of Utah, USA',
        image: 'https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/faculty/dr-anupam-tyagi.webp',
    },
];

const Faculty = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(4);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const groupedFaculty = [];
    for (let i = 0; i < facultyData.length; i += slidesToShow) {
        groupedFaculty.push(facultyData.slice(i, i + slidesToShow));
    }

    return (
        <div className="text-white py-5">
            <Container className="faculty py-3 mb-2">
                <h2 className="text-center mb-4">World-Class Faculty</h2>
                <p className="text-center mb-4">
                    With rich industry experience and academic backgrounds par excellence, the faculty at Alliance is a unique ensemble of scholars and public intellectuals from India and abroad.
                </p>
                <Carousel interval={2000} pause={false} controls={false} indicators={false}>
                    {groupedFaculty.map((group, index) => (
                        <Carousel.Item key={index}>
                            <Row className="justify-content-center">
                                {group.map((faculty, idx) => (
                                    <Col key={idx} md={12 / slidesToShow} sm={6} className="mb-2">
                                        <Card className="shadow-sm h-100">
                                            <Card.Img variant="top" src={faculty.image} alt={faculty.name} />
                                            <Card.Body className="card-body-equal-height text-muted">
                                                <Card.Title className="text-center">{faculty.name}</Card.Title>
                                                <Card.Text className="text-center">
                                                    {faculty.qualification}
                                                    <br />
                                                    {faculty.institute}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    );
};

export default Faculty;
