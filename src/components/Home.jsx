import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";
import { addTodo, fetchTodos, removeTodo } from "../redux/slices/todoSlice";

const Home = () => {
  const state = useSelector((state) => state.todo);
  const [task, setTask] = useState("");
  console.log(state, "countttt");
  const dispatch = useDispatch();

  const addNewTodo = () => {
    if (task.trim() == "") return;
    console.log(task, "taskkk");
    dispatch(addTodo({ id: Date.now(), title: task, completed: false }));
    setTask("");
  };

  if (state.isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="w-fit h-fit m-auto mt-20 gap-5">
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer"
        onClick={() => dispatch(fetchTodos())}
      >
        Fetch Todos
      </button>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <button
        className="px-4 py-2 text-black bg-blue-900 cursor-pointer"
        onClick={addNewTodo}
      >
        Add New Todo
      </button>
      <div>
        <input
          className="border-2 border-black px-4 py-2 rounded-lg"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-8 py-2 bg-red-400"
            >
              X
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
