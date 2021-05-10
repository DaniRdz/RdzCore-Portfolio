import React, { Component } from "react";

import InboxList from "../inbox/inbox-list";

import { fetchMessages } from "../../../firebase/client";

export default class Inbox extends Component {
  componentDidMount() {
    fetchMessages().then((res) => {
      console.log("msns", res);
    });
  }
  render() {
    return (
      <div className="inbox-wrapper">
        <InboxList />
      </div>
    );
  }
}
