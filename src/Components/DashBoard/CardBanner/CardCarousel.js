import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { brideData, profileData, responsive } from "./data";
import "./CardBanner.css";

import CardBanner from "./CardBanner";
import {
  TeacherprofileData,
  TeacherprofileDatatwo,
  responsive,
} from "./CardBannerData";
import { Link } from "react-router-dom";

const CardCarousel = () => {
  // const Profile = TeacherprofileData.map((item) => (
  //     <CardBanner
  //       url={item.imageURL}
  //       featured={item.Featured}
  //       price={item.Price}
  //       fees={item.Fees}
  //       online_literature_course={item.Online_Literature_Course}
  //       course_text={item.CourseText}
  //       discription={item.discription}
  //     />

  //   ));

  // const profileTwo = TeacherprofileDatatwo.map((item) => (
  //   <CardBanner
  //     url={item.imageURL}
  //     userId={item.userId}
  //     userData={item.userData}
  //     discription={item.discription}
  //   />
  // ));

  return (
    <div>
      <div className="profileCarousel">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          <Link to="/eleven_twelve_commerce">
          <CardBanner
            url={
              "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"11th 12th Commerce"}
            course_text={
              "11th and 12th grade program provides expert teaching and focused exam preparation."
            }
          />
          </Link>
          
          <Link to="/eleven_twelve_science">
          <CardBanner
            url={
              "https://images.pexels.com/photos/5427859/pexels-photo-5427859.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"11th 12th Science"}
            course_text={
              "Expert guidance, interactive learning, brighter futures. Join us in mastering the world of science."
            }
          />
          </Link>
         
         <Link to="/bcom_bba_bca">
          <CardBanner
            url={
              "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            featured={"Featured"}
            price={"Price "}
            fees={"$35"}
            online_literature_course="BCOM, BBA, BCA"
            course_text={
              "We provide conceptual and practical teaching approach helping them understand corporate world operates."
            }
          />
          </Link>
          
          <Link to="/mba_mcom">
          <CardBanner
            url={
              "https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_640.jpg"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"'MBA, MCOM"}
            course_text={
              "Shape your business acumen and Unlock new opportunities Your path to success starts here"
            }
          />
          </Link>
          
          <Link to="/ca_cma">
          <CardBanner
            url={
              "https://images.pexels.com/photos/8370970/pexels-photo-8370970.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"CA & CMA"}
            course_text={
              "Designed and delivered by subject matter experts covering all modules of foundation"
            }
          />
          </Link>
           
           <Link to="/dmit_career_counseling">
          <CardBanner
            url={
              "https://cdn.pixabay.com/photo/2016/03/10/08/49/hand-1248053_640.jpg"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"DMIT & career counseling"}
            course_text={
              "Discover your potential through DMIT expert career counseling."
            }
          />
          </Link>
          
          <Link to="/spoken_english">
          <CardBanner
            url={
              "https://cdn.pixabay.com/photo/2012/11/06/04/00/board-64269_640.jpg"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"Spoken English"}
            course_text={
              "Join us to improve fluency, enhance vocabulary, and boost your self-assurance"
            }
          />
          </Link>
          
          <Link to="/costing_taxes">
          <CardBanner
            url={
              "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            featured={"Featured"}
            price={"Price"}
            fees={"$35"}
            online_literature_course={"Costing and Taxes"}
            course_text={
              "Join our Spoken English classes to improve fluency, enhance vocabulary, and boost your self-assurance"
            }
          />
          </Link>

          {/* {Profile} */}
        </Carousel>

        {/* <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        swipeable={false}
        draggable={false}
        customTransition="transform 300ms ease-in-out"
      >
        <CardBanner />
        {profileTwo}
      </Carousel> */}
      </div>
    </div>
  );
};

export default CardCarousel;
