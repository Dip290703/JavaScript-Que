import React from 'react'
import Todo from './components/Todo'
import { TaskProvider } from './context/TodoContext'

const App = () => {
  return (
    <TaskProvider>
      <div className='min-h-screen flex justify-center
    items-center bg-gray-200 p-3.5 sm:p-0'>
      <Todo />
    </div>
    </TaskProvider>
  )
}

export default App