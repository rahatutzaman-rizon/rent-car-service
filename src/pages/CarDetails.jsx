import React, { useEffect } from 'react';
import carData from "../assets/data/carData";
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/UI/BookingForm';

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find(item => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100 rounded" />
            </Col>
            <Col lg="6">
              <Card className="shadow-lg">
                <Card.Body>
                  <Card.Title as="h4" className="section__title">{singleCarItem.carName}</Card.Title>
                  <Card.Text className="section__description" style={{ fontSize: '14px' }}>
                    {singleCarItem.description}
                  </Card.Text>
                  <ListGroup variant="flush">
                    {singleCarItem.features.map((feature, index) => (
                      <ListGroup.Item key={index} className="d-flex align-items-center">
                        <i className="ri-checkbox-circle-line text-success me-2"></i>
                        <span style={{ fontSize: '14px' }}>{feature}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="7">
              <div className="booking-info">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
                <Button style={{ backgroundColor: '#120182' }} className="mt-4">
                  Book Now
                </Button>
              </div>
            </Col>
            <Col lg="5">
              <div className="payment__info">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <p className="section__description">
                  You can pay with your through Bkash/Nogod.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="mb-0">Bkash/Nogod:</p>
                    <h6 className="fw-bold">01841-649121</h6>
                  </div>
                  <div>
                    <img className="width-4" src="https://i.ibb.co/2ntPv85/bkash.png" alt="Payment Logo" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;