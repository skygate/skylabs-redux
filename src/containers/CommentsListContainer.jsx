import { connect } from "react-redux";

import { CommentsList } from "../components/CommentsList";
const mapStateToProps = state => ({
  comments: state.comments
});

export const CommentsListContainer = connect(mapStateToProps)(CommentsList);
