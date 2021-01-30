import React, { Component } from "react";

import AuthForm from "../auth/auth-form";

import loginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
    this.handleUnsuccesfulAuth = this.handleUnsuccesfulAuth.bind(this);
  }

  handleSuccesfulAuth() {
    this.props.handleSuccesfulLogin();
    this.props.history.push("/");
  }
  handleUnsuccesfulAuth() {
    this.props.handleUnsuccesfulLogin();
  }
  render() {
    return (
      <div className="auth">
        <div
          className="image"
          style={{
            backgroundImage: `url(${loginImg})`,
          }}
        />
        <AuthForm
          handleSuccesfulAuth={this.handleSuccesfulAuth}
          handleUnsuccesfulAuth={this.handleUnsuccesfulAuth}
        />
      </div>
    );
  }
}
