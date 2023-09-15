import React, { useState } from 'react'
import Footer from '../DashBoard/Footer/Footer'
import ResponsiveMenu from '../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../DashBoard/Header/Header'

import axios from 'axios'







const Contact = () => {


	const data = {name:"",  email:"", message:""}
	const [userData,setUserData]=useState(data)




	const handleData = (e)=>{
		setUserData({...userData,[e.target.name]:e.target.value})
	}
	const saveUserMessage=(e)=>{
		e.preventDefault()
		axios.post("",userData)
		.then((res)=>{
			console.log(res);
			// setUserData(" ");
		})
	}

  return (
    <div>
    <Header/>
 {/* <!-- Responsive Menu --> */}

<ResponsiveMenu/>
{/* <!-- Responsive menu --> */}
   <div className='carouselBox'>
     {/* <img classNameName='aboutCarouselImage' src='https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/> */}
     <div className="row">
                 <div className="col">
                     <div className="home_content text-center">
                         <div className="home_title">Contact Us</div>
                         <div className="breadcrumbs">
                             <ul>
                                 <li><a href="index.html">Home</a></li>
                                 <li>Contact Us</li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
   </div>

   {/* <!-- Contact start--> */}

	<div className="contact">
		<div className="container-fluid">
			<div className="row row-xl-eq-height">
				{/* <!-- Contact Content --> */}
				<div className="col-xl-6">
					<div className="contact_content">
						<div className="row">
							<div className="col-xl-6">
								<div className="contact_about">
									<div className="logo_container">
										<a href="#">
											<div className="logo_content d-flex flex-row align-items-end justify-content-start">
												<div className="logo_img"><img className='logoImage' src="images/steplogo.png" alt=""/></div>
												{/* <div className="logo_text">learn</div> */}
											</div>
										</a>
									</div>
									<div className="contact_about_text">
										<p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="contact_info_container">
									<div className="contact_info_main_title">Contact Us</div>
									<div className="contact_info">
										<div className="contact_info_item">
											<div className="contact_info_title">Address:</div>
											<div className="contact_info_line">RADHAKRISHNA, THERMAX CHOWK, Chinchwad East, Pune - 411019, Sambhaji Nagar</div>
										</div>
										<div className="contact_info_item">
											<div className="contact_info_title">Phone:</div>
											<div className="contact_info_line">+91-8446600051</div>
										</div>
										<div className="contact_info_item">
											<div className="contact_info_title">Email:</div>
											<div className="contact_info_line">stepsacademy2129@gmail.com</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* form start */}
						<div className="contact_form_container">
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
								
								<div><input type="text" value={userData.name} onChange={handleData} className="contact_input" placeholder="Name" name='name'/></div>
								
								<div><input type="email" value={userData.email} onChange={handleData} className="contact_input" placeholder="email"  name='email'/></div>
								
								<div><textarea type='text' value={userData.message} onChange={handleData} className="contact_input contact_textarea" placeholder="Message" name='message'></textarea></div>
								
								<button type='button' onClick={saveUserMessage} className="contact_button"><span>send message</span><span className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
							</form>
						</div>
					</div>
				</div>

				{/* <!-- Contact Map --> */}
				<div className="col-xl-6 map_col">
					<div className="contact_map">

						{/* <!-- Google Map --> */}
						<div id="google_map" className="google_map">
							<div className="map_container">
								<div id="map">
								<iframe className='gmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5783.802935478929!2d73.79076858027862!3d18.660990347307532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3df123c5753%3A0xd09203fac57bdf7!2sPokket%20Cafe%20Thermax%20Chowk%20%5BBiggest%20caf%C3%A9%20in%20PCMC%5D!5e0!3m2!1sen!2sin!4v1692691704855!5m2!1sen!2sin" width="800" height="900"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
				
		</div>
	</div>


    {/* <!-- contact end --> */}



   <Footer/>


 </div>
  )
}

export default Contact
