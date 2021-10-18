import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
    const [services] = useServices();
    return (
        <div className="my-5">
            <Container>
                <div className="text-center mb-5">
                    <h5>WE CARE ABOUT PATIENT</h5>
                    <h1 style={{ color: "#00a3c8" }}>
                        OUR OUTSTANDING SERVICES
                    </h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {services.map(service => (
                            <Service key={service.id} service={service} />
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;
