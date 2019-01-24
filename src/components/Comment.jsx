import React from "react";

export const Comment = ({ text, votes }) => (
  <li>
    {text} <span>votes: {votes}</span>
  </li>
);
