import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import logo from '../images/tabletennis.jpeg'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Image src = {logo} alt = "logo" roundedCircle height = "200px" width = "200px"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className = "ml-20x">Home</Nav.Link>
            <Nav.Link href="/dashboard/account" className = "ml-40x">Account</Nav.Link>
            <Nav.Link href="/dashboard/addEvents" className = "ml-40x">Add Events</Nav.Link>
            <NavDropdown title="Players Entry" id="basic-nav-dropdown" className = "ml-40x">
              <NavDropdown.Item href="/dashboard/players_entry/menssingles">Mens Singles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women's Singles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mens Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women's Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mens Doubles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Womens Doubles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mix Doubles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">School Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 ml-40x" />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Navbar.Brand>Hello Organizer !!!</Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    )
}
