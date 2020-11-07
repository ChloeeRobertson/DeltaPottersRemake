import logo from './logo.svg';
import './App.css';
import HomeGallery from './components/home-gallery';
import Navbar from './components/navbar';
import Jumbo from './components/membership-jumbo';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
      <Container fluid style={{backgroundColor: "#fdf7f2"}}>
        <Navbar/>
        <Row className="align-items-center"> 
          <Col lg={6}>
            <HomeGallery/>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={8}>
                <h1 className="text-center">WELCOME!</h1>
                <p className="text-center"><strong>Delta Potters</strong> is made up of a group of local artisans and nascent potters who create functional and artistic pots while learning new skills in a co-operative environment. We come together as individuals from diverse backgrounds and operate from the premise that we will offer help to one another, share ideas, learn new skills in the craft of pottery, and support the ongoing success of our guild. We began as a non-profit organization in 1972.</p>
              </Col>
            </Row>
            <Row>
              <Jumbo/>
            </Row>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
