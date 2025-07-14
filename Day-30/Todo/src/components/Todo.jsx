import React from "react";
import TodoItems from "./TodoItems";
import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const Todo = () => {
  const [input, setinput] = useState("");

  const { handleAddItems } = useTodoContext();

  const handleSumbit = () => {
    handleAddItems(input);

    setinput("");
  };

  return (
    <div className="w-[500px] border  p-4 flex flex-col bg-white rounded-2xl">
      <h1 className=" text-4xl md:text-3xl text-center  font-medium">Todo</h1>

      <div className="flex justify-between mt-8 border rounded-[30px] border-slate-200 ">
        <input
          type="text"
          placeholder="Task"
          className="text-slate-400 outline-none py-2 px-4 "
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />

        <button
          className="bg-orange-500 hover:bg-orange-600  text-white py-2 px-4 rounded-[30px]  border-none"
          onClick={handleSumbit}
        >
          Submit
        </button>
      </div>
      <TodoItems />
    </div>
  );
};

export default Todo;
