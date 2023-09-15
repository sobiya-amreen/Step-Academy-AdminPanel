import React from 'react'
import Footer from '../../DashBoard/Footer/Footer'
import Header from '../../DashBoard/Header/Header'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'
import { Link } from 'react-router-dom'

const MBA_MCOM = () => {
  return (
    <div>
    <Header/>
 {/* <!-- Responsive Menu --> */}

<ResponsiveMenu/>
{/* <!-- Responsive menu --> */}
   <div className='carouselBox'>
     {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
     <div className="row">
                 <div className="col">
                     <div className="home_content text-center">
                         <div className="home_title">MBA, MCOM</div>
                         <div className="breadcrumbs">
                             <ul>
                                 <li><a href="index.html">Home</a></li>
                                 <li>MBA, MCOM</li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
   </div>

  {/* course start */}
      {/* <!-- Courses --> */}

	  <div className="news">
    <div className="container">
        <div className="row">

            {/* <!-- News Posts --> */}
            <div className="col-lg-8">
                <div className="news_posts">
                    
                 

                    {/* <!-- News Post --> */}
                    <div className="news_post">
                        <div className="news_post_image"><img src="images/news_6.jpg" alt=""/></div>
                        <div className="news_post_body">
                            <div className="news_post_date"><a href="#">April 02, 2018</a></div>
                            <div className="news_post_title"><a href="#">MBA, MCOM</a></div>
                            <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                                <div className="news_post_author">By <a href="#">William Smith</a></div>
                                {/* <div className="news_post_comments"><a href="#">3 Comments</a></div> */}
                                <div className="news_post_tags">
                                    {/* <span>in </span> */}
                                    {/* <ul>
                                        <li><a href="#">Social Media</a></li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="news_post_text">
                                <p>The Master of Commerce (Mcom) by One of the Top Mcom Coaching Classes in Pimpri-Chinchwad. In Business Will Provide a Solid Foundation for Graduate Careers in the Challenging and Rewarding World of Business. To Hold a Quality Masters Degree Is a Distinct Advantage in the Business World Today. The Strength of Steps Academy Is Top Mcom Coaching Classes in  Pimpri-Chinchwad Lies in Its Excellent Faculty Who Are Drawn from the Academia and Industry. The M.com Program Also Has Subjects Like Organizational Behaviour, Human Resource Management, and Communication.</p>

								<p>As a result of Which, Coaching Classes Accepted and Agreed to the Introduction of MBA Classes with a Good Number of Specializations. It Was Opined That Those Coaching Classes Would Bridge the Gap Between the Industry and Academia. The Need Which Was Felt Resulted in the Introduction of Management Education in the Form of MBA Classes.</p>

                               
                            </div>
                            <div className="news_post_link"><a href="#">Read More</a></div>
                        </div>
                    </div>

                    {/* <!-- News Post --> */}
                  

                </div>
            </div>

            {/* <!-- Sidebar --> */}
            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="sidebar_search">
                        {/* <form action="#" id="sidebar_search_form" className="sidebar_search_form">
                            <input type="text" className="sidebar_search_input" placeholder="Search" required="required"/>
                            <button className="sidebar_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
                    </div>
                 
                    {/* blog start */}
                    <div className="sidebar_latest_posts courseDetail">
                        {/* <div className="sidebar_title">Latest Posts</div> */}
                        <div className="latest_posts">
                    
                           
                          



                       <h2 className="section-title-underline mb-5">
                            <span>Course Details</span>
                        </h2>
                        
                        <p><strong className="text-black d-block">Teacher:</strong>Sandesh Mukhedkar</p>
                        <p className="mb-5"><strong className="text-black d-block">Hours:</strong> 8:00 am — 9:30am</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?</p>
                        <p>Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere.</p>
    
                        <ul className="ul-check primary list-unstyled mb-5">
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i>  Lorem ipsum dolor sit amet consectetur</li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i>  consectetur adipisicing  </li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i> Sit dolor repellat esse</li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i> Necessitatibus</li>
                            <li> <i className="fa fa-angle-right Arrow" aria-hidden="true"></i> Sed necessitatibus itaque </li>
                        </ul>

                        <p>
                       <Link to="/admission_form"> <button className="contact_button"><span>Enroll</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button></Link>
                        </p>




                        </div>
                    </div>
                  
                </div>
            </div>
        </div>

        {/* <!-- Pagination --> */}
        <div className="row">
            <div className="col">
                <div className="news_pagination">
                    <ul>
                        <li><a href="#">01</a></li>
                        <li className="active"><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#">05</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>
      {/* Course Ends */}


   <Footer/>


 </div>
  )
}

export default MBA_MCOM
