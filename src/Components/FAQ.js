import React from 'react';
import service from "../img/clock.png"
import help from "../img/teacher.png"
import course from "../img/online-education.png"
import access from "../img/perpetual-insurance.png"

const FAQ = () => {
    return (
        <div className="container mt-5">
            <p className='fw-bold fs-1 text-center mt-5 mb-5'>F <span style={{ color: "orange" }}>A</span> Q</p>
            <div className="mt-2 mb-5">
                <div className="row g-8">
                    <div className="col-md-7">

                        <div id="accordion" className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How can I enroll in a course?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        To enroll in a course, follow these steps:
                                        <ol>
                                            <li>Go to our website and browse the available courses.</li>
                                            <li>Select the course you're interested in.</li>
                                            <li>Click the "Enroll" button on the course details page.</li>
                                            <li>Follow the instructions for payment and registration.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I complete a course?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        To complete a course, follow these steps:
                                        <ol>
                                            <li>Access the course materials and lectures.</li>
                                            <li>Participate in quizzes, assignments, and projects.</li>
                                            <li>Submit your work as required by the course instructor.</li>
                                            <li>Pass the final assessment (if applicable).</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div>

                <p className='fw-bold fs-1 text-center mt-5 mb-3'>Why <span style={{ color: "orange" }}>Choose</span> US</p>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div>
                                <img src={course} style={{ width: "75px" }} alt="" />
                                <p className="fs-3">Updated Courses</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div>
                                <img src={help} style={{ width: "75px" }} alt="" />
                                <p className="fs-3">Help from experts</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div>
                                <img src={service} style={{ width: "75px" }} alt="" />
                                <p className="fs-3">24hr service</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div>
                                <img src={access} style={{ width: "75px" }} alt="" />
                                <p className="fs-3">Lifetime access</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    );
};

export default FAQ;