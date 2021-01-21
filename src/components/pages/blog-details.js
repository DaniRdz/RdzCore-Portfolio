import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogId: this.props.match.params.slug,
    };
  }
  getBlogItem() {
    axios
      .get(
        `https://rdzcore.devcamp.space/portfolio/portfolio_blogs/${this.state.blogId}`
      )
      .then((response) => {
        console.log("reponse", response);
      })
      .catch((err) => {
        console.log("getBlogItem error", err);
      });
  }
  componentDidMount() {
    this.getBlogItem();
  }
  render() {
    return (
      <div>
        <h1>Blog Detail</h1>
      </div>
    );
  }
}
