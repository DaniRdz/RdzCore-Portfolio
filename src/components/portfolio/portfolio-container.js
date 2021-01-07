import React, { Component } from "react";
import axios from "axios";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  getPortfolioItems() {
    axios
      .get("https://rdzcore.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        this.setState({
          data: response.data.portfolio_items,
        });
      })
      .catch((err) => {
        console.log("getPortfolioItemsErr", err);
      });
  }
  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    return <div className="portfolio-container">projects goes here</div>;
  }
}
