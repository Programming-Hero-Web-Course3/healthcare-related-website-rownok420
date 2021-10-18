import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Experts.css";
import img1 from "../../../images/team/t1.jpg";
import img2 from "../../../images/team/t2.jpg";
import img3 from "../../../images/team/t3.jpg";
import img4 from "../../../images/team/t4.jpg";

const Experts = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h1 style={{color: '#00a3c8'}}>MEET OUR TEAM</h1>
                    <p className='mt-3 mb-5'>
                        Our commitment to you is to provide honest, friendly,
                        and on-time service. Visit a locally owned and operated
                        business that has been serving the community since 1992.
                    </p>
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
                                    <Card.Title>Sandra Bells</Card.Title>
                                    <Card.Text>Caregiver</Card.Text>
                                </Card.Body>
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
                                    <Card.Title>Rose Mason</Card.Title>
                                    <Card.Text>Physician</Card.Text>
                                </Card.Body>
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
                                    <Card.Title>Lilian Terry</Card.Title>
                                    <Card.Text>Manager</Card.Text>
                                </Card.Body>
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
                                    <Card.Title>Terry Walsh</Card.Title>
                                    <Card.Text>CEO</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Experts;
