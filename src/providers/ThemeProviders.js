import { createContext, useContext, useState } from 'react';

const themeContext = createContext();
const themeToggleContext = createContext();

export const ThemeProvider = () => {
  const [theme, setTheme] = useState('light');

  return { theme, setTheme };
};
