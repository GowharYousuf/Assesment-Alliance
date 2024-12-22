import React from "react";

const WhyAlliance = () => {
  return (
    <div className="container mt-4 ">
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-md-6 mb-3 mb-md-0 h-50">
          <img
            src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/infra/5.webp"
            alt="Why Alliance"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text List Section */}
        <div className="col-md-6">
          <div className="bg-light rounded shadow p-3">
            <h2 className="text-muted">Why MBA at Alliance?</h2>
            <ul className="text-muted">
              <li className="mb-2">
                Merit-based Scholarships up to 50% on GMAT, CAT, NMAT and XAT scores.
              </li>
              <li className="mb-2">
                Horizontal and vertical disciplines to build extensive competence in chosen areas.
              </li>
              <li className="mb-2">
                Diverse group of highly accomplished faculty with global experiences.
              </li>
              <li className="mb-2">
               Intensive mentorship and training from seasoned corporate leaders.
              </li>
              <li className="mb-2">
                Mentorship program with 80+ corporate leaders from the industry.
              </li>
              <li className="mb-2">
                 80+ linkages with globally reputed institutions for international exchange programmes.
              </li>
              <li className="mb-2">
                 Career assistance with 800+ top organizations across industry verticals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAlliance;