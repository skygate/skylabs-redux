import { ADD_COMMENT } from "../actions/actions";

const forbiddenWords = ["hate", "php"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return next => action => {
    if (action.type === ADD_COMMENT) {
      const foundWord = forbiddenWords.filter(word =>
        action.payload.text.includes(word)
      );
      if (foundWord.length) {
        return dispatch({ type: "FOUND_BAD_WORD" });
      }
    }
    return next(action);
  };
};
