import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";

import Logo from "../logo/logo";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          this.props.handleSuccesfulLogout();
          this.props.history.push("/");
          return response.data;
        }
      })
      .catch((err) => {
        console.log("handle SingOut err", err);
      });
  }
  render() {
    return (
      <div
        className={`nav-wrapper ${this.props.isHome ? "home-nav-wrapper" : ""}`}
      >
        <div className="left-column">
          <Logo />
        </div>
        <div className="right-column">
          <div className="link">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="link">
            <NavLink to="/about-me">About me</NavLink>
          </div>
          <div className="link">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </div>
          <div className="link">
            <NavLink to="/blog">Blog</NavLink>
          </div>
          {this.props.loggedInStatus === "LOGGED_IN" ? (
            <div className="special-links">
              <div className="link">
                <NavLink to="/portfolio-manager">Portfolio Manager</NavLink>
              </div>
              <a onClick={() => this.handleSignOut()}>SigOut</a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
