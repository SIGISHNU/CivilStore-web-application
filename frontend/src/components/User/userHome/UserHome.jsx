import React from 'react';
import './UserHome.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopHeader from '../TopHeader/TopHeader';
import banner from '../Images/construction banner.png'


function UserHome() {
  return (
      <>
      <TopHeader/>
      <Header/>

      <main style={{minHeight:"82vh"}}> 
          <img src={banner} className='image-fluid' style={{width:"100%",height:"auto"}}></img>   
    </main>

    <Footer/>
      </>
  )
}

export default UserHome;
