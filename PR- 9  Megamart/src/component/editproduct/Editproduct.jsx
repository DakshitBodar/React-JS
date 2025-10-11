import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getproduct, updateproduct } from "../../services/action/MenAction.js";

const Editproduct = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    pname: "",
    pdesc: "",
    category: "",
    pimg: "",
    psize: [],
    Brand: "",
    price: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleChanged = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setInputForm((prev) => ({
        ...prev,
        psize: checked
          ? [...prev.psize, value]
          : prev.psize.filter((v) => v !== value),
      }));
    } else {
      setInputForm({
        ...inputForm,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateproduct(inputForm));
    navigate("/Men");
  };

  useEffect(() => {
    dispatch(getproduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      setInputForm(product);
      setLoading(false);
    }
  }, [product]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f3f8ff, #ffffff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 10px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "750px",
          border: "none",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          padding: "40px",
          background: "white",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            color: "#1976d2",
            letterSpacing: "1px",
          }}
        >
          Edit Product
        </h2>

        <Form onSubmit={handleSubmit}>
          {/* Product Name */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Product Name</Form.Label>
            <Form.Control
              type="text"
              name="pname"
              value={inputForm.pname}
              onChange={handleChanged}
              placeholder="Enter product name"
              className="py-2"
              required
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="pdesc"
              value={inputForm.pdesc}
              onChange={handleChanged}
              placeholder="Write a short description..."
              className="py-2"
              required
            />
          </Form.Group>

          {/* Category and Brand */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Category</Form.Label>
                <Form.Select
                  name="category"
                  value={inputForm.category}
                  onChange={handleChanged}
                  required
                >
                  <option value="">Select Category</option>
                  {["T-Shirts", "Jeans", "Shirts", "Jackets"].map((ele, i) => (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Brand</Form.Label>
                <Form.Select
                  name="Brand"
                  value={inputForm.Brand}
                  onChange={handleChanged}
                  required
                >
                  <option value="">Select Brand</option>
                  {["Nike", "Adidas", "Puma", "Zara"].map((ele, i) => (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Price */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Price (₹)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              placeholder="Enter product price"
              className="py-2"
              required
            />
          </Form.Group>

          {/* Sizes */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Available Sizes</Form.Label>
            <div className="d-flex flex-wrap gap-3 mt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: inputForm.psize.includes(size)
                      ? "#1976d2"
                      : "#e3f2fd",
                    color: inputForm.psize.includes(size) ? "white" : "#1976d2",
                    borderRadius: "8px",
                    padding: "6px 14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onClick={() => {
                    setInputForm((prev) => {
                      const exists = prev.psize.includes(size);
                      return {
                        ...prev,
                        psize: exists
                          ? prev.psize.filter((s) => s !== size)
                          : [...prev.psize, size],
                      };
                    });
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </Form.Group>

          {/* Image URL */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Product Image URL</Form.Label>
            <Form.Control
              type="text"
              name="pimg"
              value={inputForm.pimg}
              onChange={handleChanged}
              placeholder="Paste product image URL..."
              className="py-2"
              required
            />
          </Form.Group>

          {/* Image Preview */}
          {inputForm.pimg && (
            <div className="text-center mb-4">
              <img
                src={inputForm.pimg}
                alt="Preview"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center mt-4">
            <Button
              type="submit"
              style={{
                backgroundColor: "#1976d2",
                border: "none",
                borderRadius: "10px",
                padding: "10px 40px",
                fontWeight: "600",
                fontSize: "16px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0d47a1")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
            >
              Update Product
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Editproduct;
