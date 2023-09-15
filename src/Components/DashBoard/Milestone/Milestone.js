import React from 'react'
import './Milestone.css'

const Milestone = () => {
  return (
    <div>
      {/* <!-- Milestones start --> */}

<div className="milestones">
    {/* <!-- Background image artis https://unsplash.com/@thepootphotographer --> */}
    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/milestones.jpg" data-speed="0.8"></div>
    <div className="container">
        <div className="row milestones_container">
                        
            {/* <!-- Milestone --> */}
            <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                    <div className="milestone_icon"><img src="images/milestone_1.svg" alt=""/></div>
                    <div className="milestone_counter" data-end-value="1548">0</div>
                    <div className="milestone_text">Online Courses</div>
                </div>
            </div>

            {/* <!-- Milestone --> */}
            <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                    <div className="milestone_icon"><img src="images/milestone_2.svg" alt=""/></div>
                    <div className="milestone_counter" data-end-value="7286">0</div>
                    <div className="milestone_text">Students</div>
                </div>
            </div>

            {/* <!-- Milestone --> */}
            <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                    <div className="milestone_icon"><img src="images/milestone_3.svg" alt=""/></div>
                    <div className="milestone_counter" data-end-value="257">0</div>
                    <div className="milestone_text">Teachers</div>
                </div>
            </div>

           
        </div>
    </div>
</div>
{/* Milestone ends */}
    </div>
  )
}

export default Milestone
