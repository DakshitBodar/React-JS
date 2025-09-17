// Cart.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/esm/CardText";

function Cart({ data }) {
  return (
    <div className="container py-5">
      <div className="row gy-4 justify-content-center">
        {data.map((v, i) => {
          return (
            <div key={i} className="col-md-6 col-lg-4 d-flex justify-content-center">
              <Card className="text-center shadow" style={{ width: "20rem", borderRadius: "15px" }}>
                <Card.Img
                  className="rounded-circle mx-auto mt-4"
                  variant="top"
                  src={v.img}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    border: "3px solid #0d6efd"
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">{v.name}</Card.Title>
                  <div className="mb-2 text-muted">{v.Number}</div>
                  <div className="mb-3 text-muted">{v.Email}</div>
                  <div className="mb-3 text-muted">{v.address}</div>
                  <div className="mb-3 text-muted">{v.joimeddate}</div>

                  <Card.Text className="mb-3">{v.Desc}</Card.Text>

                  <CardText>
                    <div className="d-flex justify-content-center gap-3 mb-3 fs-5">
                      <a href="#!" className="text-dark" title="Facebook">
                        <FaFacebookF />
                      </a>
                      <a href="#!" className="text-dark" title="Twitter">
                        <FaTwitter />
                      </a>
                      <a href="#!" className="text-dark" title="LinkedIn">
                        <FaLinkedinIn />
                      </a>
                      <a href="#!" className="text-dark" title="GitHub">
                        <FaGithub />
                      </a>
                    </div>
                  </CardText>

                  <Button className="w-100" variant="primary">
                    Connect
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
