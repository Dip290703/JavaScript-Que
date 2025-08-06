import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
const Task = ({ tasks, setTasks }) => {
  const onDelete = (id) => {
    setTasks((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };
  return (
    <div>
      {tasks.map((task) => (
        <div className="mt-4 flex justify-between px-4" key={task.id}>
          <IoCheckmarkDone size={25} />
          <h1>{task.newTask}</h1>
          <AiTwotoneDelete size={25} onClick={() => onDelete(task.id)} />
        </div>
      ))}
    </div>
  );
};

export default Task;
