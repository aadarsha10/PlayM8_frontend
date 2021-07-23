import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import {Form, Row, Col} from "react-bootstrap";
import "../scss/Registration.scss"
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import { Link, useHistory } from 'react-router-dom'

const RegistrationOrganizer = () => {
  const [Fullname, setFname] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [response1, setResponse] = useState("");
  const [checkLogin, setLoginCheck] = useState(false);


  console.log("fullname", Fullname)

  const registerorganizer = (e) => {

    e.preventDefault()
    console.log(Fullname, Email, Contact, Username)
    const data = {
      Fullname: Fullname,
      Contact: Contact,
      Address: Address,
      Email: Email,
      Username: Username,
      Password: Password
    }

    console.log("data", data)

    axios.post("http://localhost:90/organizer/register", data).then(response => {
      console.log("response", response.data.message)
     
      if (response.data.message == "Registered") {
        alert("You have successfully Registered ")
        setLoginCheck(true);
      }

      else{
          alert(response.data.message)
      }
      
    //   goToLogin()
    }).catch(error => {
      console.log(error)
    })

    
    
   
  }

  const history = useHistory()
  const goToLogin = () => {
    history.push("/login");
  }

  return (
    <div>

        <NavBar />
        <span className="flex flex-center fs-30 mb-20x mt-30x font-upper font-primary">
        Organizer Registration
      </span>
      {
        !checkLogin &&

        <div className = "container border border-success pt-10x pb-10x pr-10x pl-10x" >
        
            <Form>
                            <Row className="mb-3">
                    <Form.Group as = {Col} controlId="fullName">
                        <Col md="auto">
                        <Form.Label className = "label">Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Player Full Name"
                            onChange={(event) => {
                                return setFname(event.target.value);
                            }}
                        />
                    </Col>
                   
                    </Form.Group>

                    <Form.Group as={Col} controlId="contact">
                    <Col md="auto">
                    <Form.Label className = "label">Contact</Form.Label>
                    <Form.Control type="number" placeholder="Contact Number"  
                    onChange={(event) => {
                                return setContact(event.target.value);
                            }} />
                    </Col>
                    </Form.Group>
                </Row>

                            <Form.Group className="mb-3" controlId="address">
                <Form.Label className = "label">Address</Form.Label>
                <Form.Control placeholder="Street, City"
                 onChange={(event) => {
                    return setAddress(event.target.value);
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Col sm = {5}>
                <Form.Label className = "label">Email</Form.Label>
                <Form.Control placeholder="Enter Your Email" 
                 onChange={(event) => {
                    return setEmail(event.target.value);
                }}/>
                </Col>
               
            </Form.Group>

            <Row className="mb-3">
                    <Form.Group as = {Col} controlId="userName">
                        <Col md="auto">
                        <Form.Label className = "label">Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Username" 
                     onChange={(event) => {
                        return setUsername(event.target.value);
                    }}/>
                    </Col>
                   
                    </Form.Group>

                    <Form.Group as={Col} controlId="password">
                    <Col md="auto">
                    <Form.Label className = "label">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                     onChange={(event) => {
                        return setPassword(event.target.value);
                    }}/>
                    </Col>
                    </Form.Group>
                </Row>

            <Row>
                <Col sm = {12} id= "btnRegister" className = "flex flex-center">
                <button
          className="btn btn-primary border border-success" onClick = {registerorganizer}
          
        >
          Register
        </button></Col>
            
            </Row>
                

            </Form>

           

        </div>
       
      }
      {
        checkLogin &&
        goToLogin()
      }
    </div>
  )
};

export default RegistrationOrganizer;


