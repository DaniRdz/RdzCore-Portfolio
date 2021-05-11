import React, { Component } from "react";

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
    const { name, email, message, id } = this.props.message;
    return (
      <div
        className="message-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div className="name">{name}</div>
        <div className="topic">Cotizacion de Un proyecto</div>
        <div className="message">{message}</div>
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
          <div className="date">12:00pm</div>
        )}
      </div>
    );
  }
}
