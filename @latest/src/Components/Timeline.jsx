import React from 'react'

const Timeline = () => {
    return (
        <div className='container mb-3'>
            <div className="text-center banner-row">
                <div className="row p-2 text-muted ">
                    <div className="col-xs-12 col-md-4 mb-4 mb-md-0 ">
                        <h6 className="fw-bold fs-5">Intake</h6>
                        <p className="mb-0">January | July 2025</p>
                    </div>
                    <div className="col-xs-12 col-md-4 mb-4 mb-md-0">
                        <h6 className="fw-bold fs-5">Deadlines</h6>
                        <p className="mb-0">January Batch: Dec 31, 2024</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h6 className="fw-bold fs-5">Duration</h6>
                        <p className="mb-0">Two-Year Full-Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
