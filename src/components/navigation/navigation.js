import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../logo/logo";

export default class Navigation extends Component {
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
            <div className="link">
              <NavLink to="/portfolio-manager">Portfolio Manager</NavLink>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
