import React, { useState } from "react";
import NavBar from "./NavBar";
import "../scss/Registration.scss";
import { Form } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";

export default function Registration() {
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
          <span className="flex flex-center fs-20 mb-20x font-upper font-primary">
            Fill Up The Form
          </span>
          <div className="container addEvents border border-success">
            <Form>
              <Form.Group controlId="">
                <Form.Label>Game Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title of your Event"
                  onChange={(event) => {
                    return setGameTitle(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.File id="" label="Select Image For Title" />
                <span className="suggestion-text">
                  Please choose in jpg Format
                </span>
              </Form.Group>

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
            </Form>

            <button
              className="btn btn-primary border border-success"
              onClick={addEvent}
            >
              Add Event
            </button>
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
