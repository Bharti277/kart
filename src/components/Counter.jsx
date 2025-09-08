import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.number);
  const bgColor = useSelector((state) => state.counter.backgroundColor);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Laxmi",
    },
    {
      id: 2,
      name: "Car",
    },
    {
      id: 3,
      name: "Anuradha",
    },
    {
      id: 4,
      name: "Truck",
    },
    {
      id: 5,
      name: "Spiderman",
    },
  ]);
  // Debounce search
  useEffect(() => {
    const filterItem = setTimeout(() => {
      setFilterSearch(
        users.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }, 500);
    return () => clearTimeout(filterItem);
  }, [search, users]);

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
        <button
          className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className=" cursor-pointer py-2 sm:px-8 sm:py-3 px-4 text-white bg-blue-500 hover:bg-blue-800 delay-100"
          onClick={handleBackgroundChange}
        >
          Color
        </button>
        {/* <button onClick={() => handleBackgroundChange("green")}>Color</button> */}
      </div>
      <input
        className="border-2"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterSearch.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default Counter;
