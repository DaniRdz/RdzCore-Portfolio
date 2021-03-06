import React, { Component } from "react";
import { Helmet } from "react-helmet";

import backgroundPicture from "../../../static/assets/images/backgrounds/home.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavbar(true);
  }
  componentWillUnmount() {
    this.props.changeNavbar(false);
  }
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>Home | RdzCore</title>
        </Helmet>
        <div
          className="background-img"
          style={{
            background: "url(" + backgroundPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="home-info">
          <div className="media-links">
            <a
              className="media-link"
              href="https://github.com/DaniRdz"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="media-link"
              href="https://twitter.com/RdzCore"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="media-link"
              href="https://www.linkedin.com/in/daniel-rodríguez-contreras"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="media-link"
              href="https://www.instagram.com/rdzcore/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="grettings-message">
            <div className="title">Hi I'm Daniel</div>
            <div className="subtitle">Full Stack Developer</div>
          </div>
          <button
            onClick={() => this.props.history.push("/contact-me")}
            className="btn-contact"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    );
  }
}
