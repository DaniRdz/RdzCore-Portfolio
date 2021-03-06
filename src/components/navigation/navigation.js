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
      <div className={this.props.isHome ? "home-nav-wrapper" : "nav-wrapper"}>
        <div className="left-column">
          <div
            className="nav-logo"
            onClick={() => this.props.history.push("/")}
          >
            <Logo />
          </div>
        </div>
        <div className="right-column">
          <div className="link">
            <NavLink exact to="/" activeClassName="link-active">
              Home
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="/about-me" activeClassName="link-active">
              About me
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="/portfolio" activeClassName="link-active">
              Portfolio
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="/blog" activeClassName="link-active">
              Blog
            </NavLink>
          </div>
          {this.props.loggedInStatus === "LOGGED_IN" ? (
            <div className="special-links">
              <div className="link">
                <NavLink to="/inbox" activeClassName="link-active">
                  Inbox
                </NavLink>
              </div>
              <div className="link">
                <NavLink to="/portfolio-manager" activeClassName="link-active">
                  <i className="fas fa-cogs"></i>
                </NavLink>
              </div>
              <div className="sign-out" onClick={() => this.handleSignOut()}>
                <i className="fas fa-sign-out-alt"></i>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
