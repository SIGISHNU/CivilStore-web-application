import React,{useState} from 'react';
import logo from '../Images/civilstore.png'
import Navbar from './Navbar';
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {

  const [sideBox,setSideBox] = useState(true)


  return (
  
  <div className='app'>
    <div className='burger'><header><GiHamburgerMenu onClick={() =>setSideBox(!sideBox)} style={{color:"white"}} /></header></div>
    
   <img src={logo} alt="logo" className="logo"></img>
 
    {sideBox &&<Navbar/> }
  </div>
  )
  
}

export default Header;
