
import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";

function HoverDropdown({ title, id, children }) {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={`no-caret ${show ? "active-dropdown" : ""}`}
    >
      {children}
    </NavDropdown>
  );
}

function Header() {
  return (
    <header className="m-0">
      <Navbar expand="lg" className="py-3" variant="light">
        {/* Background Image */}
        <div className="headerImage">
          <img src="header.png" alt="header background" />
        </div>

        <Container
          fluid
          className="d-flex justify-content-between align-items-center m-0 pt-0"
        >
          {/* Left: Logo */}
          <Navbar.Brand href="#home">
            <img src="./logo.png" alt="logo" />
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Right: Menu + Icons */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {/* Home link */}
              <Nav.Link className="home" href="#home">
                Home
              </Nav.Link>

              {/* Dropdowns */}
              <HoverDropdown title="Shop" id="shop-dropdown">
                <NavDropdown.Item href="#shop/men">Shop List</NavDropdown.Item>
                <NavDropdown.Item href="#shop/women">Shop Details</NavDropdown.Item>
                <NavDropdown.Item href="#shop/kids">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#shop/sale">Checkout</NavDropdown.Item>
              </HoverDropdown>

              <HoverDropdown title="Page" id="page-dropdown">
                <NavDropdown.Item href="#page/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">Our Menu</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">Book Now</NavDropdown.Item>
                <NavDropdown.Item href="#page/services">404 error</NavDropdown.Item>
              </HoverDropdown>

              <HoverDropdown title="Blog" id="blog-dropdown">
                <NavDropdown.Item href="#blog/news">Blog Right</NavDropdown.Item>
                <NavDropdown.Item href="#blog/articles">Blog Left</NavDropdown.Item>
                <NavDropdown.Item href="#blog/articles">Blog Details</NavDropdown.Item>
              </HoverDropdown>

              <Nav.Link className="contact"  href="#contact">
                Contact
              </Nav.Link>
              {/* <HoverDropdown title="Contact" id="contact-dropdown">
              </HoverDropdown> */}

              {/* Icons */}
              <Nav.Link href="#search">
                <CiSearch size={20} />
              </Nav.Link>
              <Nav.Link href="#cart">
                <AiOutlineShoppingCart size={22} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;