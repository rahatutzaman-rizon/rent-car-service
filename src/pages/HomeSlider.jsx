
import { Carousel } from 'react-bootstrap';
import img1 from "../assets/all-images/slider-img/slider-2.jpg";
import img2 from "../assets/all-images/slider-img/slider-3.jpg";
import img3 from "../assets/all-images/slider-img/slider-1.jpg";
const HomeSlider = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Slider Image 1"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              zIndex: 1,
              maxWidth: '80%',
            }}
          >
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Welcome to Our Car Rental Service
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              Experience the freedom of the open road with our top-of-the-line vehicles. Rent a car today and explore the world at your own pace.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Slider Image 2"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              zIndex: 1,
              maxWidth: '80%',
            }}
          >
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Discover New Destinations
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              Embark on an unforgettable journey with our reliable and affordable car rental service.
            </p>
          </div>
        </Carousel.Item>
        {/* Add more Carousel.Item components for additional slides */}


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Slider Image 2"
            style={{ height: '80vh', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              zIndex: 1,
              maxWidth: '80%',
            }}
          >
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Discover New Destinations
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              Embark on an unforgettable journey with our reliable and affordable car rental service.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;