import { combineReducers } from "redux";

import { commentsReducer } from "./commentsReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  users: usersReducer
});
