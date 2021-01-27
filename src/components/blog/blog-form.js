import React, { Component } from "react";
import axios from "axios";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

    return formData;
  }
  handleSubmit(event) {
    axios
      .post(
        "https://rdzcore.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          title: "",
          blog_status: "",
        });
        this.props.handleSuccessfullFormSubmission(
          response.data.portfolio_blog
        );
      })
      .catch((err) => console.log("handleSubmitError", err));
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-columns">
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="blog_status"
            placeholder="Blog Satus"
            value={this.state.blog_status}
          />
        </div>
        <div className="one-column">
          <RichTextEditor />
        </div>
        <button className="btn">SAVE</button>
      </form>
    );
  }
}
