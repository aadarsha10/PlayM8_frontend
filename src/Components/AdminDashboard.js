import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [request, setRequest] = useState("");

  useEffect(() => {
    axios.get("http://localhost:90/getRequest").then((response) => {
      console.log("request", response);
      setRequest(response.data[0]);
      console.log(request);
    });
  }, []);

  return (
    <div>
      <p>Request</p>
      <p>Name : {request.Fullname}</p>
    </div>
  );
}
