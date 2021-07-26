import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
import "../scss/nav.scss";
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './NavBar.css'

import logo from '../images/tabletennis.jpeg'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar bg="success" expand="lg">
          
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <a href="/">  <Image src = {logo} alt = "logo" roundedCircle height = "80px" width = "120px"  /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
          <ul className="navbar-nav ms-auto ">
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 ml-40x search" />
          </Form>
          <Button className="btnsearch">Search</Button> */}
      
          <div className="nav">
          {/* <li className="nav-item active">
            <Nav.Link className="nav-link" href="/home">Home </Nav.Link>
          </li> */}
          {/* <li className="nav-item">
            <Nav.Link className="nav-link active" href="/addevent">Add Events</Nav.Link>
          </li>

          <li className="nav-item">
            <Nav.Link className="nav-link active" href="/shop">View Events</Nav.Link>
          </li>
 */}

          <li className="nav-item">
            <Button variant="light"><Nav.Link className="nav-link active" href="../organizer/register">Register</Nav.Link></Button>
          </li>

          <li className="nav-item">
            <Button className="btn btn-primary"><Nav.Link className="nav-link active" href="../organizer/login">Login</Nav.Link></Button>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="../admin/dashboard">Admin_dashboard</Link>
          </li>
          </div>

          </ul>
          
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
