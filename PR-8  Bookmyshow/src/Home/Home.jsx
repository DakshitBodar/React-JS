import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/Storage";
import { Card, Button, Container, Row, Col, Collapse, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [openIds, setOpenIds] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const data = getStorageData();
        setMovies(data);
    }, []);

    const handleEdit = (id) => {
        navigate(`/Edit-Movies/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this movie?")) {
            const updated = movies.filter((m) => m.id !== id);
            setMovies(updated);
            setStorageData(updated);
        }
    };

    const toggleDetails = (id) => {
        setOpenIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let data = getStorageData();

        if (search.trim() === "") {
            setMovies(data);
        } else {
            let searchText = search.toLocaleLowerCase();
            let MovieData = data.filter(movie =>
                movie.name.toLocaleLowerCase().includes(searchText) ||
                movie.desc.toLocaleLowerCase().includes(searchText)
            );

            setMovies(MovieData);
        }
    };

    const handleAtoZ = () => {
        let MovieData = [...movies];
        MovieData.sort((a, b) => a.name.localeCompare(b.name));
        setMovies(MovieData);
    };

    const handleZtoA = () => {
        let MovieData = [...movies];
        MovieData.sort((a, b) => b.name.localeCompare(a.name));
        setMovies(MovieData);
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Movie Gallery</h2>

            <Row className="mb-4">
                <Col md={6} className="mb-2">
                    <Form onSubmit={handleSearch} className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search by name or description"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="ms-2">
                            🔍
                        </Button>
                        {search && (
                            <Button
                                variant="secondary"
                                className="ms-2"
                                onClick={() => {
                                    setSearch("");
                                    setMovies(getStorageData());
                                }}
                            >
                                ✖
                            </Button>
                        )}
                    </Form>
                </Col>
                <Col md={6} className="text-md-end">
                    <Button variant="outline-dark" className="me-2" onClick={handleAtoZ}>
                        Sort A-Z
                    </Button>
                    <Button variant="outline-dark" onClick={handleZtoA}>
                        Sort Z-A
                    </Button>
                </Col>
            </Row>


            <Row className="g-4">
                {movies.length === 0 ? (
                    <h5 className="text-center">No movies available.</h5>
                ) : (
                    movies.map((movie) => (
                        <Col md={4} sm={6} xs={12} key={movie.id}>
                            <Card className="shadow-sm border-0">
                                <Card.Img
                                    variant="top"
                                    src={movie.img}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        {movie.name}
                                    </Card.Title>
                                    <div className="text-center">
                                        <Button
                                            variant="link"
                                            onClick={() => toggleDetails(movie.id)}
                                            style={{ textDecoration: "none" }}
                                        >
                                            {openIds.includes(movie.id) ? "▲ Hide Details" : "▼ View Details"}
                                        </Button>
                                    </div>

                                    <Collapse in={openIds.includes(movie.id)}>
                                        <div className="mt-3">
                                            <p><strong>Category:</strong> {movie.category}</p>
                                            <p><strong>Language:</strong> {movie.Languages}</p>
                                            <p><strong>Price:</strong> ₹{movie.price}</p>
                                            <p><strong>Description:</strong> {movie.desc}</p>

                                            <div className="d-flex justify-content-between mt-3">
                                                <Button
                                                    variant="outline-success"
                                                    size="sm"
                                                    onClick={() => handleEdit(movie.id)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => handleDelete(movie.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </Collapse>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Home;
