import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewesLetterBox from '../components/NewesLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t '>
        <Title text1={"CONTACT"} text2={"US"}/> </div>
        <div className=' my-10 flex flex-col md:flex-row justify-center gap-10 mb-28'>
          <img src={assets.contact_img} alt="contact"  className='w-full max-w-[480px]'/>
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>54709 Willims Staion <br /> 12345, USA</p>
            <p>Tel: +1 123 456 7890 <br /> Email: info@yourdomain.com</p>
            <p className='font-semibold text-xl to-gray-600'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about our teams and open positions <br /> </p>
             <button className='border border-black px-8 py-4 textsm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
        </div>
        <NewesLetterBox />
    </div>
  )
}

export default Contact