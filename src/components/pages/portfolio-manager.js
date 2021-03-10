import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-side-bar-list";
import PortfolioForm from "../portfolio/portfolio-form";
import { Helmet } from "react-helmet";

export default class PortfolioManager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: [],
      portfolioToEdit: {},
    };

    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }
  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {},
    });
  }
  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem,
    });
  }
  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter((item) => {
            return item.id !== portfolioItem.id;
          }),
        });
        return response.data;
      })
      .catch((err) => {
        console.log("handleDeleteClick error", err);
      });
  }
  handleNewFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }
  handleEditFormSubmission() {
    this.getPortfolioItems();
  }
  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError", error);
  }
  getPortfolioItems() {
    axios
      .get(
        "https://rdzcore.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true,
        }
      )
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
        <Helmet>
          <title>Portfolio Manager | RdzCore</title>
        </Helmet>
        <div className="right-column">
          <PortfolioForm
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />
        </div>
        <div className="left-column">
          <PortfolioSideBarList
            handleDeleteClick={this.handleDeleteClick}
            handleEditClick={this.handleEditClick}
            data={this.state.portfolioItems}
          />
        </div>
      </div>
    );
  }
}
