'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { flushSync } from 'react-dom';

// View Transitions API belum ada di type lib DOM versi ini
interface DocumentWithViewTransition extends Document {
  startViewTransition?: (callback: () => void) => unknown;
}

interface ThemeContextValue {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const next = saved === 'light' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('class', next);
    localStorage.setItem('portfolio-theme', next);
    setHydrated(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () =>
      flushSync(() => {
        document.documentElement.setAttribute('class', next);
        localStorage.setItem('portfolio-theme', next);
        setTheme(next);
      });

    // View Transitions API: cross-fade satu frame penuh yang mulus di mobile
    const doc = document as DocumentWithViewTransition;
    if (typeof doc !== 'undefined' && doc.startViewTransition) {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isHydrated: hydrated }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
