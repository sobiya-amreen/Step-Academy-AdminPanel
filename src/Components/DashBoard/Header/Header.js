import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      {/* <!-- Header --> */}

<header className="header">
        
        {/* <!-- Top Bar --> */}
        <div className="top_bar">
            <div className="top_bar_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                <ul className="top_bar_contact_list">
                                  <Link to="/enquiry_form" style={{cursor:"pointer"}}>  <li><div className="question">Have any questions?</div></li></Link>
                                    <li>
                                        <div>+91 84466 00051</div><span> / </span>
                                        <div>+91 83293 87441</div>
                                        
                                    </li>
                                    <li>
                                        <div>stepsacademy2129@gmail.com</div>
                                    </li>
                                </ul>
                                <div className="top_bar_login ml-auto">
                                    <ul>
                                        <li><Link >Register</Link></li>
                                        <li><Link >Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>				
        </div>
    
       <Navigation/>		
    </header>
    
    {/* <!-- header end --> */}
    
    </div>
  )
}

export default Header
