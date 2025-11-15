import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import generateUnqiueId from "generate-unique-id";
import {
  addnewProductAsync,
} from "../../services/action/MenAction.js";
import uploadimage from "../../services/uploadimage.js";

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCreated, isError } = useSelector((state) => state.Menreducer);

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
  const [error, setError] = useState({});

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

  const handleImage = async(e) =>{
    let imageURL = await uploadimage(e.target.files[0]);
    setInputForm({
      ...inputForm,
      pimg :`${imageURL}`
    })
  }

  const validationForm = () => {
    let formError = {};

    if (inputForm.pname.trim() === "") {
      formError.pname = "Product name cannot be empty";
    }
    if (inputForm.pdesc.trim() === "") {
      formError.pdesc = "Description cannot be empty";
    }
    if (inputForm.category.trim() === "") {
      formError.category = "Please select a category";
    }
    if (inputForm.Brand.trim() === "") {
      formError.Brand = "Please select a brand";
    }
    if (inputForm.price === "" || Number(inputForm.price) <= 0) {
      formError.price = "Please enter a valid positive price";
    }
    if (inputForm.psize.length === 0) {
      formError.psize = "Please select at least one size";
    }
    // if (inputForm.pimg === "") {
    //   formError.pimg = "Image URL cannot be empty";
    // }

    setError(formError);
    return Object.keys(formError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      inputForm.id = generateUnqiueId({
        length: 4,
        useLetters: false,
      });
      dispatch(addnewProductAsync(inputForm));
    }
  };

  useEffect(() => {
    if (isCreated) {
      if (inputForm.genderType === "men") {
        navigate("/Men");
      } else if (inputForm.genderType === "women") {
        navigate("/women");
      } else if (inputForm.genderType === "kids") {
        navigate("/Kids");
      }
    }
  }, [isCreated]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
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
          transition: "all 0.3s ease-in-out",
        }}
        className="hover-scale"
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            color: "#1565c0",
            letterSpacing: "1px",
          }}
        >
          Add New Product
        </h2>
        {isError ? <p>{isError}</p> : ""}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Product Name</Form.Label>
            <Form.Control
              type="text"
              name="pname"
              value={inputForm.pname}
              onChange={handleChanged}
              placeholder="Enter product name"
              className="py-2"
            />
            {error.pname && (
              <div className="text-danger small mt-1">{error.pname}</div>
            )}
          </Form.Group>

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
            />
            {error.pdesc && (
              <div className="text-danger small mt-1">{error.pdesc}</div>
            )}
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Category</Form.Label>
                <Form.Select
                  name="category"
                  value={inputForm.category}
                  onChange={handleChanged}
                >
                  <option value="">Select Category</option>
                  {["T-Shirts", "Jeans", "Shirts", "Jackets"].map((ele, i) => (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  ))}
                </Form.Select>
                {error.category && (
                  <div className="text-danger small mt-1">{error.category}</div>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Brand</Form.Label>
                <Form.Select
                  name="Brand"
                  value={inputForm.Brand}
                  onChange={handleChanged}
                >
                  <option value="">Select Brand</option>
                  {["Nike", "Adidas", "Puma", "Zara"].map((ele, i) => (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  ))}
                </Form.Select>
                {error.Brand && (
                  <div className="text-danger small mt-1">{error.Brand}</div>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Price (₹)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              placeholder="Enter product price"
              className="py-2"
            />
            {error.price && (
              <div className="text-danger small mt-1">{error.price}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Available Sizes</Form.Label>
            <div className="d-flex flex-wrap gap-3 mt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: inputForm.psize.includes(size)
                      ? "#1565c0"
                      : "#e3f2fd",
                    color: inputForm.psize.includes(size) ? "white" : "#1565c0",
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
            {error.psize && (
              <div className="text-danger small mt-1">{error.psize}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Product Image </Form.Label>
            <Form.Control
              type="file"
              name="pimg"
              onChange={handleImage}
              className="py-2"
            />
            {error.pimg && (
              <div className="text-danger small mt-1">{error.pimg}</div>
            )}
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Product For
            </Form.Label>
            <Col sm="8">
              <Form.Check
                inline
                label="Men"
                name="genderType"
                type="radio"
                value="men"
                onChange={handleChanged}
              />
              <Form.Check
                inline
                label="Women"
                name="genderType"
                type="radio"
                value="women"
                onChange={handleChanged}
              />
              <Form.Check
                inline
                label="Kids"
                name="genderType"
                type="radio"
                value="kids"
                onChange={handleChanged}
              />
              {Error.genderType ? (
                <span className="error">{Error.genderType}</span>
              ) : (
                ""
              )}
            </Col>
          </Form.Group>

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

          <div className="text-center mt-4">
            <Button
              type="submit"
              style={{
                backgroundColor: "#1565c0",
                border: "none",
                borderRadius: "10px",
                padding: "10px 40px",
                fontWeight: "600",
                fontSize: "16px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0d47a1")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1565c0")}
            >
              Add Product
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Addproduct;
