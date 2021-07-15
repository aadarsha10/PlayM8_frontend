import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>PlayM8</h1>
            <h3 className="list-unstyled">
             
              <li>For all the game lovers out there</li>
              
            </h3>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Who's it For</h4>
            <ui className="list-unstyled">
              <li>Players</li>
              <li>Oraganizers</li>
              <li>Game Lovers</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Navigate</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Shedule</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PlayM8 | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
