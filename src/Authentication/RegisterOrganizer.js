import React, { useState } from "react";
import LandingNavbar from "../Components/LandingNavbar";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import '../Components/Org_Login.css'

export default function RegisterOrganizer() {

    const [Fullname, setFname] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
//   const [response1, setResponse] = useState("");
  const [validationError, setError] = useState("");
  const [checkLogin, setLoginCheck] = useState(false);

  const registerorganizer = (e) => {
    e.preventDefault();
    console.log(Fullname, Email, Contact, Username);
    const data = {
      Fullname: Fullname,
      Contact: Contact,
      Address: Address,
      Email: Email,
      Username: Username,
      Password: Password,
    };

    console.log("data", data);

    axios
      .post("http://localhost:5000/admin/request/register", data)
      .then((response) => {
        console.log("response", response.data.message);

        if (response.data.message === "Request sent") {
          alert("Your request for registration has been sent");
          setLoginCheck(true);
        //   goToLogin()
        } else {
          const valerror = response.data.message;
          setError(valerror);
          console.log("Errorrrrr", validationError);
          //   alert(response.data.message)
        }

          
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const history = useHistory();
  const goToLogin = () => {
    history.push("/organizer/login");
  };
  return (
    <div>
        <LandingNavbar />
      
      {!checkLogin && (
      <div className="outer mt-100x">
        <div className="inner">
          <form>
            <h3 className = "heading">Organizer Register</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                id="fullName"
                type="text"
                className="form-control"
                placeholder="Full Name"
                onChange={(event) => {
                    return setFname(event.target.value);
                  }}
              />
            </div>

            <div className="form-group">
              <label>Contact</label>
              <input
                id="contact"
                type="number"
                min = "1"
                className="form-control"
                placeholder="Phone Number"
                onChange={(event) => {
                    return setContact(event.target.value);
                  }}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={(event) => {
                    return setEmail(event.target.value);
                  }}
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                id="userName"
                type="text"
                className="form-control"
                placeholder="Enter Username"
                onChange={(event) => {
                    return setUsername(event.target.value);
                  }}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                id="address"
                type="text"
                className="form-control"
                placeholder="Street, City"
                onChange={(event) => {
                    return setAddress(event.target.value);
                  }}
              />
            </div>



            <div className="form-group">
              <label>Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(event) => {
                    return setPassword(event.target.value);
                  }}
              />
            </div>

            <button id="btnRegister" type="submit" className="btn btn-dark btn-lg btn-block" onClick={registerorganizer}>
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">log in?</a>
            </p>
          </form>
        </div>
      </div>
      )}
      {checkLogin && goToLogin()}
    </div>
  );
}
