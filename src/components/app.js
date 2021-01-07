import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about-me";
import Navigation from "./navigation/navigation";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSpecialNavbar: false,
    };
    this.handleChageNavbar = this.handleChageNavbar.bind(this);
  }
  handleChageNavbar(state) {
    this.setState({
      isSpecialNavbar: state,
    });
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation isHome={this.state.isSpecialNavbar} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} changeNavbar={this.handleChageNavbar} />
              )}
            />
            <Route exact path="/about-me" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}
