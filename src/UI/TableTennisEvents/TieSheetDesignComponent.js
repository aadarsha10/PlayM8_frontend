import React, { useState, useEffect } from "react";
import "../TableTennisEvents/TieSheet.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";

export default function TieSheetDesignComponent({ match, index }) {
  const [MenSinglesFirstRound, setMenSinglesFirstRound] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/getMenSinglesPlayer").then((response) => {
      setMenSinglesFirstRound(response.data);
      console.log("mens", MenSinglesFirstRound);
    });
  }, [MenSinglesFirstRound && MenSinglesFirstRound.length]);

  const groupedPlayers = _.groupBy(MenSinglesFirstRound, "PlayerSlot");

  console.log("grouped pLayers", groupedPlayers);
  console.log("match", match);

  const key1 = match[0];
  const key2 = match[1];

  console.log("score", score);

  return (
    <div>
      <div className="container-fluid main-tiesheet">
        <div className="col-4 matches flex">
          <div className="table-score">
            <Table striped bordered hover className="pt-15x">
              <div>
                <thead width="100px">
                  <tr width="100px">
                    <th width="10px" className="pb-10x">
                      {"Match"}
                    </th>
                    <th width="10px" className="pb-10x">
                      {!_.isEmpty(groupedPlayers[key1]) &&
                        groupedPlayers[key1][0].PlayerFullName}
                    </th>
                    {/* <th width="300px">Santoo Shrestha</th> */}
                    <th width="50px">
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        className="score-width"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                      ></input>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pb-5x">{index + 1}</td>
                    <td>
                      {!_.isEmpty(groupedPlayers[key2]) &&
                        groupedPlayers[key2][0].PlayerFullName}
                      {_.isEmpty(groupedPlayers[key2]) && "BYE"}
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        className="score-width"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </div>
            </Table>
          </div>

          <div className="time-button"></div>
        </div>
      </div>
    </div>
  );
}
