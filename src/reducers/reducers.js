import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  VOTE_UP_COMMENT,
  VOTE_DOWN_COMMENT
} from "../actions/actions";

const initialState = {
  comments: [],
  users: []
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          {
            id: action.payload.id,
            text: action.payload.text,
            votes: 0
          },
          ...state.comments
        ]
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload.id
        )
      }
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id
            ? { ...comment, text: action.payload.text }
            : comment
        )
      }
    case VOTE_UP_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id
            ? { ...comment, votes: comment.votes + 1 }
            : comment
        )
      }
    case VOTE_DOWN_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id
            ? { ...comment, votes: comment.votes - 1 }
            : comment
        )
      }
    default:
      return state;
  }
};
