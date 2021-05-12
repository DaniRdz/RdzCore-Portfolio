import React, { Component } from "react";

import Message from "./message";

import { fetchMessages } from "../../../firebase/client";

export default class InboxList extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    this.setState({
      messages: this.state.messages.filter((message) => message.id !== id),
    });
  }
  componentDidMount() {
    fetchMessages().then((messages) => {
      this.setState({ messages });
    });
  }
  renderMessages() {
    return this.state.messages.map((message) => {
      return (
        <Message
          key={message.id}
          message={message}
          handleDelete={this.handleDelete}
        />
      );
    });
  }
  render() {
    return <div className="inbox-list">{this.renderMessages()}</div>;
  }
}
