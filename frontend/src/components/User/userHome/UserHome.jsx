import React from 'react';
import Footer from '../Footer/Footer';
import TopHeader from '../TopHeader/TopHeader';
import banner from '../Images/construction banner.png';
import './UserHome.css'
import UserNavbar from '../Header/UserNavbar';



function UserHome() {

  //taking state from useSlice
//   let userDetails = useSelector((state)=> state.userDetails.user)
// console.log('userDetails',userDetails);

  return (
      <>
      <TopHeader/>
     <UserNavbar/>
     
      <main style={{minHeight:"82vh"}}> 
          <img src={banner} className='image-fluid' style={{width:"100%",height:"auto"}}></img>  
          
    </main>

    <Footer/>
      </>
  )
}

export default UserHome;
