import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap/';
import "./navbars.css"
import logo from "./../../images/logo.png"

function Navbars() {

    
  return (
    
    <Navbar  expand="lg" className='vav'>
      <Container className='contain'>
        <Navbar.Brand href="#home">
          <img src={logo} alt="noimg" title='this is photo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className='me-2 navtext'>Home</Nav.Link>
            <Nav.Link href="#link" className='me-2 navtext'>About Us</Nav.Link>
            <Nav.Link href="#link" className='me-2 navtext'>Explore Food</Nav.Link>
            <Nav.Link href="#link" className='me-2 navtext'>Reviews</Nav.Link>
            <Nav.Link href="#link" className='me-2 navtext'>FAQ</Nav.Link>          
          </Nav>
          <Button className='navbtn'>0100 294 043</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  ); 
}

export default Navbars
