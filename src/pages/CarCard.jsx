import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Card
      className="shadow-lg rounded-lg overflow-hidden"
      style={{ backgroundColor: "rgba(18, 1, 130, 0.87)", color: "#fff" }}
    >
      <Card.Img variant="top" src={car.imgUrl} className="rounded-top" />
      <Card.Body>
        <Card.Title className="text-light">
          {car.carName}
          <Badge bg="light" text="dark" className="ms-2">
            {car.type}
          </Badge>
        </Card.Title>
        <ul className="list-unstyled mt-3 mb-4" style={{ fontSize: "0.9rem" }}>
          {car.features.map((feature, index) => (
            <li key={index} className="text-light" style={{ fontSize: 14 }}>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/cars">
            <Button variant="light" className="text-primary" size="sm" >
              Book Now
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CarCard;