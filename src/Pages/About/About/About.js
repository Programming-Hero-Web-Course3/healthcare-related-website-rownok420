import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                className="img-fluid mt-4 mb-4 rounded-3 shadow"
                                src={img}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="m-3">
                                <div>
                                    <h1
                                        style={{
                                            color: "#00a3c8",
                                            lineHeight: "1.3em",
                                        }}
                                    >
                                        We’re Certified & Expert Doctor for Servicing
                                        Human
                                    </h1>
                                    <p className="text-muted my-4">
                                        But I must explain to you how all this
                                        mistaken idea of denouncing pleasure and
                                        praising pain was born will give
                                    </p>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div className="d-flex justify-content-center align-items-center me-5">
                                            <h4
                                                style={{
                                                    backgroundColor: "#00a3c8",
                                                }}
                                                className="p-2 rounded-circle text-white"
                                            >
                                                01
                                            </h4>
                                        </div>
                                        <div>
                                            <h3>Professional & Expert Doctor</h3>
                                            <p>You’ll work with a care coordinator at your local office to set a care schedule.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex my-3">
                                        <div className="d-flex justify-content-center align-items-center me-5">
                                            <h4
                                                style={{
                                                    backgroundColor: "#00a3c8",
                                                }}
                                                className="p-2 rounded-circle text-white"
                                            >
                                                02
                                            </h4>
                                        </div>
                                        <div>
                                            <h3>Quality Servicing Agency</h3>
                                            <p>You’ll work with a care coordinator at your local office to set a care schedule.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex justify-content-center align-items-center me-5">
                                            <h4
                                                style={{
                                                    backgroundColor: "#00a3c8",
                                                }}
                                                className="p-2 rounded-circle text-white"
                                            >
                                                03
                                            </h4>
                                        </div>
                                        <div>
                                            <h3>Awards Winning Company</h3>
                                            <p>You’ll work with a care coordinator at your local office to set a care schedule.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link to="/home">
                                        <button className="home-button">
                                            Back to Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;