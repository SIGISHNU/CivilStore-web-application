import './App.css';
import './bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignup from './components/User/userSignup/UserSignup';
import UserLogin from './components/User/userLogin/UserLogin';
import UserHome from './components/User/userHome/UserHome';
import ForgotPassword from './components/User/forgotPassword/ForgotPassword';
import VenderSignup from './components/Venders/VendersSignup/VenderSignup';
import VendersLogin from './components/Venders/VendersLogin/VendersLogin';



function App() {
  return (
   <BrowserRouter>
   <Routes>

      <Route path={'/'} element={<UserHome/>}/>
     <Route path={'/signup'} element={<UserSignup/>}/>
     <Route path={'/login'} element={<UserLogin/>}/>
     <Route path={'/forgot'} element={<ForgotPassword/>}/>
     <Route path={'/vendersignup'} element={<VenderSignup/>}/>
     <Route path={'/venderlogin'} element={<VendersLogin/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
