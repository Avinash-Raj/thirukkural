// @flow
import { combineReducers } from "redux";
import detailReducer from "./detail-reducer";

// Root Reducer
const rootReducer = combineReducers({
  details: detailReducer
});

export default rootReducer;
