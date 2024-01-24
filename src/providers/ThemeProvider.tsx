'use client';
import React, { ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <div>{children}</div>;
};

export default ThemeProvider;
