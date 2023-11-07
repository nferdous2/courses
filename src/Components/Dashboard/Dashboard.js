import React from 'react';
// import MyOrder from '../../Pages/HomeAll/MyOrder/MyOrder';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import "../../Style/Style.css"
import CourseUpdate from './CourseUpdate';
const Dashboard = () => {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="studentprofile">
                <Row>
                    <Col sm={3}>
                        <Nav className="flex-column" style={{ backgroundColor: "#f0f1f284", height: "80vh", }}>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="studentprofile">Course Update</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="coursedone">Completed Courses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="myOrders">Manage Courses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="addReview">Add Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="dash-Items mb-3 fs-5" eventKey="payment">Bookmark</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                   
                        <Tab.Content>
                            <Tab.Pane eventKey="studentprofile">
<CourseUpdate/>                            </Tab.Pane>
                            <Tab.Pane eventKey="coursedone">
                                hi
                            </Tab.Pane>
                       


                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </>
    );
};

export default Dashboard;