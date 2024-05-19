import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import aboutImg from '../../assets/all-images/cars-img/offer-toyota.png';
import "../../styles/about.css";

const About2 = () => {
  return (
    <section className="about-page my-4">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <div className="about-img">
              <img src={aboutImg} alt="About" className="img-fluid rounded" />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <Card className="about-card text-light p-4 rounded" style={{ backgroundColor: 'rgba(18, 1, 130, 0.87)' }}>
              <Card.Body>
                <Card.Title as="h5" className="text-light mb-4 " style={{ fontWeight: 'bold' } }>
                  Advance Rent a Car Services, Dinajpur
                </Card.Title>
                <Card.Text className="mb-4" style={{ fontSize:14 } }>
                  We provide all types of AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental from Dinajpur to anywhere in Bangladesh.
                </Card.Text>
                <Card.Text className="mb-4" style={{ fontSize:14 } }>
                  <strong>Address:</strong> Suihari Micro Stand (Old Bus Stand), <br />Dinajpur-5200,   Bangladesh
                </Card.Text>
                <Card.Text className="mb-4" style={{ fontSize:14 } }>
                  <strong>Email:</strong> advancecarrent@gmail.com
                </Card.Text>
                <Card.Text className="mb-4" style={{ fontSize:14 } }>
                  <strong>Phone:</strong> +880 1841-649121
                </Card.Text>
                <Button variant="light" className="text-primary" size="sm">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About2;