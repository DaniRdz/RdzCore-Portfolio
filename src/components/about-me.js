import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-me-img">Image goes here</div>
        <div className="about-me-info">
          <div className="title">
            <div className="name">My name is Daniel Rodríguez,</div>
            <div className="career">I'm Fullstack Developer</div>
          </div>
          <div className="content-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            placerat felis sit amet tellus tincidunt semper. Phasellus nisl
            eros, mollis non ornare sit amet, cursus sed nisl. Cras dui tortor,
            dapibus ac eleifend in, porttitor in odio.
          </div>
          <div className="contact-info">
            <div className="email">
              <i className="far fa-envelope"></i>
              <div className="subtitle">email</div>
            </div>
            <div className="phone">
              <i className="fab fa-whatsapp"></i>
              <div className="subtitle">phone</div>
            </div>
            <div className="place">
              <i className="fas fa-map-marker-alt"></i>
              <div className="subtitle">place</div>
            </div>
          </div>
          <div className="media-links-icons">
            <div className="media-link-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="media-link-icon">
              <i className="fab fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
