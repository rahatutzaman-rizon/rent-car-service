import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import carData from "../assets/data/driver.js";
import CarCard from "./CarCard";

const CarList = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Our Trusted Drivers</h1>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {carData.map((car) => (
          <Col key={car.id}>
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CarList;
