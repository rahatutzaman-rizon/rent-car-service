import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import AboutSection from '../components/UI/AboutSection';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import driveImg from '../assets/all-images/drive.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12}>
              <img src={driveImg} alt="Drive" className="w-100 rounded-3 mb-4 mb-md-0" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card className="bg-secondary text-light p-4 rounded-3">
                <Card.Body>
                  <Card.Title as="h2" className="section__title mb-4">
                    We Are Committed to Provide Safe Ride Solutions
                  </Card.Title>
                  <Card.Text className="section__description mb-4">
                    Our Service is to provide everyone a safe ride to their destinations. All our Drivers are well skilled and professionals as well as our Car Conditions are also very Good. We want to provide the Best Car Rental Service in all over Bangladesh. Customers Satisfaction is our main Aim.
                  </Card.Text>
                  <Card.Text className="section__description mb-4">
                    This Is our Responsibility To Give You the Satisfaction of Riding with our Car. You may Book our Cars any time 24/7 to go anywhere in Bangladesh. we have many different cars and drivers ready to be in your service.
                  </Card.Text>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <span className="fs-4 text-primary">
                      <i className="ri-phone-line"></i>
                    </span>
                    <div>
                      <h6 className="section__subtitle text-light">Need Any Help?</h6>
                      <h4 className="text-light">+880 1841-649121</h4>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />
    </Helmet>
  );
};

export default About;