import React, { useEffect } from "react";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { serach, setSearch, showSearch, setShowSearch } = useShop();
  const [visible, setVisible] = React.useState(false);
  const location = useLocation()
  useEffect(()=>{
    if (location.pathname === "/collection") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  },[location])

  return (
    showSearch && visible ? (
        <div className="border-t border-b bg-gray-50 text-center"> 
     <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
     <input type="text" placeholder="Search" className="flex-1 bg-inherit text-sm outline-none " 
     value={serach}
     onChange={(e)=>setSearch(e.target.value)}/>
     <img src={assets.search_icon} alt="search" className="w-4" />
     </div>
     <img src={assets.cross_icon} alt="cross
     " className="inline w-3 cursor-pointer"
     onClick={()=>setShowSearch(false)} />
        </div>
    ) : null
  )
};

export default SearchBar;
