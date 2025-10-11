import { Carousel, Container, Button } from 'react-bootstrap';
import './Home.css'; // Optional: For custom styles

const Home = () => {
  return (
    <>
      {/* Offer Buttons */}
      <div className="offer-buttons d-flex justify-content-center gap-3 py-3 flex-wrap">
        {["B1G1", "B2G1", "JEANS 40-60%", "DEAL ZONE", "MEGAPASS AT 149"].map((offer, idx) => (
          <Button
            key={idx}
            variant="light"
            className="rounded-pill px-4 fw-semibold shadow-sm border"
          >
            {offer}
          </Button>
        ))}
      </div>

      {/* Banner Slider */}
      <Container className="my-4">
        <Carousel indicators={true} controls={false}>
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-between banner-slide p-5 rounded" style={{ background: 'linear-gradient(to right, #e0e0e0, #f5f5f5)' }}>
              <div>
                <h1 className="display-3 fw-bold">
                  55 <span className="fw-light">UPTO</span><br />% OFF
                </h1>
                <p className="fs-5">Styles for the cool weather</p>
                <Button variant="outline-dark" className="rounded-pill px-4">
                  SHOP NOW
                </Button>
              </div>
              <div>
                <img
                  src="https://assets.ajio.com/medias/sys_master/root/20231011/p9dE/65261b83ddf7791519a1a84a/-473Wx593H-466870853-beige-MODEL.jpg"
                  alt="model"
                  className="img-fluid"
                  style={{ maxHeight: '400px', borderRadius: '10px' }}
                />
              </div>
            </div>
          </Carousel.Item>

          {/* Add more Carousel.Item here if you want multiple slides */}
        </Carousel>
      </Container>
    </>
  );
};

export default Home;
