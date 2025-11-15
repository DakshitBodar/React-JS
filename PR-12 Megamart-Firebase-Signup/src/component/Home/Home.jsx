import { Carousel, Container, Button, } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <>
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

      <Container className="p-0 my-4 rounded-4 overflow-hidden shadow-sm">
        <Carousel interval={3000} fade controls indicators>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./100010.jpg"
              alt="Banner 1"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./10009.jpg"
              alt="Banner 2"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./10006.jpg"
              alt="Banner 3"
            />
          </Carousel.Item>

        </Carousel>
      </Container>

      <Container>
        <section className='Explore-more py-4'>
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title mb-4 text-uppercase">Explore More</h2>

              <div className="d-flex justify-content-center flex-wrap align-items-start gap-4">

                <div className="explore-box text-center">
                  <img src="./10001.jpg" alt="Megapass" className="explore-img rounded-4 shadow-sm" />
                  <p className="explore-text mt-2">Megapass</p>
                </div>

                <div className="explore-box text-center">
                  <img src="./10002.jpg" alt="Topwear" className="explore-img rounded-4 shadow-sm" />
                  <p className="explore-text mt-2">Topwear</p>
                </div>

                <div className="explore-box text-center">
                  <img src="./10003.jpg" alt="Bottomwear" className="explore-img rounded-4 shadow-sm" />
                  <p className="explore-text mt-2">Bottomwear</p>
                </div>

                <div className="explore-box text-center">
                  <img src="./100011.jpg" alt="Womenswear" className="explore-img rounded-4 shadow-sm" />
                  <p className="explore-text mt-2">Womenswear</p>
                </div>

                <div className="explore-box text-center">
                  <img src="./10004.jpg" alt="Kidswear" className="explore-img rounded-4 shadow-sm" />
                  <p className="explore-text mt-2">Kidswear</p>
                </div>

                <div className="explore-box text-center">
                  <img src="./10005.jpg" alt="Innerwear" className="explore-img rounded-4 shadow-sm" />
                  <p className="explore-text mt-2">Innerwear</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-12 d-flex gap-4">
              <div className="col-4 d-flex flex-column gap-4 mb-4">

                <img src="./100014.jpg" alt="Special Offer" className="w-100 rounded-4 shadow-sm" />
                <img src="./100012.jpg" alt="Special Offer" className="w-100 rounded-4 shadow-sm" />
              </div>

              <div className="col-8 position-relative border-0">
                <div className="col-6 z-4 position-absolute border-0 bg-white bottom-0 start-0 p-2 pb-0 ps-0 rounded-0 rounded-top-4 rounded-start-0" style={{ transform: "translateY(-13%)" }}>
                  <img src="./100015.jpg" alt="Special Offer" className="border-0 img-fluid rounded-4" />
                </div>
                <img src="./100013.jpg" alt="Special Offer" className="w-100 rounded-4 " />
              </div>
            </div>
          </div>
        </section>

      </Container>

      <Container>
        <section>
          <div className="row">
            <div className="col-12">
              <div>
                <img src="./100016.jpg" alt="" width={1300} />
              </div>


            </div>
          </div>
        </section>
      </Container>

        <Container className="p-0 my-4 rounded-4 overflow-hidden shadow-sm">
        <Carousel interval={3000} fade controls indicators>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./100017.jpg"
              alt="Banner 1"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./100018.jpg"
              alt="Banner 2"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./100019.jpg"
              alt="Banner 3"
            />
          </Carousel.Item>

        </Carousel>
      </Container>

    </>
  );
};

export default Home;
