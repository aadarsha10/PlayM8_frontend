import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../scss/addEvents.scss";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../scss/gamebutton.scss";
import "./AddPlayer.css"
import logo from "../images/tabletennis.jpeg";

import { Form } from "react-bootstrap";

// import Alert from 'react-bootstrap/Alert'
import axios from "axios";

export default function AddPlayer() {
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

  const [AddedEvent, setAddedEvent] = useState("");

  const [ShowAlert, setShowAlert] = useState(null);
  // const [validate, setValidate] = useState(false)

 
  useEffect(() => {
    axios.get("http://localhost:5000/getAddedEvent").then((response) => {
      console.log("addedEvent", response);
    
      if(response.data.length === 0)
      {
          setShowAlert(false)
      }
      else{
          setShowAlert(true)
      }
      setAddedEvent(response.data[0]);
      console.log(AddedEvent);
    });
  }, []);
  return (
   <div>
    <NavBar />

    {
        ShowAlert === false  &&

        <div className="alert alert-danger">
        <h4 className="alert-heading">
          Hello Oraganizer. Sorry to Say THAT !!
        </h4>
        <p>
          You haven't added event for Table Tennis for players entry.
        </p>
        <hr></hr>

        <p>Thank You !!!</p>
      </div>
    }

  {
      ShowAlert === true &&
  
  <div className="container flex flex-center">
  <div className="row">
    <div className="col-lg-3 ">
    <Card bg="" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo} className="card-img-top"  />
   <Card.Body>
    <Card.Title className="cardtitle">Play M8</Card.Title>
    <p><h6 className="card-title">{ AddedEvent.GameTitle}</h6></p>
    {/* <p>  <h7 className="card-title">bla</h7></p>
    <p>  <h7 className="card-title">bla bla</h7></p> */}
    <Card.Text>
     {AddedEvent.Description}
    </Card.Text>
    <Button className="btn" variant="success">View details</Button>
  </Card.Body>
</Card>
    </div>
    
    
  </div>
</div>
}

<div className="TableTennis">
      
      <button className="Games">
        Men Single
      </button>
      <button className="Games">
        Female Single
      </button>
      <button className="Games">
        Men Double
      </button>
      <button className="Games">
        Female Double
      </button>
      <button className="Games">
        Men Team
      </button>
      <button className="Games">
        Female Team
      </button>
      <button className="Games">
        Mix Double
      </button>
      </div>


 <Footer/>
 </div>
    
  )
}
 
