import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email, message, id } = this.props.message;
    return (
      <div className="message-wrapper">
        <div className="name">{name}</div>
        <div className="topic">Asunto</div>
        <div className="message">{message}</div>
        <div className="date">12:00pm</div>
      </div>
    );
  }
}
