import { useState, useContext, createContext } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState(0);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };
  console.log(cartItems);

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

//custom hook

export const useCart = () => {
  return useContext(CartContext);
};
