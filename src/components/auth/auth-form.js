import React, { Component } from "react";
import axios from "axios";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errText: "",
    });
  }
  handleSubmit(event) {
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: { email: this.state.email, password: this.state.password },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccesfulAuth();
        } else {
          this.setState({
            errText: "Wrong email or password",
          });
          this.props.handleUnsuccesfulAuth();
        }
      })
      .catch((err) => {
        this.setState({
          errText: "An error occurred",
        });
        this.props.handleUnsuccesfulAuth();
      });
    event.preventDefault();
  }
  render() {
    return (
      <div className="auth-form">
        <div className="grettigs-msg">Login To Access Your Dashboard</div>

        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          <div className="user-icon">
            <i className="fas fa-user-secret"></i>
          </div>
          <div className="error-text">{this.state.errText}</div>
          <div className="form-group">
            <i className="fas fa-at"></i>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
