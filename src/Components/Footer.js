import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer bg-success">
      <div className="container pt-50x">
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
              <li><a href = "/" className = "navigate">Home</a></li>
              <li><a href = "/AboutUs" className = "navigate">About Us</a></li>
              <li><a href = "/HelpCenter" className = "navigate">Help Center</a></li>
            </ui>
          </div>
          <div className="col">
            <h4>Terms & Policies</h4>
            <ui className="list-unstyled">
            <li><a href = "/legalinformation" className = "navigate">Legal Information</a></li>
              <li><a href = "/privacyPolicy" className = "navigate">Privacy Policy</a></li>
              <li><a href = "/CookiesPolicy" className = "navigate">Cookies Policy</a></li>
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
