import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Landing/landing.css'
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import LandingNavbar from '../../Components/LandingNavbar';



class Landing extends Component {
    render() {
        return (
           
          <div>
              <LandingNavbar/>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link href="css/styles.css" rel="stylesheet" />

  <header className="bg-success py-5">
    <div className="container px-5">
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-6">
          <div className="text-center my-5">
            <h1 className="display-5 fw-bolder text-white mb-2"> Solve your toughest problems as a sports manager </h1>
            <p className="lead text-white-50 mb-4"> Spend your time growing your organization. Not on paperwork or clunky software. Let our solutions make your life easier.  </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <a className="btn btn-primary btn-lg px-4 me-sm-3" >Get Started</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Features section*/}
  <section className="py-5 border-bottom" id="features">
    <div className="container px-5 my-5">
      <div className="row gx-5">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection" /></div>
          <h2 className="h4 fw-bolder">Grow faster with referrals</h2>
          <p>Reward your members for inviting their friends. Create a referral program with automatic tracking and rewards. </p>
          <a className="text-decoration-none" href="#!">
           Learn more
            <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building" /></div>
          <h2 className="h4 fw-bolder">Make schedules in seconds</h2>
          <p>Create and share sports schedules for leagues and tournaments. Update scores and track standings online.</p>
          <a className="text-decoration-none" href="#!">
            Learn more
            <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className="col-lg-4">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2" /></div>
          <h2 className="h4 fw-bolder">Register players online</h2>
          <p>Accept online sports registrations and payments. Gather player info and offer discounts or promotions</p>
          <a className="text-decoration-none" href="#!">
           Learn more
            <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Pricing section*/}
  <section className="bg-light py-5 border-bottom">
    <div className="container px-5 my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bolder">Play M8</h2>
        <p className="lead mb-0"><b>Helps you to create schedule,events of sports in an easy and fast way......</b></p>
      </div>
      <div className="row gx-5 justify-content-center">
        {/* Pricing card free*/}
        <div className="col-lg-6 col-xl-4">
              <div className="small text-uppercase fw-bold text-muted">Table tennis</div>
              <div className="mb-3" >
              <img className="img-fluid" src="images/img1.jpg" width="1000px"  alt />
              </div>
        </div>


        <div className="col-lg-6 col-xl-4">
          
              <div className="small text-uppercase fw-bold text-muted">Boxing</div>
              <div className="mb-3" >
              <img className="img-fluid" src="images/img2.jpg"  width="1000px" alt />
              </div>
          </div>
        
       
        <div className="col-lg-6 col-xl-4">

              <div className="small text-uppercase fw-bold text-muted">Volleyball</div>
              <div className="mb-3"  >
              <img className="img-fluid " src="images/img3.jpg"  width="1000px"alt />
              
            </div>
          </div>
        </div>
      </div>
    
  </section>
  {/* Testimonials section*/}
  <section className="py-5 border-bottom">
    <div className="container px-5 my-5 px-5">
      <div className="text-center mb-5">
        <h2 className="fw-bolder">Customer testimonials</h2>
        <p className="lead mb-0">Our customers love working with us</p>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-6">
          {/* Testimonial 1*/}
          <div className="card mb-4">
            <div className="card-body p-4">
              <div className="d-flex">
                <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1" /></div>
                <div className="ms-4">
                  <p className="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                  <div className="small text-muted">Rohan, lalitpur</div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2*/}
          <div className="card">
            <div className="card-body p-4">
              <div className="d-flex">
                <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1" /></div>
                <div className="ms-4">
                  <p className="mb-1">The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
                  <div className="small text-muted">- Kashiram, ktm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<Footer></Footer>
</div>

            
    
            )

        }
    }
    export default Landing;
    