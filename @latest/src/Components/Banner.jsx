import React from "react";

const Banner = () => {
    return (
        <div className="container">
            <div className="py-4 mt-4">
                {/* Flexbox Section */}
                <div className="row mb-5">
                    {/* Eligibility */}
                    <div className="col-md-6 mb-4">
                        <div className="border p-3 h-100">
                            <h3 className="fw-bold">Eligibility</h3>
                            <p>Bachelor’s degree with a minimum of 50% aggregate marks.</p>
                            <p>
                                A relaxation of 5% marks or its equivalent grade may be allowed for
                                SC/ST candidates.
                            </p>
                            <p>
                                For MBA, Alliance School of Business accepts national-level management
                                aptitude tests or the Alliance Management Aptitude Test (AMAT).
                            </p>
                        </div>
                    </div>
                    {/* Specializations */}
                    <div className="col-md-6 mb-4">
                        <div className="border p-3 h-100">
                            <h3 className="fw-bold">Specializations</h3>
                            <ul className="list-unstyled">
                                <li>Strengthening the business network.</li>
                                <li>Benefits of collaboration and partnership.</li>
                                <li>Enhanced growth and opportunities.</li>
                                <li>Why Alliance is a beneficial choice.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
            </div>
        </div>
    );
};

export default Banner;
