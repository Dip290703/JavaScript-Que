import { useState, useContext, createContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const handleAddItems = (taskText) => {
    if (taskText.trim() === "") return;
    setTask((prev) => [...prev, { id: Date.now(), text: taskText,completed:false }]);
  };

  const handleDelete = (id) => {
    setTask((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggleComplete = (id) => {
  setTask((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  );
};


  return (
    <TaskContext.Provider value={{ task, handleDelete, handleAddItems,toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TaskContext);
};
