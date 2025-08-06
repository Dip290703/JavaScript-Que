import React, { useState } from "react";
import Task from "./Task";

const TaskModal = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), newTask: input }]);
    setInput("");
  };
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className=" bg-white px-4  py-2 rounded-2xl w-[500px] ">
        <h1 className="text-center font-medium text-2xl ">To-Do</h1>
        <div className="flex border border-neutral-200 rounded-3xl mt-4">
          <input
            type="text"
            className="outline-none px-4 py-2 w-full"
            placeholder="Enter task.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="bg-slate-400 px-4 py-2 text-white rounded-3xl "
          >
            Add+
          </button>
        </div>
        <Task  tasks = {tasks}
        setTasks={setTasks}/>

      
      </div>
    </div>
  );
};

export default TaskModal;
