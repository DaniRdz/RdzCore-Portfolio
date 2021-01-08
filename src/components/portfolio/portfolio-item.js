import React, { Component } from "react";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, description, thumb_image_url, logo_url } = this.props;
    return (
      <div className="portfolio-item">
        <div
          className="item-img"
          style={{ backgroundImage: `url(${thumb_image_url})` }}
        />
        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>
          <div className="text-decription">{description}</div>
        </div>
      </div>
    );
  }
}
