import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';

const FAQs = () => {
  const faqData = [
    {
      category: "General Information",
      questions: [
        {
          question: "What should I consider before doing an MBA?",
          answer:
            "You should consider your career goals and objectives, the area in which you want to specialize in, the location, and the return on investment."},
        {
          question: " What qualification is required to do an MBA?",
          answer:
            "The qualification requirement is a bachelor’s degree with a minimum of 50% marks (45% for SC/ST) in any discipline from a recognized institution. For MBA, Alliance School of Business will accept GMAT/CAT/NMAT/XAT/MAT/CMAT/KMAT/AMAT (Alliance Management Aptitude Test) scores of the current year. All applicants are required to take one of the entrance exams as part of the admissions process.",
        },
        {
          question: " Do I need to do a GMAT, CAT or NMAT?",
          answer: "For MBA, Alliance School of Business will accept GMAT/CAT/NMAT/XAT/MAT/CMAT/KMAT/AMAT (Alliance Management Aptitude Test) scores. All applicants are required to take one of the entrance exams as part of the admissions process..",
        },
        {
          question: " What does an Alliance MBA cohort look like?",
          answer:
            "Alliance University welcomes students from all educational backgrounds, work experiences, and regions across India and abroad. We promote a culture of inclusivity and diversity for an enriching experience for our students.",
        },
        {
          question: "What is the tuition fee?",
          answer:
            "The tuition fee is INR 15 lakhs including the processing fee, learner’s value proposition course fee (virtual), and all three installments.",
        },
        {
          question: "What will you learn in an MBA program?",
          answer:
            "You will be introduced to contemporary general management theories and practical applications. You will also be able to choose a specialization in Business Analytics, Marketing, Finance, Human Resource Management, Operations Management, or International Business. Along with this, you will get dedicated placement training, corporate mentorship, and internship opportunities.",
        },
        {
          question: " Do you offer MBA scholarships?",
          answer:
            "Completion of a summer internship is mandatory after the second semester of the MBA program. There is no requirement for completion of an internship before the MBA program, although the experience can add value to your candidature.",
        }
      ],
    },
  ];

  return (
    <div className="py-4">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-muted">Frequently Asked Questions</h2>
        {faqData.map((faqCategory, index) => (
          <Card key={index} className="mb-4 shadow-sm">
            <Card.Body>
              <Accordion className='text-muted'>
                {faqCategory.questions.map((faq, idx) => (
                  <Accordion.Item eventKey={idx.toString()} key={idx}>
                    <Accordion.Header  className='text-muted'>{faq.question}</Accordion.Header>
                    <Accordion.Body  className='text-muted'>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default FAQs;
