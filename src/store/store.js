import { createStore, applyMiddleware, compose } from "redux";

import { rootReducer } from "../reducers/rootReducer";
import { forbiddenWordsMiddleware } from "../middleware/forbiddenWordsMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;
