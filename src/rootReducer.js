import { combineReducers } from "redux";
import counterReducer from "./redux/counter/reducer";
import authReducer from "./redux/auth/authSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
