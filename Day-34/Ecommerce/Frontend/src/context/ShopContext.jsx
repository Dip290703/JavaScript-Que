import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

// Corrected context name
 export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [serach ,setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem,setCartItem] = useState({});
  const addToCart = async (itemId,size) => {
    if(!size){
      toast.error("Please select a size for the product");
      return
    }
    let cartData = structuredClone(cartItem);
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    } 
    setCartItem(cartData);
  }
 const getCartItemCount = () => {
  let totoalCount = 0;
  for (const item in cartItem) {
    for (const size in cartItem[item]) {
     try{
      if (cartItem[item][size]) {
        totoalCount += cartItem[item][size];
      }
     }catch (error) {
       console.error("Error accessing cart item:", error);
     }
    }
  }
  return totoalCount;
 }

  const value = {
    products,
    currency,
    delivery_fee,
    serach,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    getCartItemCount,
    addToCart

  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};



export const useShop = () => {
    return useContext(ShopContext);
}

export default ShopProvider;


