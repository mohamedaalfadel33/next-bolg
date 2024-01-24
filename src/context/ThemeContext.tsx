// 'use client';

// import {
//   ReactNode,
//   SetStateAction,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };

// type ThemeContext = {
//   theme: 'dark' | 'light';
//   toggle: React.MouseEventHandler<HTMLButtonElement>;
// };

// export const ThemeContext = createContext<ThemeContext | null>(null);

// const getFromLocalStorage = () => {
//   if (typeof window !== undefined) {
//     const value = localStorage.getItem('theme');
//     return value || 'light';
//   }
// };

// export const ThemeContextProvider = ({
//   children,
// }: ThemeContextProviderProps) => {
//   const [theme, setTheme] = useState<'dark' | 'light'>(() => {
//     return getFromLocalStorage();
//   });

//   const toggle = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);
//   return (
//     <ThemeContext.Provider value={{ theme, toggle }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export function useThemeContext() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useContext must be used within a themeContextProvider');
//   }
//   return context;
// }
