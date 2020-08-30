import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import './exhibit.css'

export default class exhibition extends Component{
    render(){
        return(
            <div className="main content">
                <div>
                 <div className="ex-bg " style={{backgroundImage: "url(images/banner.png)"}}>
        <div className="filter"></div>
        <div className="filter-text  container-md">
        <h4 className="text-white">Art De Supreme 2020</h4>
        <div className="attend">
          <span className="viewers"><img src="images/contact.svg" alt=" "/> 13,458 viewers </span>
          <span className="location"><img src="images/location.svg"alt="" /> Nike Art Gallery, Lekki, Lagos </span>
        </div>
        <div className="live">
          <img src="images/live.svg" alt=""/>  Live
        </div>
        <div className=" button">
          <div className=""><button className="btn watch">Watch Live Video</button></div>
          <div className=""><button className="btn watch-later">Watch In 3D</button></div>
        </div>
        </div>
        </div>
        </div>
        <section className="upcoming-vids">
          <div className="seeAll">
            <span className="">Upcoming</span>
            <span className="float-right"><a href="">See all <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
          </div>

          <div className="row container-fluid  mx-auto">
            <div className="col-md-3 pl-0 pr-0 ">
              <img src="images/placeholder.svg" alt="" className="img-fluid"></img>
            </div>
            <div className="col-md-4 bg-info "></div>
            <div className="col-md-4 bg-info"></div>
          </div>

        </section>
      
   
            </div>
        )
    }
}