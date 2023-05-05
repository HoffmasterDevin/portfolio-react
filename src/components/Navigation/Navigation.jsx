import React, { Header } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#contactMe">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}