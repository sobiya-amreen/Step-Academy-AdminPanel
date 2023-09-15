import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import DMIT_Career_Counseling from '../../Course/DMIT&Career_Counseling/DMIT_Career_Counseling'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navigation = () => {
  return (
    <div>
       {/* <!-- Header Content --> */}
       <div className="header_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            <div className="logo_container">
                                <a href="#">
                                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                                        <div className="logo_img"><img className='logoImage' src="images/steplogo.png" alt=""/></div>
                                        {/* <div className="logo_text">learn</div> */}
                                    </div>
                                </a>
                            </div>
                            <nav className="main_nav_contaner ml-auto">
                                <ul className="main_nav">
                                    <li ><Link to="/">Home</Link></li>

                                    <li className='drop'>
                            <DropdownButton id="dropdown-item-button" title=" ADMISSION">
                             <Link  to="/enquiry_form">ENQUIRY FORM</Link>
                             <Link to="/admission_form">ADMISSION FORM</Link>
                             </DropdownButton>
                            </li>




                            {/* <li>
                                    <div className="dropdown">
                                   <a className='dropdown-toggle' type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    About Us
                                   </a>
                                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                   <Link className="dropdown-item" to="/about_us">About Us</Link>
                                   <Link className="dropdown-item" to="/why_choose_us">Why Choose Us</Link>
                                  
                                   </div>
                                  </div>
                            </li> */}





                            <li className='drop'>
                            <DropdownButton id="dropdown-item-button" title=" ABOUT US">
                             <Link  to="/about_us">   About Us</Link>
                             <Link to="/why_choose_us">  Why Choose Us</Link>
                             </DropdownButton>
                            </li>


                                    
                             <li><Link to="/our_result">Our Result</Link></li>




                           <li className='drop'>
                            <DropdownButton id="dropdown-item-button" title="OUR COURSES ">
                            <Link  to="/eleven_twelve_commerce">11th & 12th Commerce</Link>
                                   <Link to="/eleven_twelve_science">11th & 12th Science CET, JEE</Link>
                                   <Link  to="/bcom_bba_bca">BCOM, BBA, BCA</Link>
                                   <Link  to="/mba_mcom">MBA, MCOM</Link>
                                   <Link to='/ca_cma'>CA, CMA</Link>
                                   <Link  to="/dmit_career_counseling">DMIT & Career Counseling</Link>
                                   <Link  to="/spoken_english">Spoken English</Link>
                                   <Link  to="/costing_taxes">Costing & Taxes</Link>
                                
                             </DropdownButton>
                            </li>





                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                                {/* <div className="search_button"><i className="fa fa-search" aria-hidden="true"></i></div> */}
    
                                {/* <!-- Hamburger --> */}
    
                                <div className="hamburger menu_mm">
                                    <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                                </div>
                            </nav>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Header Content end */}
        {/* <!-- Header Search Panel --> */}
        {/* <div className="header_search_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                            <form action="#" className="header_search_form">
                                <input type="search" className="search_input" placeholder="Search" required="required"/>
                                <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>			
        </div> */}
        {/* <!-- Header Search Panel end --> */}	
    </div>
  )
}

export default Navigation
