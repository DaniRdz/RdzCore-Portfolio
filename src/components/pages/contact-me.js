import React, { Component } from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../contact/contact-form";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-me">
        <Helmet>
          <title>Contact Me | RdzCore</title>
        </Helmet>
        <ContactForm />
      </div>
    );
  }
}
