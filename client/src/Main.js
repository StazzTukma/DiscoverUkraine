import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AboutUs from './aboutUs/aboutus';
import Login from './login/loginPage';

const Main = () => {
  return (
        <Routes>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
  );
}

export default Main;