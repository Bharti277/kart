import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/slices/authSlice";
import counterReducer from "./redux/slices/counterSlice";
import todoSlice from "./redux/slices/todoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    todo: todoSlice,
  },
});
