import React, { Component } from "react";

import Message from "./message";

import { fetchMessages } from "../../../firebase/client";

export default class InboxList extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    fetchMessages().then((messages) => {
      this.setState({ messages });
    });
  }
  renderMessages() {
    return this.state.messages.map((message) => {
      return <Message key={message.id} message={message} />;
    });
  }
  render() {
    return <div className="inbox-list">{this.renderMessages()}</div>;
  }
}
