import React, { useState } from "react";
import "../scss/login.scss";
import { Form } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import LandingNavbar from "../Components/LandingNavbar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowAlert, setShowAlert] = useState(null);
  // const [validate, setValidate] = useState(false)
  const notify = () => {
    // inbuilt-notification
    toast.success('successful')
    // inbuilt-notification
  }
  console.log("Username", Username);

  const data = {
    userName: Username,
    password: Password
  };

  const loginOrganizer = (e) => {
    e.preventDefault();

    if (data.userName=='admin'){
      axios.post("/login/admin", data).then((response) => {
        console.log("response", response);

        if (response.data.message === "Fields Must not be Empty") {
          setShowAlert(false);
        } else {
          // alert("Logged In Successfully");
          notify();
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('AdminID', response.data.organizerID)
          localStorage.setItem('username', response.data.organizerUsername)
          localStorage.setItem('email', response.data.organizerEmail)
          localStorage.setItem('phone', response.data.organizerPhone)
          console.log(localStorage.getItem('token'))
          setShowAlert(true);
        }
      });
    }else{
      axios.post("/organizer/login", data).then((response) => {
        console.log("response", response);

        if (response.data.message === "Fields Must not be Empty") {
          setShowAlert(false);
        } else {
          // alert("Logged In Successfully");
          notify();
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('customerID', response.data.organizerID)
          localStorage.setItem('username', response.data.organizerUsername)
          localStorage.setItem('email', response.data.organizerEmail)
          localStorage.setItem('phone', response.data.organizerPhone)
          console.log(localStorage.getItem('phone'))
          setShowAlert(true);
        }
      });
    }
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
        <div className="container">
          <div className="row">

            <div className="register container-fluid">
              <form>
                <h1 style={{ color: '#23978e', fontWeight: 'bolder' }}>Login</h1>
                <div class="login">
                  <div class="form-group">
                    <Form.Label for="inputUsername" className="flex flext-left " style={{ color: '#23978e' }}>Username</Form.Label>
                    <Form.Control
                      type="text" placeholder="Enter your Username"
                      onChange={(event) => {
                        return setUsername(event.target.value);
                      }} />
                  </div>
                  <div class="form-group">

                    <Form.Label for="inputPassword" className="flex flext-left mt-10x" style={{ color: '#23978e' }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      onChange={(event) => {
                        return setPassword(event.target.value);
                      }}
                    />

                  </div>


                </div>

                <div class="form-group">
                  <button
                    style={{ backgroundColor: '#23978e', border: 'none' }} className="btn btn-primary border border-success registerbtn"
                    onClick={loginOrganizer}
                  >
                    Login
                  </button>
                </div>



              </form>
            </div>
          </div>
        </div>
      )}
      {ShowAlert === true && loggedIn()
        // <div className="alert alert-success" role="alert">
        //   <h4 className="alert-heading">Hello Organizer. Congratulations!!</h4>
        //   <p>
        //     You have Successfully been logged in.
        //   </p>
        //   <hr></hr>

        //   <p>Thank You !!!</p>
        // </div>



    
      }
    </div>
  );
}
