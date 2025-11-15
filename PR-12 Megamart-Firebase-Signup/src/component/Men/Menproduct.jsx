import { useEffect, useState } from "react";
import { Card, Form, Badge, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteproductAsync, getAllproductAsync } from "../../services/action/MenAction";
import { useNavigate } from "react-router";
import "./Menproduct.css";

const Menproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector(state => state.Menreducer);
  const { user } = useSelector(state => state.authreducer);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = ["T-Shirts", "Jeans", "Shirts", "Jackets"];
  const brands = ["Nike", "Adidas", "Puma", "Zara"];

  useEffect(() => {
    dispatch(getAllproductAsync());
  }, []);

  useEffect(() => {
    let data = [...products];

    if (search.trim()) {
      data = data.filter(p =>
        p.pname.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      data = data.filter(p => p.category === selectedCategory);
    }

    if (selectedBrand) {
      data = data.filter(p => p.Brand === selectedBrand);
    }

    data = data.filter(
      p => Number(p.price) >= priceRange[0] && Number(p.price) <= priceRange[1]
    );

    setFilteredProducts(data);
  }, [products, search, selectedCategory, selectedBrand, priceRange]);

  const handleEdit = id => navigate(`/edit-product/${id}`);
  const handleDelete = id => dispatch(DeleteproductAsync(id));
  const handleView = id => navigate(`/view-product/${id}`);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSelectedBrand("");
    setPriceRange([0, 10000]);
  };

  return (
    <div className="menproduct-container">

      {/* FILTER SIDEBAR */}
      <div className="filter-sidebar">
        <h5 className="text-primary mb-3">Filter Products</h5>

        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((v, i) => <option key={i} value={v}>{v}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
            <option value="">All Brands</option>
            {brands.map((v, i) => <option key={i} value={v}>{v}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Price Range (₹)</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="number"
                value={priceRange[0]}
                onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="secondary" size="sm" onClick={resetFilters} className="w-100">
          Reset Filters
        </Button>
      </div>

      {/* PRODUCT GRID */}
      <div style={{ flex: 1 }}>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

          {filteredProducts.map((v, i) => (
            <Col key={i}>
              <Card className="product-card">
                <Card.Img variant="top" src={v.pimg} className="product-card-img" />

                <Card.Body>
                  <Card.Title>{v.pname}</Card.Title>
                  <Card.Text>{v.pdesc}</Card.Text>
                  <div className="card-price">₹{v.price}</div>

                  <div><strong>Brand:</strong> {v.Brand}</div>
                  <div><strong>Category:</strong> {v.category}</div>

                  <div className="mt-2">
                    <strong>Sizes:</strong>{" "}
                    {v.psize?.map((s, idx) => (
                      <Badge key={idx} bg="secondary" className="sizes-badge">{s}</Badge>
                    ))}
                  </div>

                  {user && (
                    <div className="product-actions">
                      <Button variant="warning" size="sm" onClick={() => handleEdit(v.id)}>Edit</Button>
                      <Button variant="success" size="sm" onClick={() => handleView(v.id)}>View</Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(v.id)}>Delete</Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center mt-5">No products match your filters.</p>
          )}

        </Row>
      </div>
    </div>
  );
};

export default Menproduct;
