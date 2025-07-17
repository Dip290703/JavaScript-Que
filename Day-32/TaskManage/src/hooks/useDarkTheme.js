import { useState,useEffect } from "react";

const useDarkMode =() => {
   const [theme, setTheme] = useState(() => {
    return localStorage.theme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

  // Remove both classes first
  root.classList.remove('dark-theme', 'light-theme');

  // Add the current theme class
  root.classList.add(`${theme}-theme`);

  // Save preference
  localStorage.setItem('theme', theme);

  }, [theme]);

  return [theme, setTheme];
}
 export default useDarkMode;