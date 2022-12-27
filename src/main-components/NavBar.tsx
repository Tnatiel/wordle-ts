import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {BsInfoCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom';
function NavBar({ openInstructionsModal, openSignInModal }: { openInstructionsModal: () => void, openSignInModal: () => void}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="navbar-brand" to={'wordle'}>Wordle</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant='dark'>
              <Link className="nav-link" to={'/'}>Home</Link>
            </Button>
            <Button variant='dark' onClick={openSignInModal}>
              <Nav.Item className="nav-link" >Sign in</Nav.Item>
            </Button>
          </Nav>
          <Nav>
            <Button onClick={openInstructionsModal} variant='dark'>
              <BsInfoCircle />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;