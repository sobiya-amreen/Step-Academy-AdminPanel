import React from 'react'
import Footer from '../DashBoard/Footer/Footer'
import Milestone from '../DashBoard/Milestone/Milestone'
import ResponsiveMenu from '../DashBoard/ResponsiveMenu/ResponsiveMenu'
import Header from '../DashBoard/Header/Header'
import './OurResult.css'
import { motion } from 'framer-motion'

const OurResults = () => {
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
							<div className="home_title">Our Results</div>
							<div className="breadcrumbs">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li>Our Results</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
      </div>




{/* our platForm start */}
{/* <div className="about">
		<div className="container">
			<div className="row about_row row-lg-eq-height">
				<div className="col-lg-6">
					<div className="about_content">
						<div className="about_title">Our Platform's main goal</div>
						<div className="about_text">
							<p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique nibh, consequat ornare nibh. Quisque vitae odio ligula.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="about_image"><img src="images/about_1.jpg" alt="https://unsplash.com/@jtylernix"/></div>
				</div>
			</div>
			<div className="row about_row row-lg-eq-height">
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
			</div>
		</div>
	</div> */}
{/* our platform end */}


{/* <div className="container">
<div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="section_title text-center"><h2>Choose your course</h2></div>
                <div className="section_subtitle">Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus,
                 at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui,
                  ac tempor lorem convallis ut</div>
            </div>
            </div>
            </div>
             */}




            {/* paper start */}
            {/* <div className="elementor-element elementor-element-fb1ad23 elementor-widget elementor-widget-image-gallery animated fadeInUp" data-id="fb1ad23" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image-gallery.default">
				<div className="elementor-widget-container">
					<div className="elementor-image-gallery">
			<div id="gallery-1" className="gallery galleryid-2755 gallery-columns-3 gallery-size-full"><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 10-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2OSwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTAtbWluLmpwZWciLCJzbGlkZXNob3ciOiJmYjFhZDIzIn0%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min.jpeg"><img width="1145" height="1145" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min.jpeg 1145w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min-720x720.jpeg 720w" sizes="(max-width: 1145px) 100vw, 1145px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 8-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2NywidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktOC1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min.jpeg"><img width="1145" height="1145" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min.jpeg 1145w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min-720x720.jpeg 720w" sizes="(max-width: 1145px) 100vw, 1145px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 7-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2NiwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktNy1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min.jpeg"><img width="1145" height="1145" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min.jpeg 1145w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min-720x720.jpeg 720w" sizes="(max-width: 1145px) 100vw, 1145px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 6-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2NSwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktNi1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min.jpeg"><img width="1145" height="1145" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min.jpeg 1145w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min-720x720.jpeg 720w" sizes="(max-width: 1145px) 100vw, 1145px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 5-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2NCwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktNS1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min.jpeg"><img width="1145" height="1145" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min.jpeg 1145w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min-720x720.jpeg 720w" sizes="(max-width: 1145px) 100vw, 1145px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="Steps gallery 2-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2MSwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL1N0ZXBzLWdhbGxlcnktMi1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min.jpeg"><img width="1145" height="1145" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min.jpeg 1145w, https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min-720x720.jpeg 720w" sizes="(max-width: 1145px) 100vw, 1145px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon portrait">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 11-min-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3MCwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTEtbWluLW1pbi5qcGVnIiwic2xpZGVzaG93IjoiZmIxYWQyMyJ9" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min.jpeg"><img width="942" height="1280" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min.jpeg 942w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min-221x300.jpeg 221w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min-754x1024.jpeg 754w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min-768x1044.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min-720x978.jpeg 720w" sizes="(max-width: 942px) 100vw, 942px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon portrait">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 3-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2MiwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMy1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min.jpeg"><img width="942" height="1280" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min.jpeg 942w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min-221x300.jpeg 221w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min-754x1024.jpeg 754w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min-768x1044.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min-720x978.jpeg 720w" sizes="(max-width: 942px) 100vw, 942px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon portrait">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 4-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2MywidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktNC1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min.jpeg"><img width="942" height="1280" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min.jpeg 942w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min-221x300.jpeg 221w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min-754x1024.jpeg 754w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min-768x1044.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min-720x978.jpeg 720w" sizes="(max-width: 942px) 100vw, 942px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 16-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3NSwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTYtbWluLmpwZWciLCJzbGlkZXNob3ciOiJmYjFhZDIzIn0%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min.jpeg"><img width="1080" height="648" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min.jpeg 1080w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min-300x180.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min-1024x614.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min-768x461.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min-720x432.jpeg 720w" sizes="(max-width: 1080px) 100vw, 1080px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 14-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3MywidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTQtbWluLmpwZWciLCJzbGlkZXNob3ciOiJmYjFhZDIzIn0%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min.jpeg"><img width="1080" height="848" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min.jpeg 1080w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min-300x236.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min-1024x804.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min-768x603.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min-720x565.jpeg 720w" sizes="(max-width: 1080px) 100vw, 1080px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 1-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2MCwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMS1taW4uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min.jpeg"><img width="1280" height="853" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min.jpeg 1280w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min-300x200.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min-1024x682.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min-768x512.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min-720x480.jpeg 720w" sizes="(max-width: 1280px) 100vw, 1280px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon portrait">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 15-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3NCwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTUtbWluLmpwZWciLCJzbGlkZXNob3ciOiJmYjFhZDIzIn0%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-15-min.jpeg"><img width="678" height="960" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-15-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-15-min.jpeg 678w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-15-min-212x300.jpeg 212w" sizes="(max-width: 678px) 100vw, 678px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 12-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3MSwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTItbWluLmpwZWciLCJzbGlkZXNob3ciOiJmYjFhZDIzIn0%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min.jpeg"><img width="1007" height="1007" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min.jpeg 1007w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min-720x720.jpeg 720w" sizes="(max-width: 1007px) 100vw, 1007px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="steps gallery 17-min" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3NiwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMFwvMDhcL3N0ZXBzLWdhbGxlcnktMTctbWluLmpwZWciLCJzbGlkZXNob3ciOiJmYjFhZDIzIn0%3D" href="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min.jpeg"><img width="1050" height="1050" src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min.jpeg 1050w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min-300x300.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min-1024x1024.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min-150x150.jpeg 150w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min-768x768.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min-720x720.jpeg 720w" sizes="(max-width: 1050px) 100vw, 1050px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="WhatsApp Image 2022-05-19 at 12.05.55 PM" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzExNSwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMlwvMDVcL1doYXRzQXBwLUltYWdlLTIwMjItMDUtMTktYXQtMTIuMDUuNTUtUE0uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM.jpeg"><img width="1280" height="960" src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM.jpeg 1280w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM-300x225.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM-1024x768.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM-768x576.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM-720x540.jpeg 720w" sizes="(max-width: 1280px) 100vw, 1280px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="WhatsApp Image 2022-05-19 at 12.05.56 PM" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzExNiwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMlwvMDVcL1doYXRzQXBwLUltYWdlLTIwMjItMDUtMTktYXQtMTIuMDUuNTYtUE0uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM.jpeg"><img width="1280" height="576" src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM.jpeg 1280w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM-300x135.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM-1024x461.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM-768x346.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM-720x324.jpeg 720w" sizes="(max-width: 1280px) 100vw, 1280px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="WhatsApp Image 2022-05-19 at 12.05.57 PM" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzExNywidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMlwvMDVcL1doYXRzQXBwLUltYWdlLTIwMjItMDUtMTktYXQtMTIuMDUuNTctUE0uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM.jpeg"><img width="1280" height="577" src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM.jpeg 1280w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM-300x135.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM-1024x462.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM-768x346.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM-720x325.jpeg 720w" sizes="(max-width: 1280px) 100vw, 1280px"/></a>
			</div></figure><figure className="gallery-item">
			<div className="gallery-icon landscape">
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="fb1ad23" data-elementor-lightbox-title="WhatsApp Image 2022-05-19 at 12.05.58 PM" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzExOCwidXJsIjoiaHR0cHM6XC9cL3N0ZXBzYWNhZGVteS5jby5pblwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyMlwvMDVcL1doYXRzQXBwLUltYWdlLTIwMjItMDUtMTktYXQtMTIuMDUuNTgtUE0uanBlZyIsInNsaWRlc2hvdyI6ImZiMWFkMjMifQ%3D%3D" href="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM.jpeg"><img width="1280" height="577" src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM.jpeg" className="attachment-full size-full" alt="" loading="lazy" srcset="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM.jpeg 1280w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM-300x135.jpeg 300w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM-1024x462.jpeg 1024w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM-768x346.jpeg 768w, https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM-720x325.jpeg 720w" sizes="(max-width: 1280px) 100vw, 1280px"/></a>
			</div></figure>
		</div>
		</div>
				</div>
				</div> */}
            {/* paper end */}




{/* teacher cards start */}
<div className="teachers">
		<div className="container">
			<div className="row">
				<div className="col">
					<div>WELCOME TO OUR ACHIEVEMENTS</div>
					<div className="teachers_title text-center">Glorious Results</div>
				</div>
			</div>
			<div className="row teachers_row">
				
				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div 
						// style={{zIndex:"2000"}}
						 whileHover={{ scale: [null, 1.5, 1.5] }}
						 transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-10-min.jpeg" alt="https://unsplash.com/@nickkarvounis"/></motion.div>
						
					</div>
				</div>

				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div 
						// style={{zIndex:"2000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						// transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-8-min.jpeg" alt="https://unsplash.com/@rawpixel"/></motion.div>
						
					</div>
				</div>

				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div 
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-7-min.jpeg" alt="https://unsplash.com/@taylor_grote"/></motion.div>
						
					</div>
				</div>

				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-6-min.jpeg" alt="https://unsplash.com/@benjaminrobyn"/></motion.div>
						
					</div>
				</div>

				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div 
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-5-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/Steps-gallery-2-min.jpeg" alt="https://unsplash.com/@rawpixel"/></motion.div>
						
					</div>
				</div>

				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-11-min-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-3-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-4-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-16-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div 
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-14-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div 
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-1-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>



				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div   
						// style={{zIndex:"1000"}}
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-15-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-12-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2020/08/steps-gallery-17-min.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.55-PM.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>



				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.56-PM.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>


				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image  photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.57-PM.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>




				{/* <!-- Teacher --> */}
				<div className="col-lg-4 col-md-6">
					<div className="teacher">
						<motion.div
						whileHover={{ scale: [null, 1.5, 1.5] }}
						transition={{ duration: 0.3 }}
						className="teacher_image photoGalery"><img src="https://stepsacademy.co.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-19-at-12.05.58-PM.jpeg" alt="https://unsplash.com/@christinhumephoto"/></motion.div>
					
					</div>
				</div>

			</div>
			{/* <div className="row">
				<div className="col text-center">
					<div className="button teachers_button"><a href="#">see all teachers<div className="button_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div></a></div>
				</div>
			</div> */}
		</div>
	</div>
{/* teacher cards ends */}
     
<Milestone/>



    <Footer/>
   </div>
  )
}

export default OurResults
