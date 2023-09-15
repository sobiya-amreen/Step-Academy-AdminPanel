import React from "react";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import Header from "../../DashBoard/Header/Header";
import "./ElevenTwelveCommerce.css";
import Footer from "../../DashBoard/Footer/Footer";
import { Link } from "react-router-dom";

const ElevenTwelveCommerce = () => {
  return (
    <div>
      <Header />
      {/* <!-- Responsive Menu --> */}

      <ResponsiveMenu />
      {/* <!-- Responsive menu --> */}
      <div className="carouselBox">
        {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
        <div className="row">
          <div className="col">
            <div className="home_content text-center">
              <div className="home_title">Eleven Twelve Commerce</div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Eleven Twelve Commerce</li>
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
                {/* <div className="news_post">
                        <div className="news_post_image"><img src="images/news_5.jpg" alt=""/></div>
                        <div className="news_post_body">
                            <div className="news_post_date"><a href="#">April 02, 2018</a></div>
                            <div className="news_post_title"><a href="#">Books, Kindle or Tablet?</a></div>
                            <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                                <div className="news_post_author">By <a href="#">William Smith</a></div>
                                <div className="news_post_comments"><a href="#">3 Comments</a></div>
                                <div className="news_post_tags">
                                    <span>in </span>
                                    <ul>
                                        <li><a href="#">Social Media</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news_post_text">
                                <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue.</p>
                            </div>
                            <div className="news_post_link"><a href="#">Read More</a></div>
                        </div>
                    </div> */}

                {/* <!-- News Post --> */}
                <div className="news_post">
                  <div className="news_post_image">
                    <img src="images/news_6.jpg" alt="" />
                  </div>
                  <div className="news_post_body">
                    {/* <div className="news_post_date"><a href="#">April 02, 2018</a></div> */}
                    <div className="news_post_title">
                      <a href="#">Commerce</a>
                    </div>
                    <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                      {/* <div className="news_post_author">By <a href="#">William Smith</a></div> */}
                      {/* <div className="news_post_comments"><a href="#">3 Comments</a></div> */}
                      <div className="news_post_tags">
                        {/* <span>in </span> */}
                        {/* <ul>
                                        <li><a href="#">Social Media</a></li>
                                    </ul> */}
                      </div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        {" "}
                        Steps Academy Coaching Classes has Been the Best
                        Commerce Class in Pimpri- Chinchwad Over the Last 10
                        Years and Has Been Guiding and Nurturing Its Students in
                        Every Subject Which Pushes Them to Flourish in Their
                        Professional Careers. With Trained Teachers, Who Are
                        Highly Experienced and Competent in Their Respective
                        Subjects, We Make Sure Every Student Is Imparted with
                        Thorough and Quality Content to Thrive in Their
                        Respective Standards.
                      </p>
                      <p>
                        Steps Academy Is the Best Coaching Classes Center for
                        Mathematics, English, and Accounting: We Provide
                        Coaching Classes for 11th to 12th Class Commerce
                        Students in Maths, Economics, and Accounting. It Laid
                        the Foundation of Their Career, Which Must Be Strong. We
                        Train the Students and Guide Them to Choose Their
                        Careers in the Upcoming Years According to the Skills
                        They Are Good At.
                      </p>
                    </div>
                    <div className="news_post_link">
                      <a href="#">Read More</a>
                    </div>
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
                {/* blog start */}
                <div className="sidebar_latest_posts courseDetail">
                  {/* <div className="sidebar_title">Latest Posts</div> */}
                  <div className="latest_posts">
                    <h2 className="section-title-underline mb-5">
                      <span>Course Details</span>
                    </h2>

                    <p>
                      <strong className="text-black d-block">Teacher:</strong>
                      Sandesh Mukhedkar
                    </p>
                    <p className="mb-5">
                      <strong className="text-black d-block">Hours:</strong>{" "}
                      8:00 am — 9:30am
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      At itaque dolore libero corrupti! Itaque, delectus?
                    </p>
                    <p>
                      Modi sit dolor repellat esse! Sed necessitatibus itaque
                      libero odit placeat nesciunt, voluptatum totam facere.
                    </p>

                    <ul className="ul-check primary list-unstyled mb-5">
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Lorem ipsum dolor sit amet consectetur
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        consectetur adipisicing{" "}
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Sit dolor repellat esse
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Necessitatibus
                      </li>
                      <li>
                        {" "}
                        <i
                          className="fa fa-angle-right Arrow"
                          aria-hidden="true"
                        ></i>{" "}
                        Sed necessitatibus itaque{" "}
                      </li>
                    </ul>

                    <p>
                      <Link to="/admission_form">
                        {" "}
                        <button className="contact_button">
                          <span>Enroll</span>
                          <span className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pagination --> */}
        </div>
      </div>
      {/* Course Ends */}

      <Footer />
    </div>
  );
};

export default ElevenTwelveCommerce;
