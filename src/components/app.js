import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about-me";
import Navigation from "./navigation";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-me" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}
