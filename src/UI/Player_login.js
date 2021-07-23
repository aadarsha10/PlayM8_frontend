import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../scss/Registration.scss";
import { Form } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";

export default function Player_login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);
  // const [validate, setValidate] = useState(false)

  const data = {
    Username: Username,
    Password: Password
  };

  const LoginPlayer = (e) => {
    e.preventDefault();

    axios.post("http://localhost:90/player/login", data).then((response) => {
      console.log("response", response);

      if (response.data.message === "Fields Must not be Empty") {
        setShowAlert(false);
      } else {
        alert("Event Added Successfully");
        setShowAlert(true);
        console.log("alert", ShowAlert);
      }
    });
  };

  return (
    <div>
      <NavBar />
      {ShowAlert === false && (
        <div className="alert alert-danger container">
          <h4 className="alert-heading">
            Hello Player. Sorry to Say THAT !!
          </h4>
          <p>
            You have failed to insert correct data. You must fill all the fields
            in the form
          </p>
          <hr></hr>

          <p>Thank You !!!</p>
        </div>
      )}
      {ShowAlert === null && (
        <div>

          <div className="register container">
            <form>
              <h1 style={{ color: '#23978e', fontWeight: 'bolder' }}>Login</h1>
              <div class="login container">
                <div class="form-group">
                  <Form.Label for="inputEmail4">Username</Form.Label>
                  <Form.Control
                    type="text" placeholder="Enter your Username"
                    onChange={(event) => {
                      return setUsername(event.target.value);
                    }} />
                </div>
                <div class="form-group">

                  <Form.Label for="inputEmail4">Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your password"
                    onChange={(event) => {
                      return setPassword(event.target.value);
                    }}
                  />

                </div>
              </div>


              <div className="text-center">

                <button className="btn btn-primary registerbtn text-center mb-3" style={{ backgroundColor: '#23978e', border: 'none' }} onClick={LoginPlayer}>
                  Login
                </button>
              </div>

            </form>

          </div>
        </div>
      )}
      {ShowAlert === true && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Hello Player. Congratulations!!</h4>
          <p>
            You have Successfully been logged in.
          </p>
          <hr></hr>

          <p>Thank You !!!</p>
        </div>
      )}
    </div>
  );
}
