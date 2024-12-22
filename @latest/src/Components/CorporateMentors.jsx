import React from "react";

const mentorsData = [
  { id: 1, imgSrc: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/corporate-mentorship/02.webp" },
  { id: 2, imgSrc: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/corporate-mentorship/03.webp" },
  { id: 3, imgSrc: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/corporate-mentorship/04.webp" },
  { id: 4, imgSrc: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/corporate-mentorship/05.webp" },
  { id: 5, imgSrc: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/corporate-mentorship/13.webp" },
  { id: 6, imgSrc: "https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/corporate-mentorship/01.webp" },
];

const CorporateMentors = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left Section - Text */}
        <div className="col-md-5 d-flex flex-column justify-content-center">
          <h2 className="display-4 fw-bold text-muted">Meet your Carporate Mentors</h2>
          <p className="text-muted mt-3" style={{ fontSize: "1.2rem" }}>
            Our teachers are well-known experts from international companies, and their lessons bridge valuable insights and real-life cases.
          </p>
          <h3 className="mt-5 fw-bold text-muted" style={{ fontSize: "1.8rem" }}>
            Learn from the World's best
          </h3>
        </div>

        {/* Right Section - Mentor Images */}
        <div className="col-md-7">
          <div className="row">
            {mentorsData.map((mentor) => (
              <div key={mentor.id} className="col-6 col-md-4 mb-4">
                <img
                  src={mentor.imgSrc}
                  alt="Mentor"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover", height: "400px", width: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateMentors;
