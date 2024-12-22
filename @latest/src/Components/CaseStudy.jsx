import React from 'react'

const CaseStudy = () => {
  return (
    <div className="container mt-4 ">
    <div className="row align-items-center justify-content-center">
      {/* Text List Section */}
      <div className="col-md-6">
        <div className="bg-light rounded shadow p-3">
<h1 class="mb-4 text-muted">LEARN BUSINESS BY DOING</h1>
<p className='text-muted'>Through our unique, problem-solving methodology, learners get the perfect blend of theory and real-world application, all designed to propel their career forward.</p>

<div class="row justify-content-center">
<div class="col-md-6">
<ul className='text-muted'>
<li>Interactive Lectures</li>
<li>Case Study Analysis</li>
<li>Classroom Projects</li>
<li>Simulations and Games</li>
<li>Group Presentations</li>
</ul>
</div>

<div class="col-md-6">
<ul className='text-muted'>
<li>Article Insights</li>
<li>Field Projects</li>
<li>Expert Lectures</li>
<li>Activity Labs</li>
</ul>
</div>



</div>
        </div>
      </div>
            {/* Image Section */}
            <div className="col-md-6 mb-3 mb-md-0 h-50 rounded-50">
        <img
          src="https://www.alliance.edu.in/postgraduate_programs/alliance-mba/assets/images/bg/learn.webp"
          alt="Why Alliance"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>
  )
}

export default CaseStudy
