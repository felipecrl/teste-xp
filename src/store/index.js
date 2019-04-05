import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { Reducers } from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(logger))
);
