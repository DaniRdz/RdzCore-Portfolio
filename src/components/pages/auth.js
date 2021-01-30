import React, { Component } from "react";

import AuthForm from "../auth/auth-form";

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
        <div className="image">image goes here</div>
        <AuthForm
          handleSuccesfulAuth={this.handleSuccesfulAuth}
          handleUnsuccesfulAuth={this.handleUnsuccesfulAuth}
        />
      </div>
    );
  }
}
