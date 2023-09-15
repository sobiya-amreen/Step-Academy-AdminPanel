import React from 'react'
import CardBanner from '../CardBanner/CardBanner'
import CardCarousel from '../CardBanner/CardCarousel'

const ChooseCourse = () => {
  return (
    <div>
    {/* card banner start */}
    {/* <!-- Featured Course --> */}

    <div className="courses">
  <div className="container">
      <div className="row">
          <div className="col-lg-10 offset-lg-1">
              <div className="section_title text-center"><h2>Steps Towards Excellence</h2></div>
              <div className="section_subtitle">Being one of the oldest and best coaching institutes for Commerce and Science in pune, Our objective is to provide quality teaching to students to produce toppers and all India Rankers across various courses.</div>
              <h4>We strive to create an inspirational environment exceeding all expectations of parents and students.
</h4>
          </div>
      </div>
      {/* <div className="row">
          <div className="col">
              <div className="course_search">
                  <form action="#" className="course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between">
                      <div><input type="text" className="course_input" placeholder="Course" required="required"/></div>
                      <div><input type="text" className="course_input" placeholder="Level" required="required"/></div>
                      <button className="course_button"><span>search course</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
                  </form>
              </div>
          </div>
      </div> */}



<CardCarousel/>

      
    
  </div>
</div>


{/* <!-- Courses --> */}
{/* card banner end */}

  </div>
  )
}

export default ChooseCourse
