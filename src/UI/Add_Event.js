import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import "../scss/addEvents.scss";
import { Form } from "react-bootstrap";
import Footer from "../Components/Footer";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import cap from '../images/leb.png'

export default function Add_Event() {
  const [GameTitle, setGameTitle] = useState("");
  const [GameDate, setDate] = useState("");
  const [Prize, setPrize] = useState("");
  const [Venue, setVenue] = useState("");
  const [GameType, setGameType] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);
  


  const Username = localStorage.getItem('username')

  
  const data = {
    GameTitle: GameTitle,
    GameType: GameType,
    Image: "Image.jpg",
    Date : GameDate,
    Prize : Prize,
    Venue : Venue,
    Description: Description,
    Username : Username
  };

  const Add_Event = (e) => {
    e.preventDefault();

    console.log("addd event data", data);

    axios
      .post("http://localhost:5000/organizer/addEvent", data)
      .then((response) => {
        console.log("response", response);

        if (response.data.message === "success") {
        //   alert("Event Added Successfully");
        toast("Event Added Successfully")
          setShowAlert(true);
          console.log("alert", ShowAlert);
        } else {
          setShowAlert(false);
        }
      });
  };

  return (
    <div>
     <NavBar />
      {ShowAlert === false && (
        <div className="alert alert-danger">
          <h4 className="alert-heading">
            Hello {Username}. Sorry to Say THAT !!
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
        <div className="container mt-20x ">
          <div className="row">
            <div className="col-md-5 pic">
              <img
                src={cap}
                style={{ height: "902px", width: "800px" }}
              ></img>
            </div>

            <div className="col-md-7 form m-auto ">
              <br />
              <h1 className ="title">Add your Event</h1>
              <br />
              <div className="contact-form">
                <div className="form-group ">
                  <label className="control-label col-sm-8 title" htmlFor="fname">
                    Event Title
                  </label>
                  <div className="col-sm-6 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="eName"
                      placeholder="Enter Your Event"
                      name="fname"
                      onChange={(event) => {
                        return setGameTitle(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-6 mx-auto">
                  <label id="gameType" for="exampleFormControlSelect1" className = "title">Game type</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(event) => {
                      return setGameType(event.target.value);
                    }}
                  >
                    <option>Football</option>
                    <option>Table Tennis</option>
                    <option>Basketball</option>
                    <option>Badminton</option>
                    <option>Lawn Tennis</option>
                  
                  </select>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-4 title" htmlFor="email">
                    Event Poster
                  </label>
                  <div className="col-sm-6 mx-auto">
                    <input
                      type="file"
                      className="form-control"
                      id="ePoster"
                      placeholder="Enter email"
                      name="email"
                      onChange={(event) => {
                        return setDescription(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <label className="control-label col-sm-2 title" htmlFor="fname">
                    Dates
                  </label>
                  <div className="col-sm-6 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      placeholder="Eg : 21june 2021 - 26june 2021 "
                      name="date"
                      onChange={(event) => {
                        return setDate(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <label className="control-label col-sm-5 title" htmlFor="fname">
                    Prize-Pool
                  </label>
                  <div className="col-sm-6 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="prize"
                      placeholder="Eg: Rs 100000"
                      name="prize"
                      onChange={(event) => {
                        return setPrize(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group ">
                  <label className="control-label col-sm-2 title" htmlFor="fname">
                    Venue
                  </label>
                  <div className="col-sm-6 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="venue"
                      placeholder="Eg : Lainchour Table Tennis"
                      name="venue"
                      onChange={(event) => {
                        return setVenue(event.target.value);
                      }}
                    />
                  </div>
                </div>
             
                <div className="form-group">
                  <label className="control-label col-sm-2 title" htmlFor="comment">
                    Description
                  </label>
                  <div className="col-sm-8 mx-auto">
                    <textarea
                      className="form-control"
                      placeholder="Description of your event"
                      rows={5}
                      id="comment"
                      defaultValue={""}
                      onChange={(event) => {
                        return setDescription(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-1 col-sm-8 mx-auto p-2">
                    <button
                    id="submit"
                      type="submit"
                      className="btn btn-success"
                      onClick={Add_Event}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {ShowAlert === true && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Hello {Username}. Congratulations!!</h4>
          <p>
            You have Successfully Entered your Event. <b><u>PLEASE CHOOSE YOUR SPORT</u></b> for players entry
            
          </p>
          <hr></hr>

          <p>Thank You !!!</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
