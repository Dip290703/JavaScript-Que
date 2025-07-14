import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import {  useTodoContext } from "../context/TodoContext";

const TodoItems = () => {
  const {task} = useTodoContext()
  const {handleDelete,toggleComplete} = useTodoContext()
  return (
    <div className="mt-4 p-2">
      {task.map((item) => (
        <div key={item.id} className="flex justify-between">
          <CiCircleCheck size={25}
            onClick={() => toggleComplete(item.id)} />
       <p className={`flex-1 mx-4 ${item.completed ? "line-through text-gray-400" : ""}`}>
            {item.text}
          </p>
          <AiOutlineDelete size={25}
          onClick={()=> handleDelete(item.id)} className="cursor-pointer"  />
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
