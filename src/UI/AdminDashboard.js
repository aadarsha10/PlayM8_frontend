import axios from "axios";
import React from "react";
import { Table, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";

export default function AdminDashboard() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:90/getRequest").then((response) => {
      console.log("request", response);
      setRequest(response.data);
      console.log(request);
    });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container shadow mt-4">
        <p>
          <Button className="mt-3" variant="primary">
            Welcome to admin dashboard
          </Button>
        </p>

        {request.map((organizerDetails, index) => (
          <div key={index}>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{index+1}</td>
                    <td>{request[index].Fullname}</td>
                    <td>{request[index].Email}</td>
                    <td>{request[index].Contact}</td>
                    <td>
                      <Button variant="success">Approve</Button>&nbsp;
                      <Button variant="danger">Decline</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
