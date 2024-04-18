// DriverCard.jsx

import { Card, Badge, Button } from "react-bootstrap";

const CarCard = ({ car }) => {
  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <Card.Img variant="top" src={car.imgUrl} alt={car.carName} />
      <Card.Body>
        <Card.Title className="text-primary">
          {car.driverInfo.name}
          <Badge bg="secondary" className="ms-2">
            {car.brand}
          </Badge>
        </Card.Title>
        <Card.Text>{car.carName}</Card.Text>
        <Card.Text>
          <strong>Contact:</strong> {car.driverInfo.contactNumber}
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> {car.driverInfo.address}
        </Card.Text>
        <ul className="list-unstyled">
          {car.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-muted">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;