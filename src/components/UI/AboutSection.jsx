
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from "../../assets/all-images/cars-img/35361491cb0130a149616971c8dc6561.png";
import { Link } from 'react-router-dom';

const AboutSection = ({ aboutClass }) => {
  return (
    <section className={`about__section ${aboutClass === 'aboutPage' ? 'mt-0' : 'mt-8'}`} style={{ backgroundColor: 'rgba(18, 1, 130, 0.87)' }}>
      <Container>
      <h3 className="text-light ">Experience the Comfort and reliability of <br />our microbus rental services in Dinajpur.</h3>
        <Row className="align-items-center">
      
          <Col lg={6} md={6}>

            <div className="about__section-content text-light mb-4 mt-4">

              <p className="section__description mb-4" style={{ fontSize:14}}>Whether you travel for business or pleasure, let us take care of your transportation needs while you sit back and relax. Contact us today to book your microbus and start a memorable journey with us.</p>
              <div className="about__section-item mb-4">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line text-light" style={{ fontWeight: "bold" }}></i> Modern and Comfortable Vehicles
                </p>
                <p className="section__description mb-4" style={{ fontSize:14}}>Our vehicles have comfortable seating, ample legroom, and air conditioning to ensure a pleasant and enjoyable journey for all passengers.</p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line text-light" style={{ fontWeight: "bold" }}></i> Flexible Rental Options
                </p>
                <p className="section__description mb-4"  style={{ fontSize:14}}>We believe in providing excellent value for money, we have you covered with our contractual, hourly, daily, weekly, and monthly rental options. Whether you need a car for a few hours or a full day or longer, we offer flexible rental options to fit your schedule and budget.</p>
              </div>
              <div className="about__section-item mb-4">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line text-light" style={{ fontWeight: "bold" }}></i> Experienced Drivers
                </p>
                <p className="section__description mb-4"  style={{ fontSize:14}}>Our professional drivers are experienced license holders and conversant with the roads of Bangladesh and ensure a smooth and hassle-free journey from start to finish.</p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line text-light" style={{ fontWeight: "bold" }}></i> Customized Services
                </p>
                <p className="section__description mb-4 " style={{ fontSize:14}}>We understand that every journey is unique, so we offer customized services to suit your specific requirements. From route planning to special requests, we strive to make your experience with us as seamless as possible.</p>
              </div>
              <div className="about__section-contact">
                <h5 className="mb-3 text-light">Contact Us:</h5>
                <p className="mb-1 text-light" style={{ fontSize:14 }}>
                  <i className="ri-map-pin-line me-2 text-light"></i> Suihari Micro Stand (Old Bus Stand), Dinajpur-5200
                </p>
                <p className="mb-1 text-light" style={{ fontSize:14 }}>
                  <i className="ri-mail-line me-2 text-light" ></i> advancecarrent@gmail.com
                </p>
                <p  className="mb-1 text-light" style={{ fontSize:14 }}>
                  <i className="ri-phone-line me-2 text-light" ></i> +880 1841-649121
                </p>
                <p className="mb-1 text-light" style={{ fontSize:14 }}>
                <i className="ri-facebook-box-fill me-2 text-light " ></i>
          <Link to="https://www.facebook.com/profile.php?id=61557768972452&mibextid=qi2Omg&rdid=1QBgwVN4evv5jssk">
<span className='text-light'>  Advance Rent a Car Services,Dinajpur </span>
          
               
               
            
          </Link>
          </p>

              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="about__img shadow-lg rounded-6">
              <img src="https://i.ibb.co/Ph71Zx2/HD-wallpaper-of-toyota-hiace-super-gl-h206-2013-toyota-kdh.jpg" alt="About" className="w-100 rounded-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;