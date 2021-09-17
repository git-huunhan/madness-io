import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
