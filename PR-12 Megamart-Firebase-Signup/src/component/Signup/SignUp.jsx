import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { createUserAsync } from "../../services/action/authentication.JS";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errMsg, isCreated } = useSelector(state => state.authreducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm);
        dispatch(createUserAsync(inputForm));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/signIn");
        }
    }, [isCreated]);

    return (
        <Container fluid className="p-0">
            <Row className="vh-100">
                {/* ---------- LEFT SIDE ---------- */}
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center text-light"
                    style={{
                        background: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)",
                    }}
                >
                    <div className="text-center px-4">
                        <h1 className="fw-bold mb-3">Join Us Today!</h1>
                        <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>
                            Create your account to get started with all exclusive features and updates.
                        </p>
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/create-account-concept-illustration-4681632-3898735.png"
                            alt="sign up illustration"
                            className="img-fluid mt-4"
                            style={{ maxWidth: "400px" }}
                        />
                    </div>
                </Col>

                {/* ---------- RIGHT SIDE ---------- */}
                <Col
                    md={6}
                    className="d-flex justify-content-center align-items-center bg-light"
                >
                    <div
                        className="shadow p-5 bg-white rounded-4"
                        style={{ width: "400px", maxWidth: "90%" }}
                    >
                        <h2 className="text-center mb-4 text-primary fw-bold">Create Account</h2>
                        {errMsg ? <p className="text-danger text-center">{errMsg}</p> : ""}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={inputForm.email}
                                    onChange={handleChanged}
                                    placeholder="Enter your email"
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={inputForm.password}
                                    onChange={handleChanged}
                                    placeholder="Enter your password"
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                className="w-100 mb-3 rounded-pill fw-semibold"
                                style={{
                                    backgroundColor: "#0083B0",
                                    border: "none",
                                }}
                            >
                                Sign Up
                            </Button>
                        </Form>

                        <p className="mt-4 text-center">
                            Already have an account?{" "}
                            <Link to="/signIn" className="text-primary fw-bold text-decoration-none">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
