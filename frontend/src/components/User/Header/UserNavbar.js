import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function UserNavbar() {

  let userDetails = useSelector((state)=> state.userDetails.user)
  return( 
    <Navbar variant='dark' style={{background:"black"}} >
    <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title={userDetails ? userDetails.name : "Profile"}  id="basic-nav-dropdown">
          {userDetails ?<NavDropdown.Item href="/profile">Profile</NavDropdown.Item> : ""} 
           {userDetails ?<NavDropdown.Item href="/login">Logout</NavDropdown.Item> :<NavDropdown.Item href="/login">Login</NavDropdown.Item> } 
          </NavDropdown>
          <NavDropdown title="Machineries" id="basic-nav-dropdown">
            <Link to='/smallitem'><NavDropdown.Item href=''>Small Machineries</NavDropdown.Item></Link>
            <Link to='/heavyitem'>
            <NavDropdown.Item href="">Heavy Machineries</NavDropdown.Item>
            </Link>
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

export default UserNavbar;
