import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { googleSignInAsync, signInAsync } from "../../services/action/authentication";
import { EnvelopeFill, LockFill, Google } from "react-bootstrap-icons";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errMsg, user } = useSelector((state) => state.authreducer);

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
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "28rem" }} className="shadow-lg border-0 rounded-4 p-4">
        <h2 className="text-center mb-3">Sign In</h2>
        {errMsg && <p className="text-danger text-center">{errMsg}</p>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label><EnvelopeFill /> Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={inputForm.email}
              onChange={handleChanged}
              placeholder="Enter Email"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><LockFill /> Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={inputForm.password}
              onChange={handleChanged}
              placeholder="Enter Password"
              className="rounded-3"
            />
          </Form.Group>

          <Button type="submit" className="w-100 rounded-3 mb-3" variant="primary">
            Sign In
          </Button>
        </Form>

        <Button
          onClick={handleGoogleSignIn}
          className="w-100 rounded-3 mb-3"
          variant="danger"
        >
          <Google /> Sign In with Google
        </Button>

        <p className="text-center">
          Create a new account? <Link to="/signUp">Sign Up</Link>
        </p>
      </Card>
    </Container>
  );
};

export default SignIn;
