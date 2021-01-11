import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    console.log(this.state.email);
    console.log(this.state.password);
    event.preventDefault();
  }
  render() {
    return (
      <div className="auth-form">
        <div className="grettigs-msg">Login To Access Your Dashboard</div>

        <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
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
