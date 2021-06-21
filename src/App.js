import React, {useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css'

function App() {

  const [pages] = useState(['aboutme', 'portfolio', 'resume', 'contact']);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  let pageElement;

  switch(currentPage){
    case 'aboutme':
      pageElement = AboutMe;
      break;
    case 'portfolio': 
      pageElement = console.log("Portfolio");
      break;
    case 'resume':
      pageElement = console.log("Resume");
      break;
    case 'contact':
      pageElement = console.log("Contact");
      break;
    default:
      pageElement = AboutMe;
      break;
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
          <Navigation />
          <br />

          <br />
          
        </Row>
        <br/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
