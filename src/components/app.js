import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import About from "./pages/about-me";
import Portfolio from "./pages/portfolio";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Navigation from "./navigation/navigation";
import PortfolioManager from "./pages/portfolio-manager";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSpecialNavbar: false,
      loggedInStatus: "NOT_LOGGED_IN",
    };
    this.handleChageNavbar = this.handleChageNavbar.bind(this);
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this);
    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this);
  }
  handleChageNavbar(state) {
    this.setState({
      isSpecialNavbar: state,
    });
  }
  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }
  handleUnsuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }
  checkLoginStatus() {
    axios
      .get("https://api.devcamp.space/logged_in", { withCredentials: true })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }
  authorizedPage() {
    return [
      <Route
        key="portfolio-manager"
        exact
        path="/portfolio-manager"
        component={PortfolioManager}
      />,
    ];
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation
            isHome={this.state.isSpecialNavbar}
            loggedInStatus={this.state.loggedInStatus}
          />
          <h1>{this.state.loggedInStatus}</h1>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} changeNavbar={this.handleChageNavbar} />
              )}
            />
            <Route
              exact
              path="/auth"
              render={(props) => (
                <Auth
                  {...props}
                  handleSuccesfulLogin={this.handleSuccesfulLogin}
                  handleUnsuccesfulLogin={this.handleUnsuccesfulLogin}
                />
              )}
            />
            {this.state.loggedInStatus === "LOGGED_IN"
              ? this.authorizedPage()
              : null}
            <Route exact path="/about-me" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}
