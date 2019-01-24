import React from "react";
import { connect } from "react-redux";

import { Comment } from "./Comment";

const CommentsListRaw = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  comments: state.comments
});

export const CommentsList = connect(mapStateToProps)(CommentsListRaw);
