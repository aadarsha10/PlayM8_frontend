import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const WomenSinglesComponent = () => {
  const [PlayerFullName, setPlayerFullName] = useState("");
  const [PlayerSN, setPlayerSN] = useState("");
  const [PlayerRepresentation, setPlayerRepresentation] = useState("");
  const [singleForm, setSingleForm] = useState({});
  const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);
  const [TieSheetTie, setTieSheetTie] = useState(false);


  

  return (
    <div className="container addPlayer">
      <span className="flex flex-center fs-20 mb-20x font-upper font-primary">
        Womens Singles Players Entry Form
      </span>
      <Form ref={(form) => setSingleForm(form)}>
        <Form.Group>
          <Form.Label className="flex flex-left fw-bold">Full Name</Form.Label>
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

      <button className="btn btn-primary border border-success">
        Add Player
      </button>
    </div>
  );
};

export default WomenSinglesComponent;
