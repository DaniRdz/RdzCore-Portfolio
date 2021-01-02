import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-column">
          <div className="logo">RdzCore</div>
        </div>
        <div className="right-column">
          <div className="link">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="link">
            <NavLink to="/about-me">About me</NavLink>
          </div>
          <div className="link">
            <NavLink to="/about-me">Portfolio</NavLink>
          </div>
          <div className="link">
            <NavLink to="/about-me">Blog</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
