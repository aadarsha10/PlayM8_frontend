import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../scss/gamebutton.scss";

// import Alert from 'react-bootstrap/Alert'
import axios from "axios";



export default function MenDouble() {
  const [FullName, setPlayerFullName] = useState("");
  const [PlayerId, setPlayerId] = useState("");
const [PlayerClub, setPlayerClub] = useState("");

const data = {
  FullName: FullName,
  PlayerId: PlayerId,
  PlayerClub: PlayerClub,
};


  

  return (
    <div>
     <div className="col-md-7 forms mx-auto ">
              <br />
              <h1>Add Player for Men Single</h1>
              <br />
              <div className="contact-form">
                <div className="form-group ">
                  <label className="control-label col-sm-2" htmlFor="fname">
                     Full Name
                  </label>
                  <div className="col-sm-6 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Enter name of the player"
                      name="fname"
                      onChange={(event) => {
                        return setPlayerFullName(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-6 mx-auto">
                  <label for="exampleFormControlSelect1">Player's Id</label>
                  <input
                    class="form-control"
                    id="exampleFormControlSelect1"
                    placeholder="Enter the Id of the player"
                    onChange={(event) => {
                      return setPlayerId(event.target.value);
                    }}
                    ></input>
                    </div><br/>

                    <div className="col-sm-6 mx-auto">
                  <label for="exampleFormControlSelect1">Player's Club</label>
                  <input
                    class="form-control"
                    id="exampleFormControlSelect1"
                    placeholder="Enter the club of the player"
                    onChange={(event) => {
                      return setPlayerClub(event.target.value);
                    }}
                    ></input>
                    </div><br/>
              
               
                     
                 
                   
                
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-6 mx-auto p-2">
                    <button
                      type="submit"
                      className="btn btn-success"
                      // onClick={}
                    >
                      Submit
                    </button>
                  </div>
                  </div>
                  </div>
                  </div>
         
    
    </div>



  );
}
