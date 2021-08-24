import React, { Component, useState } from "react";
import "../Components/Org_Login.css";
import LandingNavbar from "../Components/LandingNavbar";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Org_Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);

  const data = {
    userName: Username,
    password: Password,
  };

  const loginOrganizer = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/organizer/login", data)
      .then((response) => {
        console.log("response", response);

        if (response.data.message === "Fields Must not be Empty") {
          setShowAlert(false);
        } else {
          alert("Logged In Successfully");

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("customerID", response.data.organizerID);
          localStorage.setItem("username", response.data.organizerUsername);
          localStorage.setItem("email", response.data.organizerEmail);
          localStorage.setItem("phone", response.data.organizerPhone);
          console.log(localStorage.getItem("phone"));
          setShowAlert(true);
        }
      });
  };

  const history = useHistory();
  const loggedIn = () => {
    history.push("/AddEvent");
  };

  return (
    <div>
      <LandingNavbar />
      {ShowAlert === false && (
        <div className="alert alert-danger container-fluid">
          <h4 className="alert-heading">
            Hello Oraganizer. Sorry to Say THAT !!
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
      <div className="outer mt-100x">
        <div className="inner">
          <form>
            <h3>Log in</h3>

            <div className="form-group">
              <label>Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter Username"
                onChange={(event) => {
                    return setUsername(event.target.value);
                   }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => {
                    return setPassword(event.target.value);
                  }}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button id="btnLogin" type="submit" className="btn btn-dark btn-lg btn-block" onClick={loginOrganizer}>
              Sign in
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
      )}
         {ShowAlert === true && loggedIn()
}
    </div>
  );
}
