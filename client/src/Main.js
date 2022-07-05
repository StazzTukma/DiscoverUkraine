import React from 'react';
import { Route, Routes } from 'react-router-dom'

import AboutUs from './aboutUs/aboutus';
import Login from './login/loginPage';
import Home from './home/home';
import Profile from './profile/profile';

const Main = () => {
  return (
        <Routes>
          <Route exact path="/account" element={<Profile/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
  );
}

export default Main;