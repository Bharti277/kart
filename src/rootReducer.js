import { combineReducers } from "redux";
import authReducer from "./redux/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
