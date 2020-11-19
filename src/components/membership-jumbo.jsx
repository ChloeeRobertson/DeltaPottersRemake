import {Jumbotron, Container, Col, Button, Row} from 'react-bootstrap';

function Jumbo() {
    
  return (
    <Jumbotron fluid style={{backgroundColor: "#F18C8E"}}>
      <Container>
        <Row className="align-items-center">
        <Col lg={9}>
        <h1 >Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
        </Col>
        <Col lg={3}>
          <Button>Learn More</Button>
        </Col>
        </Row>
      </Container>
    </Jumbotron>
    );
}

export default Jumbo;