import  React, {Component} from "react"    
import "./video.css"
import { Link } from "react-router-dom"

export default class Video extends React.Component{
    render(){
        return(
            <div className="main content">
               <div className="row-section">
                   <div className="video-section">
                       <div className="container-fluid live-vid">
                          <Link to="/exhibition" ><img src="/images/arrow-left.svg" alt=""></img></Link>
                          <div className="main-vid">
                              <img src="/images/video.svg" alt="" className="main-vid-img"></img>
                              <div className="video-player">
                                  <div className="line"></div>
                                  <div className="play-details"  style={{paddingTop: "13px"}}>
                                  <span className="play-btn">
                                      <img src="/images/play.svg" alt=""></img>
                                  </span>
                                  <span className="audio-btn" style={{paddingLeft: "14px"}}>
                                      <img src="/images/audio.svg" alt=""></img>
                                  </span>
                                  <span className="time-count text-white pt-2"  style={{paddingLeft: "14px"}}>0:00</span>

                                  <span className="float-right text-white">
                                     <span className="live" style={{paddingRight: "14px"}}> <img src="/images/live.svg" alt=""/>  Live</span> 
                                     <span className="setting" style={{paddingRight: "14px"}}><img src="/images/setting.svg" alt=""></img></span>
                                     <span className="expand" style={{paddingRight: "14px"}}><img src="/images/expand.svg" alt=""></img></span>
                                  </span>
                                  </div>
                              </div>
                          </div>
                        <div className="video-details">
                            <span className="live-vid-title">Art De Supreme 2020</span>
                            <span className="reaction float-right">
                                <span className="thumbs-up"  style={{paddingRight: "14px"}}><img src="/images/thumbs-up.svg" alt=""></img></span>
                                <span className="share"  style={{paddingRight: "14px"}}><img src="/images/share.svg" alt=""></img></span>
                            </span>
                        </div>
                        <div className="attendees" style={{paddingTop: "16px"}}>
                              <span className=""><img src="/images/viewers.svg" alt="" className="pr-1"/> 13,458 viewers </span>
         
        </div>
                       </div>

                   </div>
                   <div className="comment-section">
                       <h3>Video</h3>
                   </div>
               </div>
            </div>
        )
    }
}