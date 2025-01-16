import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle changes to the input field
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // Handle form submission to add tasks
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // If input is empty, do nothing
    if (!inputValue.trim()) return;

    // Prevent adding duplicate tasks
    if (tasks.includes(inputValue.trim())) {
      setInputValue("");
      return;
    }

    // Add task to the list
    setTasks((prev) => [...prev, inputValue.trim()]);
    setInputValue(""); // Clear input after adding the task
  };

  // Handle task deletion
  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <section className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-700">Todo List</h1>
      </header>

      <section>
        <form onSubmit={handleFormSubmit} className="flex space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              name="task"
              placeholder="Enter a task"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add Task
            </button>
          </div>
        </form>
      </section>

      <section className="myOrderList">
        <ul>
          {tasks.map((curTask, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 mb-2 rounded-lg"
            >
              <span className="text-lg text-gray-700">{curTask}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDelete(curTask)}
                  aria-label="Delete Task"
                  className="text-red-500 hover:text-red-700 transition duration-200"
                >
                  <MdDeleteForever size={20} />
                </button>
                <button
                  // onClick={() => handleDelete(curTask)}
                  // aria-label="Delete Task"
                  className="text-green-500 hover:text-green-700 transition duration-200"
                >
                  <FaCheckSquare size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
