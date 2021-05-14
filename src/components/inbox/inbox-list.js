import React, { Component } from "react";

import Message from "./message";

import { fetchMessages } from "../../../firebase/client";

export default class InboxList extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      isLoading: true,
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
      this.setState({ messages, isLoading: false });
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
    return (
      <div className="inbox-list">
        {this.renderMessages()}
        {this.state.isLoading ? (
          <div className="content-loader">
            <i className="fab fa-react fa-spin"></i>
          </div>
        ) : null}
      </div>
    );
  }
}
