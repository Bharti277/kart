import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(state, "action");

      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
