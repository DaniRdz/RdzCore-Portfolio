import React, { Component } from "react";
import { Helmet } from "react-helmet";

import InboxList from "../inbox/inbox-list";

export default class Inbox extends Component {
  render() {
    return (
      <div className="inbox-wrapper">
        <Helmet>
          <title>Inbox | RdzCore</title>
        </Helmet>
        <h1>Inbox</h1>
        <InboxList />
      </div>
    );
  }
}
