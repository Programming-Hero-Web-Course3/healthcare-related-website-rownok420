import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
    console.log(allDetails);

    return (
        <Row>
            <Container>
                <Col sm={12} lg={4}><div></div></Col>
                <Col className='my-5 mx-auto' sm={12} lg={4}>
                    <Card className="h-100 card-style">
                        <div className="img-container">
                            <Card.Img
                                className="p-3 card-img"
                                variant="top"
                                src={allDetails[0]?.image}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>{allDetails[0]?.title}</Card.Title>
                            <Card.Text>{allDetails[0]?.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center mb-2">
                            <Link to="/home">
                                <button className="home-button">
                                    {" "}
                                    Back home
                                </button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col sm={12} lg={4}><div></div></Col>
            </Container>
        </Row>
    );
};

export default Details;
