import React from 'react';
const Curriculum = () => {
  return (
    <div className='container py-5'>
      <h2 className='text-center fw-bold mb-4 text-muted'>New-Age Curriculum</h2>
      <div className='row g-3 curriculum p-3'>
        {/* Vertical Disciplines */}
        <div className='col-md-6'>
          <div className='curriculum-box border p-4'>
            <h5 className='fw-bold'>Vertical Disciplines</h5>
            <ul>
              <li>Finance</li>
              <li>Operations Management</li>
              <li>Marketing</li>
              <li>Human Resource Management</li>
              <li>Business Analytics</li>
              <li>International Business</li>
            </ul>
          </div>
        </div>

        {/* Horizontal Disciplines */}
        <div className='col-md-6'>
          <div className='curriculum-box border p-4'>
            <h5 className='fw-bold'>Horizontal Disciplines</h5>
            <ul>
              <li>Decision Science</li>
              <li>Technology Management</li>
              <li>Business Eco System</li>
              <li>Leadership Acumen</li>
              <li>Vertical Readiness</li>
            </ul>
          </div>
        </div>

        {/* Choice-Based Electives */}
        <div className='col-md-6'>
          <div className='curriculum-box border p-4'>
            <h5 className='fw-bold'>Choice-Based Electives</h5>
            <ul>
              <li>Entrepreneurship</li>
              <li>Fintech</li>
              <li>Retail Management and E-Commerce</li>
              <li>Business Consulting</li>
              <li>Media and Communication</li>
              <li>Digital Business</li>
              <li>Workplace Gamification</li>
              <li>Digital Product Management</li>
              <li>Wealthtech</li>
            </ul>
            <p className='mt-3'><small>Three subjects will be offered under the chosen choice-based elective</small></p>
          </div>
        </div>

        {/* Open Electives */}
        <div className='col-md-6'>
          <div className='curriculum-box border p-4'>
            <h5 className='fw-bold'>Open Electives</h5>
            <ul>
              <li>Design Thinking: A Primer</li>
              <li>Demography: Theories and Trends</li>
              <li>Business Analytics & Text Mining Modeling Using Python</li>
              <li>Introduction to Human Factors and Ergonomics</li>
              <li>Design Technology and Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
