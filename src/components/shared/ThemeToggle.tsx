'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '../ui/switch';

const ThemeToggle = () => {
  // const [theme, setTheme] = useState<any>(
  //   localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  // );

  const [theme, setTheme] = useState<any>('light');

  const handelToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme: any = localStorage.getItem('theme');
    document.querySelector('html')?.setAttribute('data-theme', localTheme);
    console.log(localTheme);
  }, [theme]);

  return <Switch onClick={() => handelToggle()} />;
};

export default ThemeToggle;
