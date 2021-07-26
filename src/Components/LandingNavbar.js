import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from '../images/tabletennis.jpeg'
import '../UI/Landing/landing.css'

export default function LandingNavbar() {
    return (
        <div>

<Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Image src = {logo} alt = "logo" roundedCircle height = "200px" width = "200px"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className = "ml-20x">PlayM8</Nav.Link>
          </Nav>
          <div className = "container">
          <Form inline className = "flex flex-right">
            <Button variant="success"><Link className = "landingNav-button" to="../organizer/login">Login</Link></Button>&nbsp;
            <Button variant="success"><Link className = "landingNav-button" to="../player/login">Player_Login</Link></Button>&nbsp;
            <Button variant="success"><Link className = "landingNav-button" to="../organizer/register">Register</Link></Button>
          </Form>
          </div>
         

        </Navbar.Collapse>
      </Navbar>
            
        </div>
    )
}
