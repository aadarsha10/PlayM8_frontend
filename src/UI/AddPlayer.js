import React, { useState } from "react";
import LandingNavbar from "../Components/LandingNavbar";
import Footer from "../Components/Footer";
import "../scss/addEvents.scss";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../scss/gamebutton.scss";
import "./AddPlayer.css"

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

  const Add_Event = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3000/AddPlayer", data).then((response) => {
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
    <LandingNavbar/>
  
  <div className="container">
  <div className="row">
    <div className="col-lg 3 ">
    <Card bg="" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="images/img1.jpg" className="card-img-top"  />
   <Card.Body>
    <Card.Title className="cardtitle">Play M8</Card.Title>
    <p><h6 className="card-title">{ Image.Image}</h6></p>
    <p>  <h7 className="card-title">{GameTitle.GameTitle}</h7></p>
    <p>  <h7 className="card-title">{GameType.GameType}</h7></p>
    <Card.Text>
     Details of the events.
    </Card.Text>
    <Button className="btn" variant="success">View details</Button>
  </Card.Body>
</Card>
    </div>
    
    
  </div>
</div>

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
 
