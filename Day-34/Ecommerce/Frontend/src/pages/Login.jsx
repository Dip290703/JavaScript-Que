import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmit =  async (e) => {
    e.preventDefault();
  }
  return (
   <form 
   onSubmit={onSubmit}
   className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>
        {currentState}
      </p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
    </div>

  {
    currentState === 'Login' ? "" : (
        <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800' required />
    )
  }
    <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800' required />
    <input type="password" placeholder='Password' className='w-full px-3 border py-2 border-gray-800' required />
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forget Password?</p>
      {
    currentState === 'Sign Up' ? (
      <button
        className='text-sm text-gray-800 hover:text-gray-600'
        onClick={() => setCurrentState('Login')}
        type='button'
      >
        Already have an account? Login
      </button>
    ) : (
      <button
        className='text-sm text-gray-800 hover:text-gray-600'
        onClick={() => setCurrentState('Sign Up')}
        type='button'
      >
        Don't have an account? Sign Up
      </button>
    )
  } 
    </div>
    <button className='w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors duration-300 mt-4 ' >
      {
        currentState === 'Login' ? ' Sign in' : 'Sign Up'
      }
    </button>
   </form>
  )
}

export default Login