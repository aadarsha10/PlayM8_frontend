import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {

    const Username = localStorage.getItem('username')

    const getLink = (e) => {
        const values = e.target.value;
        console.log("value", values);
    }
    const history = useHistory();
    const logout = () => {

        localStorage.clear();
        
        
          history.push("/");
    
    }

  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      {/* <Image src={logo} alt="logo" roundedCircle height="200px" width="200px" /> */}
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
            Account {Username}
          </Nav.Link>
          <Nav.Link
            className="ml-20x nav-sub-title"
            href="/AddEvent"
          >
            Add Events
          </Nav.Link>
          <NavDropdown
            title="Choose Sports For Entry"
            id="basic-nav-dropdown"
            className="ml-20x nav-sub-title"
          >
            <NavDropdown.Item href="#sfsdf">Football</NavDropdown.Item>
            <NavDropdown.Item href="/AddPlayer">Table Tennis</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Badminton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Basketball</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Lawn Tennis</NavDropdown.Item>
            {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">School Ev</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link
            className="ml-20x nav-sub-title logout"
            
            onClick = {logout}
          >
                <FontAwesomeIcon icon={faDoorClosed} />
            Logout
          </Nav.Link>
        </Nav>

        {/* <Navbar.Brand>Hello Organizer !!!</Navbar.Brand> */}
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavBar
