import React from 'react'
import './Banner.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { bannerData } from '../../Data'



  

const Banner = () => {
    
  
  
  const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  <div>
    <Carousel 
responsive={responsive}
swipeable={true}
draggable={true}
infinite={true}
autoPlay={true}
autoPlaySpeed={9000}
keyBoardControl={true}
slidesToSlide={1}
 dotListclassName="custom-dot-list-style"
 itemclassName="carousel-item-padding-40-px"
 containerclassName='carousel-container'
 >
     {/* {
    
    bannerData.map(data=> (
        
      <img classNameName='bannersize' src={data.url} alt="banner" />   
      
    
      
    ))
    
  } */}
                         <div className='bannerImg1'>
                           <div className="row">
								<div className="col">
									<div className="home_content text-center">
										<div className="home_logo"><img className='logo' src="images/steplogo.png" alt=""/></div>
										<div className="home_text">
										<div className="home_subtitle">Skill Development In Student Fraternity</div>
											<div className="home_title">Enhancing Employability</div>
											<div className="home_subtitle">Ensuring Stability, consistency, & maintaining quality in teaching, in spite of changing times.</div>
										</div>
										<div className="home_buttons">
											{/* <div className="button home_button"><a href="#">learn more<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
											<div className="button home_button"><a href="#">see all courses<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div> */}
										</div>
									</div>
								</div>
							</div>
                        </div>




                        <div className='bannerImg1'>
                           <div className="row">
								<div className="col">
									<div className="home_content text-center">
										<div className="home_logo"><img className='logo' src="images/steplogo.png" alt=""/></div>
										<div className="home_text">
										<div className="home_subtitle">Churning Best Results Since 2012</div>
											<div className="home_title">DEDICATED SKILLED TEAM</div>
											<div className="home_subtitle">Providing personalised attention, we use student friendly teaching methods.</div>
										</div>
										<div className="home_buttons">
											{/* <div className="button home_button"><a href="#">learn more<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
											<div className="button home_button"><a href="#">see all courses<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div> */}
										</div>
									</div>
								</div>
							</div>
                        </div>




 
                        <div className='bannerImg1'>
                           <div className="row">
								<div className="col">
									<div className="home_content text-center">
										<div className="home_logo"><img className='logo' src="images/steplogo.png" alt=""/></div>
										<div className="home_text">
											<div className="home_title">Enhancing Employability</div>
											<div className="home_subtitle">Ensuring Stability, consistency, & maintaining quality in teaching, in spite of changing times.</div>
										</div>
										<div className="home_buttons">
											{/* <div className="button home_button"><a href="#">learn more<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
											<div className="button home_button"><a href="#">see all courses<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div> */}
										</div>
									</div>
								</div>
							</div>
                        </div>


</Carousel>

  </div>

  )
}

export default Banner
