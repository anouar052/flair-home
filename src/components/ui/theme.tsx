"use client";
import React, { createContext, useContext, useState, useLayoutEffect, useCallback } from "react";
import { STORAGE_KEYS, DEFAULT_VALUES } from "@/constants";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// What the visitor prefers: the saved choice first, then the system setting.
function readPreferredTheme(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME);
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch (error) {
    console.warn('Failed to read theme preference:', error);
    return DEFAULT_VALUES.THEME === 'dark';
  }
}

function applyThemeToDocument(dark: boolean) {
  const root = document.documentElement;
  root.dataset.theme = dark ? 'dark' : 'light';
  root.style.colorScheme = dark ? 'dark' : 'light';
}

function saveTheme(dark: boolean) {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, dark ? 'dark' : 'light');
  } catch (error) {
    console.warn('Failed to save theme preference:', error);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The server always renders the default theme, so the first client render must use it too.
  // The real preference is applied before the first paint (layout effect below), and the
  // inline script in the layout keeps the page hidden until then for light-mode visitors.
  const [isDark, setIsDark] = useState<boolean>(DEFAULT_VALUES.THEME === 'dark');
  const [resolved, setResolved] = useState(false);

  useLayoutEffect(() => {
    const preferred = readPreferredTheme();
    setIsDark(preferred);
    applyThemeToDocument(preferred);
    setResolved(true);
  }, []);

  useLayoutEffect(() => {
    if (resolved) document.documentElement.removeAttribute('data-theme-pending');
  }, [resolved]);

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    const dark = theme === 'dark';
    setIsDark(dark);
    applyThemeToDocument(dark);
    saveTheme(dark);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      applyThemeToDocument(next);
      saveTheme(next);
      return next;
    });
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
