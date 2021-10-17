import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import sideImg from "../../../images/side-img3.jpg";
import "./Care.css";

const Care = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div>
                            <img className="img-fluid mt-4" src={sideImg} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="text-left">
                            <div className="my-4">
                                <h1 className="mb-3">
                                    Professional Care You Can Trust
                                </h1>
                                <h5 className="provide">We Provide Care</h5>
                            </div>
                            <div>
                                <p>
                                    We trace our success as a company to the
                                    simple and enduring philosophy that aging is
                                    a gift. The wealth of knowledge and
                                    experience that comes with age is a gift to
                                    the individual & the family.
                                </p>{" "}
                                <p>
                                    {" "}
                                    We work to provide an environment that
                                    supports the whole person—mind and heart, as
                                    well as body.
                                </p>
                                <p>
                                    We offer skilled nursing services at all of
                                    our locations with professionally trained
                                    nursing staff.
                                </p>
                            </div>
                            <div>
                                <Link to='/home'><button className='home-button'>Learn more</button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Care;
