import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count, "countttt");
  const incrementNumber = () => {
    dispatch(incrementByAmount(15));
  };

  const decrementNumer = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={incrementNumber}>inc</button>
      <h1>{count.value}</h1>
      <button onClick={decrementNumer}>dec</button>
    </div>
  );
};

export default Home;
