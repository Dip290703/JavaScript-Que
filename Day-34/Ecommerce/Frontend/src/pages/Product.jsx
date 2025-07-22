import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useShop();
 const [size, setSize] = React.useState("");

  const [productData, setProductData] = React.useState(false);
  const [image, setImage] = React.useState("");

  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100  ">
      {/* product data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer  "
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
        {/* product details */}

        <div className="flex-1 ">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_icon} alt="star" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="star" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="star" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {
              productData.description
                ? productData.description
                : "No description available for this product."
            }
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p className="">Select size</p>
            <div className="flex  gap-2">
              {productData.sizes.map((item,index)=>(
                <button
                onClick={()=>setSize(item)}
                key={index} className={`rounded border-4 px-4 py-2 bg-gray-100 ${item === size ? '  border-orange-500' : ''}`}>
                  {
                    item
                  }
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr  className="mt-8 sm:4/5"/>
          <div className=" text-gray-500 mt-5 flex flex-col gap-1">
            <p >
            
              Free returns
            </p>
            <p >
           
              Free shipping on orders over $50
            </p>
            <p >
             
              24/7 customer support
            </p>
          </div>
        </div>
      </div>
      {/* product details end */}
      <div className="mt-20 ">
        <div className="flex gap-1">
          <b className="border py-3 px-5 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm ">
           Reviews
          </p>
        </div>
        <div className="flex flex-col gap-4 border  px-6 py-6 text-sm text-gray-500">
          <p>This is a lightweight, durable, and stylish product made from premium materials, perfect for both casual and formal wear. Designed to provide maximum comfort and lasting performance.</p>
          <p>A high-quality, comfortable product designed for everyday use.</p>
        </div>
      </div>
      {/* display relataed product */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
