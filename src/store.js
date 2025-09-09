import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/slices/authSlice";
import counterReducer from "./redux/slices/counterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
