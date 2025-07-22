import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

// Corrected context name
 export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [serach ,setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    serach,
    setSearch,
    showSearch,
    setShowSearch,

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


