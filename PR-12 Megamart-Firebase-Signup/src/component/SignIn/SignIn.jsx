import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync, googleSignInAsync } from "../../services/action/authentication.JS";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errMsg, user } = useSelector(state => state.authreducer);
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
        dispatch(signInAsync(inputForm));
    };

    const handleGoogleSignIn = () => {
        dispatch(googleSignInAsync());
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (
        <Container fluid className="p-0">
            <Row className="vh-100">
                {/* ---------- LEFT SIDE ---------- */}
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center text-light"
                    style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                >
                    <div className="text-center px-4">
                        <h1 className="fw-bold mb-3">Welcome Back!</h1>
                        <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>
                            Sign in to access your personalized dashboard, manage your profile, 
                            and explore new features.
                        </p>
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/login-concept-illustration-9794972-7930954.png"
                            alt="login illustration"
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
                        <h2 className="text-center mb-4 text-primary fw-bold">Sign In</h2>
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
                                    backgroundColor: "#5563DE",
                                    border: "none",
                                }}
                            >
                                Sign In
                            </Button>

                            <Button
                                onClick={handleGoogleSignIn}
                                className="w-100 rounded-pill fw-semibold"
                                style={{
                                    backgroundColor: "#DB4437",
                                    border: "none",
                                }}
                            >
                                <i className="bi bi-google me-2"></i> Sign In with Google
                            </Button>
                        </Form>

                        <p className="mt-4 text-center">
                            Don’t have an account?{" "}
                            <Link to="/signUp" className="text-primary fw-bold text-decoration-none">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
