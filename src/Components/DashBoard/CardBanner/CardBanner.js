import React from 'react'
import './CardBanner.css'

const CardBanner = (props) => {
  return (
    <div>
     
<div className='sliderCard'>

<div className="row ">
    <div className="col sliderCard">
        
        {/* <!-- Courses Slider --> */}
        <div className="courses_slider_container">
            <div className="owl-carousel owl-theme courses_slider">
                
                {/* <!-- Slider Item --> */}
                <div className="owl-item">
                    <div className="course">
                        <div className="course_image"><img src={props.url}/></div>
                        <div className="course_body">
                            <div className="course_header d-flex flex-row align-items-center justify-content-start">
                                <div className="course_tag"><a>{props.featured}</a></div>
                                <div className="course_price ml-auto">{props.price}: <span>{props.fees}</span></div>
                            </div>
                            <div className="course_title"><h3><a href="courses.html">{props.online_literature_course}</a></h3></div>
                            <div className="course_text">{props.course_text}</div>
                            {/* <div className="course_footer d-flex align-items-center justify-content-start">
                                <div className="course_author_image"><img src="images/featured_author.jpg" alt="https://unsplash.com/@anthonytran"/></div>
                                <div className="course_author_name">By <a href="#">James S. Morrison</a></div>
                                <div className="course_sales ml-auto"><span>352</span> Sales</div>
                            </div> */}
                        </div>
                    </div>
                </div>

              

            </div>
            
            {/* <!-- Courses Slider Nav --> */}
           
        </div>
    </div>
</div>
</div>
      
    </div>



  )
}

export default CardBanner






































































































