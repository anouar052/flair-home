"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { STORAGE_KEYS, DEFAULT_VALUES } from "@/constants";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return DEFAULT_VALUES.THEME === 'dark';
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME);
    if (stored) return stored === 'dark';
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch (error) {
    console.warn('Failed to read theme preference:', error);
    return DEFAULT_VALUES.THEME === 'dark';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => getInitialTheme());
  
  // Load theme from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    const stored = getInitialTheme();
    setIsDark(stored);
  }, []);
  
  // Save theme preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
      } catch (error) {
        console.warn('Failed to save theme preference:', error);
      }
    }
  }, [isDark]);
  
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);
  
  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setIsDark(theme === 'dark');
  }, []);
  
  const value = React.useMemo(
    () => ({ isDark, toggleTheme, setTheme }),
    [isDark, toggleTheme, setTheme]
  );
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
