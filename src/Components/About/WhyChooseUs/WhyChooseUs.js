import React from 'react'
import Header from '../../DashBoard/Header/Header'
import Footer from '../../DashBoard/Footer/Footer'
import Milestone from '../../DashBoard/Milestone/Milestone'
import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu'

const WhyChooseUs = () => {
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
							<div className="home_title">Why Choose Us</div>
							<div className="breadcrumbs">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li>Why Choose us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
      </div>




{/* our platForm start */}
<div className="about">
		<div className="container">
			<div className="row about_row row-lg-eq-height">
				<div className="col-lg-6">
					<div className="about_content">
						<div className="about_title">Your Solution for a
                        Bright Future</div>
						<div className="about_text">
							<p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique nibh, consequat ornare nibh. Quisque vitae odio ligula.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="about_image"><img src="https://images.pexels.com/photos/5554250/pexels-photo-5554250.jpeg?auto=compress&cs=tinysrgb&w=600" alt="https://unsplash.com/@jtylernix"/></div>
				</div>
			</div>
			{/* <div className="row about_row row-lg-eq-height">
				<div className="col-lg-6 order-lg-1 order-2">
					<div className="about_image"><img src="images/about_1.jpg" alt=""/></div>
				</div>
				<div className="col-lg-6 order-lg-2 order-1">
					<div className="about_content">
						<div className="about_title">eLearn's Vision</div>
						<div className="about_text">
							<p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique nibh.</p>
						</div>
					</div>
				</div>
			</div> */}
			{/*  */}
			
			{/*  */}
		</div>
	</div>
{/* our platform end */}

<Milestone/>



{/* teacher cards start */}
{/* <div className="teachers">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="teachers_title text-center">Meet the Teachers</div>
				</div>
			</div>
			<div className="row teachers_row">
				
			
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<div className="teacher_image"><img src="images/teacher_1.jpg" alt="https://unsplash.com/@nickkarvounis"/></div>
						<div className="teacher_body text-center">
							<div className="teacher_title"><a href="#">Jonathan Smith</a></div>
							<div className="teacher_subtitle">Marketing</div>
							<div className="teacher_social">
								<ul>
									<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<div className="teacher_image"><img src="images/teacher_2.jpg" alt="https://unsplash.com/@rawpixel"/></div>
						<div className="teacher_body text-center">
							<div className="teacher_title"><a href="#">Michelle Williams</a></div>
							<div className="teacher_subtitle">Art & Design</div>
							<div className="teacher_social">
								<ul>
									<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<div className="teacher_image"><img src="images/teacher_3.jpg" alt="https://unsplash.com/@taylor_grote"/></div>
						<div className="teacher_body text-center">
							<div className="teacher_title"><a href="#">Jack Gallagan</a></div>
							<div className="teacher_subtitle">Marketing</div>
							<div className="teacher_social">
								<ul>
									<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<div className="teacher_image"><img src="images/teacher_4.jpg" alt="https://unsplash.com/@benjaminrobyn"/></div>
						<div className="teacher_body text-center">
							<div className="teacher_title"><a href="#">Christinne Smith</a></div>
							<div className="teacher_subtitle">Marketing</div>
							<div className="teacher_social">
								<ul>
									<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<div className="teacher_image"><img src="images/teacher_5.jpg" alt="https://unsplash.com/@christinhumephoto"/></div>
						<div className="teacher_body text-center">
							<div className="teacher_title"><a href="#">Michelle Williams</a></div>
							<div className="teacher_subtitle">Art & Design</div>
							<div className="teacher_social">
								<ul>
									<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<div className="teacher_image"><img src="images/teacher_6.jpg" alt="https://unsplash.com/@rawpixel"/></div>
						<div className="teacher_body text-center">
							<div className="teacher_title"><a href="#">Jack Gallagan</a></div>
							<div className="teacher_subtitle">Marketing</div>
							<div className="teacher_social">
								<ul>
									<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="row">
				<div className="col text-center">
					<div className="button teachers_button"><a href="#">see all teachers<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
				</div>
			</div>
		</div>
	</div> */}
{/* teacher cards ends */}
     



    <Footer/>
   </div>
  )
}

export default WhyChooseUs
