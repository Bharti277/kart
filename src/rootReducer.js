import { combineReducers } from "redux";
import counterReducer from "./redux/counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
