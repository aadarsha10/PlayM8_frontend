import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./C_NavBar.css";


const NavBar = () => {


    const getLink = (e) => {
        const values = e.target.value;
        console.log("value", values);
    }

  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      {/* <Image src={logo} alt="logo" roundedCircle height="200px" width="200px" /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ml-2x nav-title">PlayM8</Nav.Link>
        </Nav>

        <Nav className="">
          <Nav.Link className="ml-5x nav-sub-title ">Events</Nav.Link>
          <Nav.Link
            className="ml-5x nav-sub-title"
          >
            Matches
          </Nav.Link>
            
          <Nav.Link className="ml-5x nav-sub-title ">Rankings</Nav.Link>
          
         
        </Nav>

        {/* <Navbar.Brand>Hello Organizer !!!</Navbar.Brand> */}
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar
