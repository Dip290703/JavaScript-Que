import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewesLetterBox from '../components/NewesLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
     <Title text1={"ABOUT"} text2={"US"}/>

      </div>
      <div className='flex my-10 flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="about"  className='w-full max-w-[450px] '/>
       <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero eos aspernatur quae, et esse dicta quia animi error, aperiam neque blanditiis quasi, ipsa itaque dolorem cum voluptatem praesentium minus iusto asperiores. Et, eius delectus!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ab nobis ipsum beatae harum vero aspernatur quam tempora voluptate amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, laudantium!.</p>
       <b className='text-gray-800'>Our Mission</b>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod id sequi, autem rerum quos!</p>
       </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE"}/>
      </div>
      <div className='flex flex-col md:flex-row  text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse. Fuga id laboriosam quod velit.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse. Fuga id laboriosam quod velit.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse. Fuga id laboriosam quod velit.</p>
      </div>
      </div>
      <NewesLetterBox />
    </div>
  )
}

export default About