import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // FIX: Correct router import

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
            <Container>
                {/* Brand */}
                <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
                    🎟️ BookMyShow
                </Navbar.Brand>

                {/* Toggle for mobile */}
                <Navbar.Toggle aria-controls="main-navbar-nav" />

                {/* Links */}
                <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Add-Movies" className="mx-2">Add Movies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
