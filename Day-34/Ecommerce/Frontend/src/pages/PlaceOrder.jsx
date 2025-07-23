import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useShop } from '../context/ShopContext'

const PlaceOrder = () => {
  const [methd, setMethod] = React.useState("cod");
  const {navigate} = useShop()
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14  min-h-[80vh] border-t'>
      {/* left side */}  
  
     <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      <div className='text-xl sm:text-2xl my-3'>
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>
      <div className='flex gap-3'>
        <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='First name' />
        <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Last name' />
      </div>
      <input type="email" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Email' />
      <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Street' />
       <div className='flex gap-3'>
        <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='City' />
        <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='State' />
      </div>
       <div className='flex gap-3'>
        <input type="number" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Zipcode' />
        <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Country' />
      </div>
       <input type="number" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Phone' />

     </div>
     {/* right side */}
     <div className='mt-8'>
      <div className='mt-8 min-w-80'>
        <CartTotal />
      </div>
      <div className='mt-12 '>
        <Title text1={"PAYMENT"} text2={"METHOD"} />
        {/* payment methdd sekectin */}
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' 
            onClick={() => setMethod("stripe")}>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${methd === 'stripe' ? 'bg-green-400 ': ""}`}></p>
            <img src={assets.stripe_logo} alt="stripe" className='h-5 mx-4' />
          </div>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' 
            onClick={() => setMethod("razorpay")}>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${methd === 'razorpay' ? 'bg-green-400 ': ""}`}></p>
            <img src={assets.razorpay_logo} alt="stripe" className='h-5 mx-4' />
          </div>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' 
            onClick={() => setMethod("cod")}>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${methd === 'cod' ? 'bg-green-400 ': ""}`}></p>
           <p className='text-gray-500 font-medium text-sm'>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className='w-full text-end mt-8 '>
          <button
          onClick={() => navigate("/orders")} 
          className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default PlaceOrder