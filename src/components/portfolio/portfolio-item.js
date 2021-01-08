import React, { Component } from "react";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, description, thumb_image_url, logo_url } = this.props;
    return (
      <div className="portfolio-item">
        <div className="item-img">image goes here</div>
      </div>
    );
  }
}
