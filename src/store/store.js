import { createStore, combineReducers, applyMiddleware } from "redux";
import MovieReducer from "./movieReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers({ MovieReducer }),
  {},
  applyMiddleware(logger)
);

export default store;
