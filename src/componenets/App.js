import React from 'react';
//import '../css/App.css';
import Header from './Header';
import Search from './Search';
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";
const dotenv = require('dotenv').config()

function App() {

  return (
    <div className="App">
      <ModalProvider rootComponent={TransitionGroup}>
      <Header/>
      <Search/>
      </ModalProvider>
    </div>
  );
}

export default App;
