import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
      <form className="contact-me-form-wrapper">
        <div className="two-columns">
          <input type="text" name="Name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div className="one-column">
          <textarea type="text" name="message" placeholder="Message" />
        </div>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    );
  }
}
