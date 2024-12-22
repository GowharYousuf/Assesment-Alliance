import React from 'react';

const StudyAbroad = () => {
    return (
        <div className='container mt-3 mb-3 study-abroad'>
            <div className='py-3'>
                <h3 className='text-muted text-center'>Study Abroad</h3>
                <p className='text-muted text-center'>
                    With more than 80+ bilateral partnerships worldwide, Study Abroad programs are designed to build new skills, enhance knowledge, prepare global leaders for a better tomorrow, compete in the 21st century, and solve challenges faced by people on a global level.
                </p>
            </div>
            <div className="study-abroad-image-container">
                <img
                    src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/bg/study-abroad.webp"
                    alt="Study Abroad"
                    className="img-fluid rounded shadow"
                />
            </div>
        </div>
    );
};

export default StudyAbroad;
