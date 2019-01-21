let commentID = 0;

export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const VOTE_UP_COMMENT = "VOTE_UP_COMMENT";
export const VOTE_DOWN_COMMENT = "VOTE_DOWN_COMMENT";

export const addComment = text => ({
  type: ADD_COMMENT,
  payload: {
    id: commentID++,
    text
  }
});

export const removeComment = id => ({
  type: REMOVE_COMMENT,
  payload: {
    id
  }
});

export const editComment = ({ id, text }) => ({
  type: EDIT_COMMENT,
  payload: {
    id,
    text
  }
});

export const voteUpComment = id => ({
  type: VOTE_UP_COMMENT,
  payload: {
    id
  }
});

export const voteDownComment = id => ({
  type: VOTE_DOWN_COMMENT,
  payload: {
    id
  }
});
