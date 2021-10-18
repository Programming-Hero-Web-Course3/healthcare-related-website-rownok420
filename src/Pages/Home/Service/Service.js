import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
    console.log(service);
    const { title, image, description } = service;
    return (
        <Col>
            <Card className="h-100 card-style">
                <div className='img-container'>
                    <Card.Img className='p-3 card-img' variant="top" src={image} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center mb-2'>
                    <Link to='/about'>
                        <button className="home-button"> See Details</button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
