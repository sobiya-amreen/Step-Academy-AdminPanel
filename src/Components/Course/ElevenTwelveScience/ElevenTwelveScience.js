import React from "react";
import Header from "../../DashBoard/Header/Header";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import Footer from "../../DashBoard/Footer/Footer";
import { Link } from "react-router-dom";

const ElevenTwelveScience = () => {
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
              <div className="home_title">Eleven Twelve Science</div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Eleven Twelve Science</li>
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
                  <div className="news_post_image">
                    <img src="images/news_6.jpg" alt="" />
                  </div>
                  <div className="news_post_body">
                    <div className="news_post_date">
                      <a href="#">April 02, 2018</a>
                    </div>
                    <div className="news_post_title">
                      <a href="#">Science</a>
                    </div>
                    <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                      <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div>
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
                        Science Is an Academic Branch That Focuses on
                        Discovering New Concepts and Technologies. After 12th
                        Students Opt for This Branch, Many Courses Are Available
                        in This Field. Those Interested in This Major Must
                        Devote Extra Hours to Understand the Base of the
                        Different Subjects. the Best Way to Learn Complex Topics
                        in Science Is to Enroll in Tutorials for Classes XI &
                        XII Science in Steps Academy Coaching Classes in Pimpri-
                        Chinchwad. We Ensure That Students Understand Difficult
                        Concepts and Prepare Them Well for the Board
                        Examination.
                      </p>
                      <p>
                        The Coaching Classes Fee Includes Study Material,
                        Including Practice Question Papers to Help Students
                        Prepare for Their Exams. In Addition, Science Coaching
                        Classes Have Different Teaching Styles and Offer Special
                        Coaching for Competitive Exams. We Also Provide Complete
                        Training to Students to Ace Their Examinations. The
                        Science Classes Offered by Us Will Help You to Prepare
                        for the Exam with Ease. The Tuitions Are a Perfect
                        Choice for All Those Who Want to Excel in Their
                        Competitive Examinations.
                      </p>
                    </div>
                    <div className="news_post_link">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Sidebar --> */}
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar_search"></div>

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

export default ElevenTwelveScience;
