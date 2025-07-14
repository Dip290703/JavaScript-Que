import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);//api
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const { addToCart } = useCart();
  const {setCart} = useCart()

  const handleAdd = (product) => {
    addToCart(product);
    setCart((prev) => prev + 1);
  };

  return (
    <div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow ">
            <img
              src={product.image}
              alt=""
              className="h-40 w-full object-contain mb-2"
            />
            <h1 className="font-bold text-lg">{product.title}</h1>
            <p>Rs. {product.price}</p>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 "
              onClick={() => handleAdd(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
