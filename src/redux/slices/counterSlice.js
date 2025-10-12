import { createSlice } from "@reduxjs/toolkit";

const getCounterInitialState = () => ({
  value: 0,
  name:"Deependra"
})

const counterSlice = createSlice({
  name: "counter",
  initialState: getCounterInitialState(),
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(state);
      
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
