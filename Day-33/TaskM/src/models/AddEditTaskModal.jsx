import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import cross from "../assets/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
const AddEditTaskModal = ({ type, device, setOpenAddEditTaskModal , prevColIndex = 0,taskIndex}) => {
  const [title, setTitle] = React.useState("");

  const [description, setDescription] = React.useState("");
  const board = useSelector((state) => state.boards).find(
    (board) => board.isActive
  );
  const [newColIndex,setNewColIndex] = useState(prevColIndex)
  const dispatch = useDispatch()
   const [isvalid, setIsValid] = useState(true);
  const columns = board.columns; 
  const col = columns.find((col,index) => index === prevColIndex);
    const [status ,setStatus] = useState(columns[prevColIndex].name)
  const [subtasks, setSubtasks] = React.useState([
    { id: uuid(), title: "", isCompleted: false },
    { id: uuid(), title: "", isCompleted: false },
  ]);

  const onDelete = (id) => {
    setSubtasks((prev) => {
      return prev.filter((subTask) => subTask.id !== id);
    });
  };
  const onChange = (value, id) => {
    setSubtasks((prev) => {
      const newState = [...prev];
      const subTask = newState.find((subTask) => subTask.id === id);
      subTask.title = value;
      return newState;
    });
  };
   const validate = ( )  => {
      setIsValid(false)
      if (!title.trim()) {
        return false;
      }
      for(let i = 0; i < subtasks.length; i++) {
        if (!subtasks[i].title.trim()) {
          return false;
        }
      }
      setIsValid(true);
      return true;
    }

    
      const onSubmit = (type) => {
       
        if(type === "add") {
          dispatch(boardsSlice.actions.addTask({
            title,
            description,
            subtasks, 
            status, 
            newColIndex
          }));
        }else{
          dispatch(boardsSlice.actions.editTask({
           title,description,subtasks,status,prevColIndex,taskIndex,newColIndex
          }));
        }
      }
      const onChangeStatus = (e) => {
        setStatus(e.target.value)
        setNewColIndex(e.target.selectedIndex)
        
      } 
    
      
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setOpenAddEditTaskModal(false);
      }}
      className={
        device === "mobile"
          ? "py-6 px-6 pb-40 absolute overflow-y-scroll  left-0 flex right-0 bottom-[-100vh] top-0 bg-[#00000080] "
          : "py-6 px-6 pb-40 absolute overflow-y-scroll  left-0 flex right-0 bottom-0 top-0 bg-[#00000080] "
      }
    >
      {/* model sectioin   */}
      <div className="scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl">
        <h3>{type === "edit" ? "Edit" : "Add New"} Task</h3>
        {/* task name/ */}
        <div className="mt-8 flex flex-col space-y-2">
          <label className="text-sm dark:text-white text-gray-500">
            Task Name
          </label>
          <input
            type="text"
            value={title}
            className="bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g . Task 1"
          />
        </div>
        {/* desciption */}
        <div className="mt-8 flex flex-col space-y-2">
          <label className="text-sm dark:text-white text-gray-500">
            Description
          </label>
          <textarea
            value={description}
            className="bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md min-h-[200px] text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g .Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, eius? "
          />
        </div>
        {/* suntask */}
        <div className="mt-8 flex flex-col space-y-2">
          <label className="text-sm dark:text-white text-gray-500">
            Subtasks
          </label>
          {subtasks.map((subTask, index) => (
            <div key={index} className="flex items-center   w-full">
              <input
                type="text"
                value={subTask.title}
                onChange={(e) => {
                  onChange(e.target.value, subTask.id);
                }}
                className="bg-transparent outline-none focus:border-0 flex-grow text-sm border-gray-600 focus:outline-[#635fc7] py-2 px-4 ring-0 rounded-md border mt-2"
                placeholder="e.g Take coffee break"
              />
              <img
                src={cross}
                alt=""
                className="ml-4 mt-2"
                onClick={() => {
                  onDelete(subTask.id);
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <button
            className="w-full items-center hover:opacity-75 dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] px-4 py-2 rounded-full mt-2"
            onClick={() => {
              setSubtasks((state) => [
                ...state,
                { id: uuid(), title: "", isCompleted: false },
              ]);
            }}
          >
            + Add New SubTask
          </button>
          <div className="mt-8 flex flex-col space-y-2  ">
            <label className="text-sm dark:text-white text-gray-500">
              Current status
            </label>
            <select
            value={status}
            onChange={(e) =>{
              onChangeStatus(e)
            }}
              className="select flex flex-grow py-2 px-4 rounded-md text-sm 
             bg-white dark:bg-gray-800 text-black dark:text-white 
             border border-gray-600 focus:outline-[#635fc7] focus:border-0 outline-none"
            >
              {columns.map((col, index) => (
                <option value={col.name} key={index}>
                  {col.name}
                </option>
              ))}
            </select>
          </div>
           <button
            className="w-full items-center hover:opacity-75 dark:text-white dark:bg-[#635fc7] text-white bg-[#635fc7] px-4 py-2 rounded-full mt-8"
            onClick={() => {
              const isvalid = validate();
              if (isvalid === true) onSubmit(type);
               setOpenAddEditTaskModal(false);
            }}
          >
            {type === "edit" ? "Save Task" : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditTaskModal;
