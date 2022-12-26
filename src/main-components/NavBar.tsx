import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsInfoCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom';
function NavBar({ openModal}: { openModal: () => void}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="navbar-brand" to={'wordle'}>Wordle</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="nav-link" to={'/'}>Home <span className="sr-only"></span></Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to={'sign-in'}>Sign in</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><BsInfoCircle onClick={openModal}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;