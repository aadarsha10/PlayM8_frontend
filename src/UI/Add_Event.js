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

    axios.post("http://localhost:3000/AddEvent", data).then((response) => {
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
          <div className="container">
            
<div className="row">
            <div className="col-md-4 pic">
            <img src="./Capture.png" style={{height:'550px',width:'400px'}} ></img>
            </div>
        

        <div className="col-md-8 form mx-auto "><br/>
        <h1>Add your Event</h1><br/>
  <div className="contact-form">
    <div className="form-group ">
      <label className="control-label col-sm-2" htmlFor="fname" >Event Title</label>
      <div className="col-sm-6 mx-auto">          
        <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(event) => {
        return setGameTitle(event.target.value)
      }}/>
      </div>
    </div>
    

    <div className="col-sm-6 mx-auto">
    <label for="exampleFormControlSelect1">Game type</label>
    <select class="form-control" id="exampleFormControlSelect1"  onChange={(event) => {
        return setGameTitle(event.target.value)
      }}>
      <option>Football</option>
      <option>Table Tennis</option>
      <option>Basketball</option>
      <option>Chess</option>
      <option>Swimming</option>
    </select>
  </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Event Poster</label>
      <div className="col-sm-6 mx-auto">
        <input type="file" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(event) => {
        return setDescription(event.target.value)
      }} />
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="comment">Description</label>
      <div className="col-sm-6 mx-auto">
        <textarea className="form-control" rows={5} id="comment" defaultValue={""} onChange={(event) => {
        return setDescription(event.target.value)
      }} />
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-6 mx-auto p-2">
        <button type="submit" className="btn btn-success" onClick={Add_Event}>Submit</button>
      </div>
    </div>
  </div>
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
 
