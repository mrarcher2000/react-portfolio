import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css'

function App() {




  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
          <Navigation />
        </Row>
      </Container>
    </div>
  );
}

export default App;
