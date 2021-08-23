import React, { useState } from "react";
// import SideBarComponent from "../../UI/Landing/SideBarComponent";
import SideBarComponent from "../Landing/SideBarComponent";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../../Components/Org_Login.css";
// import './playerRanking.css'
import { TextField, Checkbox, Switch, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
// const theme = createMuiTheme({
//     palette: {
//         type: "dark"
//     }
// });
export default function AddPlayerRank() {
  const filehandler = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImage(e.target.files[0]);
    }
  };
  const [fullname, setFullname] = useState("");
  const [topRankSwitch, settopRankSwitch] = useState(false);
  const [Rank, setRank] = useState("");
  const [Representation, setRepresentation] = useState("");
  const [image, setImage] = useState("");
  const [validationError, setError] = useState("");
  const [checkLogin, setLoginCheck] = useState(false);
  const playerRankingAdd = (e) => {
    e.preventDefault();
    const rankData = new FormData();
    rankData.append("image", image);
    rankData.append("fullName", fullname);
    rankData.append("topRankSwitch", topRankSwitch);
    rankData.append("Rank", Rank);
    rankData.append("Representation", Representation);
    // data.append("Username", Username)


    console.log("data", rankData);

    axios
      .post("http://localhost:5000/admin/playerRank/MenSingles", rankData)
      .then((response) => {
        console.log("response", response.data.message);

        if (response.data.message === "Player Rank Added") {
          alert("Player ranking saved successfully");
          setLoginCheck(true);
        } else {
          const valerror = response.data.message;
          setError(valerror);
          console.log("Errorrrrr", validationError);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useHistory();
  const goToLogin = () => {
    history.push("/admin/login");
  };
  return (
    // <ThemeProvider theme={theme}>
    <div className="container-fluid main-div">
      <div className="container left-div col-2 flex flex-center">
        <SideBarComponent />
      </div>

      {!checkLogin && (
        <div className="container right-div col-10 flex flex-center pl-400x">
          <div className="container shadow mt-4">
            <div className="outer mt-0x">
              <div className="inner">
                <form>
                  <h3 className="heading">Player Ranking</h3>
                  <div className="form-group">
                    <label>Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      onChange={(event) => {
                        return setFullname(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Rank</label>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      placeholder="Player Rank"
                      onChange={(event) => {
                        return setRank(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Representation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Representation"
                      onChange={(event) => {
                        return setRepresentation(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="profile"
                      name="image"
                      placeholder="Insert a profile picture"
                      onChange={filehandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Top 5</label>
                    <Switch
                      onChange={(event) => {
                        return settopRankSwitch(event.target.checked);
                      }}
                      name="topRankSwitch"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </div>

                  {/* <div className="form-group">
                                        <label>Top rank checkbox</label>
                                        <Checkbox
                                            // checked={false}
                                            onChange={(event) => {
                                                return settopRankCheck(event.target.checked);
                                            }}
                                            name="topRankCheck"
                                            color="primary"
                                        />
                                    </div> */}

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    onClick={playerRankingAdd}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {checkLogin && goToLogin()} */}
    </div>
  );
}
