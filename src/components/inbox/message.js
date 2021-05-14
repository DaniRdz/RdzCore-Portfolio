import React, { Component } from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

import { deleteMessage } from "../../../firebase/client";

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSettings: false,
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(id) {
    deleteMessage(id);
    this.props.handleDelete(id);
  }

  handleMouseEnter() {
    this.setState({
      showSettings: true,
    });
  }
  handleMouseLeave() {
    this.setState({
      showSettings: false,
    });
  }
  render() {
    const { name, message, subject, id, date } = this.props.message;
    return (
      <div
        className="message-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div className="name">{name}</div>
        <div className="topic">
          <Link to={`/inbox/${id}`}>{subject}</Link>
        </div>
        <div className="message">
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {message}
          </Truncate>
        </div>
        {this.state.showSettings ? (
          <div className="settings">
            <div className="setting-icon">
              <Link to={`/inbox/${id}`}>
                <i className="far fa-envelope-open"></i>
              </Link>
            </div>
            <div
              className="setting-icon"
              onClick={() => this.handleDeleteClick(id)}
            >
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
        ) : (
          <div className="date">{date}</div>
        )}
      </div>
    );
  }
}
