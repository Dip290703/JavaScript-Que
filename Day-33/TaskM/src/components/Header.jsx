import React, { useState } from "react";
import logo from "../assets/logo-mobile.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import iconDown from "../assets/icon-chevron-down.svg";

import eilips from '../assets/icon-vertical-ellipsis.svg'
import HeaderDropDown from "./HeaderDropDown";
import AddEditBoardModal from "../models/AddEditBoardModal";
import { useDispatch, useSelector } from "react-redux";
import AddEditTaskModal from "../models/AddEditTaskModal";
import ElipsisEMenu from "./ElipsisEMenu";
const Header = ({boardModalOpen,setBoardModalOpen}) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [boardType, setBoardType] = useState("add");
  const [openAddEditTaskModal, setOpenAddEditTaskModal] = useState(false);
 // const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
const [isElipsisOpen,setIsElipsisOpen] = useState(false)
  return (
    <div
      className="p-4 fixed left-0 right-0
     z-50 bg-white dark:bg-[#2b2c37] "
    >
      <header className="flex justify-between items-center dark:text-white">
        <div className=" flex  space-x-2 md:space-x-4 items-center">
          <img src={logo} alt="logo" className="h-6 w-6" />
          <h3 className="hidden md:inline-block font-sans font-bold md:text-4xl">
            Kanban
          </h3>
          <div className="flex items-center ">
            <h3 className="truncate max-w-[200px] font-bold md:text-2xl text-xl md:ml-20 font-sans">
            {board.name}
            </h3>
            <img
              src={openDrop ? iconUp : iconDown}
              alt="iconDownUp"
              onClick={()=>setOpenDrop(state => !state)}
              className="w-3 ml-2 cursor-pointer md:hidden"
    
            />
          </div>
        </div>
        <div className="flex  space-x-4 md:space-x-6 items-center">
            <button className="button hidden md:block">+ Add New Task</button> 
            <button className="md:hidden py-1 px-3  button"
            onClick={()=>{
              setOpenAddEditTaskModal(prev => !prev);
            }}
            > + </button>
            <img src={eilips} alt="eilips" 
            className="h-6 cursor-pointer"
            onClick={() => setIsElipsisOpen(prev => !prev)}/>
            {
        isElipsisOpen &&   <ElipsisEMenu />
      }
        </div>
      </header>
      {
          openDrop && <HeaderDropDown 
          setBoardModalOpen = {setBoardModalOpen}
          setOpenDrop = {setOpenDrop}/>
      }
      {
        boardModalOpen && <AddEditBoardModal
        type= {boardType}
        setBoardModalOpen= {setBoardModalOpen} 
        />
    
      }
      {
        openAddEditTaskModal && <AddEditTaskModal 
        type="add"
        device="mobile" setOpenAddEditTaskModal={setOpenAddEditTaskModal}/>
      }
     
    </div>
  );
};

export default Header;
