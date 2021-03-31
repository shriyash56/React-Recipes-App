import React from 'react';
//import '../css/App.css';
import Header from './Header';
import Search from './Search';
const dotenv = require('dotenv').config()

function App() {

  return (
    <div className="App">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
