import React from "react";
import { connect } from "react-redux";

import { addComment } from "../actions/actions";

class AddCommentRaw extends React.Component {
  handleOnSubmit = e => {
    const { addComment } = this.props;

    e.preventDefault();

    if (this.input.value.trim()) {
      addComment(this.input.value);
    }
    this.input.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Enter a comment: </label>
        <input
          placeholder="New comment"
          type="text"
          ref={input => {
            this.input = input;
          }}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export const AddComment = connect(
  null,
  { addComment }
)(AddCommentRaw);
