import React, { Component } from "react";

import ContactForm from "../contact/contact-form";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-me">
        <ContactForm />
      </div>
    );
  }
}
