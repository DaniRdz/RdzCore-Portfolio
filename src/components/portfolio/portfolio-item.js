import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: "",
    };
  }

  handleMouseEnter() {
    this.setState({
      portfolioItemClass: "img-blur",
    });
  }
  handleMouseLeave() {
    this.setState({
      portfolioItemClass: "",
    });
  }
  render() {
    const { id, description, thumb_image_url, logo_url } = this.props;
    return (
      <Link to={`/portfolio/${id}`}>
        <div
          className="portfolio-item"
          onMouseEnter={() => {
            this.handleMouseEnter();
          }}
          onMouseLeave={() => {
            this.handleMouseLeave();
          }}
        >
          <div
            className={`item-img ${this.state.portfolioItemClass}`}
            style={{ backgroundImage: `url(${thumb_image_url})` }}
          />
          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img src={logo_url} />
            </div>
            <div className="text-decription">{description}</div>
          </div>
        </div>
      </Link>
    );
  }
}
