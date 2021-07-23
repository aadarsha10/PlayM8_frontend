import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import "../scss/nav.scss";
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from '../images/tabletennis.jpeg'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
          
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Image src = {logo} alt = "logo" roundedCircle height = "50px" width = "80px"  />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
          <ul className="navbar-nav ml-auto ">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 ml-40x search" />
           
          </Form>
          <Button className="btnsearch">Search</Button>
          <div className="nav">
          <li className="nav-item active">
            <Nav className="nav-link" to="/">Home </Nav>
          </li>
          <li className="nav-item">
            <Nav className="nav-link active" to="/Add_Event">Add Events</Nav>
          </li>

          <li className="nav-item">
            <Nav className="nav-link active" to="/shop">View Events</Nav>
          </li>


          <li className="nav-item">
            <Nav className="nav-link active" to="/organizer/register">Register</Nav>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" to="/player/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/organizer/dashboard">Admin_dashboard</Link>
          </li>
          </div>

          </ul>
          
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
