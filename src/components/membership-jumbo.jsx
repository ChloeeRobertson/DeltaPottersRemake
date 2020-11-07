import {Jumbotron, Container} from 'react-bootstrap';

function Jumbo() {
    
  return (
    <Jumbotron fluid style={{backgroundColor: "#F18C8E"}}>
      <Container style={{backgroundColor: "#F18C8E"}}>
        <h1 >Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>
    );
}

export default Jumbo;