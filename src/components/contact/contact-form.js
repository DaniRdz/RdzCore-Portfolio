import React, { Component } from "react";

import { createMessage } from "../../../firebase/client";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
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
    const { name, email, message } = this.state;
    createMessage({
      name,
      email,
      message,
    });

    this.setState({
      name: "",
      email: "",
      message: "",
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form-wrapper">
        <div className="two-columns">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="one-column">
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>
        <button
          disabled={!this.state.message.length}
          className="btn"
          type="submit"
        >
          Send
        </button>
      </form>
    );
  }
}
