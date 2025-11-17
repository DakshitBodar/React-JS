import { Container, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { signOutAsync } from "../../services/action/authentication";

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authreducer);

    const handleLogout = () => {
        dispatch(signOutAsync());
    };

    return (
        <>
            <Navbar
                expand="lg"
                className="py-3 shadow-sm"
                style={{
                    backdropFilter: "blur(12px)",
                    background: "rgba(255, 255, 255, 0.6)",
                    borderBottom: "1px solid rgba(0,0,0,0.08)"
                }}
            >
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="fw-bold"
                        style={{
                            fontSize: "1.5rem",
                            color: "#222",
                            letterSpacing: "0.5px"
                        }}
                    >
                         Student Portal
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav className="mx-auto gap-4">
                            

                            <Nav.Link
                                as={Link}
                                to="/student-list"
                                className="fw-semibold"
                                style={{ fontSize: "1rem" }}
                            >
                                Students
                            </Nav.Link>

                            {user ? (<Nav.Link
                                as={Link}
                                to="/add-student"
                                className="fw-semibold"
                                style={{ fontSize: "1rem" }}
                            >
                                Add Student
                            </Nav.Link>) : ""}
                        </Nav>

                        {!user ? (
                            <Link
                                to="/signIn"
                                className="btn px-4 py-2"
                                style={{
                                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                                    borderRadius: "30px",
                                    color: "#fff",
                                    fontWeight: "500",
                                    boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
                                }}
                            >
                                Sign In
                            </Link>
                        ) : (
                            <div className="d-flex align-items-center gap-3">
                                <span
                                    style={{
                                        background: "rgba(0,0,0,0.06)",
                                        padding: "8px 16px",
                                        borderRadius: "20px",
                                        fontWeight: 500,
                                        color: "#333"
                                    }}
                                >
                                    {user.email}
                                </span>

                                <button
                                    onClick={handleLogout}
                                    className="btn px-3 py-1"
                                    style={{
                                        borderRadius: "25px",
                                        border: "1px solid #dc3545",
                                        color: "#dc3545",
                                        background: "transparent",
                                        transition: "0.3s"
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
