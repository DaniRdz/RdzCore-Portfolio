import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}