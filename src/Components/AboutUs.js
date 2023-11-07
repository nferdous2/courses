import React from 'react';
import img from "../img/aboutus.jpg";
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container">

            <div className="about-container mt-2 mb-5">
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
            {/* <Container>
                <h1 className="tags">Reviews</h1>
                <Row className="review-details m-5 mt-5 p-5">
                    <Col xs>We are really glad to have supports from exparts.It really help me to sort out my problems.</Col>
                    <Col xs={{ order: 12 }}>I was so amazed by thier behaviour.And I can enrich my knowledge by the help of the exparts and also here we can read other subjects</Col>
                    <Col xs={{ order: 1 }}>Its proven helpful for me.IT's like my private tutor.The Exparts make our laerning easer</Col>
                </Row>
            </Container> */}
        </div>
    );
};

export default About;
