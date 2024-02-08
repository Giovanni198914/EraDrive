import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from "../photos/Logo.jpg"

function NavBar() {
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
          <Nav.Link href="#home" className="text-white">Home</Nav.Link>
          <Nav.Link href="#features" className="text-white">Chi siamo</Nav.Link>
          <Nav.Link href="#pricing" className="text-white">La nostra mission</Nav.Link>
          <NavDropdown title="Prenota" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='ms-auto'>
          <button type="button" className="btn btn-outline-dark me-auto ps-0">
            <FontAwesomeIcon icon={faShoppingCart} className='text-white' />
            <span className=" badge rounded-pill bg-dark">0</span>
          </button>
          <NavDropdown title={<FontAwesomeIcon icon={faUser} className='text-white ms-0'/>} id="userDropdown" align="end">
            <NavLink to="/" className="dropdown-item text-dark">
              Login
            </NavLink>
            <NavLink to="/" className="dropdown-item text-dark">
              Sign Up
            </NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
