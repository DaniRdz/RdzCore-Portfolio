import React, { Component } from "react";

import { getMessageById } from "../../../firebase/client";

export default class MessageDetails extends Component {
  componentDidMount() {
    getMessageById(this.props.match.params.slug).then((message) =>
      console.log(message)
    );
  }
  render() {
    return (
      <div className="message-details-wrapper">
        <h1>Inbox</h1>
        <div>This is the details</div>
      </div>
    );
  }
}
