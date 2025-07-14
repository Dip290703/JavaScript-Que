import React from 'react'
import Header from "../src/components/Header"
import Products from './components/Products';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
const App = () => {
 
  return (
  <CartProvider>
     <div className='px-2 bg-slate-50' >
      <Header/>
    <Products />
    <Cart />
   </div>
  </CartProvider>
  );
}

export default App