import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Appointment from "../../Appointment/Appointment";

const Details = () => {
    const { detailsId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/rownok420/health-care-data/main/services.json"
        )
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [detailsId]);

    const allDetails = details.filter((td) => td.id == detailsId);

    return (
        <div style={{ backgroundColor: "#f3f2f0" }}>
            <Row>
                <Container>
                    <Col>
                        <div className="container my-5">
                            <div className="card mb-3 w-100 h-100 card-style p-4">
                                <div className="row g-4">
                                    <div className="col-md-4">
                                        <div>
                                            <img
                                                src={allDetails[0]?.image}
                                                className="img-fluid rounded"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {allDetails[0]?.title}
                                            </h5>
                                            <p className="card-text">
                                                {allDetails[0]?.description}
                                            </p>
                                            <div className='mt-auto'>
                                                <Link to="/home">
                                                    <button className="home-button">
                                                        {" "}
                                                        Back home
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Container>
            </Row>
            <Appointment />
        </div>
    );
};

export default Details;
