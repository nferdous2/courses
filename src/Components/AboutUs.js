import React from 'react';
import img from "../img/aboutus.jpg";
const About = () => {
    return (
        <div className="container">

            <div className=" mt-2 mb-5">
                <div className="row g-8">
                    <div className="col-md-5">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <h3><span style={{ color: "orange" }}>W</span>ho <span style={{ color: "orange" }}>W</span>e <span style={{ color: "orange" }}>A</span>re</h3>
                        <p className='fs-4'>Get a glimpse of who we are today, and of the long, long way we've come together.</p>
                        <p className='fs-5'>We have about
                            <span style={{ color: "orange", fontWeight: "bold", fontSize: "24px", fontFamily: "cursive" }}>30+</span> experts,
                            <span style={{ color: "orange", fontWeight: "bold", fontSize: "24px", fontFamily: "cursive" }}>10+</span> support managers,
                            <span style={{ color: "orange", fontWeight: "bold", fontSize: "24px", fontFamily: "cursive" }}>50+</span> courses . </p>
                        <p className='fs-5'>With our online courses, students can access high-quality education from the comfort of their own homes, while our offline courses provide in-person learning experiences. Whether you need help with assignments, want to learn new subjects, or have questions, our experts are always there to support you on your educational journey.</p>

                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default About;
