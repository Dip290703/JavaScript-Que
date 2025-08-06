import React from 'react'

const TaskModal = () => {
  return (
    <div className='min-h-screen flex justify-center items-center '>
       <div className=' bg-white p-4 rounded-2xl w-[500px] '>
         <h1 className='text-center font-medium text-2xl '>To-Do</h1>
        <div className='flex border border-neutral-200 rounded-3xl mt-4'>
            <input type="text" className='outline-none px-4 py-2 w-full' placeholder='Enter task..' />
            <button className='bg-slate-400 px-4 py-2 text-white rounded-3xl '>Add+</button>
        </div>
        <div>
            
        </div>
       </div>
    </div>
  )
}

export default TaskModal