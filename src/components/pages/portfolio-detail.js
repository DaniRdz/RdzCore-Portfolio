import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      portfolioItem: {},
    };
  }
  getPortfolioItem() {
    axios
      .get(
        `https://rdzcore.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("getPortfolioItem Error", err);
      });
  }

  componentDidMount() {
    this.getPortfolioItem();
  }
  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };

    const logoStyles = {
      width: "200px",
    };
    return (
      <div className="portfolio-detail-wrapper">
        <Helmet>
          {this.state.isLoading ? (
            <title>...loading</title>
          ) : (
            <title>{`${name} | RdzCore`}</title>
          )}
        </Helmet>
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>
        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>
        <div className="bottom-content-wrapper">
          <a className="site-link" href={url} target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}
