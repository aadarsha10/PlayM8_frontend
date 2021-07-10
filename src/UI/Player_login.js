import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../scss/Registration.scss";
import { Form } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";

export default function Player_login() {
  const [GameTitle, setGameTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);
  // const [validate, setValidate] = useState(false)

  console.log("gameTitle", GameTitle);

  const data = {
    GameTitle: GameTitle,
    Image: "Image.jpg",
    Description: Description,
  };

  const addEvent = (e) => {
    e.preventDefault();

    axios.post("http://localhost:80/addEvent", data).then((response) => {
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
        <div className="alert alert-danger">
          <h4 className="alert-heading">
            Hello Oraganizer. Sorry to Say THAT !!
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
          
          <div className="register">
           <form>
             <h1>Register</h1>
           <div class="row">
                   <div class="form-group col-md-6">
                            <Form.Label for="inputEmail4">FullName</Form.Label>
                              <Form.Control
                                type="text"  placeholder="Enter your Full name"
                                 onChange={(event) => {
                                 return setGameTitle(event.target.value);
                                }}/>
                   </div>
                   <div class="form-group col-md-6">
      
      <Form.Label for="inputEmail4">Email</Form.Label>
    <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  onChange={(event) => {
                    return setGameTitle(event.target.value);
                  }}
                />
      
      </div>
      </div>
      <div class="row">
                   <div class="form-group col-md-6">
                            <Form.Label for="inputEmail4">Address</Form.Label>
                              <Form.Control
                                type="text"  placeholder="Enter your Address"
                                 onChange={(event) => {
                                 return setGameTitle(event.target.value);
                                }}/>
                   </div>
                   <div class="form-group col-md-6">
      
      <Form.Label for="inputEmail4">Contact Number</Form.Label>
    <Form.Control
                  type="text"
                  placeholder="Enter your contact number"
                  onChange={(event) => {
                    return setGameTitle(event.target.value);
                  }}
                />
      
      </div>
      </div>
      <div class="row">
                   <div class="form-group col-md-6">
                            <Form.Label for="inputEmail4">Username</Form.Label>
                              <Form.Control
                                type="text"  placeholder="Enter your username"
                                 onChange={(event) => {
                                 return setGameTitle(event.target.value);
                                }}/>
                   </div>
                   <div class="form-group col-md-6">
      
      <Form.Label for="inputEmail4">Password</Form.Label>
    <Form.Control
                  type="text"
                  placeholder="Enter your password"
                  onChange={(event) => {
                    return setGameTitle(event.target.value);
                  }}
                />
      
      </div>
      </div>
           </form>

            <button
              className="btn btn-primary border border-success registerbtn"
              onClick={addEvent}
            >
             Register
            </button>
          </div>
        </div>
      )}
      {ShowAlert === true && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Hello Oraganizer. Congratulations!!</h4>
          <p>
            You have Successfully been registered. Please check account
            section to
          </p>
          <hr></hr>

          <p>Thank You !!!</p>
        </div>
      )}
    </div>
  );
}
