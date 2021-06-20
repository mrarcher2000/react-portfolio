import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import './App.css'

function App() {




  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
          <Navigation />
          <br />
          <AboutMe />
        </Row>
      </Container>
    </div>
  );
}

export default App;
