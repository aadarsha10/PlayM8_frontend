import React, { useState, useEffect } from "react";
import C_events_sports from "./C_events_sports";
import C_NavBar from "./C_NavBar";
import "./Main_Events.css";
import logo from "../../images/tabletennis.jpeg"
import axios from "axios";
export default function C_Events() {


  const [activeClass, setClass] = useState("");
  const [AddedEvent, setAddedEvent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getAddedEvent").then((response) => {
          console.log("addedEvent", response);
    
        //   if (response.data.length === 0) {
        //     setShowAlert(false);
        //   } else {
        //     setShowAlert(true);
        //   }
          setAddedEvent(response.data);
          console.log("loop", AddedEvent[0])

        });
      }, []);


  return (
    <div>
      <C_NavBar />

      <C_events_sports />

      <div className="container main">
        <div className="main-div-events-all">
          <div className="upcoming mt-15x pl-20x col-12">
            <span className = "float float-left">UPCOMING EVENTS</span>
          </div>
        </div>
        {
        
         AddedEvent.map((addedEvents, index) => (
             <div key = {index}>
        
        <div className ="main-event col-7 mt-20x flex">
            <div className = "col-9 sub-main-event">
                <span className = "GameTitle">{AddedEvent[index].GameTitle}</span>

                <div className ="event-details col-12 flex mt-20x">
                <span className = "event-sub-title">{AddedEvent[index].Prize}</span>
                <span className = "event-sub-title pl-50x">{AddedEvent[index].GameDate}</span>
                <span className = "event-sub-title pl-40x">{AddedEvent[index].Venue}</span>
            </div>

            <div className ="event-details col-12 flex label">
                <span className = "event-sub-details ">Prize Pool</span>
                <span className = "event-sub-details pl-50x">Dates</span>
                <span className = "event-sub-details pl-90x">Venue</span>
            </div>
            </div>

            <div className = "col-3 sub-main-event-2">
                <img src = {logo}></img>
            </div>

        </div>
        </div>
         ))}
      </div>
    </div>
  );
}
