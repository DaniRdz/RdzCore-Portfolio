import React, { Component } from "react";

import InboxList from "../inbox/inbox-list";

export default class Inbox extends Component {
  render() {
    return (
      <div className="inbox-wrapper">
        <h1>Inbox</h1>
        <InboxList />
      </div>
    );
  }
}
