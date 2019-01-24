import React from "react";
import { connect } from "react-redux";

import { voteUpComment } from "../actions/actions";

const CommentRaw = ({ text, votes, id, voteUpComment }) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => voteUpComment(id)}>Vote Up</button>
  </li>
);

export const Comment = connect(
  null,
  { voteUpComment }
)(CommentRaw);
