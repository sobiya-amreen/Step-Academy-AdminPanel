import React from 'react'
import Footer from '../../DashBoard/Footer/Footer'
import Header from '../../DashBoard/Header/Header'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'
import './EnquiryForm.css'

const EnquiryForm = () => {
  return (
    <div>
    <Header/>
 {/* <!-- Responsive Menu --> */}

<ResponsiveMenu/>
{/* <!-- Responsive menu --> */}
 {/* form start */}
 <div className="contact_form_container formBox">
							<form action="#" id="contact_form" className="contact_form">
								<div>
									<div className="row">
											<h4>Ready to Get Started?</h4>
											<div>Your email address will not be published. Required fields are marked</div>
										{/* <div className="col-lg-6 contact_name_col">
											<input type="text" className="contact_input" placeholder="Name" required="required"/>
										</div>
										<div className="col-lg-6">
											<input type="email" className="contact_input" placeholder="E-mail" required="required"/>
										</div> */}
									</div>
								</div>
								<div><input type="text" className="contact_input formInputs" placeholder="Name" required="required"/></div>
								<div><input type="number" className="contact_input formInputs" placeholder="Phone Number" required="required"/></div>
                                <div><input type="email" className="contact_input formInputs" placeholder="email" required="required"/></div>
								<div><input type="text" className="contact_input formInputs" placeholder="Enquiry For Class/Course" required="required"/></div>
                                <div><input type="text" className="contact_input formInputs" placeholder="Residential Address" required="required"/></div>
                                <div><input type="text" className="contact_input formInputs" placeholder="Reference If Any" required="required"/></div>
                                
                                <div><textarea className="contact_input contact_textarea formInputs" placeholder="Message"></textarea></div>
								<button className="contact_button"><span>send message</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
							</form>
						</div>
		
 {/* form end */}
  


   <Footer/>


 </div>
  )
}

export default EnquiryForm
