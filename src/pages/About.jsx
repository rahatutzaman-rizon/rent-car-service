import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import AboutSection from '../components/UI/AboutSection';

import driveImg from '../assets/all-images/drive.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section mt-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={6} sm={12}>
              <img src={driveImg} alt="Drive" className="w-100 rounded-3 mb-4 mb-md-0" />
            </Col>
            <Col lg={7} md={6} sm={12}>
              <Card className="bg-white text-black p-4 rounded-3">
                <Card.Body>
                  <Card.Title as="h4" className="section__title mb-4">
                    We Are Committed to Provide Safe Ride Solutions
                  </Card.Title>
                  <Card.Text  className="section__description mb-4" style={{ fontSize:14}}>
                    Our Service is to provide everyone a safe ride to their destinations. All our Drivers are well skilled and professionals as well as our Car Conditions are also very Good. We want to provide the Best Car Rental Service in all over Bangladesh. Customers Satisfaction is our main Aim.
                    This Is our Responsibility To Give You the Satisfaction of Riding with our Car. You may Book our Cars any time 24/7 to go anywhere in Bangladesh. we have many different cars and drivers ready to be in your service.
                  </Card.Text>
                  <Card.Text className="section__description mb-4">
                   
                  </Card.Text>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <span className="fs-4 text-primary">
                      <i className="ri-phone-line"></i>
                    </span>
                    <div>
                      <h6 className="section__subtitle text-black">Need Any Help?</h6>
                      <h6 className="text-black">+880 1841-649121</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      
    </Helmet>
  );
};

export default About;