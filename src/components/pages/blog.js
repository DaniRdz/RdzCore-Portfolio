import React, { Component } from "react";
import axios from "axios";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogItems: [],
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }
  getBlogItems() {
    axios
      .get("https://rdzcore.devcamp.space/portfolio/portfolio_blogs")
      .then((response) => {
        this.setState({
          blogItems: response.data.portfolio_blogs,
        });
      })
      .catch((err) => {
        console.log("getBlogItems error", err);
      });
  }
  componentDidMount() {
    this.getBlogItems();
  }
  render() {
    const blogItems = this.state.blogItems.map((blogItem) => {
      return <h1>{blogItem.title}</h1>;
    });
    return <div className="blog">{blogItems}</div>;
  }
}
