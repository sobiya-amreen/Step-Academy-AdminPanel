import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Milestone from '../Milestone/Milestone'
import CardBanner from '../CardBanner/CardBanner'
import CardCarousel from '../CardBanner/CardCarousel'
import ChooseCourse from '../VhooseCourse/ChooseCourse'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <div className="super_container">

{/* <!-- Header --> */}

<Header/>
{/* <!-- Header end --> */}


{/* <!-- Responsive Menu --> */}

<ResponsiveMenu/>
{/* <!-- Responsive menu --> */}

{/* carousel start */}
<Banner/>
{/* carousel ends */}


{/*  */}

{/*  */}

{/* <!-- Courses --> */}

<ChooseCourse/>

{/* <!-- Milestones start --> */}

<Milestone/>
{/* Milestone ends */}
{/* <!-- Sections --> */}

<div className="grouped_sections">
    <div className="container">
        <div className="row">

            {/* <!-- Why Choose Us --> */}

            <div className="col-lg-4 grouped_col">
                <div className="grouped_title">Why Choose Us?</div>
                <div className="accordions">

                    <div className="accordion_container">
                        <div className="accordion d-flex flex-row align-items-center active"><div>Mauris vehicula nisi congue?</div></div>
                        <div className="accordion_panel">
                            <div>
                                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion_container">
                        <div className="accordion d-flex flex-row align-items-center"><div>Vehicula nisi congue, blandit?</div></div>
                        <div className="accordion_panel">
                            <div>
                                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion_container">
                        <div className="accordion d-flex flex-row align-items-center"><div>Mauris vehicula nisi congue?</div></div>
                        <div className="accordion_panel">
                            <div>
                                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion_container">
                        <div className="accordion d-flex flex-row align-items-center"><div>Nisi congue, blandit purus sed?</div></div>
                        <div className="accordion_panel">
                            <div>
                                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* <!-- Events --> */}

            <div className="col-lg-4 grouped_col">
                <div className="grouped_title">Upcoming Events</div>
                <div className="events">

                    {/* <!-- Event --> */}
                    <div className="event d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                <div className="event_day">20</div>
                                <div className="event_month">April</div>
                            </div>
                        </div>
                        <div className="event_body">
                            <div className="event_title"><a href="#">New Marketing Course Release</a></div>
                            <div className="event_subtitle">Location: Online Platform</div>
                        </div>
                    </div>

                    {/* <!-- Event --> */}
                    <div className="event d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                <div className="event_day">23</div>
                                <div className="event_month">April</div>
                            </div>
                        </div>
                        <div className="event_body">
                            <div className="event_title"><a href="#">Students Art Workshop</a></div>
                            <div className="event_subtitle">Location: Online Platform</div>
                        </div>
                    </div>

                    {/* <!-- Event --> */}
                    <div className="event d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                <div className="event_day">25</div>
                                <div className="event_month">April</div>
                            </div>
                        </div>
                        <div className="event_body">
                            <div className="event_title"><a href="#">Launch Party for a new Platform</a></div>
                            <div className="event_subtitle">Location: Online Platform</div>
                        </div>
                    </div>

                    {/* <!-- Event --> */}
                    <div className="event d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                <div className="event_day">27</div>
                                <div className="event_month">April</div>
                            </div>
                        </div>
                        <div className="event_body">
                            <div className="event_title"><a href="#">New Marketing Course</a></div>
                            <div className="event_subtitle">Location: Online Platform</div>
                        </div>
                    </div>

                    {/* <!-- Event --> */}
                    <div className="event d-flex flex-row align-items-start justify-content-start">
                        <div>
                            <div className="event_date d-flex flex-column align-items-center justify-content-center">
                                <div className="event_day">29</div>
                                <div className="event_month">April</div>
                            </div>
                        </div>
                        <div className="event_body">
                            <div className="event_title"><a href="#">New Marketing Course</a></div>
                            <div className="event_subtitle">Location: Online Platform</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- News --> */}

           {/*  */}
           <div className="col-lg-4">
                <div className="sidebar">
                    {/* <div className="sidebar_search">
                        <form action="#" id="sidebar_search_form" className="sidebar_search_form">
                            <input type="text" className="sidebar_search_input" placeholder="Search" required="required"/>
                            <button className="sidebar_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div> */}
                    {/* <div className="sidebar_categories">
                        <div className="sidebar_title">Categories</div>
                        <div className="sidebar_links">
                            <ul>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Social Media</a></li>
                                <li><a href="#">Lifestyle & Events</a></li>
                                <li><a href="#">Online Learning</a></li>
                                <li><a href="#">Uncategorized</a></li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="sidebar_latest_posts">
                        <div className="sidebar_title">Latest Posts</div>
                        <div className="latest_posts">
                    
                            
                            <div className="latest_post d-flex flex-row align-items-start justify-content-start">
                                <div><div className="latest_post_image"><img src="images/news_1.jpg" alt="https://unsplash.com/@beccatapert"/></div></div>
                                <div className="latest_post_body">
                                    <div className="latest_post_date">April 02, 2018</div>
                                    <div className="latest_post_title"><a href="news.html"></a></div>
                                    <div className="latest_post_author">By <a href="#">William Smith</a></div>
                                </div>
                            </div>

                    
                            <div className="latest_post d-flex flex-row align-items-start justify-content-start">
                                <div><div className="latest_post_image"><img src="images/news_2.jpg" alt="https://unsplash.com/@nbb_photos"/></div></div>
                                <div className="latest_post_body">
                                    <div className="latest_post_date">April 02, 2018</div>
                                    <div className="latest_post_title"><a href="news.html">Books, Kindle or tablet?</a></div>
                                    <div className="latest_post_author">By <a href="#">William Smith</a></div>
                                </div>
                            </div>

                            
                            <div className="latest_post d-flex flex-row align-items-start justify-content-start">
                                <div><div className="latest_post_image"><img src="images/news_3.jpg" alt="https://unsplash.com/@rawpixel"/></div></div>
                                <div className="latest_post_body">
                                    <div className="latest_post_date">April 02, 2018</div>
                                    <div className="latest_post_title"><a href="news.html">Why Choose online education?</a></div>
                                    <div className="latest_post_author">By <a href="#">William Smith</a></div>
                                </div>
                            </div>

                            
                            <div className="latest_post d-flex flex-row align-items-start justify-content-start">
                                <div><div className="latest_post_image"><img src="images/news_4.jpg" alt="https://unsplash.com/@jtylernix"/></div></div>
                                <div className="latest_post_body">
                                    <div className="latest_post_date">April 02, 2018</div>
                                    <div className="latest_post_title"><a href="news.html">Books, Kindle or tablet?</a></div>
                                    <div className="latest_post_author">By <a href="#">William Smith</a></div>
                                </div>
                            </div>

                        </div>
                    </div> */}
                    {/* <div className="sidebar_elearn">
                        <div className="elearn">
                            <div className="elearn_background" style="background-image:url(images/elearn.jpg)"></div>
                            <div className="elearn_content d-flex flex-column align-items-center justify-content-end">
                                <div className="elearn_line">Get a 20% Discount</div>
                                <div className="elearn_link"><a href="#">Register now</a></div>
                                <div className="dcount">
                                    <div className="dcount_content d-flex flex-column align-items-center justify-content-center">
                                        <div className="dcount_value">20%</div>
                                        <div className="dcount_text">off</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
      
           {/*  */}
        </div>
    </div>
</div>

{/* <!-- Video --> */}

<div className="video">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="video_container_outer">
                    <div className="video_container">
                        {/* <!-- Video poster image artist: https://unsplash.com/@annademy --> */}
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TcMFFvNVQ8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Join --> */}

<div className="join">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="section_title text-center"><h2>For Over 10 Years,
                                                          For so many students</h2></div>
                <div className="section_subtitle">Steps Academy is a leading coaching institution EXCLUSIVELY catering to the needs of COMMERCE and SCIENCE STUDENTS. It has churned out thousands of students who are today having successful careers. Our objective is not only to provide conceptual exam oriented coaching but also to develop skills among our student fraternity to enhance their employability/ entrepreneurial traits.</div>
            </div>
        </div>
    </div>
   <Link to="/admission_form"> <div className="button join_button"><a href="#">register now<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div></Link>
</div>

{/* <!-- Footer start --> */}

<Footer/>
{/* footer ends */}
</div>

    </div>
  )
}

export default Home
