
import React from 'react';
import {FaInstagram,FaYoutube,FaFacebook} from "react-icons/fa"
import "../Style/Style.css"
const Footer = () => {
    return (
        <div>
            <div className="footer mt-3">
                <div className="left-container">
                    <div className="row p-3">
                        <div className="col-md-4 ">
                            <h2 style={{color:"white"}}>KnowledgeNook</h2>
                          
                            <p className="mt-3">
                                <small> ©  All rights reserved.</small>
                            </p>
                        </div>
                        {/* menu */}
                        <div className="col-md-4">
                            <div className="footer-menu">
                                <ul>
                                    <li className="footer-list">Home</li>
                                    <li className="footer-list"> About us</li>
                                    <li className="footer-list">Services</li>
                                    <li className="footer-list">Contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/* left container */}
                            <div className="right-container">
                                <h3 style={{color:"white"}}>Contact with us</h3>
                                <div className="icons-container d-flex ">
                                <div className="icons">
                                    <FaInstagram/>
                                </div>
                                <div className="icons">
                                    <FaYoutube/>
                                </div>
                                <div className="icons">
                                    <FaFacebook/>
                                </div>
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
                <h4 style={{color: 'white',textAlign:"center"}}> &copy; Copyright reserved</h4>
            </div>
        </div>

    );
};

export default Footer;