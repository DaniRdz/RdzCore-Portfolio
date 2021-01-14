import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-side-bar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: [],
    };

    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleSeccessfulFormSubmission = this.handleSeccessfulFormSubmission.bind(
      this
    );
  }
  handleSeccessfulFormSubmission(portfolioItem) {
    //TODO
    //Upadete portfolioItem
    //Added new portfolioItem
  }
  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError", error);
  }
  getPortfolioItems() {
    axios
      .get("https://rdzcore.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      })
      .catch((err) => {
        console.log("getPortfolioItems err", err);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    return (
      <div className="portfolio-manager">
        <div className="right-column">
          <PortfolioForm
            handleSeccessfulFormSubmission={this.handleSeccessfulFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>
        <div className="left-column">
          <PortfolioSideBarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}
