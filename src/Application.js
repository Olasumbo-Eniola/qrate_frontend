import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Homepage from "./NewHomepage";
import BetterHomepage from "./Components/OldHomePage/BetterHomepage";
import Signup from "./Components/Sign/Signup";
import Signin from "./Components/Sign/Signin";
import Video from "./Components/ExhibitionVideo/video"
// import Dashboard from "./Components/Dashboard/index";
// import ArtDetails from "./Components/Dashboard/ArtDetails/index";
// import Gallery from "./Components/Dashboard/Gallery/index";
// import Categories from "./Components/Dashboard/Categories/index";
import App from "./App";
// CSS
// import "./css/styles.css";

export default class Application extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" component={Homepage}></Route> */}
          <Route exact path="/livevideo" component={Video}></Route>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          {/* <Route exact path="/" component={BetterHomepage}></Route> */}
          <Route path="/home" component={App}></Route>
        </Switch>

        {/* <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/dashboard/art/:id" component={ArtDetails}></Route>
        <Route exact path="/dashboard/gallery" component={Gallery}></Route>
        <Route
          exact
          path="/dashboard/categories"
          component={Categories}
        ></Route> */}
      </div>
    );
  }
}
