import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from "../photos/Logo.jpg"
import { Link } from "react-router-dom";
import { useCart } from '../cartContext';


function NavBar() {

  const { cartItems, toggleCart } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-white">
        <img
          src={Logo}
          width="50"
          height="40"
          className="d-inline-block align-top ms-3 rounded-3"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
          <Nav.Link href="#chi-siamo" className="text-white">Chi siamo</Nav.Link>
          <Nav.Link href="#mission" className="text-white">La nostra mission</Nav.Link>
          <Nav.Link href="#prenota" className="text-white"> Prenota</Nav.Link>
        </Nav>
        <Nav className='ms-auto'>
          <button type="button" onClick={toggleCart} className="btn btn-outline-dark me-auto ps-0">
            <FontAwesomeIcon icon={faShoppingCart} className='text-white' />
            <span className="badge rounded-pill bg-dark fs-6 ps-1 "> {cartItems.length}</span>
          </button>
          <NavDropdown title={<FontAwesomeIcon icon={faUser} className='text-white ms-0' />} id="userDropdown" align="end">
            <NavLink as={Link} to="/login" className="dropdown-item text-dark">
              Accedi
            </NavLink>
            <NavLink as={Link} to="/register" className="dropdown-item text-dark">
              Registrati
            </NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
