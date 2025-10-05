import { combineReducers } from "redux";
import authReducer from "./redux/auth/authSlice";
import counterReducer from "./redux/slices/counterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
