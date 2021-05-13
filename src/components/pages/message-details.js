import React, { Component } from "react";

import { getMessageById } from "../../../firebase/client";

export default class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {},
    };
  }
  componentDidMount() {
    getMessageById(this.props.match.params.slug).then((message) =>
      this.setState({
        message,
      })
    );
  }
  render() {
    const { date, name, subject, message, email } = this.state.message;
    return (
      <div className="message-details-wrapper">
        <h1>{subject}</h1>
        <div className="message-header">
          <div className="contact-message-info">
            <div className="name">{name}</div>
            <div className="email">{email}</div>
          </div>
          <div className="date">{date}</div>
        </div>
        <div className="message-content">{message}</div>
      </div>
    );
  }
}
