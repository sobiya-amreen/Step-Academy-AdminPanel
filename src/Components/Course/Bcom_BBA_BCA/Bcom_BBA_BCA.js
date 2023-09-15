import React from "react";
import Footer from "../../DashBoard/Footer/Footer";
import Header from "../../DashBoard/Header/Header";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import { Link } from "react-router-dom";

const Bcom_BBA_BCA = () => {
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
              <div className="home_title">BCOM, BBA, BCA</div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>BCOM, BBA, BCA</li>
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
                      <a href="#">BCOM, BBA, BCA</a>
                    </div>
                    <div className="news_post_meta d-flex flex-row align-items-start justify-content-start">
                      <div className="news_post_author">
                        By <a href="#">William Smith</a>
                      </div>
                      {/* <div className="news_post_comments"><a href="#">3 Comments</a></div> */}
                      <div className="news_post_tags"></div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        {" "}
                        Are You Looking for the Best Coaching Classes for Bba,
                        Bca & or Bcom in Pimpri-Chinchwad? If Yes, Then You Are
                        at the Right Place Steps Academy Is One of the Leading
                        Coaching Classes Providing for All Subjects in BBA, BCA&
                        Bcom.
                      </p>
                      <p>
                        Bachelor of Business Administration (BBA) Is One of the
                        Most Sought-After Courses Across the Globe. BBA Offers a
                        Practical and Comprehensive Understanding of the
                        Business Environment and Management Functions. It
                        Exposes Young Minds to Various Business Concepts and
                        Helps Them to Unearth Their Hidden Potentialities Like
                        Leadership Skills, Creativity, Lateral Thinking, and
                        Problem-Solving Skills, a Predominant Must in Today’s
                        Complex Environment. Steps Academy Coaching Classes of
                        Commerce, We Work Continuously to Impart Theoretical
                        Understanding, Orient the Students to Industry
                        Practices, Hone Their Personal Skills, and Help Them in
                        Evolving into True Business Leaders.
                      </p>
                      <p>
                        Accelerate Your Career Opportunities in Commerce with a
                        Bachelor of Commerce (B.com) Degree. the Undergraduate
                        Course Aims to Improve Students’ Capacity to Understand
                        and Study a Wide Range of Courses, Including Accounting,
                        Finance, Economics, Administration, and Business Law.
                        Steps Academy Coaching Classes Have Emerged as One of
                        the Best Degree Coaching Classes in Pimpri- Chinchwad.
                        If You Are Looking for a Top B.com Coaching Classes in
                        Pimpri- Chinchwad, Choose Steps Academy It Is Affiliated
                        with Pune University and Provides You the Best Commerce
                        Education.
                      </p>
                      <p>
                        BCA Stands for Bachelor of Computer Application and It
                        Is a 3-Year Under Graduating Professional Degree Course
                        in Computer Applications. BCA Course Is Considered as a
                        Course Equivalent to B.E. or B.tech. In Computer
                        Science. Today We See the Rapid Growth of the It
                        Industry Worldwide. This Rapid Growth Has Created a Lot
                        of Opportunities for Computer Graduates. This Course
                        Provides a Sound Academic Base to Students to Help Them
                        Pursue an Advanced Career in the Sector of Information
                        Technology.
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

export default Bcom_BBA_BCA;
