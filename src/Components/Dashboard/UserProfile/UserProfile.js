import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import "./UserProfile.css";
import Input from "../Shared/Input/Input";
import { Link } from "react-router-dom";


export default class UserProfile extends Component {
  render() {
    return (
      <div className="main content">
        <div className="profile-section">
          <div className="main-profile">
            <div style={{borderBottom: "1px solid #c4c4c4"}}>
            <div className="title">
              <Link to="/home">
               <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.466 7.90767H18.6667V10.241H4.466L10.724 16.499L9.07433 18.1487L0 9.07433L9.07433 0L10.724 1.64967L4.466 7.90767Z" fill="black"/></svg></span>   
              </Link>
              <span>Profile</span>
            </div>
          <div className="profile-details">
            <div className="profile-img">
              <div>
                   <img src="/images/mainUser-img.png" alt=""></img>
              </div>     
            </div>
         <div className="bio">
            <div className="username">
              <div className="edit-profile" >
                 <div>
              <small className="name">artistgod</small>
              <span className="align-items-end">
              </span>
              </div>
              <div className=" ml-auto">
              <button className="edit btn">EDIT PROFILE</button>
              </div>
              </div>
              <div>
              <small className="tag" >
                <img src="/images/artist-icon.svg" alt=""></img>
                <span className="tag-name">Artist</span>
              </small>
              </div>
            </div>
            <div className="about">
              <p>
              Jackson Pallock is implicitly synonymous with modern art, and it doesn’t hurt that he fits the generally held image of the fugitive genius whose goals are balanced by a taste for living big. He turned the field of art history with radical innovations that include college and Cubism, which destroyed the stranglehold of representational material matter on art, and set the rate for other 20th-century artists.
              </p>
            </div>
         <div className="upload">
           <button className="btn">Upload Artwork</button>
         </div>
         </div>
          </div>
          </div>
            <div className=" categories">
              <h6>Categories of work:</h6>
              <div className="ml-auto">
              <span>
                <img src="/images/ellipse.svg"></img> Acrylic Painting
              </span>
              <span>
                <img src="/images/ellipse.svg"></img> Oil Painting
              </span>
              <span>
                <img src="/images/ellipse.svg"></img> Sculpture
              </span>
              </div>

            </div>
            <div className="tab">
              <nav className="nav-tabs d-flex flex-row flex-wrap justify-content-between align-items-center">
                <Link className="nav-link" to="#">Active link</Link>
                <Link className="nav-link"to="#">Link</Link>
                <Link className="nav-link" to="#">Disabled link</Link>
              </nav>
            </div>
          </div>
          <div className="side-profile">
            <div className="search">
              <label htmlFor="search" className="search-label" >
       
              <input
                className="search-btn form-control "
                placeholder="Search Artist, Gallery or Artwork"
              />
                     <svg className="search-svg" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </label>
            </div>
           <h3>Top Picks For You</h3>
            <div className="images-row">
               <div className="card text-left">
                 <img className="card-img-top" src="/images/picks.png" alt="" />
                 <div className="card-body">
                   <h6 className="card-title">Title</h6>
                   <p className="card-text">Body</p>
                 </div>
               </div>
               <div className="card text-left">
                 <img className="card-img-top" src="/images/picks.png" alt="" />
                 <div className="card-body">
                   <h6 className="card-title">Title</h6>
                   <p className="card-text">Body</p>
                 </div>
               </div>
               <div className="card text-left">
                 <img className="card-img-top" src="/images/picks.png" alt="" />
                 <div className="card-body">
                   <h6 className="card-title">Title</h6>
                   <p className="card-text">Body</p>
                 </div>
               </div>
               <div className="card text-left">
                 <img className="card-img-top" src="/images/picks.png" alt="" />
                 <div className="card-body">
                   <h6 className="card-title">Title</h6>
                   <p className="card-text">Body</p>
                 </div>
               </div>
            </div>

          </div>
        </div>    
      </div>
    );
  }
}
