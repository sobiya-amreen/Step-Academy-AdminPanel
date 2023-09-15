import React from "react";
import Footer from "../../DashBoard/Footer/Footer";
import ResponsiveMenu from "../../DashBoard/ResponsiveMenu/ResponsiveMenu";
import Header from "../../DashBoard/Header/Header";
import "./AdmissionForm.css";
// import { useState } from "react";
// import axios from "axios";
// import Cources from "./Cources";
// import Subject from "./Subject";
// import Installment from "./Installment";
// import Dropdown from "./Dropdown";
// import { DropdownButton } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Form from "./Form";
const AdmissionForm = () => {


  return (
    <div>
      <Header />
      {/* <!-- Responsive Menu --> */}

      <ResponsiveMenu />
      {/* <!-- Responsive menu --> */}
      {/* form start */}
      <div className="contact_form_container formBox">
        <form action="#" id="contact_form" className="contact_form ">
         

        <Form />

       </form>
      </div >

        {/* form end */ }



     < Footer />
    </div >
  );
};

export default AdmissionForm;
