import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import CourseUpdate from './CourseUpdate';
import "../../Style/Style.css"
import sorry from "../../img/sad.png"
const Dashboard = () => {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="studentprofile">
            {/* dashbaord options  */}
                <Row>
                    <Col sm={3}>
                        <Nav className="flex-column" style={{ backgroundColor: "#f0f1f284", height: "80vh", }}>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="studentprofile">Enrolled Courses</Nav.Link>
                            </Nav.Item>
                         
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="profile">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="addReview"> Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="mark">Bookmark</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="payment">Payment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    {/* dashboard body  */}
                    <Col sm={9}>
                   
                        <Tab.Content>
                            <Tab.Pane eventKey="studentprofile">
                            <CourseUpdate/>                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile">
                            <h2 className='fs-3 text-center'>Sorry <img src={sorry} alt=""  style={{ width: "75px" }}/>Not available right now</h2>
                             </Tab.Pane>
                       
                             <Tab.Pane eventKey="addReview">
                             <h2 className='fs-3 text-center'>Sorry <img src={sorry} alt=""  style={{ width: "75px" }}/>Not available right now</h2>
                             </Tab.Pane>
                             <Tab.Pane eventKey="mark">
                             <h2 className='fs-3 text-center'>Sorry <img src={sorry} alt=""  style={{ width: "75px" }}/>Not available right now</h2>
                             </Tab.Pane>
                       
                             <Tab.Pane eventKey="payment">
                             <h2 className='fs-3 text-center'>Sorry <img src={sorry} alt=""  style={{ width: "75px" }}/>Not available right now</h2>
                             </Tab.Pane>
                       
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </>
    );
};

export default Dashboard;