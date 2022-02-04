import React from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import logo from '../Images/Civilstoreicon.png';
import './TopHeader.css';



function TopHeader() {
  return(
      <Container className='container'>
      <Row>
   
        <img src={logo} alt='civil store icon' style={{width:"289px"}}></img> 
   
        
       <Form className="d-flex ml-auto form">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button style={{height:"35px"}} variant="outline-success">Search</Button>
        </Form>
       
        </Row>
        </Container>
   
  )
 
}

export default TopHeader;

