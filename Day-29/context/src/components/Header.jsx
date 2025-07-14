import React from 'react'
import { BsCartCheck } from "react-icons/bs";
import { useCart } from '../context/CartContext';
const Header = () => {
  const {cart} = useCart()
  return (
  <div className="mb-4 bg-orange-50 p-6 relative">

  {/* Cart Icon at Top-Right */}
  <div className="absolute top-6 right-6">
    <div className="relative">
      <BsCartCheck size={30} className="cursor-pointer text-gray-700" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
       {cart}
      </span>
    </div>
  </div>

  {/* Title Centered */}
  <h1 className="text-center text-2xl font-semibold text-gray-800">
    Our Products
  </h1>

</div>


  )
}

export default Header