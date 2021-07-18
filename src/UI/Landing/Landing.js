import { Component } from "react"
import React from 'react';
import "./landing.css";
import { Link } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div>
                <header className="masthead" >
                    <div>
                        <div className="overlay" style={{
                            backgroundImage: 'url("./images/bg.jpg")'
                        }}/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10 mx-auto">
                                    <div className="site-heading">
                                        <h1>
                                            <b >Solve your toughest problem as a sports Organizer.</b>
                                        </h1>
                                        <p>

                                            Spend your time growing your organization.
                                            Let our solutions make your life easier.
                                        </p>
                                        <Link to='/organizer/register'>
                                            <button className="btn btn-success">
                                                Start Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src="images/img1.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 >
                                    <b>
                                        Sports Scheduler Features
                                    </b>
                                </h2>

                                <li>
                                    Create unlimited sports schedule.</li>
                                <li>
                                    Set dates,times and duration.
                                </li>
                                <li>Add and remove games quickly.</li>
                                <li>Track scores and standing.</li>


                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 >
                                        <b>Eliminating the hassle of tournament scheduling.</b>
                                    </h2>

                                    <li>Make free sports schedule in seconds.</li>
                                    <li>Grow faster with referrals</li>
                                    <li>Register players online</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}
export default Landing;