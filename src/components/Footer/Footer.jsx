import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer py-2 mt-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-white mb-3">About Us</h5>
            <p className="text-light" style={{ fontSize: 14 }}>
              We are a leading car rental service provider in Dinajpur, Bangladesh. Our mission is to offer a seamless and convenient car rental experience to our valued customers.
            </p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0" style={{ fontSize: 14 }}>
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">Home</a>
              </li>
              <li>
                <a href="#" className="text-light">About</a>
              </li>
              <li>
                <a href="#" className="text-light">Services</a>
              </li>
              <li>
                <a href="#" className="text-light">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <h5 className="text-white mb-2 px-2">Advance Rent a Car Services, Dinajpur</h5>
           
            <p className="text-light mb-2 " style={{ fontSize: 14 }}>
              <i className="bi bi-geo-alt-fill me-2" ></i>
              Suihari Micro Stand , Dinajpur-5200, Bangladesh
            </p>
            <p className="text-light mb-2" style={{ fontSize: 14 }}>
              <i className="bi bi-envelope-fill me-2"></i>
              advancecarrent@gmail.com
            </p>
            <p className="text-light mb-0"style={{ fontSize: 14 }}>
              <i className="bi bi-telephone-fill me-2"></i>
              +880 1841-649121
            </p>
          </Col>
        </Row>
        <p className=" my-2" style={{ fontSize: 12 }}>
        <p className="text-center text-light mb-0" >
          &copy; {new Date().getFullYear()} Advance Rent a Car Service, Dinajpur. All rights reserved.
        </p>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;