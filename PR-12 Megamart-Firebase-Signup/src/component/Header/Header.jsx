import { Container, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { signOutAsync } from "../../services/action/authentication.JS";
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
  const { user } = useSelector((state) => state.authreducer);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOutAsync());
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3 border-bottom">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/" className="text-danger fs-3 fw-bold">
            megamart
          </Navbar.Brand>

          <Form
            className="d-flex flex-grow-1 mx-4"
            style={{ maxWidth: "600px" }}
          >
            <FormControl
              type="search"
              placeholder="Search: Shirts"
              className="me-2 rounded-pill px-3"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary rounded-circle"
              type="submit"
            >
              <FaSearch />
            </button>
          </Form>

          <div className="d-flex align-items-center gap-4">
            <FaMapMarkerAlt size={18} />
            <BsCart size={18} />
            {/* <FaUser size={18} 
                                {!user ? <Link className='btn btn-warning' to={"/signIn"}>SignIN</Link> : <div><Link>{user.email}</Link> <button onClick={handleLogout}>Logout</button></div>}
                        /> */}
            <Navbar.Text>
              {!user ? (
                <Link className="btn btn-warning" to={"/signIn"}>
                  SignIN
                </Link>
              ) : (
                <div>
                  <Link>{user.email}</Link>{" "}
                  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </Navbar.Text>
            {user ? <Link to="/add-product" className="btn btn-outline-primary btn-sm">
              Add Product
            </Link>:""}
          </div>
        </Container>
      </Navbar>

      <Navbar bg="light" className="py-2 shadow-sm">
  <Container>
    <Nav className="mx-auto d-flex justify-content-center gap-3">

      <NavLink
        to="/Men"
        className={({ isActive }) =>
          isActive ? "nav-item active-link" : "nav-item"
        }
      >
        Men
      </NavLink>

      <NavLink
        to="/women"
        className={({ isActive }) =>
          isActive ? "nav-item active-link" : "nav-item"
        }
      >
        Women
      </NavLink>

      <NavLink
        to="/Kids"
        className={({ isActive }) =>
          isActive ? "nav-item active-link" : "nav-item"
        }
      >
        Kids
      </NavLink>

    </Nav>
  </Container>
</Navbar>

    </>
  );
};

export default Header;
