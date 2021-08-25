import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/Footer";
import LandingNavbar from "../../Components/LandingNavbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
class About extends Component {
    render() {
      return (
        <div>
          <LandingNavbar />
          <div>
          <h1>At Playpass, we love making life easier for sports manager</h1>
Our online solutions save time for sports managers. Try our free schedule maker,
 registration software, referral program, waiver solution, or website builder. 
 Everything we do is built for mobile and works beautifully on your tablet, laptop, or desktop computer.
          </div>
         
            <Footer />
        </div>
      );
    }
  }
  export default About;
  