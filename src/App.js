import './App.css';
import React from "react";
import LandingPage from './Layouts/js/LandingPage';
import LoginPage from './Layouts/js/LoginPage';
import SignupPage from './Layouts/js/SignupPage';
import {Routes,Route} from 'react-router-dom';
import Error404 from './MyComponents/js/Error404';
import AboutusPage from './Layouts/js/AboutusPage';
import DoctorsPage from './Layouts/js/DoctorsPage';
import Test from './MyComponents/js/Test';
import Bookme from './MyComponents/js/Bookme';
import Booked from './MyComponents/js/Booked';
import TestUpdate from './MyComponents/js/TestUpdate';
import UpdateLoginPage from './Layouts/js/UpdateLoginPage';
import UpdateDoctorsPage from './Layouts/js/UpdateDoctorsPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<LandingPage/>}></Route>
        <Route path={"/Aboutus"} element={<AboutusPage/>}></Route>
        <Route path={"/Doctors"} element={<DoctorsPage/>}></Route>
        <Route path={"/Login"} element={<LoginPage/>}></Route>
        <Route path={"/SignUp"} element={<SignupPage/>}></Route>
        <Route path={"/Test"} element={<Test/>}></Route>
        <Route path={"/TestUpdate"} element={<TestUpdate/>}></Route>
        <Route path={"/Bookme"} element={<Bookme/>}></Route>
        <Route path={"/Bookmepage"} element={<Booked/>}></Route>
        <Route path={"/Update"} element={<UpdateLoginPage/>}></Route>
        <Route path={"/UpdateDoctor"} element={<UpdateDoctorsPage/>}/>
        <Route path={"*"} element={<Error404/>}></Route>
      </Routes>
          
    </div>
  );
}

export default App;
