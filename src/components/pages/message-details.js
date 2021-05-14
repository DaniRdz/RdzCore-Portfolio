import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { getMessageById } from "../../../firebase/client";

export default class MessageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    getMessageById(this.props.match.params.slug).then((message) =>
      this.setState({
        message,
        isLoading: false,
      })
    );
  }
  render() {
    const { date, name, subject, message, email } = this.state.message;
    return (
      <div className="message-details-wrapper">
        <Helmet>
          {this.state.isLoading ? (
            <title>...loading</title>
          ) : (
            <title>{`${subject} | RdzCore`}</title>
          )}
        </Helmet>
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
