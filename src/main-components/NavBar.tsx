import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
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
            <Button variant='dark'>
              <Nav.Link><Link className="nav-link" to={'home'}>Home</Link></Nav.Link>
            </Button>
            <Button variant='dark'>
              <Nav.Link><Link className="nav-link" to={'sign-in'}>Sign in</Link></Nav.Link>
            </Button>
          </Nav>
          <Nav>
            <Button onClick={openModal} variant='dark'>
            <Nav.Link><BsInfoCircle /></Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;