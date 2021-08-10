import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "../../scss/addEvents.scss";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../scss/gamebutton.scss";
import "./AddPlayer.css";
import logo from "../../images/tabletennis.jpeg";
import WomenSinglesComponent from "./WomenSinglesComponent";
import MenTeamComponent from "./MensTeamComponent";
import AddMenSingles from "./AddMenSingles";
import WomensTeamComponent from "./WomensTeamComponents";

import axios from "axios";

export default function AddPlayer() {
  const [GameTitle, setGameTitle] = useState("");
  const [GameType, setGameType] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);
  const [AddedEvent, setAddedEvent] = useState("");
  const [Mensingles, setMensingles] = useState(true);
  const [Womensingles, setWomensingles] = useState(false);
  const [Mensteam, setMensteam] = useState(false);
  const [Womensteam, setWomensteam] = useState(false);

  const [PlayerFullName, setPlayerFullName] = useState("");
  const [PlayerSN, setPlayerSN] = useState("");
  const [PlayerRepresentation, setPlayerRepresentation] = useState("");
  const [singleForm, setSingleForm] = useState({});
  const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);
  const [TieSheetTie, setTieSheetTie] = useState(false);
  // const [validate, setValidate] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:5000/getAddedEvent").then((response) => {
      console.log("addedEvent", response);

      if (response.data.length === 0) {
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
      setAddedEvent(response.data[0]);
    });
  }, []);

  const MenSingles = () => {
    setMensingles(true);
    setWomensingles(false);
    setMensteam(false);
    console.log("true", Mensingles);
  };

  const WomenSingles = () => {
    setWomensingles(true);
    setMensingles(false);
    setMensteam(false);
    setWomensteam(false)
    console.log("true", Womensingles);
  };

  const MensTeam = () => {
    setMensteam(true);
    setWomensingles(false);
    setMensingles(false);
    setWomensteam(false)
    console.log("true", Womensingles);
  };

  const WomensTeam = () => {
    setWomensteam(true);
    setWomensingles(false);
    setMensingles(false);
    setMensteam(false)
    console.log("true", Womensingles);
  };

  const data = {
    PlayerFullName: PlayerFullName,
    PlayerSN: PlayerSN,
    PlayerRepresentation: PlayerRepresentation,
  };

  useEffect(() => {
    axios.get("http://localhost:5000/getMenSinglesPlayer").then((response) => {
      setMenSinglesPlayer(response.data);
      console.log("mens", MenSinglesPlayer);
    });
  }, [MenSinglesPlayer]);

  const addPlayer = () => {
    console.log("data", data);
    axios
      .post("http://localhost:5000/players_entry/menssingles", data)
      .then((response) => {
        console.log("response", response);
      });

    singleForm.reset();
  };

  return (
    <div>
      <NavBar />

      {ShowAlert === false && (
        <div className="alert alert-danger">
          <h4 className="alert-heading">
            Hello Oraganizer. Sorry to Say THAT !!
          </h4>
          <p>You haven't added event for Table Tennis for players entry.</p>
          <hr></hr>

          <p>Thank You !!!</p>
        </div>
      )}

      {ShowAlert === true && (
        <div className="container mt-10x">
          <div className="flex flex-center">
            <div className="col-lg-3">
              <Card bg="" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={logo} className="card-img-top" />
                <Card.Body>
                  <Card.Title className="cardtitle">Play M8</Card.Title>
                  <p>
                    <h6 className="card-title">{AddedEvent.GameTitle}</h6>
                  </p>
                  {/* <p>  <h7 className="card-title">bla</h7></p>
    <p>  <h7 className="card-title">bla bla</h7></p> */}
                  <Card.Text>{AddedEvent.Description}</Card.Text>
                  <Button className="btn" variant="success">
                    View details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="mb-20x">
            <button className="Games" onClick={MenSingles}>
              {" "}
              Men Singles
            </button>
            <button className="Games" onClick={WomenSingles}>
              {" "}
              Womens Singles
            </button>
            <button className="Games" onClick={MensTeam}>
              {" "}
              Mens Team
            </button>
            <button className="Games" onClick={WomensTeam}> Womes Team</button>
            <button className="Games"> Mens Doubles</button>
            <button className="Games"> Womens Doubles</button>
            <button className="Games"> Mix Doubles</button>
          </div>
        </div>
      )}

      {Mensingles == true && (
        <div className="container addPlayer">
          <span className="flex flex-center fs-20 mb-20x font-upper font-primary">
            Men Singles Players Entry Form
          </span>
          <Form ref={(form) => setSingleForm(form)}>
            <Form.Group>
              <Form.Label className="flex flex-left fw-bold">
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Player Full Name"
                onChange={(event) => {
                  return setPlayerFullName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="flex flex-left fw-bold">Id.</Form.Label>
              <Form.Control
                type="number"
                placeholder="SN number"
                onChange={(event) => {
                  return setPlayerSN(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="flex flex-left fw-bold ">
                Club/School/College
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Player Representation"
                onChange={(event) => {
                  return setPlayerRepresentation(event.target.value);
                }}
              />
            </Form.Group>
          </Form>

          <button
            className="btn btn-primary border border-success"
            onClick={addPlayer}
          >
            Add Player
          </button>
        </div>
      )}

      {Mensingles == true && (
        <div>
          {MenSinglesPlayer.length > 0 && (
            <div className="container border border-primary mt-10x">
              <span className="fs-20 flex flex-center mt-20x mb-20x">
                Players For Mens Singles
              </span>
              <div>
                {(MenSinglesPlayer || []).map((playerData, index) => (
                  <div key={index}>
                    {console.log("MMM", playerData)}
                    <AddMenSingles playerData={playerData} index={index} />
                  </div>
                ))}
              </div>

              <button
                className="btn btn-primary flex flex-center"
                // onClick={makeTieSheet}
              >
                Make Tie sheet
              </button>
            </div>
          )}
        </div>
      )}

      {Womensingles === true && (
        <div>
          <WomenSinglesComponent />
        </div>
      )}

      {Mensteam === true && (
        <div>
          <MenTeamComponent />
        </div>
      )}

    {   Womensteam === true && (
        <div>
          <WomensTeamComponent />
        </div>
      )}





      <Footer />
    </div>
  );
}
