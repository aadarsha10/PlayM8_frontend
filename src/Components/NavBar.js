import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./NavBar.css";

import logo from "../images/tabletennis.jpeg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Image src={logo} alt="logo" roundedCircle height="200px" width="200px" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ml-20x nav-title">PlayM8</Nav.Link>
        </Nav>

        <Nav className="mr-auto ml-auto">
          <Nav.Link className="ml-50x nav-sub-title">Home</Nav.Link>
          <Nav.Link
            className="ml-20x nav-sub-title"
            href="/organizer/dashboard/account"
          >
            Account
          </Nav.Link>
          <Nav.Link
            className="ml-20x nav-sub-title"
            href="/organizer/dashboard/addEvents"
          >
            Add Events
          </Nav.Link>
          <NavDropdown
            title="Sports Type"
            id="basic-nav-dropdown"
            className="ml-20x nav-sub-title"
          >
            <NavDropdown.Item href="#sfsdf">Football</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Table Tennis</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Badminton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Basketball</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Lawn Tennis</NavDropdown.Item>
            {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">School Ev</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>

        {/* <Navbar.Brand>Hello Organizer !!!</Navbar.Brand> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
