import React, { useEffect } from "react";
import { useShop } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItem, products, currency ,updateQuantity} = useShop();
  const [cartData, setCartData] = React.useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItem) {
      for (const size in cartItem[item]) {
        const product = products.find((product) => product._id === item);
        if (product) {
          tempData.push({
            ...product,
            _id: item,
            size: size,
            quantity: cartItem[item][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"

            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20 "
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium"> </p>
                  {productData.name}
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      Size: {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e)=> e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
              />
              <img
                src={assets.bin_icon}
                alt=""
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
          <Link to="/placeorder">
            <button className="bg-black text-white my-8 text-sm px-8 py-3">PROCEED TO CHECKOUT</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
