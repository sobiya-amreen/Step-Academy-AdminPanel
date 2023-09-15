import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* footer start */}
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* <!-- About --> */}
            <div className="col-lg-3 footer_col">
              <div className="footer_about">
                <div className="logo_container">
                  <a href="#">
                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                      <div className="logo_img FooterLogoSize">
                        <img
                          className="logoImage "
                          src="images/steplogo.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="footer_about_text text">
                  <p >
                    Expert tutors, personalized learning, and proven results.
                    Join us to excel in your studies and achieve your goals.
                  </p>
                </div>
                <div className="footer_social text">
                  <ul>
                    {/* <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="https://in.pinterest.com/asobiya9/" target="_blank">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.facebook.com/stepsacademypune?mibextid=b06tZ0" target="_blank" >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/918600118163" target="_blank">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtube.com/@stepsacademy610?si=AY9AKD6s-9gkMJJS" target="_blank">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_col text homeLinks">
              <div className="footer_links">
                <div className="footer_title">Quick menu</div>
                <ul className="footer_list ">
                  <li>
                  <li ><Link to="/">Home</Link></li>
                  </li>
                  <li>
                    <Link to="/about_us">About us</Link>
                  </li>
                  <li>
                  <li><Link to="/our_result">Our Result</Link></li>
                  </li>
                  <li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  </li>
                  <li>
                  <Link to="/admission_form">Admission</Link>
                  </li>
                  {/* <li>
                    <a href="#">Facts</a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer_col text">
              <div className="footer_links">
                <div className="footer_title">Courses</div>
                <ul className="footer_list">
                  <li>
                  <Link  to="/eleven_twelve_commerce">11th & 12th Commerce</Link>
                  </li>
                  <li>
                  <Link to="/eleven_twelve_science">11th & 12th Science CET, JEE</Link>
                  </li>
                  <li>
                  <Link  to="/bcom_bba_bca">BCOM, BBA, BCA</Link>
                  </li>
                  <li>
                  <Link  to="/mba_mcom">MBA, MCOM</Link>
                  </li>
                  <li>
                  <Link to='/ca_cma'>CA, CMA</Link>
                  </li>
                  <li>
                  <Link  to="/dmit_career_counseling">DMIT & Career Counseling</Link>
                  </li>
                  <li>
                  <Link  to="/spoken_english">Spoken English</Link>
                  </li>
                  <li>
                  <Link  to="/costing_taxes">Costing & Taxes</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer_col text">
              <div className="footer_contact">
                <div className="footer_title">Contact Us</div>
                <div className="footer_contact_info">
                  <div className="footer_contact_item">
                    <div className="footer_contact_title">Address:</div>
                    <div className="footer_contact_line">
                      RADHAKRISHNA, THERMAX CHOWK, Chinchwad East, Pune -
                      411019, Sambhaji Nagar
                    </div>
                  </div>
                  <div className="footer_contact_item">
                    <div className="footer_contact_title">Phone:</div>
                    <div className="footer_contact_line">+91-9850465656</div>
                    <div className="footer_contact_line">+91-8329387441</div>
                    <div className="footer_contact_line">+91-8446600051</div>
                  </div>
                  <div className="footer_contact_item">
                    <div className="footer_contact_title">Email:</div>
                    <div className="footer_contact_line">
                      stepsacademy2129@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
};

export default Footer;
