// <<<<<<< HEAD
// import React from 'react';
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-bootstrap/dist/react-bootstrap.min.js";
// import "./App.css";
// import Footer from "./Components/Footer";
// import NavBar from "./Components/NavBar";
// // import Registration from './Components/Registration';
// import Dashboard from "./UI/Dashboard";

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Organizer_login from './UI/Organizer_login';
// // import Dashboard_organizer from './UI/Dashboard_organizer';
// import Registration from './Authentication/Registration';
// import RegistrationPlayer from './Authentication/RegistrationPlayer';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//    <NavBar/>
//        {/* <Dashboard_organizer/> */}
//        <Route path = "/Organizer_login" component= {Organizer_login}/>
//       {/* < Organizer_login/> */}
//       <Footer/>
 
//     </div>
//     </Router>
// =======
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

// >>>>>>> 6b9d92bce9a1e347ef701a3175b02eeb8aae6c29
  );
}
export default App;
