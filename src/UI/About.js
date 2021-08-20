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
         
            <Footer />
        </div>
      );
    }
  }
  export default About;
  