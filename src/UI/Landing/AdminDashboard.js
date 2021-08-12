import React from "react";
import "./sideNav.css";
import SideBarComponent from "./SideBarComponent";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function AdminSideNav() {
  const [request, setRequest] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:5000/getRequest").then((response) => {
      console.log("request", response);
      setRequest(response.data);
    });
  }, []);

 

  const approved = (approvedDetails, index) => () => {

    const data = {
        Fullname: approvedDetails.Fullname,
        Contact: approvedDetails.Contact,
        Address: approvedDetails.Address,
        Email: approvedDetails.Email,
        Username: approvedDetails.Username,
        Password: approvedDetails.Password,
      };

   console.log("approvedDetails", data)

   axios
   .post("http://localhost:5000/admin/approve/register", data)
   .then((response) => {
     console.log("response", response.data.message);

     if(response.data.message === "Registered")
     {
        notify()
     }

   })
   .catch((error) => {
     console.log(error);
   });

  }



  const notify = () => {
    toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
  }
  
  return (
      
    <div className="container-fluid main-div">
      <div className="container left-div col-2 flex flex-center">
        <SideBarComponent />
      </div>

      <div className="container right-div col-10 flex flex-center">
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
                  <thead width="100px">
                    <tr width="100px">
                      <th width="10px" className="pb-10x">
                        SN.
                      </th>
                      <th width="300px">Name</th>
                      <th width="300px">Email</th>
                      <th width="300px">Contact</th>
                      <th width="300px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pb-50x">{index + 1}</td>
                      <td>{request[index].Fullname}</td>
                      <td>{request[index].Email}</td>
                      <td>{request[index].Contact}</td>
                      <td>
                        <Button variant="success" onClick = {approved(organizerDetails, index)}>Approve</Button>&nbsp;
                        <Button variant="danger">Decline</Button>
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            ))}
          </Table>
        </div>
      </div>
              
    </div>
    
  );
}
