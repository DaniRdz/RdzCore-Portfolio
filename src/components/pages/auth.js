import React, { Component } from "react";

import AuthForm from "../auth/auth-form";

export default class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <AuthForm />
      </div>
    );
  }
}
