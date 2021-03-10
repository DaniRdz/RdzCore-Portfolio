import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";

import BlogForm from "../blog/blog-form";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogId: this.props.match.params.slug,
      blogItem: {},
      editMode: false,
      isLoading: true,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(
      this
    );
  }
  handleUpdateFormSubmission(blog) {
    this.setState({
      blogItem: blog,
      editMode: false,
    });
  }
  handleFeaturedImageDelete() {
    this.setState({
      blogItem: {
        featured_image: "",
      },
    });
  }
  handleEditClick() {
    if (this.props.loggedInStatus === "LOGGED_IN") {
      this.setState({
        editMode: true,
      });
    }
  }
  getBlogItem() {
    axios
      .get(
        `https://rdzcore.devcamp.space/portfolio/portfolio_blogs/${this.state.blogId}`
      )
      .then((response) => {
        this.setState({
          blogItem: response.data.portfolio_blog,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("getBlogItem error", err);
      });
  }
  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm
            handleUpdateFormSubmission={this.handleUpdateFormSubmission}
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            editMode={this.state.editMode}
            blog={this.state.blogItem}
          />
        );
      } else {
        return (
          <div className="content-container">
            <h1 onClick={this.handleEditClick}>{title}</h1>

            {featured_image_url ? (
              <div className="featured-image-wrapper">
                <img src={featured_image_url} />
              </div>
            ) : null}

            <div className="content">{ReactHtmlParser(content)}</div>
          </div>
        );
      }
    };
    const {
      title,
      content,
      featured_image_url,
      blog_status,
    } = this.state.blogItem;

    return (
      <div className="blog-container">
        <Helmet>
          {this.state.isLoading ? (
            <title>...loading</title>
          ) : (
            <title>{`${title} | RdzCore`}</title>
          )}
        </Helmet>
        {contentManager()}
      </div>
    );
  }
}
