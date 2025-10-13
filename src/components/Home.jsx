import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";
import {
  addTodo,
  editTodo,
  fetchTodos,
  removeTodo,
} from "../redux/slices/todoSlice";

const Home = () => {
  const state = useSelector((state) => state.todo);
  const counter = useSelector((state) => state.counter);
  
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  console.log(state, "state");
  const dispatch = useDispatch();

  const addNewTodo = () => {
    if (task.trim() == "") return;
    dispatch(addTodo({ id: Date.now(), title: task, completed: false }));
    setTask("");
  };

  const handleEditChange = (todo) => {
    setEditingId(todo.id);
    setEditedTitle(todo.title);
  };

  const handleSaveEdit = (id) => {
    if (editedTitle.trim() === "") return;
    dispatch(editTodo({ id, title: editedTitle }));
    setEditingId(null);
    setEditedTitle("");
  };
// Loader added
  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-fit h-fit m-auto mt-20 gap-5 grid">
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer"
        onClick={() => dispatch(fetchTodos())}
      >
        Fetch Todos
      </button>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <button
        className="px-4 py-2 mb-2 text-white bg-blue-900 cursor-pointer"
        onClick={addNewTodo}
      >
        Add New Todo
      </button>
      <div>
        <input
          className="border-2 border-black px-4 py-2 rounded-lg"
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        {state.todos.map((todo) => (
          <li key={todo.id} className="list-none my-2">
            <>
              {editingId === todo.id ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editedTitle}
                    className="border-2 border-black px-4 py-2 rounded-lg w-full"
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <button
                    onClick={() => handleSaveEdit(todo.id)}
                    className="bg-gray-500 py-2 px-8 cursor-pointer hover:bg-gray-900 text-white mx-2 float-right"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center ">
                  <span>{todo.title}</span>
                  <div className="ml-auto ">
                    <button
                      onClick={() => handleEditChange(todo)}
                      className="bg-gray-500 py-2 px-8 cursor-pointer hover:bg-gray-900 text-white mx-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="px-8 py-2 bg-red-400 cursor-pointer hover:bg-red-600 text-white"
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
