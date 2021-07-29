import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../scss/gamebutton.scss";

// import Alert from 'react-bootstrap/Alert'
import axios from "axios";

export default function AddPlayer() {

  return (
    <div>
      <div className="TableTennis">
      
     <button className="Games">
       Men Single
     </button>
     <button className="Games">
       Female Single
     </button>
     <button className="Games">
       Men Double
     </button>
     <button className="Games">
       Female Double
     </button>
     <button className="Games">
       Men Team
     </button>
     <button className="Games">
       Female Team
     </button>
     <button className="Games">
       Mix Double
     </button>
     </div>
         
    
    </div>



  );
}
