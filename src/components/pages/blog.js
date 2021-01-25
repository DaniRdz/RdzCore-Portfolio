import React, { Component } from "react";
import axios from "axios";

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

    window.addEventListener("scroll", this.onScroll, false);
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
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });
    return (
      <div className="blog-container">
        <BlogModal
          modalIsOpen={this.state.blogModalIsOpen}
          handleModalClose={this.handleModalClose}
          handleSuccessfullNewBlogSubmission={
            this.handleSuccessfullNewBlogSubmission
          }
        />
        <div className="new-blog-link">
          <a onClick={this.handleNewBlogCLick}>Open modal</a>
        </div>
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
