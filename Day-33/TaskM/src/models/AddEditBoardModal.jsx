import React, { useState } from "react";
import cross from "../assets/icon-cross.svg"; // Assuming you have a cross icon in your assets
import { v4 as uuid } from "uuid"; // Importing uuid for unique IDs
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";

const AddEditBoardModal = ({ setBoardModalOpen, type }) => {
  const dispatch = useDispatch();
  const [name,setName]=useState('')
  const [isvalid, setIsValid] = useState(true);
  const [isFirstLoad,setIsFirstLoad] = useState(true)
  const board = useSelector((state) => state.boards).find(
    (board) => board.isActive
  );

 const [columns, setColumns] = useState( [
        { name: "Todo", task: [], id: uuid() },
        { name: "Doing", task: [], id: uuid() },
      ]
  
);


if(type === 'edit' && isFirstLoad) {
  setColumns(
    board.columns.map((col)=>{
      return { ...col , id :uuid() }
    })
  )
  setName(board.name)
  setIsFirstLoad(false)
}



  const onChange = (id , newValue) => {
     setColumns((prevState)=>{
      const newState =  [...prevState]
      const column = newState.find((col)=>col.id === id)
      column.name = newValue
      return newState
     })
  }

  
    //console.log(type);
    const onDelete = (id) => {
    setColumns((prevState) => {
      return prevState.filter((column) => column.id !== id);
    })}
    
    const validate = ( )  => {
      setIsValid(false)
      if (!name.trim()) {
        return false;
      }
      for(let i = 0; i < columns.length; i++) {
        if (!columns[i].name.trim()) {
          return false;
        }
      }
      setIsValid(true);
      return true;
    }

  const onSubmit = (type) => {
    setBoardModalOpen(false);
    if(type === "add") {
      dispatch(boardsSlice.actions.addBoard({
        name,
        columns,
     
      }));
    }else{
      dispatch(boardsSlice.actions.editBoard({
        name,
        columns
      }));
    }
  }
    
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setBoardModalOpen(false);
      }}
      className="fixed top-0 right-0 bottom-0 left-0 px-2 py-4 flex items-center justify-center scrollbar-hide overflow-scroll z-50 bg-[#00000080]"
    >
      <div
        className="scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl
         "
      >
        <h3 className="text-lg">
          {type === "edit" ? "Edit " : "Add New"} Board
        </h3>
        <div className="mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">Board Name</label>
           <input type="text" placeholder="eg. Web design" className=" bg-transparent text-sm border px-4 py-2 w-full  border-gray-600 focus:outline-[#635fc7] rounded-md outline-1 ring-0"
           onChange={(e) => setName(e.target.value)}
            value={name}
            id="board-name-input"
            />
        </div>
     <div className="mt-8 flex flex-col space-y-3">
      <label className="text-sm dark:text-white text-gray-500">Board Columns</label>
      {
       columns.map((column,index)=>(
        <div key={index}
        className="flex items-center w-full ">
         <input type="text"  className=" bg-transparent flex-grow text-sm border px-4 py-2 w-full  border-gray-600 focus:outline-[#635fc7] rounded-md outline-1 ring-0"
           value={column.name}
           onChange={(e)=>onChange(column.id, e.target.value)}
            />
            <img src={cross} alt=""
            className="cursor-pointer m-4 " 
            onClick={()=> onDelete(column.id)}/>
        </div>
       ))
      }
     </div>
     <div className="mt-2">
     <button className="w-full items-center hover:opacity-75 dark:text-[#635fc7] dark:bg-white text-white bg-[#635fc7] px-4 py-2 rounded-full mt-2"
     onClick={() => {
      setColumns((state)=> [
        ...state,
        { name: "", tasks: [], id: uuid() },
      ]);
     }}>
     + Add New Column
     </button>
     <button className="w-full items-center hover:opacity-75 dark:text-white dark:bg-[#635fc7] text-white bg-[#635fc7] px-4 py-2 rounded-full mt-8"
     onClick={
      ()=> {
        const isvalid  = validate()
        if(isvalid === true) onSubmit(type)
      }
     }> 
      {
        type === "add" ? "Create New Board" : "Save Changes"
      }
     </button>
     </div>
      </div>
    </div>
  );
};

export default AddEditBoardModal;
