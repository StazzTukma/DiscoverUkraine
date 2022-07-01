import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js'

import React, { Component }  from 'react';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;