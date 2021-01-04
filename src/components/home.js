import React, { Component } from "react";

import backgroundPicture from "../../static/assets/images/backgrounds/home.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div
          className="background-img"
          style={{
            background: "url(" + backgroundPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    );
  }
}
