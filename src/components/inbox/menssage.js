import React, { Component } from "react";
import Truncate from "react-truncate";

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSettings: false,
    };
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
    const { name, email, message, subject, id, date } = this.props.message;
    return (
      <div
        className="message-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div className="name">{name}</div>
        <div className="topic">
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {subject}
          </Truncate>
        </div>
        <div className="message">
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {message}
          </Truncate>
        </div>
        {this.state.showSettings ? (
          <div className="settings">
            <div className="setting-icon">
              <i className="far fa-trash-alt"></i>
            </div>
            <div className="setting-icon">
              <i className="far fa-envelope-open"></i>
            </div>
          </div>
        ) : (
          <div className="date">{date}</div>
        )}
      </div>
    );
  }
}
