import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from '../assets/images/Mask group.png';

const Header = () => {
  const style = {
    fontFamily: "Inter",
    marginRight: '20px'
  };

  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Image} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={style}>Web3Makr</Nav.Link>
            <Nav.Link href="#action2" style={style}>White paper</Nav.Link>
            <Nav.Link href="#action3" style={style}>Service</Nav.Link>
            <Nav.Link href="#action4" style={style}>Tool</Nav.Link>
            <Nav.Link href="#action5" style={style}>Contact us</Nav.Link>
          </Nav>
          <Button variant="outline-primary">Start for free</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
