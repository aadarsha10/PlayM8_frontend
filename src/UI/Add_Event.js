import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../scss/addEvents.scss";
import { Form } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";

export default function Add_Event() {
  const [GameTitle, setGameTitle] = useState("");
  const [GameType, setGameType] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);
  // const [validate, setValidate] = useState(false)

  console.log("gameTitle", GameTitle);

  const data = {
    GameTitle: GameTitle,
    GameType:GameType,
    Image: "Image.jpg",
    Description: Description,
  };

  const Add_Event = (e) => {
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
          <span className="container-fluid">
           
          </span>
          <div className="row con">
            <div className="cont">
              </div>
          <div className="container">
            <Form>
              <div className="title">
            <h3>Add your Event</h3>
            </div>
                
            <div className="holder">
              <Form.Group controlId="">
                <p>Enter the Title of your event</p>
                <Form.Control
                  type="text"
                  placeholder="Title of your Event"
                  onChange={(event) => {
                    return setGameTitle(event.target.value);
                  }}
                />
              </Form.Group>
              </div>
              <div className="holder">
              <Form.Group controlId="">
               <p>Choose the type of the game for the event</p>
                <Form.Control
                  type="text"
                  placeholder="Enter the game type"
                  onChange={(event) => {
                    return setGameType(event.target.value);
                  }}
                />
              </Form.Group>
              </div>
              
              <div className="holder">
              <Form.Group>
              <Form.Label>Select poster For event</Form.Label>
              <div className="poster">
                <Form.File id="" label=""  />
                </div>
              </Form.Group>
              </div>

              <div className="holder">
              <Form.Group controlId="">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Details of your event including date, time, venue"
                  onChange={(event) => {
                    return setDescription(event.target.value);
                  }}
                />
              </Form.Group>
              </div>
            </Form>

            <button 
              className="btn  border border-success"
              onClick={Add_Event}
            >
              Add Event
            </button>
          </div>
          </div>
        </div>
      )}
      {ShowAlert === true && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Hello Oraganizer. Congratulations!!</h4>
          <p>
            You have Successfully Entered your Event. Please check account
            section to
          </p>
          <hr></hr>

          <p>Thank You !!!</p>
        </div>
      )}
    </div>
  );
}
 
