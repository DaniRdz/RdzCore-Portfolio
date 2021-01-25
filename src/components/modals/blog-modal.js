import React, { Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactModal
        onRequestClose={() => this.props.handleModalClose()}
        isOpen={this.props.modalIsOpen}
      >
        <h1>Hi Im a modal :D</h1>
      </ReactModal>
    );
  }
}
