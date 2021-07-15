import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../scss/Registration.scss";
import { Form } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import { Link, useHistory } from 'react-router-dom'

export default function RegistrationOrganizer() {
  const [Fullname, setFname] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [response1, setResponse] = useState("");
  const [checkLogin, setLoginCheck] = useState(false);


  const registerorganizer = (e) => {

    e.preventDefault()
    console.log(Fullname, Email, Contact, Username)
    const data = {
      fullname: Fullname,
      contact: Contact,
      address: Address,
      email: Email,
      username: Username,
      password: Password
    }

    axios.post("http://localhost:5000/organizer/register", data).then(response => {
      console.log(response.data.message)
      setResponse(response.data.message)
      goToLogin()
    }).catch(error => {
      console.log(error)
    })

    console.log("response1", response1)

    if (response1 == "Registered") {
      alert("You have successfully Registered ")
      setLoginCheck(true);
    }
  }

  const history = useHistory()
  const goToLogin = () => {
    history.push("/login");
  }

  return (
    <div>
      {
        !checkLogin &&
        <div>
          <NavBar />
          <div className="register">
            <form>
              <h1>Register</h1>
              <div class="row">
                <div class="form-group col-md-6">
                  <Form.Label for="Fullname_input">FullName</Form.Label>
                  <Form.Control
                    type="text" placeholder="Enter your name"
                    onChange={(event) => {
                      return setFname(event.target.value);
                    }} />
                </div>
                <div class="form-group col-md-6">

                  <Form.Label for="Email_input">Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your email"
                    onChange={(event) => {
                      return setEmail(event.target.value);
                    }}
                  />

                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <Form.Label for="Address_input">Address</Form.Label>
                  <Form.Control
                    type="text" placeholder="Enter your Address"
                    onChange={(event) => {
                      return setAddress(event.target.value);
                    }} />
                </div>
                <div class="form-group col-md-6">

                  <Form.Label for="Email_input">Contact Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your contact number"
                    onChange={(event) => {
                      return setContact(event.target.value);
                    }}
                  />

                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <Form.Label for="username_input">Username</Form.Label>
                  <Form.Control
                    type="text" placeholder="Enter your username"
                    onChange={(event) => {
                      return setUsername(event.target.value);
                    }} />
                </div>
                <div class="form-group col-md-6">

                  <Form.Label for="password_input">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(event) => {
                      return setPassword(event.target.value);
                    }}
                  />

                </div>
              </div>
            </form>

            <button
              className="btn btn-primary border border-success registerbtn"
              onClick={registerorganizer}>
              Register
            </button>
          </div>
        </div>
      }
      {
        checkLogin &&
        goToLogin()
      }
    </div>
  );
}