import React, { Component } from "react";

import imageProfile from "../../../static/assets/images/bio/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="about-me">
        <div
          className="about-me-img"
          style={{ backgroundImage: `url(${imageProfile})` }}
        />
        <div className="about-me-info">
          <div className="title">
            <div className="name">My name is Daniel Rodríguez,</div>
            <div className="career">I'm a Full Stack Developer</div>
          </div>
          <div className="content-info">
            I am proactive and I am willing to learn from the new challenges
            that life puts me in, I like working with technologies like React in
            frontEnd and Node.js or Python to design APIs, to design Databases I
            work with NoSQL (MongoDB) and SQL ( MySQL), I currently live in
            Jalisco Mexico, but I am open to offers.
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
