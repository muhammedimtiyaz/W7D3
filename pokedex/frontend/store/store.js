import { createStore, applyMiddleware } from "redux";
import {thunk} from "../middlewares/thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root";

const configStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
};

export default configStore;