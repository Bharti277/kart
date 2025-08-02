import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.number);
  const bgColor = useSelector((state) => state.counter.backgroundColor);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleBackgroundChange = () => {
    dispatch({
      type: "CHANGE_BACKGROUND_COLOR",
      payload: bgColor === "red" ? "blue" : "red",
    });
  };
  // Multiple handles for bg change

  // const handleBackgroundChange = (color) => {
  //   dispatch({
  //     type: "CHANGE_BACKGROUND_COLOR",
  //     payload: color,
  //   });
  // };
  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h1>{count}</h1>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleBackgroundChange}>Color</button>
        {/* <button onClick={() => handleBackgroundChange("green")}>Color</button> */}
      </div>
    </div>
  );
};

export default Counter;
