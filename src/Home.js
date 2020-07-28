import React from 'react';
import { Link } from 'react-router-dom';

// import 

const randomBg = () => {
  var randomNo = Math.floor(Math.random() * 3);
  var bg = ["/images/01.png", "/images/02.jpg", "/images/03.jpg"];
  console.log(bg[randomNo]);
  return bg[randomNo];
}

var bg = randomBg();

const App = () => {
  return (
    <div className="Home" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${bg})`}}>
      <header className="mw">
        <nav className="navbar navbar-expand-md navbar-light bg-transparent align-content-center">
          <Link className="navbar-brand" to="/">
              <img className="logo" src={'/images/logo.png'} alt="Qrate Logo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navLinks">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/">About us</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/">Use cases</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/">Forum</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/"><button className="btn bg-orange text-light">Download <i className="fa fa-download" aria-hidden="true"></i></button></Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="container illustrationSection mw py-5 py-md-space px-4 px-smd-auto">
        <div className="row no-gutters">
          <div className="col-md-6">
            <h1 className="font-weight-bold">Share and Experience the beauty of <span className="text-indigo">Art</span><span className="text-orange">.</span></h1>
            <p>An app that connects Africa's best visual artists.</p>
            <button className="btn btn-lg bg-orange text-light mb-5">Get started</button>
          </div>
          <div className="col-md-6 illustration d-flex flex-column justify-content-center align-items-center align-items-md-end">
            <img className="img-fluid ml-md-auto" src={'images/starry-night.jpg'} alt="Art"/>
            <div className="d-flex justify-content-center justify-content-md-end align-items-center store my-5">
              <img className="my-2" src={'images/google-play.png'} alt=""/>
              <img className="my-2" src={'images/app-store.png'} alt=""/>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr mw" />

      <div className="bg-white">
        <section className="container who-we-are mw py-5 py-md-space px-4 px-md-auto">
          <h3 className="font-weight-bold title">Who We Are<span className="text-orange">.</span></h3>
          <div className="row">
            <div className="col-md-6">
              <p className=""><span className="abtQrate font-weight-bold">Qrate</span> brings digital artist drawings and paintings together to share their work and passion and make a living while at it.</p>
              <div className="border-line my-3"><span className="bg-orange d-inline-block w-50 h-100"></span><span className="bg-indigo d-inline-block w-50 h-100"></span></div>
              <Link className="text-orange my-4 d-block" to="/">Learn more <i className="fa fa-chevron-right"></i></Link>
            </div>
            <div className="col-md-6 position-relative">
              <img className="img-fluid rect-img p-3" src={'images/who-we-are.png'} alt="Who we are"/>
              <div className="p-3 round-img">
                <div className="round bg-indigo rounded-circle"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
        

      <hr className="hr mw" />

    <div className="bg-white">
      <section className="container how-it-works mw pt-5 pt-md-space px-4 px-md-auto">
        <h3 className="font-weight-bold my-5 title">How it works<span className="text-orange">.</span></h3>
        <div>
          <div className="works-div d-flex align-content-start">
            <div className="round-circle mr-3 mr-md-5">
              <span className="position-absolute z-2 text-orange bg-light rounded-circle d-inline-block shadow">1</span>
              <img className="line" src={'images/line-blue.png'} alt=""/>
            </div>
            <div className="ml-5">
              <h3 className="font-weight-bold text-orange">Get Started on Qrate</h3>
              <p>You can't wait to sign up. You'll be amazed!</p>
            </div>
          </div>
          <div className="works-div d-flex align-content-start">
            <div className="round-circle mr-3 mr-md-5">
              <span className="position-absolute z-2 text-indigo bg-light rounded-circle d-inline-block shadow">2</span>
              <img className="line" src={'images/line-black.png'} alt=""/>
            </div>
            <div className="ml-5">
              <h3 className="font-weight-bold text-indigo">Get Engaged, Explore</h3>
              <p>You'll find many categories of Art that tickles you with great features</p>
            </div>
          </div>
          <div className="works-div worksDiv d-flex align-content-start">
            <div className="round-circle mr-3 mr-md-5">
              <span className="position-absolute z-2 text-dark bg-light rounded-circle d-inline-block shadow">3</span>
            </div>
            <div className="ml-5">
              <h3 className="font-weight-bold">Share and Experience Arts</h3>
            </div>
          </div>
        </div> 
      </section>
    </div>
      
      <section className="art-categories bg-black py-5 py-md-space px-4 px-md-auto">
        <div className="mw">
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center">
            <h3 className="text-light mr-3 title">Art Categories</h3>
            <select className="custom-select d-inline-block">
              <option className="" value="Photography" defaultValue>Photography</option>
              <option className="" value="Art">Art</option>
            </select>
          </div> 
          <div className="row my-4 no-gutters">
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-line mx-auto"><span className="bg-orange d-inline-block w-50 h-100"></span><span className="bg-indigo d-inline-block w-50 h-100"></span></div>
        </div>
      </section>

      <section className="container mw testimonial py-5 px-4 px-md-auto">
        <h3 className="font-weight-bold title text-center text-sm-left">The experience<span className="text-orange">.</span></h3>
        <div className="row my-5 testimonial-wrapper">
          <div className="col-md-6">
            <i className="fa fa-user-circle text-indigo text-center w-100"></i>
          </div>
          <div className="col-md-6">
            <img className="ml-0" src={'images/left-quote.png'} alt=""/>
            <p className="font-weight-bold">I have had to search no more for my favorite art works.</p>
            <div className="d-flex justify-content-end">
              <img className="ml-aut" src={'images/right-quote.png'} alt=""/>
            </div>
            <p className="font-italic">- Chris Samuel</p>
          </div>
        </div>
      </section>

      <section className="get-notified bg-black py-5 px-4">
        <div className="container mw my-2">
          <h3 className="text-light">Get notified of your favourite Arts work updates</h3>
          <p className="text-muted">Enter your Email Address to receive our latest interviews, Arts Updates and Hot Art Exhibition News</p>
          <input className="form-control my-3" placeholder="Enter Your Email Address" type="text"/>
          <input className="form-control my-3" placeholder="What categories are you interested in?" type="text"/>
          <button className="btn bg-orange text-light">Subscribe</button>
        </div>
      </section>

      <footer className="py-5 py-md-space container mw">
        <img className="img-fluid" src={'images/logo.png'} alt=""/>
        <div className="jumbotron bg-transparent d-flex flex-column flex-sm-row justify-content-center justify-content-sm-around align-content-sm-center">
          <div className="d-flex flex-column justify-content-center align-items-start my-3">
            <h4 className="text-orange">Products</h4>
            <Link to="/">Arts App</Link>
            <Link to="/">Google Photos</Link>
            <Link to="/">Umber Photos</Link>
            <Link to="/">Miscellaneous</Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start my-3">
            <h4 className="text-orange">Community</h4>
            <Link to="/">Forum</Link>
            <Link to="/">Google Photos</Link>
            <Link to="/">Umber Photos</Link>
            <Link to="/">Miscellaneous</Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start my-3">
            <h4 className="text-orange">Products</h4>
            <Link to="/">Arts App</Link>
            <Link to="/">Google Photos</Link>
            <Link to="/">Umber Photos</Link>
            <Link to="/">Miscellaneous</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// const randomBg = () => {
// 	var randomNo = Math.floor(Math.random() * 6);
// 	var bg = [
// 		"/images/homepage/01.png",
// 		"/images/homepage/02.jpg",
// 		"/images/homepage/03.jpg",
// 		"/images/homepage/04.png",
// 		"/images/homepage/05.png",
// 		"/images/homepage/06.png",
// 	];
// 	return bg[randomNo];
// };

// class Homepage extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			display: 11,
// 			whichComponentToShow: "StartPage",
// 		};
// 		this.display = this.display.bind(this);
// 		this.getStarted = this.getStarted.bind(this);
// 		this.whatAreYou = this.whatAreYou.bind(this);
// 		this.notARobot = this.notARobot.bind(this);
// 		this.confirmEmail = this.confirmEmail.bind(this);
// 		this.confirmPassword = this.confirmPassword.bind(this);
// 	}

// 	componentDidMount() {
// 		// var homepage = document.querySelector('.homepage');

// 		// var firstTogglerBtn = document.getElementById('111');
// 		// var secondTogglerBtn = document.getElementById('112');
// 		// var thirdTogglerBtn = document.getElementById('113');
// 		// var fourthTogglerBtn = document.getElementById('114');
// 		// var fifthTogglerBtn = document.getElementById('115');
// 		// var sixthTogglerBtn = document.getElementById('116');
// 		// var seventhTogglerBtn = document.getElementById('117');

// 		// var firstDiv = document.getElementById('11');
// 		// var secondDiv = document.getElementById('12');
// 		// var thirdDiv = document.getElementById('13');
// 		// var fourthDiv = document.getElementById('14');
// 		// var fifthDiv = document.getElementById('15');
// 		// var sixthDiv = document.getElementById('16');
// 		// var seventhDiv = document.getElementById('17');

//         // var currentState = this.state.display;
        
// 		var wrappers = document.getElementsByClassName("wrapper");

//         var navBtns = document.getElementsByClassName("nav-btn");
        
// 		[...navBtns].map((btn) => {
// 			if (btn.id === this.state.display) {
// 				btn.classList.add("bg-light");
// 			} else if (btn.id !== this.state.display) {
// 				btn.classList.remove("bg-light");
// 			}

// 			if (btn.onClick === true) {
// 				console.log("clicked");
// 			} else {
// 				console.log("not clicked");
// 			}

// 			btn.addEventListener("click", () => {
// 				// btn.classList.add("bg-light");

// 				this.setState({
// 					display: btn.id,
// 				});
// 				[...wrappers].map((div) => {
// 					if (div.id === this.state.display && !div.classList.contains("d-block")) {
// 						div.classList.remove("d-none");
// 					} else {
// 						div.classList.add("d-none");
// 					}
// 				});
// 			});
// 		});

// 		window.addEventListener("scroll", () => {
// 			var scrollable = document.documentElement.scrollHeight - window.innerHeight;
// 			const scrolled = window.scrollY;
// 			console.log(scrollable);
// 			if (scrolled === scrollable) {
// 				console.log("You have reached the bottom");
// 			}
// 		});
// 	}

// 	getStarted() {
// 		this.setState({
// 			whichComponentToShow: "GetStarted",
// 		});
// 	}

// 	whatAreYou() {
// 		this.setState({
// 			whichComponentToShow: "WhatAreYou",
// 		});
// 	}

// 	notARobot() {
// 		this.setState({
// 			whichComponentToShow: "NotARobot",
// 		});
// 	}

// 	confirmEmail() {
// 		this.setState({
// 			whichComponentToShow: "ConfirmEmail",
// 		});
// 	}

// 	confirmPassword() {
// 		this.setState({
// 			whichComponentToShow: "ConfirmPassword",
// 		});
// 	}

// 	display() {
// 		const { whichComponentToShow } = this.state;
// 		if (whichComponentToShow === "StartPage") {
// 			return (
// 				<div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
// 					<div className="text-center text-light mb-2 mb-md-6">
// 						<h2 className="font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h2>
// 						{/* <h3 className="d-sm-none font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h3> */}
// 						<p className="lead px-3">Qrate connects Africa's best visual artists and creatives.</p>
// 					</div>
// 					<div className="px-2 px-md-auto w-100">
// 						<button className="btn bg-orange w-100 text-light my-2 btn-lg" id="getStarted" onClick={this.getStarted}>
// 							Get Started
// 						</button>
// 						<button className="btn bg-white w-100 text-orange my-2 btn-lg" onClick={this.confirmEmail}>
// 							Sign in
// 						</button>
// 					</div>
// 				</div>
// 			);
// 		} else if (whichComponentToShow === "GetStarted") {
// 			return (
// 				<div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
// 					<div className="text-center text-light mb-5 mb-md-6">
// 						<h2 className="font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h2>
// 					</div>
// 					<div className="px-2 px-md-auto contactInfo">
// 						<form>
// 							<input
// 								type="text"
// 								placeholder="Username"
// 								className="w-100 bg-light p-3 px-md-5 border-0 first"
// 								autoComplete="true"
// 								required
// 							/>
// 							<input
// 								type="email"
// 								placeholder="Email"
// 								className="w-100 bg-light p-3 px-md-5 border-0"
// 								autoComplete="true"
// 								required
// 							/>
// 							<input
// 								type="password"
// 								placeholder="Password"
// 								className="w-100 bg-light p-3 px-md-5 border-0 last"
// 								autoComplete="true"
// 								required
// 							/>
// 						</form>

// 						<button className="btn bg-orange text-light w-100 mt-2 mt-md-5 btn-lg" onClick={this.whatAreYou}>
// 							Next
// 						</button>
// 					</div>
// 				</div>
// 			);
// 		} else if (whichComponentToShow === "WhatAreYou") {
// 			return (
// 				<div className="whatAreYou discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
// 					<div className="text-center text-light mb-5 mb-md-6">
// 						<h2 className="font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h2>
// 					</div>
// 					<div className="px-2 px-md-auto w-100">
// 						<h4 className="p-3 py-3 px-md-5 w-100 mb-0">What are you?</h4>
// 						<div className="d-flex flex-column what-you-do">
// 							<span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
// 								Artist<i className="fa fa-check"></i>
// 							</span>
// 							<span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
// 								Qrater<i className="fa fa-check"></i>
// 							</span>
// 							<span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
// 								Gallery<i className="fa fa-check"></i>
// 							</span>
// 							<span className="text-dark p-3 px-md-5 w-100 d-flex justify-content-between align-items-center wh">
// 								Art Supplier<i className="fa fa-check"></i>
// 							</span>
// 						</div>

// 						<button className="btn bg-orange text-light w-100 mt-2 mt-md-5 btn-lg" onClick={this.notARobot}>
// 							Next
// 						</button>
// 					</div>
// 				</div>
// 			);
// 		} else if (whichComponentToShow === "NotARobot") {
// 			return (
// 				<div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
// 					<div className="text-center text-light mb-5 mb-md-6">
// 						<h2 className="font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h2>
// 					</div>
// 					<div className="px-2 px-md-auto w-100 not-a-robot">
// 						<div className="faint-bg p-3 p-md-4 d-flex justify-content-between align-items-center rounded">
// 							<div className="form-check d-flex align-items-center pl-0">
// 								<input className="form-check-input mt-0 ml-0" type="checkbox" value="" id="notRobot" />
// 								<label className="form-check-label text-center" htmlFor="notRobot">
// 									I'm not a robot
// 								</label>
// 							</div>
// 							<img src="/images/homepage/captcha.png" alt="captcha" />
// 						</div>

// 						<p className="text-light text-center mt-3 mt-md-5 mb-md-n2">Verification is required. Please, try again</p>

// 						<button className="btn bg-orange text-light w-100 mt-2 mt-md-5 btn-lg">Almost Done!</button>
// 					</div>
// 				</div>
// 			);
// 		} else if (whichComponentToShow === "ConfirmEmail") {
// 			return (
// 				<div className="email-confirmation discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
// 					<div className="text-center text-light mb-5 mb-md-6">
// 						<h2 className="font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h2>
// 						<p className="lead px-3">Qrate connects Africa's best visual artists and creatives.</p>
// 					</div>
// 					<div className="px-2 px-md-auto w-100">
// 						<input className="btn faint-bg w-100 py-2 email" type="email" placeholder="Email" autoComplete="true" required />
// 						<button className="btn bg-orange w-100 text-light mt-3 btn-lg" onClick={this.confirmPassword}>
// 							Next
// 						</button>
// 					</div>
// 				</div>
// 			);
// 		} else if (whichComponentToShow === "ConfirmPassword") {
// 			return (
// 				<div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
// 					<div className="text-center text-light mb-5 mb-md-6">
// 						<h2 className="font-weight-bold mb-4">
// 							Discover The Beauty of <span className="text-orange">Art</span>
// 						</h2>
// 						<p className="lead px-3">Qrate connects Africa's best visual artists and creatives.</p>
// 					</div>
// 					<div className="px-2 px-md-auto w-100">
// 						<input
// 							className="btn faint-bg w-100 py-2 email"
// 							type="password"
// 							placeholder="Password"
// 							autoComplete="true"
// 							required
// 						/>
// 						<button className="btn bg-orange w-100 text-light mt-3 btn-lg">Log in</button>
// 					</div>
// 				</div>
// 			);
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className="homepage">
// 				<div className="w-100">
// 					<header className="d-flex justify-content-between align-items-center fixed-top mw pt-4 pt-md-5 px-3 px-sm-5">
// 						<div className="d-flex justify-content-start align-items-start">
// 							<Link to="/">
// 								<img src="/images/homepage/qrate-light-logo.png" alt="Logo" />
// 							</Link>
// 							<div className="input-group ml-5 search">
// 								<input type="text" className="form-control light-bg p-3" placeholder="Search Qrate" aria-label="Search" />
// 								<div className="input-group-append p-2 border border-left-0 light-bg">
// 									<i className="fa fa-search text-light"></i>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="d-none d-md-flex">
// 							<button className="btn bg-transparent text-light px-4" id="login" onClick={this.confirmEmail}>
// 								Log In
// 							</button>
// 							<button className="btn btn-light text-black px-4" id="signup" onClick={this.getStarted}>
// 								Sign up
// 							</button>
// 						</div>
// 					</header>
// 				</div>

// 				<div className="wrapper" id="11" style={{ backgroundImage: `url(${randomBg()})` }}>
// 					<div className="mw py-5 px-3 px-sm-5">
// 						<div className="w-100 banner d-flex justify-content-center">{this.display()}</div>
// 					</div>
// 				</div>

// 				<div className="wrapper bg-indigo d-none" id="12">
// 					<div className="mw py-5 px-3 px-sm-5">
// 						{/* <header className="d-none d-md-flex justify-content-between align-items-center">
// 							<div className="input-group search">
// 								<input type="text" className="form-control light-bg p-3" placeholder="Search Qrate" aria-label="Search" />
// 								<div className="input-group-append p-2 border border-left-0 light-bg">
// 									<i className="fa fa-search text-light"></i>
// 								</div>
// 							</div>
// 							<div className="d-flex">
// 								<button className="btn bg-transparent text-light px-4" onClick={this.confirmEmail}>
// 									Log In
// 								</button>
// 								<button className="btn btn-light text-black px-4" onClick={this.getStarted}>
// 									Sign up
// 								</button>
// 							</div>
// 						</header> */}
// 						<div className="about d-flex flex-column justify-content-center align-items-center text-light text-center px-4 px-sm-5 px-md-auto mwm">
// 							<div className="qrate-svg mb-md-5">
// 								<div>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-3 mb-n4"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 67 66"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path d="M54.6606 0H66.1333V11.6016H54.6606V0Z" fill="white" fillOpacity="0.25" />
// 										<path d="M27.7637 0H39.2363V11.6016H27.7637V0Z" fill="white" fillOpacity="0.25" />
// 										<path d="M0.866699 0H12.3394V11.6016H0.866699V0Z" fill="white" fillOpacity="0.25" />
// 										<path d="M54.6606 27.1992H66.1333V38.8008H54.6606V27.1992Z" fill="white" fillOpacity="0.25" />
// 										<path d="M0.866699 27.1992H12.3394V38.8008H0.866699V27.1992Z" fill="white" fillOpacity="0.25" />
// 										<path d="M54.6606 54.3984H66.1333V66H54.6606V54.3984Z" fill="white" fillOpacity="0.25" />
// 										<path d="M27.7637 54.3984H39.2363V66H27.7637V54.3984Z" fill="white" fillOpacity="0.25" />
// 										<path d="M0.866699 54.3984H12.3394V66H0.866699V54.3984Z" fill="white" fillOpacity="0.25" />
// 										<path
// 											d="M35.4121 27.1992H31.5879V31.0664H27.7637V34.9336H31.5879V38.8008H35.4121V34.9336H39.2363V31.0664H35.4121V27.1992Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path d="M58.4849 42.668H62.3091V50.5312H58.4849V42.668Z" fill="white" fillOpacity="0.25" />
// 										<path d="M43.0605 58.2656H50.8365V62.1328H43.0605V58.2656Z" fill="white" fillOpacity="0.25" />
// 										<path d="M16.1636 58.2656H23.9395V62.1328H16.1636V58.2656Z" fill="white" fillOpacity="0.25" />
// 										<path d="M4.69092 42.668H8.51514V50.5312H4.69092V42.668Z" fill="white" fillOpacity="0.25" />
// 										<path d="M4.69092 15.4688H8.51514V23.332H4.69092V15.4688Z" fill="white" fillOpacity="0.25" />
// 										<path d="M16.1636 3.86719H23.9395V7.73438H16.1636V3.86719Z" fill="white" fillOpacity="0.25" />
// 										<path d="M43.0605 3.86719H50.8365V7.73438H43.0605V3.86719Z" fill="white" fillOpacity="0.25" />
// 										<path d="M58.4849 15.4688H62.3091V23.332H58.4849V15.4688Z" fill="white" fillOpacity="0.25" />
// 									</svg>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-3"
// 										win2="true"
// 										mb-md-dth="30"
// 										height="30"
// 										viewBox="0 0 90 90"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M53.4375 19.5117C54.2719 19.5117 55.0875 19.2643 55.7813 18.8007C56.4751 18.3372 57.0158 17.6783 57.3351 16.9074C57.6544 16.1365 57.738 15.2883 57.5752 14.4699C57.4124 13.6516 57.0106 12.8999 56.4206 12.3099C55.8306 11.7199 55.0789 11.3181 54.2605 11.1553C53.4422 10.9925 52.5939 11.076 51.8231 11.3954C51.0522 11.7147 50.3933 12.2554 49.9297 12.9492C49.4662 13.6429 49.2188 14.4586 49.2188 15.293C49.22 16.4115 49.6649 17.4838 50.4558 18.2747C51.2467 19.0656 52.319 19.5105 53.4375 19.5117ZM53.4375 13.8867C53.7156 13.8867 53.9875 13.9692 54.2188 14.1237C54.45 14.2782 54.6303 14.4979 54.7367 14.7548C54.8431 15.0118 54.871 15.2945 54.8167 15.5673C54.7625 15.8401 54.6285 16.0907 54.4319 16.2873C54.2352 16.484 53.9846 16.6179 53.7119 16.6722C53.4391 16.7265 53.1563 16.6986 52.8994 16.5922C52.6424 16.4857 52.4228 16.3055 52.2682 16.0742C52.1137 15.843 52.0313 15.5711 52.0313 15.293C52.0317 14.9201 52.18 14.5627 52.4436 14.2991C52.7072 14.0354 53.0647 13.8871 53.4375 13.8867Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M81.3867 85.7812H77.7691L79.933 77.7076C80.0072 77.4286 79.9943 77.1336 79.8961 76.8621L61.9664 27.6434C61.8676 27.3722 61.6877 27.1381 61.4512 26.9727C61.2148 26.8073 60.9331 26.7186 60.6445 26.7188H60.4688V22.3242C60.4686 22.0489 60.3877 21.7796 60.2362 21.5497C60.0847 21.3198 59.8692 21.1393 59.6162 21.0305C60.4799 20.1029 61.1232 18.9924 61.4981 17.7817C61.8729 16.571 61.9698 15.2913 61.7814 14.038C61.593 12.7847 61.1242 11.59 60.41 10.543C59.6958 9.496 58.7545 8.62368 57.6562 7.99102V5.625C57.6562 4.50612 57.2118 3.43306 56.4206 2.64189C55.6294 1.85072 54.5564 1.40625 53.4375 1.40625C52.3186 1.40625 51.2456 1.85072 50.4544 2.64189C49.6632 3.43306 49.2188 4.50612 49.2188 5.625V7.99102C48.1205 8.62368 47.1792 9.496 46.465 10.543C45.7508 11.59 45.282 12.7847 45.0936 14.038C44.9052 15.2913 45.0021 16.571 45.3769 17.7817C45.7518 18.9924 46.3951 20.1029 47.2588 21.0305C47.0058 21.1393 46.7903 21.3198 46.6388 21.5497C46.4873 21.7796 46.4064 22.0489 46.4062 22.3242V26.7188C46.1194 26.719 45.8394 26.8068 45.6038 26.9705C45.3682 27.1341 45.1882 27.3658 45.0879 27.6346L26.8066 76.8533C26.7026 77.1347 26.6909 77.442 26.7732 77.7305L29.0725 85.7812H2.8125C2.43954 85.7812 2.08185 85.9294 1.81813 86.1931C1.55441 86.4569 1.40625 86.8145 1.40625 87.1875C1.40625 87.5605 1.55441 87.9181 1.81813 88.1819C2.08185 88.4456 2.43954 88.5938 2.8125 88.5938H81.3867C81.7597 88.5938 82.1174 88.4456 82.3811 88.1819C82.6448 87.9181 82.793 87.5605 82.793 87.1875C82.793 86.8145 82.6448 86.4569 82.3811 86.1931C82.1174 85.9294 81.7597 85.7812 81.3867 85.7812ZM52.0312 5.625C52.0312 5.25204 52.1794 4.89435 52.4431 4.63063C52.7069 4.36691 53.0645 4.21875 53.4375 4.21875C53.8105 4.21875 54.1681 4.36691 54.4319 4.63063C54.6956 4.89435 54.8438 5.25204 54.8438 5.625V6.975C53.913 6.81563 52.962 6.81563 52.0312 6.975V5.625ZM52.04 9.84375H54.835C56.1619 10.1841 57.319 10.9969 58.0892 12.1298C58.8594 13.2626 59.1898 14.6376 59.0182 15.9967C58.8467 17.3558 58.1852 18.6055 57.1577 19.5115C56.1302 20.4175 54.8074 20.9174 53.4375 20.9174C52.0676 20.9174 50.7448 20.4175 49.7173 19.5115C48.6898 18.6055 48.0283 17.3558 47.8568 15.9967C47.6852 14.6376 48.0156 13.2626 48.7858 12.1298C49.556 10.9969 50.7131 10.1841 52.04 9.84375ZM57.6562 23.7305V26.7188H49.2188V23.7305H57.6562ZM29.6033 77.4018L47.3836 29.5312H51.3967L31.1291 82.7367L29.6033 77.4018ZM32.9783 85.7812L53.4375 32.0748L73.8967 85.7812H32.9783ZM75.7037 82.6242L55.4783 29.5312H59.6602L77.1012 77.4088L75.7037 82.6242Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M5.625 37.9688H28.125C28.498 37.9688 28.8556 37.8206 29.1194 37.5569C29.3831 37.2931 29.5312 36.9355 29.5312 36.5625V25.3125C29.5312 24.9395 29.3831 24.5819 29.1194 24.3181C28.8556 24.0544 28.498 23.9062 28.125 23.9062H5.625C5.25204 23.9062 4.89435 24.0544 4.63063 24.3181C4.36691 24.5819 4.21875 24.9395 4.21875 25.3125V36.5625C4.21875 36.9355 4.36691 37.2931 4.63063 37.5569C4.89435 37.8206 5.25204 37.9688 5.625 37.9688ZM7.03125 26.7188H26.7188V35.1562H7.03125V26.7188Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M5.625 42.1875H28.125C28.498 42.1875 28.8556 42.0393 29.1194 41.7756C29.3831 41.5119 29.5312 41.1542 29.5312 40.7812C29.5312 40.4083 29.3831 40.0506 29.1194 39.7869C28.8556 39.5232 28.498 39.375 28.125 39.375H5.625C5.25204 39.375 4.89435 39.5232 4.63063 39.7869C4.36691 40.0506 4.21875 40.4083 4.21875 40.7812C4.21875 41.1542 4.36691 41.5119 4.63063 41.7756C4.89435 42.0393 5.25204 42.1875 5.625 42.1875Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M5.625 46.4062H28.125C28.498 46.4062 28.8556 46.2581 29.1194 45.9944C29.3831 45.7306 29.5312 45.373 29.5312 45C29.5312 44.627 29.3831 44.2694 29.1194 44.0056C28.8556 43.7419 28.498 43.5938 28.125 43.5938H5.625C5.25204 43.5938 4.89435 43.7419 4.63063 44.0056C4.36691 44.2694 4.21875 44.627 4.21875 45C4.21875 45.373 4.36691 45.7306 4.63063 45.9944C4.89435 46.2581 5.25204 46.4062 5.625 46.4062Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M5.625 50.625H16.875C17.248 50.625 17.6056 50.4768 17.8694 50.2131C18.1331 49.9494 18.2812 49.5917 18.2812 49.2188C18.2812 48.8458 18.1331 48.4881 17.8694 48.2244C17.6056 47.9607 17.248 47.8125 16.875 47.8125H5.625C5.25204 47.8125 4.89435 47.9607 4.63063 48.2244C4.36691 48.4881 4.21875 48.8458 4.21875 49.2188C4.21875 49.5917 4.36691 49.9494 4.63063 50.2131C4.89435 50.4768 5.25204 50.625 5.625 50.625Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M21.2695 47.8125C20.8966 47.8125 20.5389 47.9607 20.2752 48.2244C20.0114 48.4881 19.8633 48.8458 19.8633 49.2188C19.8633 49.5917 20.0114 49.9494 20.2752 50.2131C20.5389 50.4768 20.8966 50.625 21.2695 50.625H22.6758C23.0487 50.625 23.4064 50.4768 23.6702 50.2131C23.9339 49.9494 24.082 49.5917 24.082 49.2188C24.082 48.8458 23.9339 48.4881 23.6702 48.2244C23.4064 47.9607 23.0487 47.8125 22.6758 47.8125H21.2695Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M87.1875 85.7812H85.7812C85.4083 85.7812 85.0506 85.9294 84.7869 86.1931C84.5232 86.4569 84.375 86.8145 84.375 87.1875C84.375 87.5605 84.5232 87.9181 84.7869 88.1819C85.0506 88.4456 85.4083 88.5938 85.7812 88.5938H87.1875C87.5605 88.5938 87.9181 88.4456 88.1819 88.1819C88.4456 87.9181 88.5938 87.5605 88.5938 87.1875C88.5938 86.8145 88.4456 86.4569 88.1819 86.1931C87.9181 85.9294 87.5605 85.7812 87.1875 85.7812Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-3"
// 										win2="true"
// 										mb-md-dth="30"
// 										height="30"
// 										viewBox="0 0 66 65"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M35.0625 14.2188C34.2467 14.2188 33.4491 14.457 32.7708 14.9034C32.0924 15.3498 31.5637 15.9843 31.2515 16.7266C30.9393 17.4689 30.8576 18.2858 31.0168 19.0738C31.1759 19.8619 31.5688 20.5857 32.1457 21.1539C32.7226 21.722 33.4576 22.1089 34.2578 22.2657C35.0579 22.4224 35.8873 22.342 36.6411 22.0345C37.3948 21.727 38.0391 21.2063 38.4923 20.5383C38.9456 19.8702 39.1875 19.0847 39.1875 18.2812C39.1875 17.2038 38.7529 16.1705 37.9793 15.4086C37.2057 14.6468 36.1565 14.2188 35.0625 14.2188ZM35.0625 20.3125C34.6546 20.3125 34.2558 20.1934 33.9166 19.9702C33.5775 19.747 33.3131 19.4297 33.157 19.0586C33.0009 18.6874 32.9601 18.279 33.0396 17.885C33.1192 17.4909 33.3156 17.129 33.6041 16.8449C33.8925 16.5609 34.26 16.3674 34.6601 16.289C35.0602 16.2107 35.4749 16.2509 35.8518 16.4046C36.2287 16.5584 36.5508 16.8187 36.7774 17.1527C37.004 17.4868 37.125 17.8795 37.125 18.2812C37.125 18.82 36.9077 19.3366 36.5209 19.7176C36.1341 20.0985 35.6095 20.3125 35.0625 20.3125Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M44.3438 19.2969C43.7319 19.2969 43.1337 19.4756 42.625 19.8104C42.1162 20.1452 41.7197 20.621 41.4855 21.1778C41.2513 21.7345 41.1901 22.3471 41.3094 22.9382C41.4288 23.5292 41.7235 24.0721 42.1561 24.4982C42.5888 24.9243 43.1401 25.2145 43.7402 25.3321C44.3403 25.4496 44.9624 25.3893 45.5277 25.1587C46.093 24.9281 46.5762 24.5376 46.9161 24.0365C47.2561 23.5354 47.4375 22.9464 47.4375 22.3437C47.4375 21.5357 47.1116 20.7607 46.5314 20.1893C45.9512 19.6179 45.1643 19.2969 44.3438 19.2969ZM44.3438 23.3594C44.1398 23.3594 43.9404 23.2998 43.7708 23.1882C43.6012 23.0766 43.4691 22.918 43.391 22.7324C43.313 22.5468 43.2925 22.3426 43.3323 22.1456C43.3721 21.9486 43.4703 21.7676 43.6145 21.6256C43.7588 21.4836 43.9425 21.3868 44.1426 21.3476C44.3426 21.3085 44.55 21.3286 44.7384 21.4054C44.9268 21.4823 45.0879 21.6125 45.2012 21.7795C45.3145 21.9465 45.375 22.1429 45.375 22.3437C45.375 22.6131 45.2664 22.8714 45.073 23.0619C44.8796 23.2524 44.6173 23.3594 44.3438 23.3594Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M44.3438 30.4688C44.3438 31.0714 44.5252 31.6605 44.8651 32.1615C45.2051 32.6626 45.6883 33.0531 46.2536 33.2837C46.8189 33.5143 47.4409 33.5747 48.0411 33.4571C48.6412 33.3395 49.1924 33.0493 49.6251 32.6232C50.0578 32.1971 50.3524 31.6542 50.4718 31.0632C50.5912 30.4721 50.5299 29.8595 50.2958 29.3028C50.0616 28.746 49.6651 28.2702 49.1563 27.9354C48.6475 27.6006 48.0494 27.4219 47.4375 27.4219C46.617 27.4219 45.8301 27.7429 45.2499 28.3143C44.6697 28.8857 44.3438 29.6607 44.3438 30.4688ZM47.4375 29.4531C47.6415 29.4531 47.8408 29.5127 48.0104 29.6243C48.18 29.7359 48.3122 29.8945 48.3903 30.0801C48.4683 30.2657 48.4887 30.4699 48.4489 30.6669C48.4091 30.8639 48.3109 31.0449 48.1667 31.1869C48.0225 31.3289 47.8387 31.4257 47.6387 31.4649C47.4386 31.5041 47.2313 31.4839 47.0429 31.4071C46.8544 31.3302 46.6934 31.2 46.58 31.033C46.4667 30.866 46.4063 30.6696 46.4063 30.4688C46.4063 30.1994 46.5149 29.9411 46.7083 29.7506C46.9017 29.5601 47.164 29.4531 47.4375 29.4531Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M60.8438 2.03125H5.15625C4.33649 2.03366 3.551 2.35544 2.97134 2.92632C2.39168 3.4972 2.06495 4.27079 2.0625 5.07812V53.8281C2.06495 54.6355 2.39168 55.409 2.97134 55.9799C3.551 56.5508 4.33649 56.8726 5.15625 56.875H24.8841L21.8316 61.3945C21.7252 61.5451 21.664 61.722 21.6549 61.9052C21.6458 62.0884 21.6891 62.2704 21.78 62.4305C21.8662 62.5938 21.9966 62.7305 22.1568 62.8255C22.3169 62.9205 22.5006 62.9701 22.6875 62.9688H43.3125C43.4994 62.9701 43.6831 62.9205 43.8432 62.8255C44.0034 62.7305 44.1338 62.5938 44.22 62.4305C44.3109 62.2704 44.3543 62.0884 44.3451 61.9052C44.336 61.722 44.2748 61.5451 44.1684 61.3945L41.1159 56.875H60.8438C61.6635 56.8726 62.449 56.5508 63.0287 55.9799C63.6083 55.409 63.9351 54.6355 63.9375 53.8281V5.07812C63.9351 4.27079 63.6083 3.4972 63.0287 2.92632C62.449 2.35544 61.6635 2.03366 60.8438 2.03125ZM41.3841 60.9375H24.6159L27.3694 56.875H38.6306L41.3841 60.9375ZM61.875 53.8281C61.875 54.0975 61.7663 54.3558 61.573 54.5463C61.3796 54.7367 61.1173 54.8438 60.8438 54.8438H5.15625C4.88275 54.8438 4.62044 54.7367 4.42705 54.5463C4.23365 54.3558 4.125 54.0975 4.125 53.8281V50.7812H61.875V53.8281ZM61.875 48.75H4.125V5.07812C4.125 4.80876 4.23365 4.55044 4.42705 4.35997C4.62044 4.1695 4.88275 4.0625 5.15625 4.0625H60.8438C61.1173 4.0625 61.3796 4.1695 61.573 4.35997C61.7663 4.55044 61.875 4.80876 61.875 5.07812V48.75Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M37.4655 38.0861L26.1217 18.7385C26.0541 18.6219 25.9637 18.5197 25.8557 18.4378C25.7477 18.3559 25.6243 18.2958 25.4926 18.2611C25.228 18.1926 24.9465 18.229 24.7089 18.3627L21.1408 20.394C20.9042 20.5299 20.7315 20.7521 20.6601 21.0125C20.5886 21.273 20.6243 21.5506 20.7592 21.7854L32.1029 41.133C32.2442 41.3644 32.4688 41.5349 32.732 41.6104C32.8199 41.6305 32.9099 41.6407 33.0001 41.6408C33.1803 41.638 33.3571 41.5927 33.5158 41.5088L37.0839 39.4775C37.2021 39.4112 37.3057 39.3225 37.3889 39.2165C37.4721 39.1105 37.5332 38.9894 37.5687 38.8601C37.6042 38.7307 37.6133 38.5958 37.5956 38.4629C37.5779 38.3301 37.5336 38.2021 37.4655 38.0861ZM33.3817 39.2338L23.0692 21.6432L24.8533 20.6275L35.1658 38.2182L33.3817 39.2338Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M23.9251 12.9492L22.9454 11.2836C22.4781 10.488 21.8011 9.8318 20.986 9.38434L16.7269 7.05856C16.5705 6.97283 16.3941 6.92869 16.2151 6.93047C16.0361 6.93225 15.8606 6.9799 15.706 7.06871C15.5526 7.15751 15.4247 7.28339 15.3345 7.43446C15.2442 7.58553 15.1946 7.75678 15.1904 7.93199L15.1079 12.7257C15.0955 13.6444 15.3341 14.5494 15.7988 15.3461L16.7785 17.0117C17.1896 17.7111 17.8655 18.2215 18.6581 18.4309C19.4507 18.6403 20.2952 18.5317 21.0066 18.1289L22.7907 17.1132C23.143 16.9133 23.4518 16.647 23.6995 16.3295C23.9472 16.012 24.1289 15.6495 24.2342 15.2628C24.3396 14.876 24.3665 14.4727 24.3135 14.0757C24.2604 13.6787 24.1284 13.2959 23.9251 12.9492ZM22.2338 14.7367C22.2012 14.8661 22.1424 14.9877 22.0609 15.0942C21.9794 15.2006 21.8768 15.2898 21.7594 15.3562L19.9754 16.3718C19.737 16.5047 19.4551 16.5398 19.1907 16.4695C18.9262 16.3991 18.7006 16.2291 18.5626 15.9961L17.5829 14.3304C17.3026 13.8524 17.16 13.3081 17.1704 12.7562L17.2219 9.65856L19.9857 11.1617C20.4751 11.4288 20.8815 11.822 21.1613 12.2992L22.1307 13.9648C22.2006 14.0797 22.2459 14.2074 22.2636 14.3402C22.2813 14.473 22.2712 14.6079 22.2338 14.7367Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M29.2185 12.1547C32.8794 10.8814 36.8659 10.8409 40.5526 12.0397C44.2394 13.2384 47.4178 15.6085 49.5893 18.7781C51.7608 21.9478 52.8025 25.7377 52.551 29.5533C52.2995 33.3689 50.769 36.9944 48.1997 39.861C47.811 38.6133 47.0265 37.5211 45.9614 36.7446C44.8963 35.9681 43.6065 35.5483 42.2813 35.5466C42.0078 35.5466 41.7455 35.6536 41.5521 35.8441C41.3587 36.0345 41.2501 36.2929 41.2501 36.5622C41.2501 36.8316 41.3587 37.0899 41.5521 37.2804C41.7455 37.4709 42.0078 37.5779 42.2813 37.5779C43.3753 37.5779 44.4245 38.0059 45.1981 38.7677C45.9717 39.5296 46.4063 40.5629 46.4063 41.6404C46.4069 41.7369 46.4 41.8333 46.3857 41.9288C46.3548 42.135 46.389 42.3455 46.4838 42.5318C46.5785 42.7182 46.7292 42.8713 46.9153 42.9704C47.1014 43.0696 47.314 43.1099 47.5242 43.086C47.7344 43.0621 47.9321 42.9751 48.0903 42.8368C51.4791 39.8618 53.7138 35.8202 54.4126 31.4025C55.1114 26.9849 54.231 22.4653 51.9217 18.6161C49.6124 14.7668 46.0176 11.8267 41.7515 10.2981C37.4853 8.76954 32.8126 8.74729 28.5317 10.2352C28.2736 10.3249 28.0623 10.5119 27.9442 10.755C27.8262 10.9981 27.811 11.2775 27.9021 11.5317C27.9932 11.7858 28.183 11.9939 28.4299 12.1102C28.6768 12.2265 28.9604 12.2414 29.2185 12.1517V12.1547Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M27.0796 38.6282C25.5094 38.214 24.0375 37.4993 22.7479 36.5248C21.4583 35.5503 20.3762 34.3351 19.5636 32.9487C18.7509 31.5623 18.2235 30.0318 18.0116 28.4446C17.7997 26.8574 17.9073 25.2447 18.3284 23.6985C18.3677 23.5684 18.3801 23.4319 18.3649 23.2971C18.3497 23.1622 18.3073 23.0317 18.24 22.9133C18.1728 22.7949 18.0821 22.6909 17.9734 22.6076C17.8647 22.5242 17.7402 22.4631 17.6071 22.428C17.474 22.3928 17.3352 22.3843 17.1987 22.4029C17.0622 22.4215 16.9309 22.4668 16.8125 22.5362C16.6941 22.6056 16.5911 22.6976 16.5094 22.8069C16.4277 22.9161 16.3691 23.0404 16.337 23.1724C15.3504 26.8149 15.8712 30.6942 17.7852 33.959C19.6992 37.2238 22.85 39.6076 26.5464 40.5873C26.6331 40.611 26.7225 40.6237 26.8125 40.6249C27.0626 40.6247 27.3042 40.5351 27.4922 40.3725C27.6802 40.21 27.8018 39.9857 27.8344 39.7414C27.8669 39.4971 27.8082 39.2495 27.6692 39.0447C27.5301 38.8399 27.3202 38.6919 27.0785 38.6282H27.0796Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-3 mb-n4"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 73 52"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M71.585 4.29863C71.5802 4.29863 71.5754 4.29863 71.5709 4.29863H66.774V2.67971C66.7998 2.03894 66.3796 1.46308 65.7552 1.28409C62.425 0.423341 58.9957 -0.00825418 55.553 0.000119539C49.893 0.000119539 42.1812 1.25618 36.4788 6.97822C30.8188 1.20035 23.0504 0.000119539 17.4045 0.000119539C13.9618 -0.00825418 10.5326 0.423341 7.20237 1.28409C6.578 1.46308 6.15774 2.03894 6.18356 2.67971V4.28467H1.415C0.633568 4.28467 0 4.90956 0 5.68029V50.2564C0 51.0271 0.633568 51.652 1.415 51.652C1.65803 51.6513 1.89681 51.5888 2.10835 51.4706C2.24985 51.4008 16.3999 43.7667 36.1533 48.6793H36.3656H36.4929C36.6058 48.6928 36.7197 48.6928 36.8325 48.6793C56.6426 43.7249 70.7926 51.345 70.8775 51.4706C71.3153 51.7198 71.8547 51.7198 72.2925 51.4706C72.7276 51.2228 72.997 50.7659 73 50.2703V5.69425C73 4.92352 72.3666 4.29863 71.585 4.29863ZM2.83001 48.0373V7.08987H6.21186V42.092C6.20302 42.8627 6.82933 43.4946 7.61077 43.5033C7.68718 43.5042 7.76359 43.499 7.83912 43.4876C10.7664 43.0468 13.7218 42.8135 16.6829 42.7898C20.7846 42.7197 24.8692 43.3282 28.767 44.5902C19.9648 43.5403 11.0365 44.7269 2.83001 48.0373ZM16.6829 40.0125C14.1092 40.0183 11.5385 40.1814 8.98527 40.501V3.78225C11.7403 3.1769 14.5537 2.86794 17.3762 2.86114C22.6683 2.86114 29.9698 4.06137 35.0355 9.69967L35.0779 44.4645C32.1347 42.5665 26.3898 40.0125 16.6829 40.0125ZM37.9079 9.69967C42.9736 4.1172 50.2751 2.86114 55.5672 2.86114C58.3896 2.86934 61.2029 3.17812 63.9581 3.78225V40.501C61.4193 40.1784 58.8627 40.0106 56.303 39.9986C46.6526 39.9986 40.8936 42.5526 37.9079 44.4506V9.69967ZM70.1558 48.0373C61.9319 44.7179 52.983 43.5311 44.1622 44.5902C48.0784 43.3236 52.1825 42.715 56.303 42.7898C59.2826 42.8062 62.2571 43.0347 65.2033 43.4737C65.9759 43.5893 66.6974 43.0653 66.8147 42.3033C66.8262 42.2288 66.8315 42.1534 66.8306 42.078V7.08987H70.2124L70.1558 48.0373Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 									</svg>
// 								</div>
// 								<div>
// 									<svg
// 										className="mx-0 mx-sm-3 my-2"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 67 67"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M10.8215 42.7501C11.3658 42.7501 11.807 42.3089 11.807 41.7646V34.9726C11.807 34.4283 11.3658 33.9871 10.8215 33.9871C10.2772 33.9871 9.83594 34.4283 9.83594 34.9726V41.7646C9.83594 42.3089 10.2772 42.7501 10.8215 42.7501Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M10.8215 29.1658C11.3658 29.1658 11.807 28.7246 11.807 28.1803V25.4514L14.1433 24.0411C14.6093 23.7598 14.7591 23.1541 14.4777 22.688C14.1965 22.2222 13.5907 22.0723 13.1246 22.3536L10.3122 24.0512C10.0166 24.2297 9.83594 24.5497 9.83594 24.895V28.1802C9.83594 28.7246 10.2772 29.1658 10.8215 29.1658Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M19.3231 20.7498C19.4964 20.7498 19.6721 20.704 19.8315 20.6078L25.5197 17.1742C25.9856 16.8928 26.1354 16.2872 25.8541 15.8211C25.5729 15.3553 24.9672 15.2053 24.501 15.4867L18.8128 18.9203C18.3469 19.2017 18.1971 19.8073 18.4784 20.2734C18.6634 20.5801 18.9892 20.7498 19.3231 20.7498Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M41.4466 17.1795L47.0876 20.6108C47.2477 20.7082 47.4243 20.7544 47.5988 20.7544C47.9315 20.7544 48.2562 20.586 48.4418 20.2808C48.7246 19.8158 48.577 19.2096 48.1119 18.9267L42.4709 15.4954C42.006 15.2126 41.3997 15.3603 41.1168 15.8253C40.834 16.2904 40.9816 16.8966 41.4466 17.1795Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M52.7285 24.0424L55.0617 25.4618V28.1929C55.0617 28.7372 55.503 29.1785 56.0473 29.1785C56.5915 29.1785 57.0328 28.7372 57.0328 28.1929V24.9077C57.0328 24.5637 56.8534 24.2445 56.5593 24.0657L53.7526 22.3585C53.2876 22.0757 52.6814 22.2234 52.3985 22.6883C52.1157 23.1533 52.2634 23.7596 52.7285 24.0424Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M56.0471 33.991C55.5028 33.991 55.0615 34.4322 55.0615 34.9765V41.7604C55.0615 42.3047 55.5028 42.7459 56.0471 42.7459C56.5914 42.7459 57.0326 42.3047 57.0326 41.7604V34.9765C57.0326 34.4322 56.5914 33.991 56.0471 33.991Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M47.0877 56.1261L41.4467 59.5574C40.9816 59.8403 40.8339 60.4466 41.1169 60.9115C41.3024 61.2165 41.6271 61.3851 41.9598 61.3851C42.1343 61.3851 42.3111 61.3387 42.471 61.2415L48.112 57.8102C48.5771 57.5273 48.7248 56.921 48.4418 56.4561C48.1589 55.9912 47.5529 55.8431 47.0877 56.1261Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M35.8052 62.9884L33.5087 64.3853L31.2075 62.9962C30.7414 62.7147 30.1356 62.8646 29.8544 63.3306C29.573 63.7966 29.7228 64.4023 30.1888 64.6837L33.0013 66.3813C33.1579 66.4759 33.3343 66.5231 33.5106 66.5231C33.688 66.5231 33.8656 66.4753 34.0227 66.3796L36.8294 64.6724C37.2945 64.3895 37.4422 63.7831 37.1593 63.3182C36.8766 62.8533 36.2704 62.7055 35.8052 62.9884Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M25.5198 59.5626L19.8315 56.1291C19.3651 55.8476 18.7596 55.9976 18.4784 56.4635C18.1971 56.9295 18.3469 57.5353 18.8128 57.8166L24.5011 61.2501C24.6605 61.3463 24.8361 61.392 25.0096 61.392C25.3435 61.392 25.6692 61.2223 25.8542 60.9157C26.1354 60.4497 25.9858 59.8439 25.5198 59.5626Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M33.5002 26.3745C34.0445 26.3745 34.4858 25.9332 34.4858 25.3889V24.632C34.4858 24.0877 34.0445 23.6465 33.5002 23.6465C32.9559 23.6465 32.5146 24.0877 32.5146 24.632V25.3889C32.5146 25.9332 32.9558 26.3745 33.5002 26.3745Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M33.5002 32.0261C34.0445 32.0261 34.4858 31.5848 34.4858 31.0405V30.2836C34.4858 29.7394 34.0445 29.2981 33.5002 29.2981C32.9559 29.2981 32.5146 29.7394 32.5146 30.2836V31.0405C32.5146 31.5848 32.9558 32.0261 33.5002 32.0261Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M62.8757 52.1258C61.8227 52.1258 60.8612 52.5229 60.1317 53.1745L57.0328 51.404V48.544C57.0328 47.9998 56.5916 47.5585 56.0473 47.5585C55.503 47.5585 55.0617 47.9998 55.0617 48.544V50.2777L51.5115 48.2492C51.5123 48.2267 51.5138 48.2042 51.5138 48.1818V28.5549C51.5138 27.8773 51.1541 27.2376 50.575 26.8851L34.5137 17.1152C34.5044 17.1096 34.4948 17.1048 34.4855 17.0993V12.9454L35.8055 13.7483C35.9655 13.8457 36.1421 13.8919 36.3166 13.8919C36.6493 13.8919 36.9741 13.7235 37.1596 13.4184C37.4424 12.9533 37.2948 12.3471 36.8298 12.0642L34.4855 10.6382V8.6056C36.2852 8.1625 37.6243 6.53569 37.6243 4.60112C37.6243 2.32688 35.7741 0.476807 33.4999 0.476807C31.2258 0.476807 29.3756 2.32701 29.3756 4.60112C29.3756 6.53569 30.7146 8.1625 32.5144 8.6056V10.6494L30.1892 12.0529C29.7232 12.3343 29.5734 12.9399 29.8547 13.406C30.1361 13.8721 30.7417 14.0219 31.2078 13.7404L32.5144 12.9517V17.0972C32.5057 17.1023 32.4966 17.1067 32.488 17.1119L16.2991 26.8841C15.7166 27.2357 15.3547 27.8769 15.3547 28.5573V34.6236C15.3547 35.1679 15.796 35.6092 16.3402 35.6092C16.8845 35.6092 17.3258 35.1679 17.3258 34.6236V29.7565L32.5143 38.9248V57.3385L17.5211 48.2882C17.5127 48.2714 17.505 48.2543 17.4954 48.2377C17.4483 48.1553 17.3906 48.0829 17.3257 48.0199V38.8238C17.3257 38.2795 16.8844 37.8382 16.3401 37.8382C15.7958 37.8382 15.3546 38.2795 15.3546 38.8238V48.1798C15.3546 48.2276 15.3568 48.2752 15.3603 48.3225L11.8069 50.3529V48.5564C11.8069 48.0121 11.3656 47.5709 10.8213 47.5709C10.277 47.5709 9.83576 48.0121 9.83576 48.5564V51.479L6.86835 53.1744C6.13878 52.5228 5.17715 52.1257 4.12432 52.1257C1.8502 52.1258 0 53.976 0 56.2502C0 58.5245 1.8502 60.3746 4.12432 60.3746C6.39844 60.3746 8.24864 58.5244 8.24864 56.2502C8.24864 55.7422 8.15573 55.2555 7.98701 54.8057L10.9858 53.0923L13.1243 54.3832C13.2836 54.4794 13.4593 54.5251 13.6327 54.5251C13.9667 54.5251 14.2924 54.3554 14.4774 54.0488C14.7588 53.5828 14.609 52.977 14.143 52.6957L12.9452 51.9727L16.4722 49.9575L32.4878 59.6249C32.5876 59.6851 32.6913 59.7345 32.7974 59.7755C32.9763 59.9572 33.2248 60.0702 33.4998 60.0702C33.776 60.0702 34.0253 59.9563 34.2043 59.7732C34.3103 59.732 34.414 59.6822 34.5135 59.6216L40.8574 55.7627C41.3224 55.4798 41.4701 54.8735 41.1872 54.4086C40.9043 53.9437 40.298 53.7957 39.8331 54.0787L34.4854 57.3317V38.9225L49.5424 29.7633V48.1724L43.4601 51.8722C42.9951 52.1551 42.8475 52.7614 43.1303 53.2264C43.3159 53.5314 43.6406 53.6999 43.9733 53.6999C44.1478 53.6999 44.3245 53.6535 44.4846 53.5563L50.4623 49.9201L53.9825 51.9316L52.7282 52.6945C52.2632 52.9774 52.1155 53.5837 52.3984 54.0487C52.5839 54.3536 52.9086 54.5222 53.2414 54.5222C53.4159 54.5222 53.5926 54.4759 53.7525 54.3786L55.9384 53.049L59.0129 54.8057C58.8441 55.2555 58.7512 55.7421 58.7512 56.2502C58.7512 58.5245 60.6014 60.3746 62.8756 60.3746C65.1497 60.3746 66.9999 58.5244 66.9999 56.2502C66.9999 53.9761 65.1499 52.1258 62.8757 52.1258ZM4.12432 58.4035C2.93706 58.4035 1.97109 57.4375 1.97109 56.2502C1.97109 55.063 2.93706 54.097 4.12432 54.097C5.31157 54.097 6.27754 55.063 6.27754 56.2502C6.27754 57.4375 5.31157 58.4035 4.12432 58.4035ZM31.3467 4.60112C31.3467 3.41387 32.3127 2.4479 33.4999 2.4479C34.6872 2.4479 35.6532 3.41387 35.6532 4.60112C35.6532 5.78838 34.6873 6.75435 33.5001 6.75435C32.3128 6.75435 31.3467 5.78838 31.3467 4.60112ZM32.5145 19.3984V20.4355C32.5145 20.9797 32.9558 21.421 33.5001 21.421C34.0443 21.421 34.4856 20.9797 34.4856 20.4355V19.4054L48.6319 28.0104L34.4856 36.6154V35.4611C34.4856 34.9168 34.0443 34.4756 33.5001 34.4756C32.9558 34.4756 32.5145 34.9168 32.5145 35.4611V36.6223L18.2476 28.0102L32.5145 19.3984ZM62.8757 58.4035C61.6884 58.4035 60.7225 57.4375 60.7225 56.2502C60.7225 55.063 61.6884 54.097 62.8757 54.097C64.0629 54.097 65.0289 55.063 65.0289 56.2502C65.0289 57.4375 64.0629 58.4035 62.8757 58.4035Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-0 mx-sm-3 my-2"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 78 78"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<g clipPath="url(#clip0)">
// 											<path
// 												d="M75.7148 0H66.5742C65.3122 0 64.2891 1.02314 64.2891 2.28516V4.57031H45.4624C44.5191 1.9107 41.9791 0 39 0C36.0209 0 33.4809 1.9107 32.5376 4.57031H13.7109V2.28516C13.7109 1.02314 12.6878 0 11.4258 0H2.28516C1.02314 0 0 1.02314 0 2.28516V11.4258C0 12.6878 1.02314 13.7109 2.28516 13.7109H11.4258C12.6878 13.7109 13.7109 12.6878 13.7109 11.4258V9.11016H23.2137C14.9694 14.3316 9.95795 23.1524 9.35513 32.5166C6.66321 33.4422 4.72266 35.9979 4.72266 39C4.72266 42.7801 7.79802 45.8555 11.5781 45.8555C15.3582 45.8555 18.4336 42.7801 18.4336 39C18.4336 36.0476 16.5575 33.5251 13.9349 32.562C14.7463 21.7993 22.4963 12.5297 32.8599 9.8996C33.9833 12.1561 36.3128 13.7109 39 13.7109C41.6872 13.7109 44.0167 12.1561 45.1401 9.89975C55.5039 12.5298 63.2537 21.7995 64.0651 32.5621C61.4425 33.5251 59.5664 36.0476 59.5664 39C59.5664 42.7801 62.6418 45.8555 66.4219 45.8555C70.202 45.8555 73.2773 42.7801 73.2773 39C73.2773 35.9979 71.3368 33.4422 68.6449 32.5166C68.0408 23.1337 63.0144 14.3518 54.7863 9.14062H64.2891V11.4258C64.2891 12.6878 65.3122 13.7109 66.5742 13.7109H75.7148C76.9769 13.7109 78 12.6878 78 11.4258V2.28516C78 1.02314 76.9769 0 75.7148 0ZM9.14062 9.14062H4.57031V4.57031H9.14062V9.14062ZM11.5781 41.2852C10.3181 41.2852 9.29297 40.26 9.29297 39C9.29297 37.74 10.3181 36.7148 11.5781 36.7148C12.8382 36.7148 13.8633 37.74 13.8633 39C13.8633 40.26 12.8382 41.2852 11.5781 41.2852ZM39 9.14062C37.74 9.14062 36.7148 8.1155 36.7148 6.85547C36.7148 5.59543 37.74 4.57031 39 4.57031C40.26 4.57031 41.2852 5.59543 41.2852 6.85547C41.2852 8.1155 40.26 9.14062 39 9.14062ZM66.4219 36.7148C67.6819 36.7148 68.707 37.74 68.707 39C68.707 40.26 67.6819 41.2852 66.4219 41.2852C65.1618 41.2852 64.1367 40.26 64.1367 39C64.1367 37.74 65.1618 36.7148 66.4219 36.7148ZM73.4297 9.14062H68.8594V4.57031H73.4297V9.14062Z"
// 												fill="white"
// 												fillOpacity="0.25"
// 											/>
// 											<path
// 												d="M59.1825 46.8731L40.9012 19.4514C40.9006 19.4505 40.8999 19.4496 40.8993 19.4485C40.8927 19.4387 40.8855 19.4294 40.8788 19.4198C40.8475 19.3743 40.8144 19.3304 40.78 19.2876C39.817 18.0911 37.9834 18.1718 37.1211 19.4198C37.1144 19.4294 37.1073 19.4387 37.1007 19.4485C37.1001 19.4496 37.0993 19.4503 37.0987 19.4514L18.8175 46.8733C18.2131 47.7796 18.3327 48.9864 19.103 49.7567C23.6622 54.3159 26.564 60.2756 27.3545 66.6517C26.9997 66.9386 26.6571 67.2457 26.3323 67.5781C24.1859 69.7737 23.0039 72.6635 23.0039 75.715C23.0039 76.977 24.027 78.0001 25.289 78.0001H52.7109C53.9729 78.0001 54.9961 76.977 54.9961 75.715C54.9961 72.6635 53.814 69.7737 51.6678 67.578C51.3429 67.2456 51.0004 66.9385 50.6454 66.6516C51.4358 60.2751 54.3377 54.3154 58.8968 49.7567C59.6672 48.9864 59.7868 47.7794 59.1825 46.8731ZM39 45.8556C40.26 45.8556 41.2851 46.8807 41.2851 48.1408C41.2851 49.4008 40.26 50.4259 39 50.4259C37.7399 50.4259 36.7148 49.4008 36.7148 48.1408C36.7148 46.8807 37.7399 45.8556 39 45.8556ZM27.9639 73.4298C28.9147 70.7131 31.492 68.7072 34.4297 68.7072H43.5703C46.5079 68.7072 49.0853 70.7131 50.0361 73.4298H27.9639ZM46.3498 64.4847C45.451 64.2552 44.5192 64.1369 43.5703 64.1369H34.4297C33.4807 64.1369 32.549 64.2552 31.6502 64.4848C30.5807 58.3257 27.8033 52.5683 23.6293 47.8947L36.7148 28.2663V41.6785C34.0551 42.6218 32.1445 45.1618 32.1445 48.1409C32.1445 51.921 35.2199 54.9964 39 54.9964C42.7801 54.9964 45.8555 51.921 45.8555 48.1409C45.8555 45.1618 43.9449 42.6218 41.2851 41.6785V28.2663L54.3709 47.8947C50.1966 52.5679 47.4191 58.3254 46.3498 64.4847Z"
// 												fill="white"
// 												fillOpacity="0.25"
// 											/>
// 										</g>
// 										<defs>
// 											<clipPath id="clip0">
// 												<rect width="78" height="78" fill="white" />
// 											</clipPath>
// 										</defs>
// 									</svg>
// 									<img className="m-2 m-sm-4" src="/images/homepage/qrate-light-logo.png" alt="Logo" />
// 									<svg
// 										className="mx-0 mx-sm-3 my-2"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 101 101"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M50.4999 41.0848C52.3908 41.0848 53.9236 39.5519 53.9236 37.661C53.9236 35.7702 52.3908 34.2373 50.4999 34.2373C48.609 34.2373 47.0762 35.7702 47.0762 37.661C47.0762 39.5519 48.609 41.0848 50.4999 41.0848Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M29.9575 78.7458V85.5933H65.9067V87.3052H29.9575V101H71.0423V78.7458H29.9575Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M5.0211 41.3674C4.81225 42.5281 4.64278 43.711 4.52295 44.8887L7.92956 45.2311C8.03912 44.1424 8.1949 43.0468 8.39005 41.9786L5.0211 41.3674Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M6.81986 34.4924C6.43126 35.6069 6.08376 36.7589 5.78418 37.8973L9.09664 38.767C9.37396 37.7107 9.69408 36.6528 10.0536 35.6171L6.81986 34.4924Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M9.38127 61.5264L6.08594 62.4833C6.41119 63.6114 6.78609 64.7464 7.20207 65.8574L10.4084 64.6505C10.0232 63.6234 9.67572 62.5723 9.38127 61.5264Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M8.04575 55.0913L4.64941 55.5261C4.80006 56.7022 4.99179 57.8817 5.23316 59.0269L8.5867 58.3353C8.36758 57.2739 8.18441 56.1818 8.04575 55.0913Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M11.6786 67.6821L8.57666 69.1269C9.0731 70.1951 9.61919 71.2582 10.1995 72.2905L13.1816 70.6077C12.6458 69.6542 12.139 68.6699 11.6786 67.6821Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M14.9018 73.4099L12.0601 75.3221C12.7226 76.3098 13.4296 77.2787 14.1468 78.198L16.8379 76.0736C16.1685 75.2176 15.5163 74.3258 14.9018 73.4099Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M18.1457 16.6411C17.2983 17.4748 16.4766 18.3444 15.708 19.2226L18.2758 21.4788C19.0016 20.6623 19.7531 19.8577 20.5423 19.0805L18.1457 16.6411Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M29.6546 8.3833C28.6001 8.9174 27.5559 9.49944 26.5493 10.1106L28.3279 13.0361C29.2506 12.4695 30.2161 11.932 31.1953 11.4373L29.6546 8.3833Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M9.65983 27.9854C9.10519 29.0245 8.58649 30.1012 8.1123 31.1848L11.2519 32.5543C11.6884 31.5529 12.1694 30.5549 12.6813 29.5894L9.65983 27.9854Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M13.4685 21.9785C12.7546 22.9389 12.0767 23.9181 11.4468 24.9109L14.3381 26.7443C14.9201 25.8251 15.5484 24.9144 16.2075 24.0328L13.4685 21.9785Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M23.5743 12.072C22.6139 12.7568 21.669 13.4963 20.772 14.2512L22.9751 16.8721C23.8071 16.1719 24.6819 15.4923 25.5737 14.8504L23.5743 12.072Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M36.2092 5.67285C35.0828 6.0409 33.9633 6.45517 32.8779 6.90026L34.1824 10.0672C35.1889 9.65294 36.2263 9.26948 37.2637 8.93053L36.2092 5.67285Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M18.9728 78.583L16.4478 80.8975C17.2421 81.7637 18.0843 82.6093 18.9505 83.4207L21.2889 80.9214C20.486 80.1699 19.7071 79.3807 18.9728 78.583Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M7.70351 49.6444C7.70351 49.2695 7.70351 48.8963 7.71892 48.5214L4.29519 48.4341C4.27979 48.8347 4.27979 49.2404 4.27979 49.6444C4.27979 50.4308 4.29862 51.2107 4.33628 51.9845L7.76001 51.8133C7.72234 51.0954 7.70351 50.3726 7.70351 49.6444Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M92.7096 56.748C92.5384 57.8265 92.3056 58.9101 92.042 59.9698L95.3647 60.7966C95.6489 59.6514 95.8937 58.4787 96.0871 57.3112L92.7096 56.748Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M93.2967 50.1917C93.283 51.2804 93.2265 52.388 93.1255 53.4818L96.5372 53.7797C96.6417 52.6037 96.7016 51.4088 96.7204 50.2362L93.2967 50.1917Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M91.1238 63.1367C90.7814 64.1741 90.3911 65.2115 89.9683 66.2181L93.1232 67.5448C93.582 66.456 94.0031 65.3365 94.3763 64.2135L91.1238 63.1367Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M78.8692 13.1523L76.7671 15.8537C77.623 16.5213 78.4789 17.2351 79.2835 17.9747L81.5877 15.4411C80.7095 14.6451 79.7971 13.873 78.8692 13.1523Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M80.8582 79.8091C80.0982 80.576 79.2987 81.3224 78.4839 82.0259L80.7196 84.6177C81.6029 83.8559 82.4674 83.0514 83.2891 82.2194L80.8582 79.8091Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M72.9457 9.23218L71.2817 12.2245C72.2284 12.7518 73.1768 13.327 74.0943 13.9364L75.9842 11.0793C74.9931 10.4236 73.9711 9.80223 72.9457 9.23218Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M94.7394 36.2129L91.4629 37.2058C91.7796 38.2569 92.0586 39.3268 92.2931 40.3881L95.6364 39.6555C95.3848 38.5051 95.0835 37.3479 94.7394 36.2129Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M66.4922 6.26587L65.3076 9.47904C66.3347 9.85736 67.3619 10.2802 68.3479 10.7355L69.779 7.62509C68.7057 7.13207 67.5998 6.67329 66.4922 6.26587Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M88.5824 23.4575L85.7646 25.3971C86.3878 26.3009 86.9784 27.2356 87.5244 28.1754L90.486 26.4635C89.8971 25.4364 89.2569 24.4333 88.5824 23.4575Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M88.5806 69.1968C88.0807 70.1657 87.5381 71.1312 86.9629 72.0642L89.8731 73.8599C90.4979 72.8516 91.0851 71.8091 91.6226 70.7648L88.5806 69.1968Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M84.1246 17.9302L81.6338 20.2806C82.3819 21.0732 83.1111 21.9068 83.7993 22.7593L86.4613 20.6058C85.7183 19.6883 84.9308 18.7878 84.1246 17.9302Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M96.2664 43.1526L92.877 43.6268C93.0276 44.7001 93.1389 45.8043 93.2091 46.9033L96.6259 46.6842C96.5489 45.4996 96.4291 44.3115 96.2664 43.1526Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M85.1277 74.7986C84.4892 75.6751 83.8044 76.5447 83.0889 77.3869L85.6977 79.6021C86.4681 78.6982 87.2076 77.7584 87.8958 76.8152L85.1277 74.7986Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M92.1563 29.6035L89.0732 31.0843C89.5491 32.0686 89.9908 33.0837 90.3879 34.1006L93.5771 32.8561C93.1475 31.757 92.6699 30.6597 92.1563 29.6035Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 										<path
// 											d="M72.5265 38.7326C61.8804 33.7494 55.0946 25.3972 53.9237 13.6949V0H52.2118V32.8404C54.886 33.7858 56.2874 36.7201 55.3418 39.3941C54.3962 42.068 51.4623 43.4696 48.7881 42.5242C46.114 41.5788 44.7126 38.6445 45.6582 35.9706C46.1752 34.508 47.3258 33.3576 48.7881 32.8406V0H47.0762V13.6949C45.9053 25.3972 39.1195 33.7494 28.4734 38.7326C25.9668 39.9637 24.9271 42.9894 26.147 45.5014L29.8104 53.3503C33.2591 60.7714 35.0613 68.8508 35.0932 77.0339H38.5169V75.007C38.5281 63.2701 35.0534 51.7942 28.5333 42.0348L31.3819 40.1347C38.2773 50.4566 41.9522 62.5937 41.9407 75.007V77.0339H59.0593V75.007C59.0477 62.5937 62.7227 50.4566 69.6181 40.1347L72.4666 42.0348C65.9466 51.7942 62.4719 63.2701 62.483 75.007V77.0339H65.9067C65.9386 68.8508 67.7408 60.7714 71.1896 53.3503L74.853 45.5014C76.0731 42.9894 75.0331 39.9637 72.5265 38.7326ZM52.2118 58.2034H48.7881V54.7797H52.2118V58.2034ZM57.3474 51.3559H43.6525V47.9322H57.3474V51.3559Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-0 mx-sm-3 my-2"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 81 81"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<g clipPath="url(#clip0)">
// 											<path
// 												d="M77.8948 56.6085C75.8679 54.3007 73.0317 53.0297 69.9088 53.0297H69.4368C69.4374 52.4931 69.3494 51.9538 69.166 51.4352C68.0473 48.2719 67.0689 43.5871 68.7619 39.2309C68.7619 39.2309 68.7619 39.2309 68.7619 39.2307C69.33 37.7691 69.1404 36.1236 68.2548 34.8293C67.369 33.5349 65.9039 32.7622 64.3355 32.7622H11.0909C4.56066 32.7622 0 37.906 0 45.2711C0 48.9013 1.0851 52.0246 3.13814 54.3035C5.15776 56.5453 7.98207 57.7799 11.0911 57.7799H11.916C11.9162 58.3597 12.022 58.9423 12.2381 59.4984C14.0458 64.1499 12.7609 69.2405 11.834 71.8611C11.3186 73.3181 11.5428 74.9405 12.4336 76.2004C13.3214 77.4562 14.7699 78.2057 16.3085 78.2057H69.9091C73.0181 78.2057 75.8424 76.9712 77.862 74.7294C79.9151 72.4504 81.0002 69.3271 81.0002 65.6969C81 62.0641 79.9261 58.9214 77.8948 56.6085ZM4.75019 45.2711C4.75019 40.5578 7.23914 37.5124 11.0909 37.5124L64.3369 37.5023C64.3369 37.5024 64.3363 37.505 64.3343 37.5102C62.1135 43.2242 63.3008 49.098 64.6875 53.0193C64.6875 53.0193 64.6864 53.025 64.6855 53.0297H16.6642H11.0909C7.23914 53.0297 4.75019 49.9844 4.75019 45.2711ZM69.9089 73.4555L16.3142 73.4551C16.3134 73.4505 16.3123 73.4451 16.3123 73.4451C17.4585 70.2043 19.0286 63.8605 16.6665 57.7799H64.6916H69.9089C73.7016 57.7799 76.2498 60.9616 76.2498 65.6969C76.2498 70.4102 73.7609 73.4555 69.9089 73.4555Z"
// 												fill="white"
// 												fillOpacity="0.26"
// 											/>
// 											<path
// 												d="M54.5858 45.2711C54.5858 43.9594 53.5224 42.896 52.2107 42.896H14.8341C13.5224 42.896 12.459 43.9594 12.459 45.2711C12.459 46.5828 13.5224 47.6462 14.8341 47.6462H52.2108C53.5224 47.6462 54.5858 46.5829 54.5858 45.2711Z"
// 												fill="white"
// 												fillOpacity="0.26"
// 											/>
// 											<path
// 												d="M66.2362 63.1584H28.8595C27.5478 63.1584 26.4844 64.2219 26.4844 65.5336C26.4844 66.8452 27.5478 67.9087 28.8595 67.9087H66.2362C67.5479 67.9087 68.6113 66.8452 68.6113 65.5336C68.6113 64.2219 67.5481 63.1584 66.2362 63.1584Z"
// 												fill="white"
// 												fillOpacity="0.26"
// 											/>
// 											<path
// 												d="M25.3363 11.0526C25.7053 11.0526 26.0797 10.9663 26.4297 10.7845C26.5707 10.711 40.7021 3.53349 54.6393 10.784C55.8033 11.39 57.2372 10.9371 57.8424 9.77319C58.4477 8.60939 57.9953 7.17547 56.8315 6.57014C50.1537 3.09616 42.4076 1.99047 34.4314 3.37278C28.4363 4.41181 24.4072 6.4821 24.2387 6.56966C23.0748 7.17468 22.6218 8.6086 23.2266 9.77256C23.6499 10.5864 24.4783 11.0526 25.3363 11.0526Z"
// 												fill="white"
// 												fillOpacity="0.26"
// 											/>
// 											<path
// 												d="M33.3193 22.7983C32.1013 23.2854 31.505 24.6691 31.9922 25.8872C32.3639 26.8162 33.2539 27.3821 34.1959 27.3821C34.4888 27.3821 34.7866 27.3273 35.0756 27.2119C35.1307 27.1902 40.6549 25.0762 45.9865 27.2086C47.2041 27.6958 48.5867 27.1034 49.0738 25.8857C49.561 24.6677 48.9686 23.2854 47.7509 22.7983C40.6169 19.9446 33.6141 22.6805 33.3193 22.7983Z"
// 												fill="white"
// 												fillOpacity="0.26"
// 											/>
// 											<path
// 												d="M50.6682 18.9401C51.6082 18.9401 52.4984 18.3782 52.8716 17.4527C53.3623 16.2362 52.7739 14.8523 51.5574 14.3617C40.6603 9.9667 29.963 14.1803 29.513 14.3617C28.2985 14.8516 27.712 16.2313 28.1993 17.4468C28.6865 18.6624 30.0681 19.2532 31.285 18.7691C31.3779 18.7319 40.701 15.1048 49.7805 18.7671C50.0718 18.8847 50.3724 18.9401 50.6682 18.9401Z"
// 												fill="white"
// 												fillOpacity="0.26"
// 											/>
// 										</g>
// 										<defs>
// 											<clipPath id="clip0">
// 												<rect width="81" height="81" fill="white" />
// 											</clipPath>
// 										</defs>
// 									</svg>
// 								</div>
// 								<div>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-2 mt-n4"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 70 70"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M20.6445 57.5586C20.6445 55.1955 19.6388 53.064 18.0346 51.5658L18.0354 51.5545C18.1807 49.5466 18.2984 47.4299 18.3878 45.2458C22.5869 46.0369 25.5623 47.629 27.2467 49.9938C29.4186 53.0429 28.8401 56.624 28.6111 57.6488C27.8477 61.0656 29.871 64.5269 33.2985 65.1853C35.2796 65.5658 37.2565 65.7558 39.2204 65.7558C46.1055 65.7558 53.0104 63.4026 58.7104 58.6946C65.8826 52.7706 69.9975 44.1345 69.9999 35.0007C70.0048 17.6891 54.9485 3.56562 39.225 4.13014C30.6343 4.43871 22.9138 8.6707 17.5906 13.329C17.5226 12.6942 17.4513 12.0761 17.3768 11.4767C16.9863 8.33465 16.5251 5.84391 16.0058 4.07353C15.6484 2.85455 14.8112 0 12.4414 0C10.0717 0 9.23439 2.85455 8.87701 4.07353C8.35775 5.84391 7.8966 8.33465 7.506 11.4767C6.72123 17.7911 6.28906 26.1451 6.28906 35C6.28906 40.7851 6.48211 46.5095 6.84742 51.5543L6.84824 51.5658C5.24398 53.064 4.23828 55.1955 4.23828 57.5586V61.7969C4.23828 64.0202 2.29742 65.8984 0 65.8984V70H8.33984C15.1143 70 20.6445 64.3854 20.6445 57.5586ZM39.3721 8.2291C52.5861 7.75496 65.9027 19.8189 65.8984 34.9995C65.8962 42.906 62.3243 50.3899 56.0986 55.5323C49.946 60.6141 41.9173 62.6642 34.0724 61.1574C32.9305 60.9381 32.3563 59.6967 32.6141 58.5432C33.0274 56.6932 33.6576 51.9244 30.5875 47.6142C28.1788 44.2325 24.1244 42.047 18.5213 41.1038C18.5689 39.095 18.5933 34.8471 18.5933 34.7706C19.3925 35.7018 20.4509 36.3721 21.6619 36.6965C24.946 37.5766 28.3209 35.6155 29.197 32.3462C30.075 29.0693 28.1233 25.6892 24.8466 24.8112C22.3856 24.1518 19.9288 25.0806 18.4692 26.8844C18.378 23.971 18.2376 21.1765 18.0517 18.5644C22.6923 13.6615 30.5382 8.54643 39.3721 8.2291ZM21.2734 30.2229C21.5668 29.1281 22.6901 28.4793 23.7851 28.7727C24.8773 29.0654 25.528 30.1921 25.2353 31.2844C24.9426 32.3768 23.8153 33.0273 22.7235 32.7346C21.6288 32.4413 20.98 31.318 21.2734 30.2229ZM11.3742 13.7323C11.7284 10.4314 12.1074 8.19396 12.4414 6.68801C12.7754 8.19396 13.1544 10.4314 13.5086 13.7323C14.1429 19.6428 14.4922 27.1958 14.4922 35C14.4922 35.685 14.4893 36.3688 14.4838 37.0508H10.399C10.3935 36.3688 10.3906 35.685 10.3906 35C10.3906 27.1958 10.7399 19.6428 11.3742 13.7323ZM10.4651 41.151H14.4177C14.3474 44.0471 14.2278 46.8636 14.0617 49.5169C13.5376 49.4115 12.9959 49.3555 12.4414 49.3555C11.8869 49.3555 11.3452 49.4115 10.8212 49.5169C10.6552 46.8636 10.5355 44.0472 10.4651 41.151ZM8.33984 61.7969V57.5586C8.33984 55.297 10.1798 53.457 12.4414 53.457C14.703 53.457 16.543 55.297 16.543 57.5586C16.543 62.1571 12.863 65.8984 8.33984 65.8984H7.21109C7.94746 64.6624 8.33984 63.2579 8.33984 61.7969Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M55.0531 27.7494C57.4574 25.3452 57.4579 21.4534 55.0531 19.0486C52.6545 16.6499 48.7511 16.6497 46.3523 19.0486C43.9479 21.4528 43.9474 25.3446 46.3523 27.7494C48.751 30.1481 52.6542 30.1483 55.0531 27.7494ZM49.2525 21.949C50.0522 21.1494 51.353 21.1493 52.1528 21.949C52.9544 22.7505 52.9544 24.0476 52.1528 24.8492C51.3529 25.6488 50.0522 25.6487 49.2525 24.8492C48.4511 24.0476 48.4509 22.7504 49.2525 21.949Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M36.4475 25.0957C39.7242 24.2177 41.676 20.8375 40.798 17.5607C39.9197 14.284 36.5395 12.3323 33.2629 13.2103C29.9861 14.0883 28.0345 17.4686 28.9125 20.7454C29.7925 24.0297 33.1626 25.9758 36.4475 25.0957ZM34.3245 17.172C35.4191 16.8788 36.5441 17.5324 36.8363 18.6221C37.129 19.7143 36.4784 20.8411 35.3861 21.1337C34.2914 21.427 33.1678 20.7787 32.8744 19.6837C32.5816 18.5914 33.2321 17.4647 34.3245 17.172Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M37.4051 52.4395C38.2821 55.7115 41.6587 57.6691 44.9404 56.7898C48.2171 55.9118 50.1686 52.5315 49.2906 49.2548C48.4106 45.971 45.0412 44.0242 41.7555 44.9044C38.4788 45.7824 36.5271 49.1626 37.4051 52.4395ZM42.8173 48.8661C43.914 48.5722 45.0362 49.2235 45.3288 50.3161C45.6215 51.4085 44.971 52.5352 43.8788 52.8279C42.7864 53.1207 41.6598 52.4699 41.3671 51.3779C41.0744 50.2855 41.7249 49.1588 42.8173 48.8661Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M49.0057 37.654C48.1277 40.9309 50.0794 44.311 53.3561 45.1891C56.6379 46.0685 60.0104 44.1257 60.8911 40.8387C61.771 37.5545 59.8255 34.1838 56.5409 33.3038C53.2567 32.4233 49.8861 34.3692 49.0057 37.654ZM56.9293 39.7771C56.6363 40.8717 55.5126 41.5207 54.4177 41.2273C53.3255 40.9346 52.675 39.8079 52.9677 38.7155C53.2603 37.623 54.3822 36.9715 55.4792 37.2654C56.5713 37.558 57.222 38.6847 56.9293 39.7771Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-2"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 89 90"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M73.7031 61.8751H70.9219C68.3411 61.8721 65.8668 60.834 64.0419 58.9886C62.2169 57.1432 61.1904 54.6411 61.1875 52.0313C61.1875 51.8466 61.1515 51.6638 61.0817 51.4932C61.0118 51.3225 60.9093 51.1675 60.7802 51.0369C60.6511 50.9063 60.4978 50.8028 60.3291 50.7321C60.1603 50.6614 59.9795 50.6251 59.7969 50.6251H55.625C54.0228 50.6229 52.4703 50.0623 51.2292 49.0376C49.9881 48.013 49.1343 46.587 48.8116 45.0001H62.0021L67.1573 50.2132L69.1239 48.2245L63.6208 42.6595L72.5192 34.4112L83.9042 44.6449L85.752 42.5427L74.5803 32.5007L83.8883 23.8728C84.6033 23.2101 85.1783 22.4079 85.5785 21.5145C85.9787 20.6211 86.1959 19.655 86.2171 18.6744C86.2382 17.6939 86.0628 16.7191 85.7014 15.8089C85.3401 14.8987 84.8002 14.072 84.1144 13.3784C83.4286 12.6848 82.6111 12.1389 81.711 11.7734C80.811 11.4079 79.8471 11.2304 78.8774 11.2517C77.9077 11.273 76.9523 11.4926 76.0688 11.8973C75.1853 12.3019 74.392 12.8833 73.7366 13.6063L62.0516 26.4971L53.5527 23.9182C51.9843 23.4399 50.2991 23.538 48.7952 24.1951C47.2914 24.8521 46.0658 26.0258 45.3351 27.5085L39.8431 38.6179C39.2467 39.8207 38.9366 41.1479 38.9375 42.4935C38.9388 43.5656 39.2601 44.6124 39.8592 45.4969C40.4584 46.3815 41.3075 47.0626 42.2956 47.4512C40.331 48.6134 38.095 49.2236 35.8189 49.2188H34.7656C34.583 49.2188 34.4022 49.2552 34.2335 49.3258C34.0647 49.3965 33.9114 49.5001 33.7823 49.6307C33.6532 49.7613 33.5507 49.9163 33.4808 50.0869C33.411 50.2575 33.375 50.4404 33.375 50.6251C33.3828 55.9853 32.2478 61.2842 30.0475 66.1608L30.0235 66.214C29.9061 66.4747 29.8702 66.7654 29.9207 67.0473C29.9711 67.3292 30.1054 67.5887 30.3057 67.7913C30.5061 67.9939 30.7628 68.1297 31.0415 68.1807C31.3203 68.2317 31.6078 68.1954 31.8655 68.0767L31.9171 68.0529C36.7398 65.8276 41.9802 64.6798 47.2813 64.6876C47.4639 64.6876 47.6447 64.6512 47.8134 64.5805C47.9821 64.5099 48.1355 64.4063 48.2646 64.2757C48.3937 64.1451 48.4961 63.9901 48.566 63.8195C48.6359 63.6488 48.6719 63.466 48.6719 63.2813V62.2162C48.6681 60.2967 49.0862 58.4003 49.8961 56.6642L55.3857 62.2155C56.1587 63.0016 57.0783 63.6249 58.0912 64.0492C59.1041 64.4736 60.1902 64.6905 61.2866 64.6876H73.1271L83.8448 75.5257L85.8114 73.537L74.6864 62.287C74.5573 62.1564 74.404 62.0528 74.2353 61.9821C74.0666 61.9114 73.8857 61.8751 73.7031 61.8751ZM58.483 53.4376C58.5884 54.3968 58.8028 55.3405 59.122 56.2501H55.7241C54.9931 56.252 54.269 56.1073 53.5936 55.8244C52.9183 55.5415 52.3052 55.1259 51.7898 54.6018L51.4023 54.21C51.7233 53.7947 52.0686 53.3992 52.4364 53.0256C52.4688 52.9929 52.4991 52.9587 52.5276 52.9237C53.5256 53.2641 54.5718 53.4376 55.625 53.4376H58.483ZM74.1112 29.1202L60.0138 42.1876H51.6019L68.5471 23.4936L74.1112 29.1202ZM70.4282 21.4184L72.5376 19.0913L78.4646 25.085L76.1634 27.218L70.4282 21.4184ZM79.0327 14.0626C79.9202 14.0622 80.7871 14.3331 81.5198 14.8396C82.2524 15.3461 82.8166 16.0647 83.1384 16.9011C83.4602 17.7375 83.5246 18.6527 83.3231 19.5267C83.1217 20.4008 82.6637 21.1929 82.0094 21.7992L80.5167 23.1828L74.4186 17.0161L75.7865 15.5071C76.1995 15.0525 76.7012 14.6895 77.2599 14.4408C77.8187 14.1922 78.4223 14.0634 79.0327 14.0626ZM41.872 41.1534C41.9756 40.7116 42.1292 40.2834 42.3299 39.8773L47.8226 28.7666C48.2609 27.8768 48.9963 27.1725 49.8987 26.7782C50.8011 26.3839 51.8123 26.325 52.7534 26.612L59.9641 28.8001L47.8289 42.1876H47.2813C47.0986 42.1876 46.9178 42.2239 46.7491 42.2946C46.5804 42.3653 46.4271 42.4688 46.2979 42.5994C46.1688 42.73 46.0664 42.885 45.9965 43.0557C45.9266 43.2263 45.8906 43.4091 45.8906 43.5938C45.8906 43.8289 45.9018 44.0614 45.9179 44.2924C45.5688 44.6354 45.1274 44.8667 44.6489 44.9573C44.1705 45.0479 43.6763 44.9938 43.2281 44.8018C42.7799 44.6098 42.3976 44.2884 42.1292 43.8778C41.8607 43.4672 41.7179 42.9857 41.7188 42.4935C41.7187 42.0423 41.7701 41.5926 41.872 41.1534ZM45.8937 61.8989C42.7846 62.0038 39.6985 62.479 36.6994 63.3145L38.5306 61.4628C39.4189 61.892 40.4287 61.9897 41.3815 61.7388C42.3343 61.4879 43.1686 60.9044 43.7371 60.0916C44.3056 59.2787 44.5716 58.2888 44.4881 57.2967C44.4046 56.3047 43.9769 55.3745 43.2808 54.6705C42.5846 53.9665 41.6647 53.534 40.6837 53.4496C39.7027 53.3651 38.7237 53.6341 37.9199 54.209C37.1161 54.7839 36.5391 55.6276 36.291 56.5911C36.0428 57.5546 36.1395 58.5757 36.564 59.4741L34.733 61.3256C35.5592 58.2929 36.029 55.1722 36.1326 52.0282C39.6923 51.9667 43.1227 50.6685 45.8478 48.3517L49.5293 52.0747C47.2382 54.8303 45.9545 58.2993 45.8937 61.8989V61.8989ZM38.9375 57.6563C38.9375 57.3782 39.0191 57.1063 39.1719 56.875C39.3247 56.6438 39.5419 56.4635 39.796 56.3571C40.0501 56.2507 40.3297 56.2228 40.5994 56.2771C40.8692 56.3313 41.117 56.4653 41.3115 56.6619C41.5059 56.8586 41.6384 57.1092 41.692 57.382C41.7457 57.6548 41.7182 57.9375 41.6129 58.1945C41.5076 58.4514 41.3294 58.671 41.1007 58.8256C40.872 58.9801 40.6032 59.0626 40.3281 59.0626C39.9594 59.0621 39.606 58.9138 39.3453 58.6502C39.0846 58.3866 38.9379 58.0291 38.9375 57.6563ZM61.2866 61.8751C60.5556 61.877 59.8315 61.7324 59.1561 61.4494C58.4808 61.1665 57.8677 60.7509 57.3523 60.2268L56.201 59.0626H60.5238C61.2275 60.1235 62.0848 61.0716 63.067 61.8751H61.2866Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M28.08 72.0308C25.6063 74.5323 22.2512 75.9376 18.7529 75.9376C15.2546 75.9376 11.8995 74.5323 9.42586 72.0308C6.95217 69.5293 5.56247 66.1366 5.56247 62.5989C5.56247 59.0613 6.95217 55.6686 9.42586 53.1671L14.7208 47.8126L16.6874 49.8013L11.3925 55.1558C9.4407 57.1299 8.34432 59.8072 8.34447 62.5987C8.34462 65.3902 9.44129 68.0674 11.3933 70.0413C13.3452 72.0152 15.9926 73.1242 18.7531 73.1243C21.5137 73.1245 24.1612 72.0158 26.1134 70.0421L27.6438 68.4945L25.6772 66.5058L24.1468 68.0534C22.7162 69.5 20.776 70.3127 18.7529 70.3127C16.7298 70.3127 14.7896 69.5 13.3591 68.0534C11.9285 66.6068 11.1249 64.6448 11.1249 62.5989C11.1249 60.5531 11.9285 58.5911 13.3591 57.1445L19.6373 50.7957C19.7665 50.6651 19.8689 50.5101 19.9388 50.3395C20.0087 50.1689 20.0447 49.986 20.0447 49.8013C20.0447 49.6167 20.0087 49.4338 19.9388 49.2632C19.8689 49.0926 19.7665 48.9376 19.6373 48.807L15.7041 44.8296C15.4433 44.5659 15.0896 44.4177 14.7208 44.4177C14.352 44.4177 13.9983 44.5659 13.7375 44.8296L7.45926 51.1784C5.97583 52.6781 4.79907 54.4586 3.99616 56.4182C3.19325 58.3778 2.77992 60.4782 2.77979 62.5994C2.77965 64.7206 3.1927 66.821 3.99535 68.7807C4.79801 70.7404 5.97454 72.5211 7.45777 74.021C8.941 75.5209 10.7019 76.7106 12.6398 77.5223C14.5778 78.334 16.6549 78.7517 18.7525 78.7515C20.8501 78.7514 22.9271 78.3334 24.865 77.5215C26.8028 76.7096 28.5635 75.5196 30.0466 74.0195L31.577 72.4719L29.6104 70.4832L28.08 72.0308Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-2"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 72 72"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M65.25 19.125H64.125V15.75C64.125 15.4516 64.0065 15.1655 63.7955 14.9545C63.5845 14.7435 63.2984 14.625 63 14.625H61.875V11.25C61.875 10.9516 61.7565 10.6655 61.5455 10.4545C61.3345 10.2435 61.0484 10.125 60.75 10.125H54C53.7016 10.125 53.4155 10.2435 53.2045 10.4545C52.9935 10.6655 52.875 10.9516 52.875 11.25V14.625H51.75C51.4516 14.625 51.1655 14.7435 50.9545 14.9545C50.7435 15.1655 50.625 15.4516 50.625 15.75V19.125H42.0863L37.9237 14.9513C37.8186 14.847 37.694 14.7645 37.5569 14.7085C37.4198 14.6525 37.2731 14.6241 37.125 14.625H6.75C6.01131 14.625 5.27986 14.7705 4.59741 15.0532C3.91495 15.3359 3.29485 15.7502 2.77252 16.2725C1.71763 17.3274 1.125 18.7582 1.125 20.25V56.25C1.125 57.7418 1.71763 59.1726 2.77252 60.2275C3.29485 60.7498 3.91495 61.1641 4.59741 61.4468C5.27986 61.7295 6.01131 61.875 6.75 61.875H65.25C66.7418 61.875 68.1726 61.2824 69.2275 60.2275C70.2824 59.1726 70.875 57.7418 70.875 56.25V24.75C70.875 23.2582 70.2824 21.8274 69.2275 20.7725C68.1726 19.7176 66.7418 19.125 65.25 19.125ZM55.125 12.375H59.625V14.625H55.125V12.375ZM52.875 16.875H61.875V19.125H52.875V16.875ZM6.75 16.875H36.6637L40.8263 21.0487C40.9314 21.153 41.056 21.2355 41.1931 21.2915C41.3302 21.3475 41.4769 21.3759 41.625 21.375H65.25C66.1451 21.375 67.0035 21.7306 67.6365 22.3635C68.2694 22.9964 68.625 23.8549 68.625 24.75V30.375H49.5C47.9366 28.2669 45.9012 26.5543 43.5569 25.3743C41.2126 24.1942 38.6245 23.5796 36 23.5796C33.3755 23.5796 30.7874 24.1942 28.4431 25.3743C26.0988 26.5543 24.0634 28.2669 22.5 30.375H3.375V20.25C3.375 19.3549 3.73058 18.4964 4.36351 17.8635C4.99645 17.2306 5.85489 16.875 6.75 16.875ZM21.375 40.5C21.375 37.6074 22.2327 34.7799 23.8398 32.3748C25.4468 29.9697 27.7309 28.0952 30.4033 26.9883C33.0756 25.8813 36.0162 25.5917 38.8532 26.156C41.6902 26.7203 44.2961 28.1132 46.3414 30.1586C48.3868 32.2039 49.7797 34.8098 50.344 37.6468C50.9083 40.4838 50.6187 43.4244 49.5117 46.0967C48.4048 48.7691 46.5303 51.0532 44.1252 52.6602C41.7201 54.2673 38.8926 55.125 36 55.125C32.1212 55.125 28.4013 53.5842 25.6586 50.8414C22.9158 48.0987 21.375 44.3788 21.375 40.5ZM22.5 50.625H3.375V32.625H21.0825C19.5777 35.4481 18.9115 38.6427 19.1627 41.832C19.4139 45.0213 20.5718 48.0722 22.5 50.625ZM52.875 40.5C52.8787 37.7541 52.2064 35.0496 50.9175 32.625H68.625V50.625H49.5C51.6973 47.7075 52.8824 44.1524 52.875 40.5ZM65.25 59.625H6.75C5.85489 59.625 4.99645 59.2694 4.36351 58.6365C3.73058 58.0035 3.375 57.1451 3.375 56.25V52.875H24.57C27.6731 55.7678 31.7577 57.3763 36 57.3763C40.2423 57.3763 44.3269 55.7678 47.43 52.875H68.625V56.25C68.625 57.1451 68.2694 58.0035 67.6365 58.6365C67.0035 59.2694 66.1451 59.625 65.25 59.625Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M36 52.875C38.4475 52.875 40.8401 52.1492 42.8752 50.7894C44.9102 49.4297 46.4964 47.4969 47.433 45.2357C48.3696 42.9745 48.6147 40.4863 48.1372 38.0858C47.6597 35.6852 46.4811 33.4802 44.7504 31.7496C43.0198 30.0189 40.8147 28.8403 38.4142 28.3628C36.0137 27.8853 33.5255 28.1304 31.2643 29.067C29.0031 30.0036 27.0703 31.5898 25.7106 33.6248C24.3508 35.6599 23.625 38.0525 23.625 40.5C23.625 43.7821 24.9288 46.9297 27.2496 49.2505C29.5703 51.5712 32.7179 52.875 36 52.875ZM36 30.375C38.0025 30.375 39.9601 30.9688 41.6251 32.0814C43.2902 33.1939 44.5879 34.7752 45.3543 36.6253C46.1206 38.4754 46.3211 40.5112 45.9304 42.4753C45.5398 44.4394 44.5755 46.2435 43.1594 47.6595C41.7434 49.0755 39.9393 50.0398 37.9753 50.4305C36.0112 50.8211 33.9754 50.6206 32.1253 49.8543C30.2752 49.0879 28.6939 47.7902 27.5814 46.1252C26.4688 44.4601 25.875 42.5025 25.875 40.5C25.875 37.8147 26.9417 35.2394 28.8405 33.3405C30.7393 31.4417 33.3147 30.375 36 30.375Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M6.75 28.125H15.75C16.0484 28.125 16.3345 28.0065 16.5455 27.7955C16.7565 27.5845 16.875 27.2984 16.875 27V20.25C16.875 19.9516 16.7565 19.6655 16.5455 19.4545C16.3345 19.2435 16.0484 19.125 15.75 19.125H6.75C6.45163 19.125 6.16548 19.2435 5.95451 19.4545C5.74353 19.6655 5.625 19.9516 5.625 20.25V27C5.625 27.2984 5.74353 27.5845 5.95451 27.7955C6.16548 28.0065 6.45163 28.125 6.75 28.125ZM7.875 21.375H14.625V25.875H7.875V21.375Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M11.25 37.125C10.5825 37.125 9.92997 37.3229 9.37495 37.6938C8.81994 38.0646 8.38735 38.5917 8.13191 39.2084C7.87646 39.8251 7.80963 40.5037 7.93985 41.1584C8.07008 41.8131 8.39151 42.4145 8.86352 42.8865C9.33552 43.3585 9.93689 43.6799 10.5916 43.8102C11.2463 43.9404 11.9249 43.8735 12.5416 43.6181C13.1583 43.3627 13.6854 42.9301 14.0562 42.3751C14.4271 41.82 14.625 41.1675 14.625 40.5C14.625 39.6049 14.2694 38.7465 13.6365 38.1135C13.0036 37.4806 12.1451 37.125 11.25 37.125ZM11.25 41.625C11.0275 41.625 10.81 41.559 10.625 41.4354C10.44 41.3118 10.2958 41.1361 10.2106 40.9305C10.1255 40.725 10.1032 40.4988 10.1466 40.2805C10.19 40.0623 10.2972 39.8618 10.4545 39.7045C10.6118 39.5472 10.8123 39.44 11.0305 39.3966C11.2488 39.3532 11.475 39.3755 11.6805 39.4606C11.8861 39.5458 12.0618 39.69 12.1854 39.875C12.309 40.06 12.375 40.2775 12.375 40.5C12.375 40.7984 12.2565 41.0845 12.0455 41.2955C11.8345 41.5065 11.5484 41.625 11.25 41.625Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 										<path
// 											d="M60.75 37.125C60.0825 37.125 59.43 37.3229 58.875 37.6938C58.3199 38.0646 57.8874 38.5917 57.6319 39.2084C57.3765 39.8251 57.3096 40.5037 57.4399 41.1584C57.5701 41.8131 57.8915 42.4145 58.3635 42.8865C58.8355 43.3585 59.4369 43.6799 60.0916 43.8102C60.7463 43.9404 61.4249 43.8735 62.0416 43.6181C62.6583 43.3627 63.1854 42.9301 63.5562 42.3751C63.9271 41.82 64.125 41.1675 64.125 40.5C64.125 39.6049 63.7694 38.7465 63.1365 38.1135C62.5036 37.4806 61.6451 37.125 60.75 37.125ZM60.75 41.625C60.5275 41.625 60.31 41.559 60.125 41.4354C59.94 41.3118 59.7958 41.1361 59.7106 40.9305C59.6255 40.725 59.6032 40.4988 59.6466 40.2805C59.69 40.0623 59.7972 39.8618 59.9545 39.7045C60.1118 39.5472 60.3123 39.44 60.5305 39.3966C60.7488 39.3532 60.975 39.3755 61.1805 39.4606C61.3861 39.5458 61.5618 39.69 61.6854 39.875C61.809 40.06 61.875 40.2775 61.875 40.5C61.875 40.7984 61.7565 41.0845 61.5455 41.2955C61.3345 41.5065 61.0484 41.625 60.75 41.625Z"
// 											fill="white"
// 											fillOpacity="0.26"
// 										/>
// 									</svg>
// 									<svg
// 										className="mx-2 mx-sm-3 my-1 my-md-2 mt-n4"
// 										width="30"
// 										height="30"
// 										viewBox="0 0 74 69"
// 										fill="none"
// 										xmlns="http://www.w3.org/2000/svg"
// 									>
// 										<path
// 											d="M58.717 24.916L69.0627 14.6421L73.8018 0L59.0574 4.70631L38.7066 24.916H31.6811L36.025 20.6403C39.9597 19.3991 43.175 16.0431 44.1409 11.9724L46.7709 0.888299L35.5998 3.45962C31.4954 4.40432 28.1031 7.58722 26.84 11.4923L13.2356 24.916H4.33594V18.0327H0V69H74V24.916H58.717ZM67.0901 6.66519L65.6842 11.0085L62.7164 8.06129L67.0901 6.66519ZM59.1978 10.6563L63.071 14.5027L43.9132 33.5277H36.1666L59.1978 10.6563ZM34.3707 29.2219L30.0347 33.5277H22.9322L27.3066 29.2219H34.3707ZM36.5788 7.6541L40.9495 6.64811L39.9204 10.9847C39.2879 13.6503 36.9418 15.9746 34.3067 16.6485L30.8548 13.2081C31.5431 10.594 33.8923 8.27256 36.5788 7.6541ZM27.9771 16.4402L31.0356 19.4886L16.773 33.5276H10.6598L27.9771 16.4402ZM4.33594 29.2219H8.87191L4.50807 33.5277H4.33594V29.2219ZM69.6641 64.6941H4.33594V37.8336H55.6927V41.0779C53.1693 41.9666 51.3567 44.3597 51.3567 47.1664V53.673H64.3645V47.1664C64.3645 44.3597 62.552 41.9666 60.0286 41.0779V37.8336H69.6641V64.6941ZM57.8606 45.0135C59.056 45.0135 60.0286 45.9793 60.0286 47.1664V49.3671H55.6927V47.1664C55.6927 45.9793 56.6654 45.0135 57.8606 45.0135ZM69.6641 33.5277H50.0451L54.381 29.2219H69.6641V33.5277Z"
// 											fill="white"
// 											fillOpacity="0.25"
// 										/>
// 									</svg>
// 								</div>
// 							</div>
// 							<p className="lead font-weight-bold explore">You've Come to Explore The Beauty of Art</p>
// 							<p className="p2">Qrate is the easiest way to admire art you love and even buy it for your wall or as a gift</p>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="wrapper bg-explore-art d-none" id="13">
// 					<div className="mw py-5 px-3 px-sm-5 px-sm-5 py-5 py-md-auto">
// 						<div className="about d-flex flex-column justify-content-center align-items-center text-light text-center px-4 px-sm-5 px-md-auto mwm">
// 							<div className="d-none d-sm-flex justify-content-between align-items-center w-100 mb-md-4">
// 								<img className="artDesign" src="/images/homepage/left.png" alt="Left design" />
// 								<img className="" src="/images/homepage/qrate-light-logo.png" alt="Logo" />
// 								<img className="artDesign" src="/images/homepage/right.png" alt="Right design" />
// 							</div>

// 							<p className="font-weight-bold explore">You've Come to Explore The Beauty of Art</p>
// 							<p className="">Qrate is the easiest way to admire art you love and even buy it for your wall or as a gift</p>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="wrapper bg-black d-none" id="14">
// 					<div className="mw py-5 px-3 px-sm-5 py-5 py-md-auto">
// 						<div className="about d-flex justify-content-center align-items-center text-light px-4 px-sm-5 px-md-auto">
// 							<div className="row align-items-stretch">
// 								<div className="col-md-4 mt-5 d-flex flex-column justify-content-center">
// 									<h3>Qrate is Galleries!</h3>
// 									<p className="text-justify text-md-left">
// 										Qrate connects visual artists, calligraphy artists, photographers, etc. to clients who can purchase
// 										their work or commission them to do new work.
// 									</p>
// 								</div>
// 								<div className="col-md-8 gallery">
// 									<div className="row align-items-stretch">
// 										<div className="col-4 mb-2">
// 											<div className="w-100">
// 												<img src="/images/homepage/gallery1.png" alt="Gallery" />
// 												<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 													<Link to="/">
// 														<i className="fa fa-shopping-cart text-light"></i>
// 													</Link>
// 													<Link to="/">
// 														<i className="fa fa-heart text-light"></i>
// 													</Link>
// 													<Link to="/">
// 														<i className="fa fa-retweet text-light"></i>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-4 mb-2">
// 											<div className="row justify-content-between h-100">
// 												<div className="col-12 mb-1 h-50">
// 													<img src="/images/homepage/gallery2.png" alt="Gallery" />
// 													<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 														<Link to="/">
// 															<i className="fa fa-shopping-cart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-heart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-retweet text-light"></i>
// 														</Link>
// 													</div>
// 												</div>
// 												<div className="col-12 mt-1 h-50">
// 													<img src="/images/homepage/gallery3.png" alt="Gallery" />
// 													<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 														<Link to="/">
// 															<i className="fa fa-shopping-cart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-heart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-retweet text-light"></i>
// 														</Link>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-4 mb-2">
// 											<div className="w-100">
// 												<img src="/images/homepage/gallery4.png" alt="Gallery" />
// 												<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 													<Link to="/">
// 														<i className="fa fa-shopping-cart text-light"></i>
// 													</Link>
// 													<Link to="/">
// 														<i className="fa fa-heart text-light"></i>
// 													</Link>
// 													<Link to="/">
// 														<i className="fa fa-retweet text-light"></i>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-4 mb-2">
// 											<div className="row justify-content-between h-100">
// 												<div className="col-12 mb-1 h-50">
// 													<img src="/images/homepage/gallery5.png" alt="Gallery" />
// 													<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 														<Link to="/">
// 															<i className="fa fa-shopping-cart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-heart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-retweet text-light"></i>
// 														</Link>
// 													</div>
// 												</div>
// 												<div className="col-12 mt-1 h-50">
// 													<img src="/images/homepage/gallery6.png" alt="Gallery" />
// 													<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 														<Link to="/">
// 															<i className="fa fa-shopping-cart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-heart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-retweet text-light"></i>
// 														</Link>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-4">
// 											<div className="w-100">
// 												<img src="/images/homepage/gallery7.png" alt="Gallery" />
// 												<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 													<Link to="/">
// 														<i className="fa fa-shopping-cart text-light"></i>
// 													</Link>
// 													<Link to="/">
// 														<i className="fa fa-heart text-light"></i>
// 													</Link>
// 													<Link to="/">
// 														<i className="fa fa-retweet text-light"></i>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-4 mb-2">
// 											<div className="row justify-content-between h-100">
// 												<div className="col-12 mb-1 h-50">
// 													<img src="/images/homepage/gallery8.png" alt="Gallery" />
// 													<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 														<Link to="/">
// 															<i className="fa fa-shopping-cart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-heart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-retweet text-light"></i>
// 														</Link>
// 													</div>
// 												</div>
// 												<div className="col-12 mt-1 h-50">
// 													<img src="/images/homepage/gallery9.png" alt="Gallery" />
// 													<div className="bg-light d-flex justify-content-between align-items-center px-2">
// 														<Link to="/">
// 															<i className="fa fa-shopping-cart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-heart text-light"></i>
// 														</Link>
// 														<Link to="/">
// 															<i className="fa fa-retweet text-light"></i>
// 														</Link>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="wrapper bg-indigo d-none" id="15">
// 					<div className="mw py-5 px-3 px-sm-5 py-5 py-md-auto">
// 						<div className="about d-flex flex-column justify-content-center align-items-center text-light text-center px-4 px-sm-5 px-md-auto">
// 							<h3 className="font-weight-bold mb-4 mb-md-5">Works in these 3 easy steps</h3>
// 							<div className="row works">
// 								<div className="col-md-4">
// 									<div className="cc mb-2 mb-md-5 mx-auto border rounded-circle bg-orange">01</div>
// 									<h5 className="font-weight-bold mb-3">Create an account</h5>
// 									<p className="d-none d-md-block">
// 										You can't wait to sign up. You'll be so amazed! First, Create an account on Qrate.
// 									</p>
// 								</div>
// 								<div className="col-md-4">
// 									<div className="cc mb-4 mb-md-5 mx-auto border rounded-circle">02</div>
// 									<h5 className="font-weight-bold mb-3">Select from Categories</h5>
// 									<p className="d-none d-md-block">
// 										You'll find many Categories of Art. Select the Art Categories you'll love to appear in your feed.
// 									</p>
// 								</div>
// 								<div className="col-md-4">
// 									<div className="cc mb-4 mb-md-5 mx-auto border rounded-circle">03</div>
// 									<h5 className="font-weight-bold mb-3">Explore, Buy or Sell Art</h5>
// 									<p className="d-none d-md-block">
// 										You'll find many categories of Art. Select the Art categories you'll love to appear in your feed.
// 									</p>
// 								</div>
// 								<div className="d-none col-md-9 d-none d-md-flex mx-auto mt-3">
// 									<div className="col-4 p-0 p-md-block my-auto">
// 										<img className="img-reduce-size" src="/images/homepage/screenshot.png" alt="Art" />
// 									</div>
// 									<div className="col-4 p-0 p-md-block my-auto">
// 										<img className="w-100" src="/images/homepage/2.png" alt="Art" />
// 									</div>
// 									<div className="col-4 p-0 p-md-block my-auto">
// 										<img className="img-reduce-size" src="/images/homepage/3.png" alt="Art" />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="wrapper bg-indigo d-none" id="16">
// 					<div className="mw py-5 px-3 px-sm-5 py-5 py-md-auto">
// 						<div className="about d-flex flex-column justify-content-center align-items-center text-light px-4 px-sm-5 px-md-auto mwm">
// 							<h3 className="font-weight-bold mb-4 mb-md-5 text-center">You should know how stuff works</h3>
// 							<p className="text-justify text-md-center">
// 								Once you create an account, you get to select from a list of art category to add to your feed. See something
// 								you like? Retweet it to make it your own. Add comments if you want. Others would do the same to yours.
// 								That's how it works here.
// 							</p>
// 							<div className="row works">
// 								<div className="col-md-9 d-flex mx-auto mt-3">
// 									<div className="col-4 p-0 p-md-block my-auto">
// 										<img className="img-reduce-size" src="/images/homepage/screenshot.png" alt="Art" />
// 									</div>
// 									<div className="col-4 p-0 p-md-block my-auto">
// 										<img className="w-100 h-auto" src="/images/homepage/2.png" alt="Art" />
// 									</div>
// 									<div className="col-4 p-0 p-md-block my-auto">
// 										<img className="img-reduce-size left" src="/images/homepage/3.png" alt="Art" />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="wrapper bg-black d-none" id="17">
// 					<div className="mx-auto py-5 px-3 px-sm-5">
// 						<div className="hh d-flex justify-content-center">
// 							<div className="d-flex flex-column justify-content-center align-items-center px-3 px-md-auto">
// 								<div className="text-center text-light mb-2 mb-md-6">
// 									<h4 className="font-weight-bold mb-4">This can be lifechanging for you</h4>
// 									<p className="lead px-3">
// 										As an artist, Qrater or Art Supplier.
// 										<br />
// 										Do not hold back, you need this.
// 									</p>
// 								</div>
// 								<div className="w-100 px-2">
// 									<button
// 										className="btn bg-orange text-light my-2 btn-lg w-100"
// 										id="getStarted"
// 										onClick={this.getStarted}
// 									>
// 										Get Started
// 									</button>
// 									<button className="btn bg-white text-orange my-2 btn-lg w-100" onClick={this.confirmEmail}>
// 										Sign in
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="text-center text-sm-left">
// 							<Link className="text-light mx-2" to="/">
// 								Terms
// 							</Link>
// 							<Link className="text-light mx-2" to="/">
// 								Privacy
// 							</Link>
// 							<Link className="text-light mx-2" to="/">
// 								Support
// 							</Link>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="wrap">
// 					<div className="navigator mw ml-4 ml-md-5">
// 						<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="11"></span>
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="12"></span>
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="13"></span>
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="14"></span>
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="15"></span>
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="16"></span>
// 							<span className="d-inline-block my-2 rounded-circle nav-btn" id="17"></span>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Homepage;
