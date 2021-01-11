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
          console.log("you are loggin");
        } else {
          this.setState({
            errText: "Wrong email or password",
          });
        }
      })
      .catch((err) => {
        console.log("auth eror", err);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div className="auth-form">
        <div className="grettigs-msg">Login To Access Your Dashboard</div>

        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
          <div className="error-text">{this.state.errText}</div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
