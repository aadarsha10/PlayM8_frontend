import React, { useState } from "react";
import C_events_sports from "./C_events_sports";
import C_NavBar from "./C_NavBar";
import "./Main_Events.css";
import logo from "../../images/tabletennis.jpeg"
export default function C_Events() {
  const [activeClass, setClass] = useState("");

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
        <div className ="main-event col-6 mt-20x flex">
            <div className = "col-9 sub-main-event">
                <span className = "GameTitle">Title of the tournament</span>

                <div className ="event-details col-12 flex mt-20x">
                <span className = "event-sub-title">Rs100000</span>
                <span className = "event-sub-title pl-50x">20jun-28jun</span>
                <span className = "event-sub-title pl-40x">Lainchour</span>
            </div>

            <div className ="event-details col-12 flex">
                <span className = "event-sub-details ">Prize Pool</span>
                <span className = "event-sub-details pl-50x">Date</span>
                <span className = "event-sub-details pl-90x">Venue of the event</span>
            </div>
            </div>

            <div className = "col-3 sub-main-event-2">
                <img src = {logo}></img>
            </div>

        </div>
      </div>
    </div>
  );
}
