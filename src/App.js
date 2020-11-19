import logo from './logo.svg';
import './App.css';
import HomeGallery from './components/home-gallery';
import Navbar from './components/navbar';
import Jumbo from './components/membership-jumbo';
import GoogleMaps from './components/google-maps';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
      <Container fluid style={{backgroundColor: "#fdf7f2"}}>
        <Navbar/>
        <Row><br/></Row>
        <Row className=" align-items-center"> 
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
        <Row className="mt-5">
          <Col lg={8}>
          </Col>
          <Col lg={4}>
            <GoogleMaps 
              id="myMap"
              options={{
                center: { lat: 49.035370, lng: -123.066794 },
                zoom: 8
              }}
              onMapLoad={map => {
                var marker = new window.google.maps.Marker({
                  position: { lat: 49.035370, lng: -123.066794 },
                  map: map,
                  title: 'Delta Pottery Association!'
                });
              }}
            />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
