import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getproductAsync } from "../../services/action/MenAction";
import { Badge, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./ViewProduct.css";   

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = useSelector((state) => state.Menreducer);

  useEffect(() => {
    dispatch(getproductAsync(id));
  }, [id]);

  if (!product || Object.keys(product).length === 0) {
    return (
      <Container className="loading-container">
        <h4 className="loading-text">Loading product...</h4>
      </Container>
    );
  }

  return (
    <div className="view-wrapper">
      <Card className="view-card fade-in">
        <Button variant="light" onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </Button>

        <Row className="align-items-center g-4">

          <Col md={5}>
            <div className="image-box img-wrapper">
              <img
                src={product.pimg}
                alt={product.pname}
                className="product-img"
              />
            </div>
          </Col>

          <Col md={7}>
            <h1 className="product-title">{product.pname}</h1>

            <h2 className="product-price">₹{product.price}</h2>

            <p className="product-desc">{product.pdesc}</p>

            <p>
              <strong className="label">Brand:</strong>{" "}
              <span className="value">{product.Brand}</span>
            </p>

            <p>
              <strong className="label">Category:</strong>{" "}
              <span className="value">{product.category}</span>
            </p>

            <div className="size-section">
              <strong className="label">Available Sizes:</strong>
              <div className="size-list">
                {product.psize?.length > 0 ? (
                  product.psize.map((size, index) => (
                    <Badge key={index} bg="primary" className="size-badge">
                      {size}
                    </Badge>
                  ))
                ) : (
                  <span className="no-size">N/A</span>
                )}
              </div>
            </div>

            <p className="product-id">Product ID: {product.id}</p>

            <Button
              variant="warning"
              onClick={() => navigate(`/edit-product/${product.id}`)}
              className="edit-btn"
            >
              ✏ Edit Product
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ViewProduct;
