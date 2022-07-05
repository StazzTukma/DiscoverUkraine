import './App.css';

import { useDispatch } from 'react-redux';

import Header from './components/Header.js';
import Footer from './components/Footer.js'

import React, { useState, useEffect } from 'react';
import Main from './Main';

import { getPosts } from './actions/cards';

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App" style={ {width:'100%',}}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;