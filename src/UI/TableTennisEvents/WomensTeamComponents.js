import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const WomensTeamComponent = () => {
  const [PlayerSN, setPlayerSN] = useState("");
  const [PlayerRepresentation, setPlayerRepresentation] = useState("");
  const [singleForm, setSingleForm] = useState({});
  const [WomensTeam, setWomesTeam] = useState([]);
  const [TieSheetTie, setTieSheetTie] = useState(false);

  return (
    <div className="container addPlayer">
      <span className="flex flex-center fs-20 mb-20x font-upper font-primary">
        Womens Team Entry Form
      </span>
      <Form ref={(form) => setSingleForm(form)}>
       

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
        Add Womens Team
      </button>
    </div>
  );
};

export default WomensTeamComponent;
