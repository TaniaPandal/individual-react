import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import logo from "../img/logo.png";
import React from 'react';
import Discover from "../pages/Discover";
import { Link } from 'react-router-dom';


function BrandExample() {
    return (
      <>
      <Navbar className= "color-nav" variant="light">
        <Container>
          <Navbar.Brand href="#home" style={{color: 'white'}}><img src={logo} alt="logo" width="50"/>Soundwave</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link style={{color: 'white'}}><Link to="/Discover" element={<Discover/>}/>Discover</Nav.Link>
            <Nav.Link href="#features" style={{color: 'white'}}>Join</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default BrandExample;