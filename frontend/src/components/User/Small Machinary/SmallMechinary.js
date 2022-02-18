import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import UserNavbar from '../Header/UserNavbar'
import TopHeader from '../TopHeader/TopHeader'


function SmallMechinary() {
  return (
    <>
    <TopHeader/>
   <UserNavbar/>
    <main style={{minHeight:"82vh"}}> 
    <Row>
            
            <Col>
        <h1>Heavy Mechinary</h1> 
        </Col>
        </Row>
    </main>
    <Footer/>
    </>
  )
}

export default SmallMechinary