import React, { Component } from "react";
import { Helmet } from "react-helmet";

import PortfolioContainer from "../portfolio/portfolio-container";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Helmet>
          <title>Portfolio | RdzCore</title>
        </Helmet>
        <div className="page-title">Recent Works...</div>
        <PortfolioContainer />
        <div className="btn">
          <a
            href="https://github.com/DaniRdz"
            target="_blank"
            className="media-btn"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    );
  }
}
