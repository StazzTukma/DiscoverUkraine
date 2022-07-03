import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom'

import AboutUs from './aboutUs/aboutus';
import Login from './login/loginPage';
import Home from './home/home';

const Main = () => {
  return (
        <Routes>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
  );
}

export default Main;