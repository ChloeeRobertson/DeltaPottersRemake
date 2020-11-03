import logo from './logo.svg';
import './App.css';
import HomeGallery from './components/home-gallery';
import {Container} from 'react-bootstrap';

function App() {
  return (
      <Container>
        <HomeGallery/>
      </Container>
  );
}

export default App;
