import './App.css';
import './bootstrap.min.css';
import { Route, Routes,useNavigate } from 'react-router-dom';
import UserSignup from './components/User/userSignup/UserSignup';
import UserLogin from './components/User/userLogin/UserLogin';
import UserHome from './components/User/userHome/UserHome';
import ForgotPassword from './components/User/forgotPassword/ForgotPassword';
import VenderSignup from './components/Venders/VendersSignup/VenderSignup';
import VendersLogin from './components/Venders/VendersLogin/VendersLogin';
import Header from './components/Venders/venderHome/Header';
import AddProduct from './components/Venders/AddProduct/AddProduct';
import {useEffect} from 'react';
import { UserLoginData } from './components/Redux/User/UserSlice';
import { useDispatch } from "react-redux";
import UserProfile from './components/User/Profile/UserProfile';
import HeavyMechinary from './components/User/Heavy Machinary/HeavyMechinary';
import SmallMechinary from './components/User/Small Machinary/SmallMechinary';





function App() {

  const dispatch = useDispatch();
  var navigate = useNavigate()

  useEffect (()=>{

    let userInfo = localStorage.getItem("userInfo"); 
    userInfo = JSON.parse(userInfo)
    if(!userInfo){
      navigate("/login")

    }  else{

        //exported from userSlice
        dispatch(
          UserLoginData({
            userDetails:userInfo.data.user
          })

        )

    }
   

  },[] )

  

  return (
 
   <Routes>

      <Route path={'/'} element={<UserHome/>}/>
     <Route path={'/signup'} element={<UserSignup/>}/>
     <Route path={'/login'} element={<UserLogin/>}/>
     <Route path={'/forgot'} element={<ForgotPassword/>}/>
     <Route path={'/profile'} element={<UserProfile/>}/>
     <Route path={'/vendersignup'} element={<VenderSignup/>}/>
     <Route path={'/venderlogin'} element={<VendersLogin/>}/>
     <Route path={'/venderhome'} element={<Header/>}/>
       <Route path={'/addproduct'} element={<AddProduct/>}/>
       <Route path={'/heavyitem'} element={<HeavyMechinary/>}/>
       <Route path={'/smallitem'} element={<SmallMechinary/>}/>

   </Routes>
  
  );
}

export default App;
