import React, { useState } from 'react'
// import { DropdownButton } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Select from "react-select"
import axios from "axios";
// import Header from '../../DashBoard/Header/Header';
// import ResponsiveMenu from '../../DashBoard/ResponsiveMenu/ResponsiveMenu';
// import Subject from './Subject';


const Form = () => {

    const [image, setImage] = useState("");

    const handleImage = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    };
    const handleImageApi = () => {
        const formData = new FormData();
        formData.append("image", image);
        axios
            .post(
                // "https://api.slingacademy.com/v1/sample-data/blog-posts/1"
                "",
                formData
            )
            .then((res) => {
                console.log(res);
                // JSON.stringify(res)
            });
    };
    const [value, setValue] = useState(null);
    const options = [
        { values: "Maths", label: "Maths" },
        { values: "Physics", label: "Physics" },
        { values: "Chemistory", label: "Chemistory" },
        { values: "Biology", label: "Biology" },
        { values: "English", label: "English" },
        { values: "Computer science", label: "Computer science" }
    ]


    const [values, setValues] = useState(null);
    const [data, setData] = useState(null);
    const [year, setYear] = useState(null);
    const [inter, setInter] = useState(null);






    const commerce = [
        { value: "11th commerce all subject", label: "11th commerce all subject" },
        { value: "12 th commerce all subjects", label: "12 th commerce all subjects" },
        { value: "11+12 th commerce all subject", label: "11+12 th commerce all subject" },
        { value: "11th +12th +CA/CS/CMA FOUNDATION", label: "11th +12th +CA/CS/CMA FOUNDATION" },

    ]

    const science = [
        { data: "11+12 TH SCIENCE ALL SUBJECTS", label: "11+12 TH SCIENCE ALL SUBJECTS" },
        { data: "11 TH +12TH SCIENCE ALL SUBJECTS + CET/JEE/NEET", label: "11 TH +12TH SCIENCE ALL SUBJECTS + CET/JEE/NEET" },
        { data: "NDA", label: "NDA" },
        { data: "BITSAT", label: "BITSAT" },

    ]

    const degree = [
        { year: "1ST YEAR B.COM", label: "1ST YEAR B.COM" },
        { year: "2ND YEAR B.COM", label: "2ND YEAR B.COM" },

        { year: "3RD YEAR B.COM", label: "3RD YEAR B.COM" },

        { year: "1ST YEAR BBA", label: "1ST YEAR BBA" },
        { year: "2ND YEAR BBA", label: "2ND YEAR BBA" },

        { year: "3RD YEAR BBA", label: "3RD YEAR BBA" },

    ]

    const intermediate = [
        { inter: "CA/CMA INTERMEDIATE", label: "CA/CMA INTERMEDIATE" },
        { inter: "CS EXECUTIVE", label: "CS EXECUTIVE" }

    ]
    return (
        <div className='borderform'>




            <form >

                <div>
                    <div className="row">
                        <h4>STEP ACADEMY</h4>
                        <div>ADMISSION FORM </div>

                    </div>
                </div>

                <div       >
                    <div>
                        <input
                            type="text"
                            className="formInputs size"
                            placeholder="Name"
                            required="required"

                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            className=" formInputs size"
                            placeholder="Contact Number"
                            required="required"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className=" formInputs size"
                            placeholder="email"
                            required="required"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className=" formInputs size"
                            placeholder="Class/Course"
                            required="required"
                        />

                    </div>



                    <h6 className="label head">Subject :</h6>

                    <div style={{
                        display: 'flex',
                        flexdirection: 'row',
                        // marginLeft: '160px',
                        position: 'relative',
                        bottom: '40px'

                    }}  >

                        <div  >

                            <div style={{ margin: 20, width: 180 }}>
                                <Select options={options} defaultValue={value} placeholder=" subject 1"
                                    onChange={setValue}
                                />
                            </div>

                            <div style={{ margin: 20, width: 180 }}>
                                <Select options={options} defaultValue={value} placeholder=" subject 3"
                                    onChange={setValue}
                                />
                            </div>

                            <div style={{ margin: 20, width: 180 }}>
                                <Select options={options} defaultValue={value} placeholder=" subject 5"
                                    onChange={setValue}
                                />
                            </div>

                        </div>

                        <div style={{}}         >
                            <div style={{ margin: 20, width: 180 }}>
                                <Select options={options} defaultValue={value} placeholder=" subject 2"
                                    onChange={setValue}
                                />
                            </div>


                            <div style={{ margin: 20, width: 180 }}>
                                <Select options={options} defaultValue={value} placeholder=" subject 4"
                                    onChange={setValue}
                                />
                            </div>
                            <div style={{ margin: 20, width: 180 }}>
                                <Select options={options} defaultValue={value} placeholder=" subject 6"
                                    onChange={setValue}

                                />
                            </div>



                        </div>


                        <div>


                        </div>


                    </div>
                    {/*  cources */}


                    <div>
                        <h6 className="label head">Cources :</h6>


                        <div style={{
                            display: 'flex', flexDirection: 'row',
                            // marginLeft: '34%',
                            position: 'relative',
                            bottom: '50px'
                        }}>
                            <div>

                                <div style={{ margin: 10, width: 180 }}>
                                    <Select options={commerce} defaultValue={values} placeholder=" COMMERCE"
                                        onChange={setValues}
                                    />

                                </div>
                                <div style={{ margin: 10, width: 180 }}>
                                    <Select options={science} defaultValue={data} placeholder=" SCIENCE"
                                        onChange={setData}
                                    />

                                </div>
                            </div>


                            <div             >
                                <div style={{ margin: 10, width: 180 }}>
                                    <Select options={degree} defaultValue={year} placeholder="DEGREE"
                                        onChange={setYear}
                                    />

                                </div>
                                <div style={{ margin: 10, width: 180 }}>
                                    <Select options={intermediate} defaultValue={inter} placeholder="INTERMEDIATE"
                                        onChange={setInter}
                                    />

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* cources end */}

                    {/* installment start */}

                   
                        <h6 className="label head">Installment :</h6>

                        {/* 
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            // left: '35%',
                            top: '30px'
                        }}  > */}
                        <div  style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'absolute',
                            
                            // left: '35%',
                            // top: '30px'
                        }}  >

                          
                                <input
                                    type="text"
                                    className=" installmentcss"
                                    placeholder="Installment 1"
                                />
                          

                           
                            <input
                                    type="text"
                                    className=" installmentcss"
                                    placeholder="Installment 2"
                                />
                            {/* <input type="date" className="course_input courseField  installmentcss" /> */}

                          

                        </div>



                        <div style={{
                            display: 'flex', flexDirection: 'column',
                           marginLeft:"200px"
                        }}>
                            <input type="date" className="  installmentcss" />

                 
                       
                            <input type="date" className=" installmentcss" />
                       
                        </div>
                        {/* </div> */}
                    


                    {/* installment start */}

                    {/* remaining inputs */}
                    <div>
                        <input
                            type="text"
                            className="last formInputs size"
                            placeholder="Address"
                            required="required"
                        />
                    </div>

                    <div>
                        <input
                            type="file"
                            onChange={handleImage}
                            className="imageUpload formInputs size"
                            required="required"
                        />
                    </div>

                    {/* <div><input type="text" className="contact_input formInputs" placeholder="Residential Address" required="required"/></div>
                <div><input type="text" className="contact_input formInputs" placeholder="Reference If Any" required="required"/></div> */}

                    {/* <div><textarea className="contact_input contact_textarea formInputs" placeholder="Message"></textarea></div> */}
                    <button onClick={handleImageApi} className="contact_button">
                        <span>SUbmit</span>
                        <span className="button_arrow">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                    </button>
                    {/* remaining inputs */}


                    <div />
                </div>

            </form >



        </div >
    )
}

export default Form