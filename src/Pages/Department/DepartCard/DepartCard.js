import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./DepartCard.css";
import img1 from "../../../images/depart/d1.jpg";
import img2 from "../../../images/depart/d2.jpg";
import img3 from "../../../images/depart/d3.jpg";
import img4 from "../../../images/depart/d4.jpg";
import img5 from "../../../images/depart/d5.jpg";
import img6 from "../../../images/depart/d6.jpg";

const DepartCard = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h5>WE CARE OUR DEPARTMENT SUPPORT</h5>
                    <h1 className="mt-3 mb-5" style={{ color: "#00a3c8" }}>
                        OUR OUTSTANDING DEPARTMENT
                    </h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img1}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>
                                        Lab Test Department.
                                    </Card.Title>
                                    <Card.Text>
                                        PathWell Senior Care Center offers
                                        affordable in-home care services 24
                                        hours a day, 365 days a year for those
                                        who need it.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="mb-3 text-center">
                                    <button className="home-button">
                                        More info
                                    </button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img2}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>
                                        Cardiology Department.
                                    </Card.Title>
                                    <Card.Text>
                                        PathWell Senior Care Center offers
                                        affordable in-home care services 24
                                        hours a day, 365 days a year for those
                                        who need it.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="mb-3 text-center">
                                    <button className="home-button">
                                        More info
                                    </button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img3}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>
                                        Neurology Department.
                                    </Card.Title>
                                    <Card.Text>
                                        PathWell Senior Care Center offers
                                        affordable in-home care services 24
                                        hours a day, 365 days a year for those
                                        who need it.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="mb-3 text-center">
                                    <button className="home-button">
                                        More info
                                    </button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img4}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Dental Department.</Card.Title>
                                    <Card.Text>
                                        PathWell Senior Care Center offers
                                        affordable in-home care services 24
                                        hours a day, 365 days a year for those
                                        who need it.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="mb-3 text-center">
                                    <button className="home-button">
                                        More info
                                    </button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img5}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>
                                        Orthopedic Department.
                                    </Card.Title>
                                    <Card.Text>
                                        PathWell Senior Care Center offers
                                        affordable in-home care services 24
                                        hours a day, 365 days a year for those
                                        who need it.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="mb-3 text-center">
                                    <button className="home-button">
                                        More info
                                    </button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img6}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>
                                        Emergency Department.
                                    </Card.Title>
                                    <Card.Text>
                                        PathWell Senior Care Center offers
                                        affordable in-home care services 24
                                        hours a day, 365 days a year for those
                                        who need it.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="mb-3 text-center">
                                    <button className="home-button">
                                        More info
                                    </button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default DepartCard;
