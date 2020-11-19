import {Navbar, Nav, Col, Row, Form, FormControl, Button} from 'react-bootstrap';

function NavStrip() {
    
  return (
    <Navbar bg="#F18C8E" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Members</Nav.Link>
          <Nav.Link href="#link">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand  className="mx-auto" href="#home">Delta Potters Association</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Membership</Nav.Link>
          <Nav.Link href="#link">Sale</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default NavStrip;