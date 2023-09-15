import React from "react";
import Footer from "../../DashBoard/Footer/Footer";
import Header from "../../DashBoard/Header/Header";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import { Link } from "react-router-dom";

const Costing_Taxes = () => {
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
              <div className="home_title">Costing & Taxes</div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Costing & Taxes</li>
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
                      <a href="#">Costing & Taxes</a>
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
                        Costing and taxes are critical components of any
                        organization’s financial management. At Steps Academy,
                        we understand the importance of accurate financial
                        reporting, tax compliance, and effective cost management
                        strategies. Our costing and taxes account is designed to
                        provide comprehensive solutions to these key areas,
                        ensuring that our institution operates efficiently and
                        sustainably. First and foremost, our costing and taxes
                        account is responsible for accurate financial reporting.
                        This involves the preparation and maintenance of
                        detailed financial records that reflect our
                        institution’s income, expenses, assets, and liabilities.
                        Our accountants meticulously record all transactions and
                        ensure that they are classified correctly in accordance
                        with accounting principles and regulations. The accuracy
                        of our financial reports is critical for several
                        reasons. Firstly, it ensures that we have a clear
                        understanding of our institution’s financial position,
                        which enables us to make informed decisions about our
                        operations and investments. Secondly, accurate financial
                        reporting is essential for complying with regulatory
                        requirements and meeting our obligations to
                        stakeholders, such as investors, lenders, and donors.
                        Finally, it provides transparency and accountability to
                        our stakeholders, enhancing their trust in our
                        institution. In addition to financial reporting, our
                        costing and taxes account is responsible for tax
                        compliance. This involves ensuring that we meet all our
                        tax obligations, including filing tax returns, paying
                        taxes, and adhering to tax regulations. Tax compliance
                        can be complex and time-consuming, particularly given
                        the ever-changing nature of tax laws and regulations. At
                        Steps Academy, we have a team of experienced tax
                        professionals who stay up-to-date with the latest
                        developments in tax legislation and ensure that our
                        institution remains compliant. Ensuring tax compliance
                        is not only a legal requirement but also critical for
                        maintaining our institution’s reputation and
                        credibility. Failure to comply with tax laws can result
                        in penalties, fines, and reputational damage, all of
                        which can have significant consequences for our
                        institution. Finally, our costing and taxes account is
                        responsible for developing and implementing effective
                        cost management strategies. This involves identifying
                        areas where we can reduce costs, optimizing our use of
                        resources, and ensuring that we operate efficiently.
                        Cost management is crucial for any organization, but
                        particularly for a non-profit institution like Steps
                        Academy, where resources are limited. Our cost
                        management strategies are designed to ensure that we use
                        our resources effectively and sustainably. This involves
                        monitoring our expenses, identifying areas where we can
                        reduce costs without compromising quality, and exploring
                        opportunities for cost savings and efficiencies. We also
                        prioritize investments in areas that have the greatest
                        impact on our students and stakeholders, such as
                        education programs and facilities. In conclusion, our
                        costing and taxes account plays a crucial role in
                        ensuring that Steps Academy operates efficiently and
                        sustainably. Through accurate financial reporting, tax
                        compliance, and effective cost management strategies, we
                        are able to maintain our institution’s financial health,
                        meet our obligations to stakeholders, and deliver
                        high-quality education programs to our students.
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

export default Costing_Taxes;
