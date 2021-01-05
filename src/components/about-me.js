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
            <div className="info email">
              <i className="far fa-envelope"></i>
              <div className="subtitle">daniel.rod.core@gmail.com</div>
            </div>
            <div className="info phone">
              <i className="fab fa-whatsapp"></i>
              <div className="subtitle"> 33 11 22 86 71</div>
            </div>
            <div className="info place">
              <i className="fas fa-map-marker-alt"></i>
              <div className="subtitle">Guadalajara, Jalisco, México</div>
            </div>
          </div>
          <div className="media-links-icons">
            <a
              href="https://www.linkedin.com/in/daniel-rodr%C3%ADguez-contreras/"
              target="_blank"
              className="media-link-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/DaniRdz"
              target="_blank"
              className="media-link-icon"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
