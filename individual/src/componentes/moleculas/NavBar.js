import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import logo from "../img/logo.png";
import React from 'react';
import Discover from "../pages/Discover";
import { Link } from 'react-router-dom';
import "./NavBar.css";


function BrandExample() {
    return (
      <>
      <Navbar className= "color-nav" variant="light">
        <Container>
          <Navbar.Brand href="#home" style={{color: 'white'}}><img src={logo} alt="logo" width="50"/>Soundwave</Navbar.Brand>
          <Nav className="ms-auto d-flex justify-content-around">
            <div>
               <Link style={{color: 'white'}} to="/Discover" element={<Discover/>} className="discover">Discover</Link>
            </div>
            <div>
               <Link href="#features" style={{color: 'white'}}>Join</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default BrandExample;