import React from "react";
import Footer from "../../DashBoard/Footer/Footer";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import Header from "../../DashBoard/Header/Header";
import { Link } from "react-router-dom";

const CA_CMA = () => {
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
              <div className="home_title">CA, CMA</div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>CA, CMA</li>
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
                      <a href="#">CA, CMA</a>
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
                        While Choosing a Professional Path Is All About What
                        Your Interests Are and Where Your Aptitude Lies In,
                        However, Aligning Your Passion with Your Career Is a
                        Good Way to Go About It. So If Finance/accounting Is
                        Your Calling, Then Chartered Accountancy, or CA, as It
                        Is Popularly Known, Is a Much Sought-After Profession
                        and an Attractive Option to Consider.
                      </p>

                      <p>
                        Modern Times Have Transformed the Corporate World with
                        More and More Companies Taking the Public Issue Route to
                        Finance Their Project or Expansion Plans. in This
                        Context, the Prospect of CS Can Be Ascertained by the
                        Fact That All Companies Who Seek Listing on Stock
                        Exchange Are Mandated to Appoint a Whole-Time Company
                        Secretary. Not Stopping at That, as a Multidisciplinary
                        Professional, a CS Renders Services in Many More Areas
                        as Well.
                      </p>

                      <p>
                        Every Business Aims to Reach Specific Financial Goals It
                        Has Set for Itself. That’s Where Proper Budgeting Comes
                        into the Picture, Without Which Meeting Its Target Would
                        Be Inconceivable. Therefore, Every Entrepreneur Aims to
                        Increasing Return on Investment (Roi), So That The
                        Business Can Accomplish Its Target (Or Specific Goals)
                        While Expanding Its Reach. It’s Here That Cost
                        Accounting Can Contribute to the Better Management of a
                        Company’s Operations.
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

export default CA_CMA;
