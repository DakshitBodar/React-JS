import { useEffect, useState } from "react";
import { Card, Form, Badge, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteproductAsync,
  getAllproductAsync
} from "../../services/action/MenAction";
import { useNavigate } from "react-router";

const Menproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector(state => state);

  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    dispatch(getAllproductAsync());
  }, [dispatch]);

  const categories = ["T-Shirts", "Jeans", "Shirts", "Jackets"];
  const brands = ["Nike", "Adidas", "Puma", "Zara"];

  const filteredProducts = products.filter(product => {
    const matchesName = product.pname
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesBrand = selectedBrand ? product.Brand === selectedBrand : true;
    const matchesPrice =
      Number(product.price) >= priceRange[0] &&
      Number(product.price) <= priceRange[1];

    return matchesName && matchesCategory && matchesBrand && matchesPrice;
  });

  const handleEdit = (id) => navigate(`/edit-product/${id}`);
  const handleDelete = (id) => dispatch(DeleteproductAsync(id));

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "250px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "20px",
          height: "fit-content",
          position: "sticky",
          top: "20px",
        }}
      >
        <h5 className="text-primary mb-3">Filter Products</h5>

        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Search by Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="search by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Category</Form.Label>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Brand</Form.Label>
          <Form.Select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Price Range (₹)</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
              />
            </Col>
          </Row>
        </Form.Group>

        <div className="d-grid">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setFilter("");
              setSelectedCategory("");
              setSelectedBrand("");
              setPriceRange([0, 10000]);
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredProducts.map((v, i) => (
            <Col key={i}>
              <Card
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={v.pimg}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px", fontWeight: "600" }}>
                    {v.pname}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    {v.pdesc}
                  </Card.Text>
                  <div style={{ fontSize: "14px", fontWeight: "600" }}>
                    ₹{v.price}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#333",
                      marginTop: "5px",
                    }}
                  >
                    <strong>Brand:</strong> {v.Brand || "N/A"}
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    <strong>Category:</strong> {v.category || "N/A"}
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <strong>Sizes:</strong>{" "}
                    {v.psize && v.psize.length > 0 ? (
                      v.psize.map((s, idx) => (
                        <Badge
                          key={idx}
                          bg="secondary"
                          style={{
                            marginRight: "5px",
                            padding: "5px 8px",
                            borderRadius: "5px",
                            fontSize: "10px",
                          }}
                        >
                          {s}
                        </Badge>
                      ))
                    ) : (
                      <span>N/A</span>
                    )}
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEdit(v.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(v.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted mt-4">
            No products match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Menproduct;

