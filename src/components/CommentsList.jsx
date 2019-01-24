import React from "react";

import { Comment } from "./Comment";

export const CommentsList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);
