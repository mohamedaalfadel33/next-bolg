'use client'; // Ensure this is at the very top of the file

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type ThemeContext = {
  theme: 'light' | 'dark'; // Specify concrete types for clarity
  toggle: Dispatch<SetStateAction<'light' | 'dark'>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

// type themeType = 'light' | 'dark';

// const getFromLocalStorage = (): themeType => {
//   try {
//     if (typeof window !== 'undefined') {
//       const value = localStorage.getItem('theme');
//       return value === 'light' || value === 'dark' ? value : 'light';
//     }
//   } catch (error) {
//     console.error('Error accessing localStorage:', error);
//     return 'light';
//   }
// };

type ThemeType = 'dark' | 'light';

function getFromLocalStorage(): ThemeType {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme') as ThemeType;

    if (value === null) return 'light';
    else if (value === 'light') return 'light';
    else if (value === 'dark') return 'dark';
    else return 'light';
  } else {
    return 'light';
  }
}

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    getFromLocalStorage()
  );

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Use functional state update
  };

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error storing theme in localStorage:', error); // Handle potential errors
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
