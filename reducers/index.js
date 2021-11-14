import { combineReducers } from "redux";

// IMPORT REDUCERS HERE
import dummyReducer from "./dummyReducer";

const rootreducers = combineReducers({
  // USE REDUCERS HERE
  dummy: dummyReducer,
});

export default rootreducers;
