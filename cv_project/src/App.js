import React from 'react'
import {Navbar, Nav, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import General from './components/General'
import Educational from './components/Edu'
import Practical from './components/Practical'

function App() {
  return (
    <div className="App">
      <Row>
      <Navbar fixed="top" bg="dark" variant="dark"expand="lg">
  <Container>
    <Navbar.Brand href="#gen">Curriculum Vitae of Samuel Fisher</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#gen">General Information</Nav.Link>
        <Nav.Link href="#edu">Educational Experience</Nav.Link>
        <Nav.Link href="#prac">Work Experience</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Row>

      <Row className="mt-5">
      <div id="gen">
        
        <General />
      </div>
      </Row>
      <Row>
      <div id="edu">
       
        <Educational />
      </div>
        </Row>
      <Row>
      <div id="prac">
        <Practical />
      </div>
        </Row>
    </div>
  );
}

export default App;
