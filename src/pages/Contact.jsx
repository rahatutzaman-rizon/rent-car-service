import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const socialLinks = [
    {
        url: 'https://web.facebook.com/ariful.islam.80',
        icon: 'ri-facebook-line',
    },
    {
        url: 'https://www.linkedin.com/company/advance-car-rent-bd',
        icon: 'ri-linkedin-line',
    },
];

const Contact = () => {
    return (
        <Helmet title="Contact">
            <CommonSection title="Contact" />
            <section className="bg-gray-100 py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={4} placeholder="Type Your Message Here..." />
                                </Form.Group>
                                <Button variant="primary" type="submit" style={{ backgroundColor: '#120182' }}>
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <div className="bg-white p-5 rounded shadow">
                                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                                <h5 className="text-xl font-bold mb-2">Advance Rent a Car Service, Dinajpur</h5>
                                <p className="mb-2" style={{ fontSize: 14 }}>Suihari Micro Stand (Old Bus Stand)</p>
                                <p className="mb-4" style={{ fontSize: 14 }}>Dinajpur-5200, Bangladesh</p>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="ri-phone-line text-blue-500 me-2"></i>
                                    <span style={{ fontSize: 14 }}>+880 1841-649121</span>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <i className="ri-mail-line text-blue-500 me-2"></i>
                                    <span style={{ fontSize: 14 }}>advancecarrent@gmail.com</span>
                                </div>
                                <p className="mb-4" style={{ fontSize: 14 }}>
                                    We provide all types of private car/microbus rental from Dinajpur to anywhere in
                                    Bangladesh.
                                </p>
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <div className="d-flex">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black rounded-circle bg-info hover:text-blue-600 me-4 p-2"
                                        >
                                            <i className={`${item.icon} text-2xl`}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;