import {Navbar, Nav, Col, Row, Form, FormControl, Button} from 'react-bootstrap';

function NavStrip() {
    
  return (
    // <Navbar fluid expand="lg" variant="light" bg="white">
    //   <Row>
    //     <Col className="background-red justify-content-right">
    //       <Nav>
    //         <Nav.Link href="#">Home</Nav.Link>
    //         <Nav.Link href="#">Features</Nav.Link>
    //       </Nav>
    //     </Col>
    //     <Col  className="h-100 justify-content-center">
    //       <Navbar.Brand href="#">Delta Potters Association</Navbar.Brand>
    //     </Col>
    //     <Col className="background-red justify-content-left">
    //       <Nav>
    //         <Nav.Link href="#">Home</Nav.Link>
    //         <Nav.Link href="#">Features</Nav.Link>
    //       </Nav>
    //     </Col>
    //   </Row>
    // </Navbar>

    // <Navbar  expand="lg" variant="light" bg="white">
    //       <Nav className="background-red justify-content-right">
    //         <Nav.Link href="#">Home</Nav.Link>
    //         <Nav.Link href="#">Features</Nav.Link>
    //       </Nav>
    //       <Navbar.Brand className="h-100 justify-content-center" href="#">Delta Potters Association</Navbar.Brand>
    //       <Nav className="background-red justify-content-left">
    //         <Nav.Link href="#">Home</Nav.Link>
    //         <Nav.Link href="#">Features</Nav.Link>
    //       </Nav>
    // </Navbar>


    <Navbar bg="light" expand="lg">
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