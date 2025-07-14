import { useCart } from '../context/CartContext';  // adjust path if needed

const Cart = () => {
  const { cartItems } = useCart();   // Assuming you're using Context API
 const {setCart } = useCart();   // Assuming you're using Context API
 const {removeFromCart} = useCart(); // Assuming you're using Context API
  const handleRemove =(id)=>{
    removeFromCart(id)
    setCart(prev=> prev-1)
  }
 
 return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between items-center">
              <div className='flex gap-4'>
                <img src={item.image} alt="" className='h-20 ' />
                <h2 className="font-semibold">{item.title}</h2>
                <p>Price: ₹ {item.price}</p>
              </div>
              <button 
              onClick={()=>handleRemove(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {/* Total Section */}
      <div className="mt-4 font-semibold">
        Total Items: {cartItems.length}
      </div>
    </div>
  );
};

export default Cart;
