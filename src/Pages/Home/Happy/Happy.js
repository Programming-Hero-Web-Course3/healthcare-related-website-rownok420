import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './Happy.css'

const Happy = () => {
    return (
        <div>
            <div className="container my-5 text-center">
                <Row xs={1} md={2} lg={4} className="g-0">
                    <Col>
                        <Card className="h-100 py-5 my-card">
                            <i className="fas fa-user fa-4x"></i>
                            <Card.Body>
                                <h1 className='my-4'>652</h1>
                                <h4>Happy Clients</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 py-5 my-card">
                            <i className="fas fa-heart fa-4x"></i>
                            <Card.Body>
                                <h1 className='my-4'>7652</h1>
                                <h4>Heart Transplant</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 py-5 my-card">
                            <i className="fas fa-thumbs-up fa-4x"></i>
                            <Card.Body>
                                <h1 className='my-4'>52</h1>
                                <h4>Years Of Experience</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 py-5 my-card">
                            <i className="far fa-smile fa-4x"></i>
                            <Card.Body>
                                <h1 className='my-4'>7652</h1>
                                <h4>Well Smiley Faces</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Happy;
