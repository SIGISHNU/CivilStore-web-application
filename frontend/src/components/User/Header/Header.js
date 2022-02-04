import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Header.css'


function Header() {
  return( 
    <Navbar variant='dark' style={{background:"black"}} >
    <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Machineries" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Small Machineries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Heavy Machineries</NavDropdown.Item>
           
          </NavDropdown>
          <NavDropdown title="Items" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Booked Items</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Waiting Items</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )}

export default Header;
