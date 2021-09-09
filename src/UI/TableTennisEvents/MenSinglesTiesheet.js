import React, { useState, useEffect } from "react";
import _, { matches } from "lodash";
import seeding from "seeding";
import axios from "axios";
import NavBar from "../../Components/NavBar";

export default function MenSinglesTiesheet() {
  const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getMenSinglesPlayer").then((response) => {
      setMenSinglesPlayer(response.data);
      console.log("mens", MenSinglesPlayer);
    });
  }, []);

  //   const sortedPlayer = _.sortBy(MenSinglesPlayer, ["PlayerSlot"]);

  //   const tie = seeding.fair(sortedPlayer)

  const NUMBER_OF_PARTICIPANTS = MenSinglesPlayer.length;

  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };
  }

  var participants = Array.from(
    { length: NUMBER_OF_PARTICIPANTS },
    (v, k) => k + 1
  );
  var drawMatches = getBracket(participants);

  console.log("drawMatches", drawMatches);

  function getBracket(participants) {
    var participantsCount = participants.length;
    var rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));
    var bracketSize = Math.pow(2, rounds);
    var requiredByes = bracketSize - participantsCount;

    console.log("Number of participants: {0}".format(participantsCount));
    console.log("Number of rounds: {0}".format(rounds));
    console.log("Bracket size: {0}".format(bracketSize));
    console.log("Required number of byes: {0}".format(requiredByes));

    if (participantsCount < 2) {
      return [];
    }

    var matches = [[1, 2]];

    for (var round = 1; round < rounds; round++) {
      var roundMatches = [];
      var sum = Math.pow(2, round + 1) + 1;

      for (var i = 0; i < matches.length; i++) {
        var home = changeIntoBye(matches[i][0], participantsCount);
        var away = changeIntoBye(sum - matches[i][0], participantsCount);
        roundMatches.push([home, away]);
        home = changeIntoBye(sum - matches[i][1], participantsCount);
        away = changeIntoBye(matches[i][1], participantsCount);
        roundMatches.push([home, away]);
      }
      matches = roundMatches;
    }

    return matches;
  }

  function changeIntoBye(seed, participantsCount) {
    //return seed <= participantsCount ?  seed : '{0} (= bye)'.format(seed);
    return seed <= participantsCount ? seed : null;
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className="container-fluid flex main-tiesheet">
          <div className="col-4 matches">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
