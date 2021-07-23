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
        <Table striped bordered hover>
        {request.map((organizerDetails, index) => (
          <div key={index}>
            <div>
              
                <thead width = "100px">
                  <tr width = "100px" >
                    <th width = "10px" className = "pb-10x">SN.</th>
                    <th width = "300px">Name</th>
                    <th width = "300px">Email</th>
                    <th width = "300px">Contact</th>
                    <th width = "300px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className = "pb-50x">{index+1}</td>
                    <td>{request[index].Fullname}</td>
                    <td>{request[index].Email}</td>
                    <td>{request[index].Contact}</td>
                    <td>
                      <Button variant="success">Approve</Button>&nbsp;
                      <Button variant="danger">Decline</Button>
                    </td>
                  </tr>
                </tbody>
             
            </div>
          </div>
        ))}
         </Table>
      </div>
      <Footer />
    </div>
  );
}
