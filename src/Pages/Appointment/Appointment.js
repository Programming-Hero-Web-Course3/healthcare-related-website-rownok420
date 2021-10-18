import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Appointment.css";
import img from '../../images/appointment.png'

const Appointment = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <div>
                            <img className='w-100 mt-5' src={img} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="my-5">
                            <form className="w-75 m-auto form-style">
                                <div>
                                    <h3
                                        style={{ color: "#00a3c8" }}
                                        className="my-5 pt-5"
                                    >
                                        Fill Up Appointment Form.
                                    </h3>
                                </div>
                                <div className="mb-3  text-start">
                                    <label className="mb-2 fw-bold ms-2">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Write your name"
                                        required
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="mb-2 fw-bold ms-2">
                                        Email address:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput2"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div className="d-flex">
                                    <div className="mb-3 text-start">
                                        <label className="mb-2 fw-bold ms-2">
                                            Phone Number:
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput3"
                                            placeholder="write your phone number"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 text-start ms-auto">
                                        <label className="mb-2 fw-bold ms-2">
                                            Age:
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput4"
                                            placeholder="Age"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="mb-3 text-start">
                                        <label className="mb-2 fw-bold ms-2">
                                            Appointment Date:
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="exampleFormControlInput5"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 text-start ms-auto">
                                        <label className="mb-2 fw-bold ms-2">
                                            Time:
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="exampleFormControlInput6"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 text-start">
                                    <label className="mb-2 fw-bold ms-2">
                                        Address:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput6"
                                        placeholder="write your address"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pb-5">
                                    <button
                                        type="submit"
                                        onClick={(e) => e.preventDefault()}
                                        className="home-button m-2"
                                    >
                                        Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;
