import React, { Component } from "react";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Portfolio Details for {this.props.match.params.slug}</h1>
      </div>
    );
  }
}
