import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDoorOpen
  } from "@fortawesome/free-solid-svg-icons";
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
            
          <NavDropdown
            title="Rankings"
            id="basic-nav-dropdown"
            className="ml-5x nav-sub-title"
          >
            <NavDropdown.Item href="#sfsdf">Football</NavDropdown.Item>
            <NavDropdown.Item href="/rankings/tabletennis">Table Tennis</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Badminton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Basketball</NavDropdown.Item>
            {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">School Ev</NavDropdown.Item> */}
          </NavDropdown>
          
          <Nav.Link className="ml-5x nav-sub-title ">
              Login
              <FontAwesomeIcon icon={faDoorOpen} />
              </Nav.Link>
          
         
        </Nav>

        {/* <Navbar.Brand>Hello Organizer !!!</Navbar.Brand> */}
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar
