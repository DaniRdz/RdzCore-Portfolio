import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogItems: [],
      currentPage: 0,
      totalCount: 0,
      isLoding: true,
      blogModalIsOpen: false,
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.handleNewBlogCLick = this.handleNewBlogCLick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfullNewBlogSubmission = this.handleSuccessfullNewBlogSubmission.bind(
      this
    );
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

    window.addEventListener("scroll", this.onScroll, false);
  }
  handleDeleteClick(blog) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          blogItems: this.state.blogItems.filter((blogItem) => {
            return blog.id !== blogItem.id;
          }),
        });
        return response.data;
      })
      .catch((err) => {
        console.log("handleDeleteClick Error", err);
      });
  }
  handleSuccessfullNewBlogSubmission(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems),
    });
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false,
    });
  }
  handleNewBlogCLick() {
    this.setState({
      blogModalIsOpen: true,
    });
  }
  onScroll() {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.offsetHeight
    ) {
      this.setState({
        isLoding: true,
      });
      this.getBlogItems();
    }
  }
  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    axios
      .get(
        `https://rdzcore.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoding: false,
        });
      })
      .catch((err) => {
        console.log("getBlogItems error", err);
      });
  }
  componentDidMount() {
    this.getBlogItems();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  render() {
    const blogItems = this.state.blogItems.map((blogItem) => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return (
          <div key={blogItem.id} className="admin-blog-wrapper">
            <BlogItem blogItem={blogItem} />
            <a
              className="action-icon"
              onClick={() => this.handleDeleteClick(blogItem)}
            >
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
        );
      } else {
        return <BlogItem key={blogItem.id} blogItem={blogItem} />;
      }
    });
    return (
      <div className="blog-container">
        <Helmet>
          <title>Blog | RdzCore</title>
        </Helmet>
        <BlogModal
          modalIsOpen={this.state.blogModalIsOpen}
          handleModalClose={this.handleModalClose}
          handleSuccessfullNewBlogSubmission={
            this.handleSuccessfullNewBlogSubmission
          }
        />
        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <div className="new-blog-link">
            <a onClick={this.handleNewBlogCLick}>
              <i className="fas fa-feather-alt"></i>
            </a>
          </div>
        ) : null}

        <div className="content-container">{blogItems}</div>
        {this.state.isLoding ? (
          <div className="content-loader">
            <i className="fab fa-react fa-spin"></i>
          </div>
        ) : null}
      </div>
    );
  }
}
