import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing_Main from './UI/Landing_Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Landing_Main></Landing_Main>
        <Footer />
      </div>
    </BrowserRouter>

  );
}
export default App;
