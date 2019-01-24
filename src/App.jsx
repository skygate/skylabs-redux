import React from "react";
import { CommentsList } from "./components/CommentsList";
import { AddComment } from "./components/AddComment";

const App = () => (
  <div>
    <AddComment />
    <CommentsList />
  </div>
);

export default App;
