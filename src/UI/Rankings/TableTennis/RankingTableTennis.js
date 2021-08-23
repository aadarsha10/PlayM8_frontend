import React, { useState, useEffect } from "react";
import C_NavBar from "../../ClientSide/C_NavBar";
import Footer from "../../../Components/Footer";
import "../TableTennis/Ranking.css";
import { Table } from "react-bootstrap";
import ReactRoundedImage from "react-rounded-image";
import user from "../../../images/leb.png";

export default function RankingTableTennis() {
  return (
    <div>
      <C_NavBar />

      <div className="container-fluid ranking-heading">
        <h2>ANTA NATIONAL RANKINGS</h2>
      </div>

      <div className="col-lg-8 col-md-12 details">

      </div>

      <div className="col-lg-4 col-md-12 top-players">
        <div className="container mens-top">
          <div className="container-fluid mens-title flex flex-center">
                <span> <b>Men</b> <p>TOP RANKED PLAYERS</p></span>
          </div>
        

        <div className = "container-fluid">
            <div className = "container-fluid players-ranked col-12">
                <div className = "col-2 pt-3x">
                    1
                </div>
                <div className = "col-8 flex flex-left pr-20x">
                <ReactRoundedImage
          image={user}
          roundedColor="#66A5CC"
          imageWidth="35"
          imageHeight="36"
          roundedSize="2"
          borderRadius="18"

          className = "pb-15x"
        />
                        <span className = "pl-10x pt-3x">Santoo Shrestha</span>
                </div>
                <div className = "col-2 pt-3x">
                    NPC
                </div>
            </div>
        </div>    
   
        </div>

        <div className="container womens-top">
          <div className="container-fluid womens-title flex flex-center">
                 <span> <b>Women</b> <p>TOP RANKED PLAYERS</p></span>
          </div>

          <div className = "container-fluid">
            <div className = "container-fluid players-ranked col-12">
                <div className = "col-2">
                    1
                </div>
                <div className = "col-8 flex flex-left pr-20x">
                <ReactRoundedImage
          image={user}
          roundedColor="#66A5CC"
          imageWidth="31"
          imageHeight="30"
          roundedSize="2"
          borderRadius="15"
        />
                        <span className = "pl-10x">Santoo Shrestha</span>
                </div>
                <div className = "col-2">
                    NPC
                </div>
            </div>
        </div>  
        </div>
      </div>

      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}
