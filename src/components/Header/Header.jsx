import  { useRef } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Header.css';


const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/cars',
        display: 'Cars'
    },
    // {
    //     path: '/blogs',
    //     display: 'Blog'
    // },
    {
        path: '/contact',
        display: 'Contact'
    },
    // {
    //     path: '/sell',
    //     display: 'Car Sell'
    // },
];

const Header = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    return (
        <header className="header">
       <div className="header-top">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={10} className="order-md-1">
                <div className="logo">
                    <h1>
                        <Link to="/home" className="d-flex align-items-center">
                            <img
                                className="logo-img "
                                src="https://i.ibb.co/jkzkt6m/Rent-A-Car.png"
                                alt="Logo"
                                style={{ width: '120px', height: '80px', marginRight: '2px' }}
                            />
                            <span className="logo-text fs-5">Advance Rent a Car Services,Dinajpur</span>
                        </Link>
                    </h1>
                </div>
            </Col>

            <Col xs={12} md={2} className="order-md-2 d-flex justify-content-md-end ">
                <div className="header-info d-flex align-items-center gap-4">
                    <div className="header__location d-flex align-items-center gap-2 ">
                        <span>
                            <i className="ri-earth-line"></i>
                        </span>
                        <div className="header__location-content ">
                            <h6 className='fs-7'>Suihari Micro-Stand,Dinajpur</h6>
                            <h6></h6>
                        </div>
                    </div>

                    <div className="header__location d-flex align-items-center gap-2">
                        <span>
                            <i className="ri-time-line"></i>
                        </span>
                        <div className="header__location-content">
                            <h6 className="fs-7 ">Available <span className="fw-bold fs-6">24/7</span> Hours</h6>
                           
                        </div>
                    </div>
                    
                    <div className="header__location d-flex align-items-center gap-2">
                        
                        <Link to="https://web.facebook.com/profile.php?id=61557768972452&mibextid=qi2Omg&rdid=pdd2VyaCDEjAlz1m">
                        <span>
                            <i className="ri-facebook-box-fill rounded"></i>
                        </span> 
                        </Link>
                        
                        
                    </div>

                    <button className="header__btn btn">
                        <Link to="https://maps.app.goo.gl/5pQBrhT2hbNfdbzc7">
                            <i className="ri-map-pin-line"></i>Location
                        </Link>
                    </button>

                    
                </div>
            </Col>
        </Row>
    </Container>
</div>

            <div className="main__navbar">
                <Container>
                    <Navbar expand="lg" className="navigation__wrapper">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav" ref={menuRef}>
                            <Nav className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink  
                                        to={item.path}
                                        className= {(navClass) =>
                                            navClass.isActive ? 'nav__active nav__item' : 'nav__item'
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                   
                </Container>
            </div>
        </header>
    );
};

export default Header;